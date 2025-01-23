import { Card } from "@/components/ui/card";
import { InvestmentOverview } from "@/components/investor/InvestmentOverview";
import { GrowthChart } from "@/components/investor/GrowthChart";
import { InvestmentHistory } from "@/components/investor/InvestmentHistory";
import { WithdrawalHistory } from "@/components/investor/WithdrawalHistory";
import { InvestorProfile } from "@/components/investor/InvestorProfile";
import { ImpactDashboard } from "@/components/investor/ImpactDashboard";
import { RoiCalculator } from "@/components/investor/RoiCalculator";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const InvestorPortal = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-light/5 via-sage-light/5 to-leaf-light/5 dark:from-forest-dark dark:via-sage-dark dark:to-leaf-dark p-8 space-y-8 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold text-forest dark:text-white">Investor Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/80 dark:bg-forest-dark/80 backdrop-blur rounded-lg px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-leaf dark:bg-leaf-dark animate-pulse" />
            <span className="text-forest-dark dark:text-white text-sm">Live Updates</span>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-3">
          <InvestorProfile />
        </div>
        <div className="md:col-span-9">
          <InvestmentOverview />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-8">
          <div className="grid gap-6">
            <GrowthChart />
            <ImpactDashboard />
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="grid gap-6">
            <RoiCalculator />
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <InvestmentHistory />
        <WithdrawalHistory />
      </div>
    </div>
  );
};

export default InvestorPortal;