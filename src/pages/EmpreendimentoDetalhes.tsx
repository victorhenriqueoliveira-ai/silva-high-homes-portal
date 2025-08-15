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
import fachada from "/empreendimentos/BoutiqueByLivingCampoBelo/fachada.jpeg"

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
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Property Carousel */}
            <PropertyCarousel 
              images={empreendimentoSelecionado.images || [empreendimentoSelecionado.fachada]}
              title={empreendimentoSelecionado.title}
              location={empreendimentoSelecionado.location}
              status={empreendimentoSelecionado.status}
            />

            {/* Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary">{empreendimentoSelecionado.type}</Badge>
                  <div className="flex items-center text-slate-600">
                    <Building className="h-4 w-4 mr-1" />
                    {empreendimentoSelecionado.units}
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-primary mb-4">
                  {empreendimentoSelecionado.priceRange}
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {empreendimentoSelecionado.description}
                </p>

                {/* Aqui cheque se details existem para evitar erro */}
                {empreendimentoSelecionado.details && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-slate-500">Área</div>
                      <div className="font-semibold">{empreendimentoSelecionado.details.area}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Entrega</div>
                      <div className="font-semibold">{empreendimentoSelecionado.deliveryDate || 'A definir'}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Andares</div>
                      <div className="font-semibold">{empreendimentoSelecionado.details.floors}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Vagas</div>
                      <div className="font-semibold">{empreendimentoSelecionado.details.parking}</div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="flex-1 bg-primary hover:bg-muted-500">
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar Agora
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex-1"
                    onClick={async () => {
                      try {
                        await supabase.functions.invoke('trello-leads', {
                          body: {
                            name: 'Usuário WhatsApp',
                            email: 'whatsapp@contato.com',
                            empreendimento: empreendimentoSelecionado.title,
                            source: 'whatsapp',
                            page_url: window.location.href,
                          }
                        });
                      } catch (error) {
                        console.error('Error tracking WhatsApp click:', error);
                      }
                      window.open('https://wa.me/5511971511943', '_blank');
                    }}
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Floor Plans */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Plantas e Preços</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {empreendimentoSelecionado.floorPlans?.map((plan, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                      <div>
                        <div className="font-semibold">{plan.type}</div>
                        <div className="text-slate-600">{plan.area}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">{plan.price}</div>
                        <ImageModal imageUrl={plan.plantaImg} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contato e Formulário */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Fale com Rafael Silva</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">RS</span>
                    </div>
                    <div className="font-semibold">Ralph Santos</div>
                    <div className="text-sm text-slate-600">CRECI - 270870 - F</div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <Phone className="h-4 w-4 mr-2" />
                      (11) 97151-1943
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      rafael@email.com
                    </Button>
                    <Button 
                      className="w-full bg-primary hover:bg-muted-700 text-white"
                      onClick={async () => {
                        try {
                          await supabase.functions.invoke('trello-leads', {
                            body: {
                              name: 'Usuário WhatsApp',
                              email: 'whatsapp@contato.com',
                              empreendimento: empreendimentoSelecionado.title,
                              source: 'whatsapp',
                              page_url: window.location.href,
                            }
                          });
                        } catch (error) {
                          console.error('Error tracking WhatsApp click:', error);
                        }
                        window.open('https://wa.me/5511971511943', '_blank');
                      }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                  
                  <div className="text-xs text-slate-500 text-center">
                    Atendimento de segunda a sábado<br />
                    das 9h às 18h
                  </div>
                </CardContent>
              </Card>

              <LeadForm empreendimento={empreendimentoSelecionado.title} />
            </div>

          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lazer e Comodidades</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Localização</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Endereço</h3>
              <p className="text-slate-600 mb-6">{empreendimentoSelecionado.address}</p>
              
              <h3 className="text-xl font-semibold mb-4">Pontos de Interesse</h3>
              <div className="space-y-2">
                {[
                  "Shopping Center - 5 min",
                  "Estação de Metrô - 8 min",
                  "Hospital - 10 min",
                  "Universidade - 15 min"
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-slate-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="h-80 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-slate-500">Mapa da Localização</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmpreendimentoDetalhes;
