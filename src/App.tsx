
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppPopup from "./components/ui/WhatsAppPopup";
import PageTransition from "./components/layout/PageTransition";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceGovernment from "./pages/ServiceGovernment";
import ServiceCorporate from "./pages/ServiceCorporate";
import ServiceStallDesignFabrication from "./pages/ServiceStallDesignFabrication";
import ServiceWedding from "./pages/ServiceWedding";
import ServiceOtherEvent from "./pages/ServiceOtherEvent";
import Gallery from "./pages/Gallery";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/government" element={<ServiceGovernment />} />
            <Route path="/services/corporate" element={<ServiceCorporate />} />
            <Route path="/services/stall-design-fabrication" element={<ServiceStallDesignFabrication />} />
            <Route path="/services/wedding" element={<ServiceWedding />} />
            <Route path="/services/other-event" element={<ServiceOtherEvent />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
        <Footer />
        <WhatsAppPopup />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
