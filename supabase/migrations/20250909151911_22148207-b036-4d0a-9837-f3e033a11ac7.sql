-- Drop the existing insecure policy
DROP POLICY IF EXISTS "Authenticated users can view leads" ON public.leads;

-- Create secure role-based policies for leads table
CREATE POLICY "Authorized personnel can view leads" 
ON public.leads 
FOR SELECT 
TO authenticated
USING (
  public.has_role(auth.uid(), 'admin'::app_role) OR 
  public.has_role(auth.uid(), 'sales'::app_role) OR 
  public.has_role(auth.uid(), 'marketing'::app_role)
);

CREATE POLICY "Authorized personnel can update leads" 
ON public.leads 
FOR UPDATE 
TO authenticated
USING (
  public.has_role(auth.uid(), 'admin'::app_role) OR 
  public.has_role(auth.uid(), 'sales'::app_role) OR 
  public.has_role(auth.uid(), 'marketing'::app_role)
)
WITH CHECK (
  public.has_role(auth.uid(), 'admin'::app_role) OR 
  public.has_role(auth.uid(), 'sales'::app_role) OR 
  public.has_role(auth.uid(), 'marketing'::app_role)
);

CREATE POLICY "Authorized personnel can delete leads" 
ON public.leads 
FOR DELETE 
TO authenticated
USING (
  public.has_role(auth.uid(), 'admin'::app_role) OR 
  public.has_role(auth.uid(), 'sales'::app_role)
);

-- Update whatsapp_clicks table to also use role-based access for viewing
DROP POLICY IF EXISTS "Authenticated users can view WhatsApp clicks" ON public.whatsapp_clicks;

CREATE POLICY "Authorized personnel can view WhatsApp clicks" 
ON public.whatsapp_clicks 
FOR SELECT 
TO authenticated
USING (
  public.has_role(auth.uid(), 'admin'::app_role) OR 
  public.has_role(auth.uid(), 'sales'::app_role) OR 
  public.has_role(auth.uid(), 'marketing'::app_role)
);

-- Create a policy to allow admins to manage user roles
CREATE POLICY "Admins can manage user roles" 
ON public.user_roles 
FOR ALL 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));