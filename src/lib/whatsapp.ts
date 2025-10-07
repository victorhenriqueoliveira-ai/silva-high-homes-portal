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

export const openWhatsApp = (empreendimento?: string) => {
  const message = empreendimento 
    ? `Olá! Vim pelo site e estou interessado no empreendimento ${empreendimento}.`
    : 'Olá! Vim pelo site e gostaria de mais informações.';

  const whatsappUrl = `https://wa.me/5511971511943?text=${encodeURIComponent(message)}`;

  // Detecta se é mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Faz o tracking (sem bloquear o redirecionamento)
  try {
    trackWhatsAppClick(empreendimento)
      .catch(console.error)
      .finally(() => {
        setTimeout(() => {
          if (isMobile) {
            // 📱 Mobile → abre direto (chama app do WhatsApp)
            window.location.href = whatsappUrl;
          } else {
            // 💻 Desktop → abre nova guia
            window.open(whatsappUrl, '_blank');
          }
        }, 200);
      });
  } catch {
    // Fallback
    if (isMobile) {
      window.location.href = whatsappUrl;
    } else {
      window.open(whatsappUrl, '_blank');
    }
  }
};
