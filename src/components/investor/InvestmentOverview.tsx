import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Leaf } from "lucide-react";

export const InvestmentOverview = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-forest flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Investment Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Current Investment</span>
            <span className="text-xl font-bold text-forest">$25,000</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Projected Returns</span>
            <span className="text-xl font-bold text-leaf">$32,500</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Impact Score</span>
            <span className="text-xl font-bold text-sage">85/100</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};