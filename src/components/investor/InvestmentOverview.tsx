import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Leaf, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const InvestmentOverview = () => {
  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-forest flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Investment Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 rounded-lg bg-gradient-to-br from-forest/5 to-forest/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sage-dark">Total Investment</span>
              <DollarSign className="h-4 w-4 text-forest" />
            </div>
            <span className="text-2xl font-bold text-forest">$25,000</span>
            <div className="mt-2 flex items-center gap-1 text-sm text-leaf">
              <ArrowUpRight className="h-4 w-4" />
              <span>+12.5% this month</span>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-br from-leaf/5 to-leaf/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sage-dark">Projected Returns</span>
              <TrendingUp className="h-4 w-4 text-leaf" />
            </div>
            <span className="text-2xl font-bold text-leaf-dark">$32,500</span>
            <div className="mt-2 flex items-center gap-1 text-sm text-leaf">
              <ArrowUpRight className="h-4 w-4" />
              <span>30% ROI</span>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-br from-sage/5 to-sage/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sage-dark">Impact Score</span>
              <Leaf className="h-4 w-4 text-sage" />
            </div>
            <span className="text-2xl font-bold text-sage">85/100</span>
            <div className="mt-2 flex items-center gap-1 text-sm text-leaf">
              <ArrowUpRight className="h-4 w-4" />
              <span>Top 10%</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button className="flex-1 bg-forest hover:bg-forest-dark">
            <DollarSign className="h-4 w-4" />
            Invest More
          </Button>
          <Button variant="outline" className="flex-1">
            <TrendingUp className="h-4 w-4" />
            View Analytics
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};