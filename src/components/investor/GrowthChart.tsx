import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", actual: 4000, projected: 4400 },
  { month: "Feb", actual: 4500, projected: 4800 },
  { month: "Mar", actual: 5100, projected: 5300 },
  { month: "Apr", actual: 5400, projected: 5900 },
  { month: "May", actual: 5900, projected: 6500 },
  { month: "Jun", actual: 6300, projected: 7000 },
];

export const GrowthChart = () => {
  return (
    <Card className="w-full h-full bg-white/90 dark:bg-forest-dark/90">
      <CardHeader>
        <CardTitle className="text-forest dark:text-leaf flex items-center gap-2">
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-64px)] px-4 py-2">
        <ResponsiveContainer width="100%" height="100%">
          <ChartContainer
            config={{
              actual: { color: "#2D5A27" },
              projected: { color: "#90EE90" },
            }}
          >
            <AreaChart data={data}>
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false}
                className="text-xs"
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                className="text-xs"
              />
              <ChartTooltip />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="#2D5A27"
                fill="#2D5A27"
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="projected"
                stroke="#90EE90"
                fill="#90EE90"
                fillOpacity={0.2}
                strokeDasharray="5 5"
              />
            </AreaChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};