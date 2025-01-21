import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Leaf, TreeDeciduous, Activity } from "lucide-react";
import { InvestmentOverview } from "@/components/investor/InvestmentOverview";
import { TreePortfolio } from "@/components/investor/TreePortfolio";
import { GrowthChart } from "@/components/investor/GrowthChart";
import { InvestmentPackages } from "@/components/investor/InvestmentPackages";
import { RoiCalculator } from "@/components/investor/RoiCalculator";
import { ImpactDashboard } from "@/components/investor/ImpactDashboard";

const InvestorPortal = () => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <h1 className="text-3xl font-bold text-forest">Investor Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <InvestmentOverview />
        <TreePortfolio />
        <GrowthChart />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <InvestmentPackages />
        <RoiCalculator />
      </div>

      <ImpactDashboard />
    </div>
  );
};

export default InvestorPortal;