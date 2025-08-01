
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ArrowRight, MapPin, Building, Box, Circle, Square } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Empreendimentos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const developments = [
    {
      id: 1,
      title: "Empreendimento Centro",
      location: "Centro - São Paulo",
      type: "Residencial",
      units: "120 unidades",
      status: "Lançamento",
      description: "Apartamentos de alto padrão com acabamentos luxuosos e localização privilegiada no coração da cidade.",
      features: ["3-4 dormitórios", "Varanda gourmet", "2-3 vagas", "Área de lazer completa"],
      priceRange: "R$ 800.000 - R$ 1.200.000"
    },
    {
      id: 2,
      title: "Residencial Gardens",
      location: "Jardins - São Paulo",
      type: "Residencial",
      units: "80 unidades",
      status: "Em Construção",
      description: "Torres residenciais com conceito sustentável e design contemporâneo em um dos bairros mais nobres.",
      features: ["2-3 dormitórios", "Terraço privativo", "1-2 vagas", "Spa e fitness"],
      priceRange: "R$ 1.000.000 - R$ 1.800.000"
    },
    {
      id: 3,
      title: "Corporate Executive",
      location: "Vila Olímpia - São Paulo",
      type: "Comercial",
      units: "200 salas",
      status: "Pré-lançamento",
      description: "Complexo comercial moderno com tecnologia de ponta e facilidades corporativas de última geração.",
      features: ["Salas 40-200m²", "Coworking", "Heliponto", "Concierge 24h"],
      priceRange: "R$ 300.000 - R$ 2.500.000"
    },
    {
      id: 4,
      title: "Residence Morumbi",
      location: "Morumbi - São Paulo",
      type: "Residencial",
      units: "60 unidades",
      status: "Lançamento",
      description: "Apartamentos de luxo com vista panorâmica e acabamentos importados em condomínio exclusivo.",
      features: ["4-5 dormitórios", "Master suite", "3-4 vagas", "Adega privativa"],
      priceRange: "R$ 1.500.000 - R$ 3.000.000"
    },
    {
      id: 5,
      title: "Smart Office Faria Lima",
      location: "Faria Lima - São Paulo",
      type: "Comercial",
      units: "150 salas",
      status: "Em Construção",
      description: "Edifício inteligente com certificação sustentável na principal avenida corporativa de São Paulo.",
      features: ["Salas 30-300m²", "Automação total", "Terraço corporativo", "Estacionamento robótico"],
      priceRange: "R$ 250.000 - R$ 3.500.000"
    },
    {
      id: 6,
      title: "Green Living Pinheiros",
      location: "Pinheiros - São Paulo",
      type: "Residencial",
      units: "100 unidades",
      status: "Entregue",
      description: "Condomínio sustentável com conceito biofílico e soluções ecológicas inovadoras.",
      features: ["2-4 dormitórios", "Jardim vertical", "2 vagas", "Horta comunitária"],
      priceRange: "R$ 700.000 - R$ 1.400.000"
    }
  ];

  const filteredDevelopments = developments.filter(dev => {
    const matchesSearch = dev.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dev.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || dev.type === filterType;
    const matchesStatus = filterStatus === "all" || dev.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#C69755] to-[#EFC283]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
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
        <div className="relative container mx-auto text-center text-white">
          <div className="hero-3d-element">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Empreendimentos Exclusivos
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-light text-white/90 mt-2">
              Descubra os melhores investimentos imobiliários de São Paulo, cuidadosamente selecionados para você
              </span>
            </h1>
          </div>
        </div>
      </section>
      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Buscar por nome ou localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os tipos</SelectItem>
                  <SelectItem value="Residencial">Residencial</SelectItem>
                  <SelectItem value="Comercial">Comercial</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos status</SelectItem>
                  <SelectItem value="Pré-lançamento">Pré-lançamento</SelectItem>
                  <SelectItem value="Lançamento">Lançamento</SelectItem>
                  <SelectItem value="Em Construção">Em Construção</SelectItem>
                  <SelectItem value="Entregue">Entregue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
              {filteredDevelopments.length} empreendimento{filteredDevelopments.length !== 1 ? 's' : ''} encontrado{filteredDevelopments.length !== 1 ? 's' : ''}
            </h2>
            {/* <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros Avançados
            </Button> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDevelopments.map((dev) => (
              <Card key={dev.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group">
                <div className="h-48 bg-primary relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-slate-500 text-white">{dev.status}</Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{dev.type}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{dev.title}</h3>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-3 w-3 mr-1" />
                      {dev.location}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardDescription className="text-slate-600 line-clamp-2 mb-3">
                    {dev.description}
                  </CardDescription>
                  <div className="flex items-center text-sm text-slate-500 mb-2">
                    <Building className="h-4 w-4 mr-1" />
                    {dev.units}
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {dev.priceRange}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {dev.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {dev.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{dev.features.length - 3} mais
                        </Badge>
                      )}
                    </div>
                    <Button 
                      className="w-full group-hover:bg-primary transition-colors"
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

          {filteredDevelopments.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 text-lg mb-4">
                Nenhum empreendimento encontrado com os filtros selecionados
              </div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setFilterType("all");
                  setFilterStatus("all");
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Empreendimentos;
