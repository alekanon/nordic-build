import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Ydelser from "./pages/Ydelser";
import Referencer from "./pages/Referencer";
import OmOs from "./pages/OmOs";
import Kontakt from "./pages/Kontakt";
import Prisestimat from "./pages/Prisestimat";
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
          <Route path="/ydelser" element={<Ydelser />} />
          <Route path="/referencer" element={<Referencer />} />
          <Route path="/om-os" element={<OmOs />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/prisestimat" element={<Prisestimat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
