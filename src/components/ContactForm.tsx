import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to a server
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
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Telefone
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(11) 97151-1943"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Assunto
                    </label>
                    <Select onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compra">Interesse em Compra</SelectItem>
                        <SelectItem value="venda">Quero Vender</SelectItem>
                        <SelectItem value="investimento">Consultoria de Investimento</SelectItem>
                        <SelectItem value="avaliacao">Avaliação de Imóvel</SelectItem>
                        <SelectItem value="outro">Outro Assunto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Conte-me mais detalhes sobre seu interesse..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Rafael's Info */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl sm:text-2xl">RS</span>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl">Rafael Silva</h3>
                  <p className="text-slate-600 text-sm sm:text-base">Corretor de Imóveis</p>
                  <p className="text-xs sm:text-sm text-slate-500">CRECI: 123.456-SP</p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm sm:text-base">(11) 97151-1943</div>
                      <div className="text-xs sm:text-sm text-slate-500">Ligações e WhatsApp</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mr-3 flex-shrink-0" />
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
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button className="w-full text-sm" variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar Agora
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
