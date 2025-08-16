import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { openWhatsApp } from "@/lib/whatsapp";

// Util: aplica máscara brasileira de telefone em tempo real
const formatPhoneBR = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 10) {
    // (XX) XXXX-XXXX
    return digits
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .slice(0, 14);
  }
  // (XX) XXXXX-XXXX
  return digits
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
};

// Zod schema com pré-processamento para validar somente os dígitos do telefone
const formSchema = z.object({
  name: z.string().min(3, "Informe seu nome completo"),
  email: z.string().email("E-mail inválido"),
  phone: z
    .preprocess((val) => (typeof val === "string" ? val.replace(/\D/g, "") : val), z
      .string()
      .min(10, "Telefone inválido")
      .max(11, "Telefone inválido")
    ),
  subject: z.string().min(1, "Selecione um assunto"),
  message: z.string().min(10, "Conte um pouco mais (mín. 10 caracteres)"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: FormValues) => {
    console.log("🚀 Contact form submission started", values);
    console.log("🌐 Page URL:", window.location.href);
    
    try {
      console.log("📤 Invoking trello-leads function...");
      
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: `Assunto: ${values.subject}\n\n${values.message}`,
        empreendimento: "Contato Geral",
        source: "contact_form",
        page_url: window.location.href,
      };
      
      console.log("📦 Contact form payload:", payload);
      
      const { data, error } = await supabase.functions.invoke('trello-leads', {
        body: payload
      });

      console.log("📥 Contact form response - data:", data);
      console.log("📥 Contact form response - error:", error);

      if (error) {
        console.error("❌ Contact form error:", error);
        throw error;
      }

      console.log("✅ Success! Contact form lead submitted");
      toast({
        title: "Mensagem enviada com sucesso",
        description: "Em breve entraremos em contato.",
      });
      form.reset();
    } catch (err: any) {
      console.error("💥 Erro ao enviar mensagem:", err);
      console.error("💥 Error details:", {
        message: err.message,
        stack: err.stack,
        cause: err.cause
      });
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact-form" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Entre em Contato
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl sm:max-w-2xl mx-auto px-4">
            Estou sempre disponível para ajudar você a encontrar o investimento perfeito
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Envie uma Mensagem</CardTitle>
              <p className="text-sm sm:text-base text-slate-600">
                Preencha o formulário abaixo e entrarei em contato em até 24 horas
              </p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo *</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone *</FormLabel>
                          <FormControl>
                            <Input
                              inputMode="tel"
                              placeholder="(11) 97151-1943"
                              value={field.value as string}
                              onChange={(e) => field.onChange(formatPhoneBR(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Assunto *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o assunto" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="compra">Interesse em Compra</SelectItem>
                              <SelectItem value="venda">Quero Vender</SelectItem>
                              <SelectItem value="investimento">Consultoria de Investimento</SelectItem>
                              <SelectItem value="avaliacao">Avaliação de Imóvel</SelectItem>
                              <SelectItem value="outro">Outro Assunto</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Conte-me mais detalhes sobre seu interesse..."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-muted-400" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Rafael's Info */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary from-emerald-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl sm:text-2xl">RS</span>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl">Ralph Santos</h3>
                  <p className="text-slate-600 text-sm sm:text-base">Corretor de Imóveis</p>
                  <p className="text-xs sm:text-sm text-slate-500">CRECI - 270870 - F</p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm sm:text-base">(11) 97151-1943</div>
                      <div className="text-xs sm:text-sm text-slate-500">Ligações e WhatsApp</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm sm:text-base">rafael@email.com</div>
                      <div className="text-xs sm:text-sm text-slate-500">Email principal</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg sm:text-xl">Contato Rápido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <Button 
                  className="w-full bg-primary hover:bg-muted-200 text-white text-sm"
                  onClick={() => openWhatsApp()}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button className="w-full text-sm" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
