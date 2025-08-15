import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const trelloApiKey = Deno.env.get('TRELLO_API_KEY');
const trelloToken = Deno.env.get('TRELLO_TOKEN');
const trelloListId = Deno.env.get('TRELLO_LIST_ID');

const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, empreendimento, source = 'form', page_url } = await req.json();

    console.log('Processing lead:', { name, email, phone, empreendimento, source, page_url });

    // Validate required fields
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Nome e email são obrigatórios' }), 
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Insert lead into database
    const { data: leadData, error: leadError } = await supabase
      .from('leads')
      .insert({
        name,
        email,
        phone: phone || null,
        message: message || null,
        empreendimento: empreendimento || null,
        source,
        page_url: page_url || null,
        trello_synced: false
      })
      .select()
      .single();

    if (leadError) {
      console.error('Error inserting lead:', leadError);
      return new Response(
        JSON.stringify({ error: 'Erro ao salvar lead no banco de dados' }), 
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Lead inserted successfully:', leadData.id);

    // Try to create Trello card if credentials are available
    let trelloCardId = null;
    let trelloSynced = false;

    if (trelloApiKey && trelloToken && trelloListId) {
      try {
        const cardName = `${name} - ${empreendimento || 'Contato Geral'}`;
        const cardDescription = `
**Lead do Site**

**Nome:** ${name}
**Email:** ${email}
**Telefone:** ${phone || 'Não informado'}
**Empreendimento:** ${empreendimento || 'Não especificado'}
**Fonte:** ${source}
**Página:** ${page_url || 'Não informado'}

**Mensagem:**
${message || 'Sem mensagem adicional'}

**Data:** ${new Date().toLocaleString('pt-BR')}
        `.trim();

        const trelloResponse = await fetch(`https://api.trello.com/1/cards?key=${trelloApiKey}&token=${trelloToken}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: cardName,
            desc: cardDescription,
            idList: trelloListId,
          }),
        });

        if (trelloResponse.ok) {
          const trelloCard = await trelloResponse.json();
          trelloCardId = trelloCard.id;
          trelloSynced = true;
          console.log('Trello card created successfully:', trelloCardId);

          // Update lead with Trello card info
          await supabase
            .from('leads')
            .update({
              trello_card_id: trelloCardId,
              trello_synced: true
            })
            .eq('id', leadData.id);

        } else {
          const trelloError = await trelloResponse.text();
          console.error('Error creating Trello card:', trelloError);
        }
      } catch (trelloError) {
        console.error('Trello integration error:', trelloError);
      }
    } else {
      console.log('Trello credentials not configured, skipping card creation');
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        leadId: leadData.id,
        trelloCardId,
        trelloSynced,
        message: 'Lead processado com sucesso!'
      }), 
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in trello-leads function:', error);
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor' }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});