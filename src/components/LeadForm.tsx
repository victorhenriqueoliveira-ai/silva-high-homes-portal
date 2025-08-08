import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface LeadFormProps {
  empreendimento: string;
}

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
  message: z.string().min(10, "Conte um pouco mais (mín. 10 caracteres)").optional(),
});

type FormValues = z.infer<typeof formSchema>;

const LeadForm: React.FC<LeadFormProps> = ({ empreendimento }) => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const { error } = await supabase.from("leads").insert([
        {
          name: values.name,
          email: values.email,
          phone: values.phone, // já vem apenas com dígitos
          message: values.message ?? null,
          source: "form",
          empreendimento,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Enviado com sucesso",
        description: "Em breve entraremos em contato.",
      });
      form.reset();
    } catch (err: any) {
      console.error("Erro ao salvar lead:", err);
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fale sobre o {empreendimento}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input
                        inputMode="tel"
                        placeholder="(11) 91234-5678"
                        value={field.value as string}
                        onChange={(e) => field.onChange(formatPhoneBR(e.target.value))}
                      />
                    </FormControl>
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
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea rows={4} placeholder="Conte um pouco do que procura" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Enviando..." : "Enviar interesse"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;
