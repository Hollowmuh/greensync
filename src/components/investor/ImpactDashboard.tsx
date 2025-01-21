import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from "lucide-react";

export const ImpactDashboard = () => {
  const impacts = [
    {
      title: "Carbon Credits",
      value: "150",
      unit: "tons",
      change: "+12% from last month",
    },
    {
      title: "Trees Planted",
      value: "1,250",
      unit: "trees",
      change: "+50 this month",
    },
    {
      title: "Land Protected",
      value: "25",
      unit: "acres",
      change: "+2 acres this quarter",
    },
    {
      title: "Wildlife Impact",
      value: "45",
      unit: "species supported",
      change: "+3 new species",
    },
  ];

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-forest flex items-center gap-2">
          <Leaf className="h-5 w-5" />
          Impact Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact) => (
            <div
              key={impact.title}
              className="rounded-lg border p-4 hover:border-forest transition-colors"
            >
              <h3 className="text-sm text-muted-foreground">{impact.title}</h3>
              <p className="text-2xl font-bold text-forest mt-2">
                {impact.value}
                <span className="text-sm font-normal text-muted-foreground ml-1">
                  {impact.unit}
                </span>
              </p>
              <p className="text-sm text-sage mt-2">{impact.change}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};