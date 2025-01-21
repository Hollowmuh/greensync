import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, AlertTriangle, Leaf } from "lucide-react";

export const InvestmentPackages = () => {
  const packages = [
    {
      name: "Starter Grove",
      investment: 5000,
      returns: "8-10%",
      risk: "Low",
      impact: "50 trees",
    },
    {
      name: "Forest Builder",
      investment: 10000,
      returns: "10-12%",
      risk: "Medium",
      impact: "120 trees",
    },
    {
      name: "Conservation Leader",
      investment: 25000,
      returns: "12-15%",
      risk: "Medium-High",
      impact: "300 trees",
    },
  ];

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-forest flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Investment Packages
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-lg border p-4 hover:border-forest transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-forest">{pkg.name}</h3>
                <span className="text-xl font-bold text-forest">
                  ${pkg.investment.toLocaleString()}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm mb-4">
                <div>
                  <p className="text-muted-foreground">Returns</p>
                  <p className="font-medium text-leaf">{pkg.returns}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Risk</p>
                  <p className="font-medium">{pkg.risk}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Impact</p>
                  <p className="font-medium text-sage">{pkg.impact}</p>
                </div>
              </div>
              <Button className="w-full bg-forest hover:bg-forest-dark">
                Invest Now
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};