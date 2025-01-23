import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, History, User, TrendingUp } from "lucide-react";
import { InvestmentOverview } from "@/components/investor/InvestmentOverview";
import { GrowthChart } from "@/components/investor/GrowthChart";
import { InvestmentHistory } from "@/components/investor/InvestmentHistory";
import { WithdrawalHistory } from "@/components/investor/WithdrawalHistory";
import { InvestorProfile } from "@/components/investor/InvestorProfile";
import { ImpactDashboard } from "@/components/investor/ImpactDashboard";

const InvestorPortal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-light/5 to-sage-light/10 p-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold text-forest">Investor Dashboard</h1>
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-lg px-4 py-2">
          <div className="h-3 w-3 rounded-full bg-leaf animate-pulse" />
          <span className="text-forest-dark text-sm">Live Updates</span>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <InvestorProfile />
        </div>
        <div className="md:col-span-8">
          <InvestmentOverview />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <InvestmentHistory />
        <WithdrawalHistory />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <GrowthChart />
        <ImpactDashboard />
      </div>
    </div>
  );
};

export default InvestorPortal;