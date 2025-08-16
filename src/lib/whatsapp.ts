import { supabase } from "@/integrations/supabase/client";

export const trackWhatsAppClick = async (empreendimento?: string) => {
  try {
    const { error } = await supabase
      .from('whatsapp_clicks')
      .insert({
        page_url: window.location.href,
        empreendimento: empreendimento || 'Geral',
        user_agent: navigator.userAgent,
      });

    if (error) {
      console.error('Error tracking WhatsApp click:', error);
    }
  } catch (error) {
    console.error('Error tracking WhatsApp click:', error);
  }
};

export const openWhatsApp = async (empreendimento?: string) => {
  // Track the click
  await trackWhatsAppClick(empreendimento);
  
  // Create the message
  const message = empreendimento 
    ? `Olá! Vim pelo site e estou interessado no empreendimento ${empreendimento}.`
    : 'Olá! Vim pelo site e gostaria de mais informações.';
  
  // Open WhatsApp with the message
  const whatsappUrl = `https://wa.me/5511971511943?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};