import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home, Star, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const featuredDevelopments = [
    {
      id: 1,
      title: "Empreendimento Centro",
      location: "Centro - São Paulo",
      type: "Residencial",
      units: "120 unidades",
      status: "Lançamento",
      description: "Apartamentos de alto padrão com acabamentos luxuosos e localização privilegiada.",
      features: ["3-4 dormitórios", "Varanda gourmet", "2-3 vagas", "Área de lazer completa"]
    },
    {
      id: 2,
      title: "Residencial Elite Gardens",
      location: "Jardins - São Paulo",
      type: "Residencial",
      units: "80 unidades",
      status: "Em Construção",
      description: "Torres residenciais com conceito sustentável e design contemporâneo.",
      features: ["2-3 dormitórios", "Terraço privativo", "1-2 vagas", "Spa e fitness"]
    },
    {
      id: 3,
      title: "Corporate Plaza Executive",
      location: "Vila Olímpia - São Paulo",
      type: "Comercial",
      units: "200 salas",
      status: "Pré-lançamento",
      description: "Complexo comercial moderno com tecnologia de ponta e facilidades corporativas.",
      features: ["Salas 40-200m²", "Coworking", "Heliponto", "Concierge 24h"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-700 to-slate-800 opacity-95"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Rafael Silva
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-emerald-200 mt-2">
              Corretor de Imóveis Especializado
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-blue-100 px-4">
            Especialista em empreendimentos de alto padrão. Conectando você ao seu próximo investimento de sucesso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
              <Link to="/empreendimentos" className="flex items-center justify-center">
                Ver Empreendimentos
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-primary hover:bg-gray-300 hover:text-slate-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
            >
              <Link to="/contato">
                Fale Comigo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { icon: Home, number: "500+", label: "Imóveis Vendidos" },
              { icon: Users, number: "300+", label: "Clientes Satisfeitos" },
              { icon: Star, number: "6+", label: "Anos de Experiência" },
              { icon: Award, number: "50+", label: "Empreendimentos" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-emerald-600 mx-auto mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Developments */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              Empreendimentos em Destaque
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl sm:max-w-2xl mx-auto px-4">
              Conheça alguns dos principais projetos que estou representando atualmente
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredDevelopments.map((dev) => (
              <Card key={dev.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-emerald-400 to-blue-600 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <Badge className="bg-amber-500 text-white text-xs">{dev.status}</Badge>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <h3 className="text-lg sm:text-xl font-bold">{dev.title}</h3>
                  </div>
                </div>
                
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-base sm:text-lg text-slate-800">{dev.location}</CardTitle>
                    <Badge variant="secondary" className="text-xs">{dev.type}</Badge>
                  </div>
                  <CardDescription className="text-sm sm:text-base text-slate-600 line-clamp-2">
                    {dev.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3">
                    <div className="text-sm text-slate-600 font-medium">{dev.units}</div>
                    <div className="flex flex-wrap gap-2">
                      {dev.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      className="w-full group-hover:bg-emerald-600 transition-colors text-sm"
                      asChild
                    >
                      <Link to={`/empreendimento/${dev.id}`}>
                        Ver Detalhes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button size="lg" variant="outline" asChild className="px-6 sm:px-8">
              <Link to="/empreendimentos">
                Ver Todos os Empreendimentos
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Especialista em Imóveis de Alto Padrão
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-6">
                Com grande experiência no mercado imobiliário, Rafael Silva é referência em empreendimentos de alto em São Paulo. Especializado em conectar investidores e compradores aos melhores projetos da cidade.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Consultoria personalizada para cada cliente",
                  "Análise detalhada de investimentos",
                  "Acompanhamento completo do processo",
                  "Relacionamento duradouro e transparente"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-6 sm:mt-8 bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto" asChild>
                <Link to="/sobre">
                  Conheça Minha História
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative order-first lg:order-last">
              <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg shadow-2xl"></div>
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                <div className="text-xl sm:text-2xl font-bold">Rafael Silva</div>
                <div className="text-sm sm:text-base text-emerald-200">CRECI: 123.456-SP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Index;
