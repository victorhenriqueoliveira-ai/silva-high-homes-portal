import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useScrollToTop } from "./hooks/useScrollToTop";
import Index from "./pages/Index";
import Empreendimentos from "./pages/Empreendimentos";
import EmpreendimentoDetalhes from "./pages/EmpreendimentoDetalhes";
import HomeBoutiqueCampoBelo from "./pages/HomeBoutiqueCampoBelo";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTopHandler = () => {
  useScrollToTop();
  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopHandler />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home-boutique-campo-belo" element={<HomeBoutiqueCampoBelo />} />
            <Route path="/empreendimentos" element={<Empreendimentos />} />
            <Route path="/empreendimento/:title" element={<EmpreendimentoDetalhes />} />
            <Route path="/sobre" element={<Sobre />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
