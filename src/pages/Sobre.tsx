
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, TrendingUp, Heart, Phone, Mail, Box, Circle, Square } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sobre = () => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const achievements = [
    { icon: Award, title: "Top Performer", description: "Performance reconhecida" },
    { icon: Users, title: "50+ Clientes", description: "Famílias satisfeitas atendidas" },
    { icon: TrendingUp, title: "17 projetos concluídos", description: "Resultados consistentes" },
    { icon: Heart, title: "100% Satisfação", description: "Taxa de clientes satisfeitos" }
  ];

  const timeline = [
    { year: "2022", title: "Início da Carreira", description: "Primeiros passos no mercado imobiliário" },
    { year: "2022", title: "Especialização", description: "Foco em empreendimentos de alto padrão" },
    { year: "2023", title: "Reconhecimento", description: "Primeiro prêmio de excelência em vendas" },
    { year: "2024", title: "Expansão", description: "Ampliação para novos mercados premium" },
    { year: "2024", title: "Líder de Mercado", description: "Consolidação como referência no segmento" },
    { year: "2025", title: "Inovação", description: "Implementação de tecnologias avançadas" }
  ];

    const handleContactClick = () => {
    if (location.pathname === "/") {
      // Se já estamos na home, apenas rola para o formulário
      const contactSection = document.querySelector('#contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se não estamos na home, navega para lá e depois rola
      navigate("/");
      setTimeout(() => {
        const contactSection = document.querySelector('#contact-form');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary via-[#C69755] to-[#EFC283] text-white overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-3d-background absolute top-10 left-10 opacity-10">
            <Box className="h-20 w-20 text-white" />
          </div>
          <div className="hero-3d-background absolute top-32 right-20 opacity-10" style={{animationDelay: '3s'}}>
            <Circle className="h-16 w-16 text-white" />
          </div>
          <div className="hero-3d-background absolute bottom-20 left-1/4 opacity-10" style={{animationDelay: '6s'}}>
            <Square className="h-24 w-24 text-white" />
          </div>
          <div className="hero-3d-background absolute top-1/3 right-1/3 opacity-10" style={{animationDelay: '9s'}}>
            <Box className="h-12 w-12 text-white" />
          </div>
          <div className="hero-3d-background absolute bottom-1/3 right-10 opacity-10" style={{animationDelay: '12s'}}>
            <Circle className="h-18 w-18 text-white" />
          </div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ralph Santos
              </h1>
              <div className="text-xl md:text-2xl text-[#EFC283] mb-6">
                Corretor de Imóveis Especializado • CRECI - 270870 - F
              </div>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Mais de 2 anos dedicados ao mercado imobiliário médio e alto padrão, conectando pessoas aos seus sonhos e investidores às melhores oportunidades.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src='/logotipo/foto_rafael_horizontal.png' alt="Ralph Santos" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Resultados que Falam por Si
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Uma trajetória marcada por conquistas e a confiança de centenas de clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="pt-8 pb-6">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-slate-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-16 overflow-hidden">
        {/* 3D Background Elements for Story Section */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-3d-background absolute top-16 left-20 opacity-5">
            <Box className="h-16 w-16 text-primary" />
          </div>
          <div className="hero-3d-background absolute bottom-20 right-16 opacity-5" style={{animationDelay: '4s'}}>
            <Circle className="h-20 w-20 text-primary" />
          </div>
          <div className="hero-3d-background absolute top-1/2 left-1/3 opacity-5" style={{animationDelay: '8s'}}>
            <Square className="h-14 w-14 text-primary" />
          </div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Minha História
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Minha jornada no mercado imobiliário começou em 2022, quando descobri minha paixão por conectar pessoas aos seus lares ideais. Desde então, dedico-me exclusivamente ao segmento de alto padrão, onde a excelência no atendimento e o conhecimento profundo do mercado fazem toda a diferença.
                </p>
                <p>
                  Sou um profissional do mercado imobiliário em constante evolução, comprometido em oferecer atendimento pautado em qualidade, profissionalismo, transparência, honestidade e segurança. 
                </p>
                <p>
                  Meu objetivo é construir relações de confiança com cada cliente, proporcionando não apenas a concretização de negócios, mas também oportunidades de networking, indicações e, em muitos casos, verdadeiras amizades.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    Certificações e Especializações
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Certificação em Imóveis de Luxo",
                      "Especialização em Investimentos Imobiliários",
                      "Curso Avançado de Negociação",
                      "Certificação em Marketing Digital Imobiliário"
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center">
                        <Badge variant="outline" className="mr-3">✓</Badge>
                        <span className="text-slate-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Filosofia de Trabalho</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Transparência total em todas as negociações",
                      "Atendimento personalizado e exclusivo",
                      "Análise técnica detalhada de cada oportunidade",
                      "Relacionamento duradouro com clientes"
                    ].map((point, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-slate-600">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 bg-white overflow-hidden">
        {/* 3D Background Elements for Timeline Section */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-3d-background absolute top-10 right-10 opacity-5">
            <Square className="h-18 w-18 text-primary" />
          </div>
          <div className="hero-3d-background absolute bottom-16 left-24 opacity-5" style={{animationDelay: '5s'}}>
            <Box className="h-22 w-22 text-primary" />
          </div>
          <div className="hero-3d-background absolute top-1/3 right-1/4 opacity-5" style={{animationDelay: '10s'}}>
            <Circle className="h-16 w-16 text-primary" />
          </div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Trajetória Profissional
            </h2>
            <p className="text-lg text-slate-600">
              6 anos de evolução e conquistas no mercado imobiliário
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#EFC283]"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Badge className="bg-primary text-white mr-3">{item.year}</Badge>
                          <h3 className="font-bold text-lg">{item.title}</h3>
                        </div>
                        <p className="text-slate-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos conversar sobre seu próximo investimento?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Estou sempre disponível para discutir oportunidades únicas e ajudar você a tomar a melhor decisão imobiliária.
          </p>
          <div className="space-y-3 pt-6">
            <Button 
              className="w-50 bg-primary"
              onClick={() => {
                setIsOpen(false);
                handleContactClick();
              }}
            >
              <Phone className="mr-2 h-4 w-4" />
              Fale Comigo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
