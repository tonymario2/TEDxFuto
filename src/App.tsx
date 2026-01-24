import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Speakers from "./pages/Speakers";
import ApplyToSpeak from "./pages/ApplyToSpeak";
import Partners from "./pages/Partners";
import Organizers from "./pages/Organizers";
import ConferenceHighlights from "./pages/ConferenceHighlights";
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/apply-to-speak" element={<ApplyToSpeak />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/organizers" element={<Organizers />} />
          <Route path="/highlights" element={<ConferenceHighlights />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
