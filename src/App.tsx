
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppPopup from "./components/ui/WhatsAppPopup";
import PageTransition from "./components/layout/PageTransition";
import MaintenanceChecker from "./components/layout/MaintenanceChecker";
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
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';

  // If it's admin route, don't wrap with MaintenanceChecker
  if (isAdminRoute) {
    return <Admin />;
  }

  // For all other routes, wrap with MaintenanceChecker
  return (
    <MaintenanceChecker>
      <Header />
      <div className="pt-20">
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
      </div>
      <Footer />
      <WhatsAppPopup />
    </MaintenanceChecker>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<AppContent />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
