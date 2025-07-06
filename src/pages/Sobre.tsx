
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, TrendingUp, Heart, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sobre = () => {
  const achievements = [
    { icon: Award, title: "Top Performer", description: "Melhor corretor do ano em 2023" },
    { icon: Users, title: "300+ Clientes", description: "Famílias satisfeitas atendidas" },
    { icon: TrendingUp, title: "R$ 50M+", description: "Em vendas realizadas" },
    { icon: Heart, title: "100% Satisfação", description: "Taxa de clientes satisfeitos" }
  ];

  const timeline = [
    { year: "2019", title: "Início da Carreira", description: "Primeiros passos no mercado imobiliário" },
    { year: "2020", title: "Especialização", description: "Foco em empreendimentos de alto padrão" },
    { year: "2021", title: "Reconhecimento", description: "Primeiro prêmio de excelência em vendas" },
    { year: "2022", title: "Expansão", description: "Ampliação para novos mercados premium" },
    { year: "2023", title: "Líder de Mercado", description: "Consolidação como referência no segmento" },
    { year: "2024", title: "Inovação", description: "Implementação de tecnologias avançadas" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Rafael Silva
              </h1>
              <div className="text-xl md:text-2xl text-emerald-200 mb-6">
                Corretor de Imóveis Especializado • CRECI: 123.456-SP
              </div>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Mais de 6 anos dedicados ao mercado imobiliário de alto padrão, conectando pessoas aos seus sonhos e investidores às melhores oportunidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white hover:bg-gray-300 text-slate-800">
                  <Phone className="mr-2 h-5 w-5" />
                  Fale Comigo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-primary hover:bg-gray-300 hover:text-slate-800">
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <div className="text-6xl font-bold mb-2">RS</div>
                  <div className="text-lg">Rafael Silva</div>
                </div>
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
                  <achievement.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-slate-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Minha História
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Minha jornada no mercado imobiliário começou em 2009, quando descobri minha paixão por conectar pessoas aos seus lares ideais. Desde então, dedico-me exclusivamente ao segmento de alto padrão, onde a excelência no atendimento e o conhecimento profundo do mercado fazem toda a diferença.
                </p>
                <p>
                  Ao longo dos anos, desenvolvi uma metodologia única que combina análise técnica detalhada, visão estratégica de investimentos e, acima de tudo, um relacionamento genuíno e transparente com cada cliente. Acredito que cada transação é única e merece atenção personalizada.
                </p>
                <p>
                  Especializo-me em empreendimentos de luxo, oferecendo consultoria completa desde a análise de investimento até o pós-venda. Meu objetivo é ser mais que um corretor: sou um parceiro de confiança em suas decisões imobiliárias.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 text-emerald-600 mr-2" />
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
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Badge className="bg-emerald-600 text-white mr-3">{item.year}</Badge>
                          <h3 className="font-bold text-lg">{item.title}</h3>
                        </div>
                        <p className="text-slate-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-md"></div>
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
            Vamos Conversar Sobre Seu Próximo Investimento?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Estou sempre disponível para discutir oportunidades únicas e ajudar você a tomar a melhor decisão imobiliária.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Phone className="mr-2 h-5 w-5" />
              (11) 97151-1943
            </Button>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-gray-300 hover:text-slate-900">
              <Mail className="mr-2 h-5 w-5" />
              rafael.silva@email.com
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
