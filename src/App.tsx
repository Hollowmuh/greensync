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
import { ChevronDown, Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import InvestorPortal from "./pages/InvestorPortal";
import ScoutPortal from "./pages/ScoutPortal";
import About from "./pages/About";

const queryClient = new QueryClient();

const Navigation = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        variant="outline"
        size="icon"
        className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur">
            Navigate <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur">
          <DropdownMenuItem onClick={() => navigate("/")}>
            Home
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/about")}>
            About Us
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
          <Route path="/about" element={<About />} />
          <Route path="/invest" element={<InvestorPortal />} />
          <Route path="/scout" element={<ScoutPortal />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;