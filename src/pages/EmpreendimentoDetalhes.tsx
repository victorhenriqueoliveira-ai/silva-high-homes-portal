import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, Building, Calendar, Phone, Mail, MessageCircle, Star, Shield, Car, Dumbbell } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import PropertyCarousel from "@/components/PropertyCarousel";
import { empreendimentos } from "./Mockups";
import ImageModal from "@/components/organisms/modals";
import { openWhatsApp } from "@/lib/whatsapp";
import { useState } from "react";

const EmpreendimentoDetalhes = () => {
  const { title } = useParams();

  const empreendimentoSelecionado = empreendimentos.find(
    e => e.slug === title
  );

  if (!empreendimentoSelecionado) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">Empreendimento não encontrado.</p>
      </div>
    );
  }

  const [showAll, setShowAll] = useState(false);

  const maxToShow = 8;

  const floorPlansToShow = showAll
    ? empreendimentoSelecionado.floorPlans
    : empreendimentoSelecionado.floorPlans?.slice(0, maxToShow);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-slate-500 hover:text-slate-700">Home</Link>
            <span className="text-slate-400">•</span>
            <Link to="/empreendimentos" className="text-slate-500 hover:text-slate-700">Empreendimentos</Link>
            <span className="text-slate-400">•</span>
            <span className="text-slate-800 font-medium">{empreendimentoSelecionado.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Property Carousel */}
            <PropertyCarousel 
              images={empreendimentoSelecionado.images || [empreendimentoSelecionado.fachada]}
              title={empreendimentoSelecionado.title}
              location={empreendimentoSelecionado.location}
              status={empreendimentoSelecionado.status}
            />

            {/* Info */}
            <div className="space-y-4 lg:space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="secondary" className="text-xs sm:text-sm">{empreendimentoSelecionado.type}</Badge>
                  <div className="flex items-center text-slate-600 text-sm sm:text-base">
                    <Building className="h-4 w-4 mr-1" />
                    {empreendimentoSelecionado.units}
                  </div>
                </div>
                
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  {empreendimentoSelecionado.priceRange}
                </div>
                
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {empreendimentoSelecionado.description}
                </p>

                {/* Aqui cheque se details existem para evitar erro */}
                {empreendimentoSelecionado.details && (
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    <div>
                      <div className="text-xs sm:text-sm text-slate-500">Área</div>
                      <div className="font-semibold text-sm sm:text-base">{empreendimentoSelecionado.details.area}</div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-slate-500">Entrega</div>
                      <div className="font-semibold text-sm sm:text-base">{empreendimentoSelecionado.deliveryDate || 'A definir'}</div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-slate-500">Andares</div>
                      <div className="font-semibold text-sm sm:text-base">{empreendimentoSelecionado.details.floors}</div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-slate-500">Vagas</div>
                      <div className="font-semibold text-sm sm:text-base">{empreendimentoSelecionado.details.parking}</div>
                    </div>
                  </div>
                )}

                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full sm:w-auto sm:min-w-[200px] md:w-full h-12 text-sm sm:text-base justify-center items-center"
                      onClick={() => openWhatsApp(empreendimentoSelecionado.title)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Sections */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Floor Plans */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Plantas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {floorPlansToShow?.map((plan, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                      <div>
                        <div className="font-semibold text-primary">{plan.title}</div>
                        <div className="font-semibold">{plan.type}</div>
                        <div className="text-slate-600">{plan.area}</div>
                      </div>
                      <div className="text-right">
                        <ImageModal imageUrl={plan.plantaImg} imageUrl2={ plan.plantaImg2}  />
                      </div>
                    </div>
                  ))}
                  {empreendimentoSelecionado.floorPlans?.length > maxToShow && (
                    <div className="text-center">
                      <button
                        onClick={() => setShowAll((prev) => !prev)}
                        className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                      >
                        {showAll ? "Ver menos" : "Ver mais"}
                      </button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Contato e Formulário */}
            <div className="space-y-6 lg:space-y-8">
              <LeadForm empreendimento={empreendimentoSelecionado.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 lg:mb-12">Lazer e Comodidades</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {empreendimentoSelecionado.amenities?.map((amenity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <amenity.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{amenity.name}</h3>
                  <p className="text-sm text-slate-600">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 lg:mb-12">Localização</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Endereço</h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6">{empreendimentoSelecionado.address}</p>
              
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Pontos de Interesse</h3>
              <div className="space-y-2">
                {[...(empreendimentoSelecionado.pontos || [])
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm sm:text-base text-slate-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="h-64 sm:h-80 bg-muted rounded-lg flex items-center justify-center">
              <div className="h-64 sm:h-80 w-full bg-muted rounded-lg overflow-hidden">
                <iframe
                  src={empreendimentoSelecionado.localizacao}
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EmpreendimentoDetalhes;
