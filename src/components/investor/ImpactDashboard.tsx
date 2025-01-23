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
    <Card className="w-full bg-white/90 dark:bg-forest-dark/90 shadow-md">
      <CardHeader>
        <CardTitle className="text-forest dark:text-leaf flex items-center gap-3">
         
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact) => (
            <div
              key={impact.title}
              className="bg-forest/5 dark:bg-forest-dark/20 rounded-xl p-5 hover:bg-forest/10 dark:hover:bg-forest-dark/30 transition-all duration-300 ease-in-out"
            >
              <h3 className="text-sm text-forest/70 dark:text-leaf/70 mb-2">
                {impact.title}
              </h3>
              <p className="text-3xl font-bold text-forest dark:text-leaf mb-2">
                {impact.value}
                <span className="text-base font-normal text-forest/60 dark:text-leaf/60 ml-2">
                  {impact.unit}
                </span>
              </p>
              <p className="text-sm text-sage dark:text-green-300 font-medium">
                {impact.change}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};