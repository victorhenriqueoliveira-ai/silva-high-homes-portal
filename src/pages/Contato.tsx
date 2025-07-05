
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contato = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Estou sempre disponível para ajudar você a encontrar o investimento perfeito
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <Card className="lg:col-span-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
                <p className="text-slate-600">
                  Preencha o formulário abaixo e entrarei em contato em até 24 horas
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
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

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Telefone
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(11) 99999-9999"
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
                      rows={5}
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
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">RS</span>
                    </div>
                    <h3 className="font-bold text-xl">Rafael Silva</h3>
                    <p className="text-slate-600">Corretor de Imóveis</p>
                    <p className="text-sm text-slate-500">CRECI: 123.456-SP</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                      <div>
                        <div className="font-medium">(11) 99999-9999</div>
                        <div className="text-sm text-slate-500">Ligações e WhatsApp</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-emerald-600 mr-3" />
                      <div>
                        <div className="font-medium">rafael@email.com</div>
                        <div className="text-sm text-slate-500">Email principal</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-emerald-600 mr-3" />
                      <div>
                        <div className="font-medium">São Paulo - SP</div>
                        <div className="text-sm text-slate-500">Atendimento em toda a cidade</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-emerald-600 mr-3" />
                      <div>
                        <div className="font-medium">Seg - Sáb: 9h às 18h</div>
                        <div className="text-sm text-slate-500">Emergências: 24h</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Contato Rápido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar Agora
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar Email
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-sm text-slate-600 mt-3">
                    Siga-me para acompanhar lançamentos exclusivos e dicas do mercado imobiliário
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-600">
              Esclareça suas dúvidas mais comuns sobre o processo de compra e venda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Como funciona o processo de compra?",
                answer: "O processo inclui análise do perfil, busca de imóveis, visitas, negociação, documentação e acompanhamento até a entrega das chaves."
              },
              {
                question: "Qual é o valor da comissão?",
                answer: "A comissão varia de acordo com o tipo e valor do imóvel. Trabalho sempre com transparência total nos valores."
              },
              {
                question: "Oferecem consultoria de investimento?",
                answer: "Sim, ofereço análise completa de rentabilidade, potencial de valorização e orientações estratégicas para investidores."
              },
              {
                question: "Atendem em toda São Paulo?",
                answer: "Atendo em toda a capital paulista, com foco especial nos bairros nobres e empreendimentos de alto padrão."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
