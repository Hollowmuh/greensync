import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TreeDeciduous } from "lucide-react";

export const TreePortfolio = () => {
  const trees = [
    { type: "Oak", stage: "Mature", health: "Excellent", count: 50 },
    { type: "Pine", stage: "Growing", health: "Good", count: 75 },
    { type: "Maple", stage: "Sapling", health: "Excellent", count: 25 },
  ];

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-forest flex items-center gap-2">
          <TreeDeciduous className="h-5 w-5" />
          Tree Portfolio
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trees.map((tree) => (
            <div key={tree.type} className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium text-forest">{tree.type}</p>
                <p className="text-sm text-muted-foreground">
                  {tree.stage} • {tree.health}
                </p>
              </div>
              <span className="text-xl font-bold text-forest">{tree.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};