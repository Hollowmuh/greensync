import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DollarSign } from "lucide-react";

export const RoiCalculator = () => {
  const [amount, setAmount] = useState("10000");
  const [term, setTerm] = useState("5");

  const calculateRoi = () => {
    const investment = parseFloat(amount);
    const years = parseFloat(term);
    const annualReturn = 0.12; // 12% annual return
    const futureValue = investment * Math.pow(1 + annualReturn, years);
    return futureValue.toFixed(2);
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-forest flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          ROI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground">
              Investment Amount ($)
            </label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">
              Investment Term (years)
            </label>
            <Input
              type="number"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="rounded-lg bg-sage/10 p-4 mt-4">
            <p className="text-sm text-muted-foreground">Projected Returns</p>
            <p className="text-2xl font-bold text-forest">
              ${calculateRoi()}
            </p>
            <p className="text-sm text-sage">
              Based on 12% annual return rate
            </p>
          </div>
          <Button className="w-full bg-forest hover:bg-forest-dark">
            Generate PDF Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};