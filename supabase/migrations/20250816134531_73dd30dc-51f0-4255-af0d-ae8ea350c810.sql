-- Create table for WhatsApp click tracking
CREATE TABLE IF NOT EXISTS public.whatsapp_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_url TEXT NOT NULL,
  empreendimento TEXT,
  user_agent TEXT,
  ip_address TEXT,
  clicked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  week_year TEXT NOT NULL DEFAULT TO_CHAR(now(), 'YYYY-"W"WW')
);

-- Enable RLS
ALTER TABLE public.whatsapp_clicks ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert clicks
CREATE POLICY "Anyone can insert WhatsApp clicks" 
ON public.whatsapp_clicks 
FOR INSERT 
WITH CHECK (true);

-- Create policy for authenticated users to view clicks
CREATE POLICY "Authenticated users can view WhatsApp clicks" 
ON public.whatsapp_clicks 
FOR SELECT 
USING (true);

-- Create index for better performance on week queries
CREATE INDEX IF NOT EXISTS idx_whatsapp_clicks_week_year ON public.whatsapp_clicks(week_year);
CREATE INDEX IF NOT EXISTS idx_whatsapp_clicks_clicked_at ON public.whatsapp_clicks(clicked_at);