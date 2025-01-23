import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import InvestorPortal from "./pages/InvestorPortal";
import ScoutPortal from "./pages/ScoutPortal";

const queryClient = new QueryClient();

const Navigation = () => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bg-white/80 backdrop-blur">
            Navigate <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white/80 backdrop-blur">
          <DropdownMenuItem onClick={() => navigate("/")}>
            Home
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/invest")}>
            Investor Portal
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/scout")}>
            Scout Portal
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/invest" element={<InvestorPortal />} />
          <Route path="/scout" element={<ScoutPortal />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;