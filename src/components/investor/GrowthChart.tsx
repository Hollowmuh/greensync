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
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-forest flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Growth Projection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ChartContainer
            config={{
              actual: { color: "#2D5A27" },
              projected: { color: "#90EE90" },
            }}
          >
            <AreaChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
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
        </div>
      </CardContent>
    </Card>
  );
};