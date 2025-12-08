import { useState } from 'react';
import { MapPin, Building2, Calendar, Home, Car, Shield, Dumbbell, Star, Check, ChevronDown, ChevronUp, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import SEOHead from '@/components/SEOHead';
import { openWhatsApp } from '@/lib/whatsapp';

const HomeBoutiqueCampoBelo = () => {
  const [showAllPlants, setShowAllPlants] = useState(false);

  const empreendimento = {
    title: "Home Boutique By Living Campo Belo",
    location: "Campo Belo - São Paulo",
    address: "R. Barão do Triunfo, 2017 - Campo Belo, São Paulo - SP",
    developer: "Cyrela",
    deliveryDate: "Novembro 2028",
    units: "84 unidades",
    area: "149m² a 265m²",
    floors: "25 andares",
    parking: "2 vagas por unidade",
    features: ["3-4 dormitórios", "Varanda gourmet", "2 vagas", "Área de lazer completa"],
  };

  const floorPlans = [
    { title: "Planta Padrão", type: "3 Suítes| Cozinha integrada e WC de serviço | 2 Vagas", area: "149m²", img: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpg" },
    { title: "Planta Opção", type: "3 Suítes| Cozinha integrada e despensa | 2 Vagas", area: "149m²", img: "/empreendimentos/BoutiqueByLivingCampoBelo/planta2.jpg" },
    { title: "Planta Opção", type: "3 Suítes| Cozinha fechada e despensa | 2 Vagas", area: "149m²", img: "/empreendimentos/BoutiqueByLivingCampoBelo/planta3.jpg" },
    { title: "Planta Opção", type: "4 Dormitórios | Cozinha integrada e WC de serviço | 2 Vagas", area: "149m²", img: "/empreendimentos/BoutiqueByLivingCampoBelo/planta4.jpg" },
    { title: "Planta Opção", type: "4 Dormitórios | Cozinha fechada e despensa | 2 Vagas", area: "149m²", img: "/empreendimentos/BoutiqueByLivingCampoBelo/planta5.jpg" },
    { title: "Duplex Padrão", type: "3 Suítes| Cozinha integrada | WC de serviço e Estar | 2 Vagas", area: "265m²", img: "/empreendimentos/BoutiqueByLivingCampoBelo/planta7.jpg" },
  ];

  const amenities = [
    { icon: Dumbbell, name: "Academia Completa", description: "Equipamentos modernos de última geração" },
    { icon: Car, name: "Valet Parking", description: "Serviço de manobrista 24 horas" },
    { icon: Shield, name: "Segurança 24h", description: "Portaria blindada e monitoramento" },
    { icon: Star, name: "Concierge", description: "Serviços exclusivos para moradores" },
  ];

  const faqItems = [
    {
      question: "Qual a metragem dos apartamentos do Home Boutique Campo Belo?",
      answer: "O Home Boutique Campo Belo oferece apartamentos com metragens que variam de 149m² a 265m², incluindo opções de plantas duplex para quem busca mais espaço e sofisticação."
    },
    {
      question: "Quantos quartos tem o Home Boutique Campo Belo?",
      answer: "O empreendimento oferece opções de 3 a 4 dormitórios, sendo suítes, com diversas configurações de plantas para atender diferentes perfis de famílias."
    },
    {
      question: "Quando será entregue o Home Boutique Campo Belo?",
      answer: "A previsão de entrega do Home Boutique Campo Belo é para Novembro de 2028, desenvolvido pela renomada construtora Cyrela."
    },
    {
      question: "Onde fica o Home Boutique Campo Belo?",
      answer: "O empreendimento está localizado na R. Barão do Triunfo, 2017 - Campo Belo, São Paulo - SP, uma das regiões mais valorizadas da Zona Sul de São Paulo."
    },
    {
      question: "Qual o valor do apartamento no Home Boutique Campo Belo?",
      answer: "Os valores são exclusivos e variam conforme a tipologia escolhida. Entre em contato conosco para receber uma tabela atualizada com condições especiais de lançamento."
    },
    {
      question: "O Home Boutique Campo Belo tem varanda gourmet?",
      answer: "Sim! Todas as unidades possuem varanda gourmet integrada à sala, perfeita para receber convidados com conforto e sofisticação."
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "Home Boutique By Living Campo Belo",
    "description": "Apartamentos de alto padrão no Campo Belo, São Paulo. 3 e 4 dormitórios, 149m² a 265m², varanda gourmet, 2 vagas. Lançamento Cyrela com entrega em Novembro 2028.",
    "url": "https://ralphsantos.com.br/home-boutique-campo-belo",
    "image": "https://ralphsantos.com.br/empreendimentos/BoutiqueByLivingCampoBelo/fachada.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Barão do Triunfo, 2017",
      "addressLocality": "Campo Belo",
      "addressRegion": "SP",
      "postalCode": "04602-001",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.6234",
      "longitude": "-46.6656"
    },
    "numberOfRooms": "3-4",
    "floorSize": {
      "@type": "QuantitativeValue",
      "minValue": 149,
      "maxValue": 265,
      "unitCode": "MTK"
    },
    "datePosted": "2024-01-01",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "priceCurrency": "BRL",
      "seller": {
        "@type": "RealEstateAgent",
        "name": "Ralph Santos",
        "telephone": "+5511999999999"
      }
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const displayedPlants = showAllPlants ? floorPlans : floorPlans.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Home Boutique Campo Belo | Apartamentos 149m² a 265m² | Cyrela 2028"
        description="Apartamentos de alto padrão no Campo Belo, São Paulo. 3 e 4 dormitórios, 149m² a 265m², varanda gourmet, 2 vagas. Lançamento Cyrela com entrega em Novembro 2028. Consulte valores exclusivos."
        keywords="apartamento campo belo, lançamento cyrela campo belo, home boutique campo belo, apartamento alto padrão zona sul, imóvel 3 quartos campo belo, apartamento 4 quartos campo belo, cyrela campo belo 2028, imóvel zona sul são paulo, apartamento varanda gourmet campo belo"
        canonicalUrl="/home-boutique-campo-belo"
        ogImage="/empreendimentos/BoutiqueByLivingCampoBelo/fachada.jpg"
        structuredData={structuredData}
      />
      
      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/empreendimentos/BoutiqueByLivingCampoBelo/fachada.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Lançamento Exclusivo Cyrela
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Home Boutique Campo Belo - Apartamentos de Alto Padrão no Coração do Campo Belo
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Descubra o mais novo lançamento da Cyrela no Campo Belo: apartamentos de 149m² a 265m² com 3 e 4 dormitórios, 
              varanda gourmet e acabamentos de luxo. Localização privilegiada na Zona Sul de São Paulo com entrega prevista para Novembro de 2028.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => openWhatsApp("Home Boutique Campo Belo")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com Consultor
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => document.getElementById('plantas')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Plantas
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <Home className="h-6 w-6 text-primary mb-2" />
                <p className="text-2xl font-bold text-foreground">149-265m²</p>
                <p className="text-sm text-muted-foreground">Área privativa</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <Building2 className="h-6 w-6 text-primary mb-2" />
                <p className="text-2xl font-bold text-foreground">3-4</p>
                <p className="text-sm text-muted-foreground">Dormitórios</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <Car className="h-6 w-6 text-primary mb-2" />
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-sm text-muted-foreground">Vagas</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <p className="text-2xl font-bold text-foreground">Nov/28</p>
                <p className="text-sm text-muted-foreground">Entrega</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Empreendimento */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Sobre o Home Boutique Campo Belo
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                O <strong>Home Boutique By Living Campo Belo</strong> representa o que há de mais sofisticado em moradia na Zona Sul de São Paulo. 
                Desenvolvido pela <strong>Cyrela</strong>, uma das mais respeitadas construtoras do Brasil, este empreendimento foi projetado 
                para oferecer o máximo em conforto, segurança e qualidade de vida para você e sua família.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Com <strong>84 unidades</strong> distribuídas em <strong>25 andares</strong>, o Home Boutique Campo Belo oferece exclusividade 
                e privacidade. Cada apartamento foi cuidadosamente planejado para proporcionar ambientes amplos e bem iluminados, 
                com plantas inteligentes que otimizam cada metro quadrado.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Localizado na <strong>R. Barão do Triunfo, 2017</strong>, o empreendimento está em uma das regiões mais valorizadas do Campo Belo, 
                com fácil acesso às principais vias da cidade, shoppings centers, restaurantes renomados, escolas de excelência e hospitais de referência.
              </p>

              <p className="text-lg leading-relaxed">
                Os apartamentos de <strong>149m² a 265m²</strong> contam com <strong>3 a 4 dormitórios</strong>, sendo suítes, 
                <strong>varanda gourmet</strong> integrada à sala, <strong>2 vagas de garagem</strong> e acabamentos de alto padrão 
                que refletem o cuidado da Cyrela com cada detalhe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que Campo Belo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Por que Morar no Campo Belo?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Localização Privilegiada</h3>
                <p className="text-muted-foreground">
                  O Campo Belo é um dos bairros mais nobres da Zona Sul, com fácil acesso à Marginal Pinheiros, 
                  Av. Santo Amaro e próximo ao Aeroporto de Congonhas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Infraestrutura Completa</h3>
                <p className="text-muted-foreground">
                  Próximo aos shoppings Ibirapuera e Morumbi, hospitais como Albert Einstein, 
                  escolas internacionais e os melhores restaurantes da cidade.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Valorização Constante</h3>
                <p className="text-muted-foreground">
                  O Campo Belo é uma das regiões com maior valorização imobiliária de São Paulo, 
                  garantindo um excelente investimento para o futuro.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Diferenciais do Empreendimento
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {empreendimento.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/50">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {amenities.map((amenity, index) => (
              <Card key={index} className="bg-card border-border/50 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{amenity.name}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plantas */}
      <section id="plantas" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Plantas do Home Boutique Campo Belo
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Conheça as opções de plantas disponíveis e escolha a que melhor atende às necessidades da sua família.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {displayedPlants.map((plant, index) => (
              <Card key={index} className="bg-card border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={plant.img} 
                    alt={`${plant.title} - ${plant.type} - Home Boutique Campo Belo`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">{plant.area}</Badge>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{plant.title}</h3>
                  <p className="text-sm text-muted-foreground">{plant.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {floorPlans.length > 3 && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowAllPlants(!showAllPlants)}
              >
                {showAllPlants ? (
                  <>
                    <ChevronUp className="mr-2 h-5 w-5" />
                    Ver menos plantas
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-5 w-5" />
                    Ver todas as plantas ({floorPlans.length})
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Galeria de Imagens
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={`/empreendimentos/BoutiqueByLivingCampoBelo/foto${num}.jpg`}
                  alt={`Home Boutique Campo Belo - Imagem ${num}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Localização Estratégica
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            <MapPin className="inline h-5 w-5 mr-2" />
            {empreendimento.address}
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden border border-border/50">
              <iframe 
                src="https://www.google.com/maps?q=R.%20Barão%20do%20Triunfo%2C%202017%20-%20Campo%20Belo%2C%20São%20Paulo%20-%20SP&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Home Boutique Campo Belo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Home Boutique Campo Belo
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA + Lead Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Garanta sua Unidade no Home Boutique Campo Belo
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Não perca a oportunidade de morar em um dos empreendimentos mais exclusivos do Campo Belo. 
                Entre em contato agora e receba informações completas sobre plantas, valores e condições especiais de lançamento.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Condições especiais de lançamento</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Atendimento personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Visita ao decorado</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Simulação de financiamento</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="text-lg px-8 w-full sm:w-auto"
                onClick={() => openWhatsApp("Home Boutique Campo Belo")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Falar pelo WhatsApp
              </Button>
            </div>
            
            <div>
              <LeadForm empreendimento="Home Boutique Campo Belo" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeBoutiqueCampoBelo;
