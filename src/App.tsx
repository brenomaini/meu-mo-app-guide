import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Manual from "./pages/Manual";
import FAQ from "./pages/FAQ";
import Contatos from "./pages/Contatos";
import ManualApp from "./pages/ManualApp";
import MapasChurrasqueiras from "./pages/MapasChurrasqueiras";
import MapasEspacos from "./pages/MapasEspacos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/manual-app" element={<ManualApp />} />
          <Route path="/mapas-churrasqueiras" element={<MapasChurrasqueiras />} />
          <Route path="/mapas-espacos" element={<MapasEspacos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
