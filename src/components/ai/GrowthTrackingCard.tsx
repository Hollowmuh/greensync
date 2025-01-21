import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: 'Jan', height: 120, projected: 120 },
  { month: 'Feb', height: 140, projected: 142 },
  { month: 'Mar', height: 165, projected: 168 },
  { month: 'Apr', height: 190, projected: 195 },
  { month: 'May', height: 220, projected: 225 },
  { month: 'Jun', height: null, projected: 260 },
  { month: 'Jul', height: null, projected: 300 },
];

export const GrowthTrackingCard = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-forest">Growth Tracking</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-forest/5 p-4 rounded-lg">
            <p className="text-sm text-forest/70">Current Height</p>
            <p className="text-2xl font-semibold text-forest">2.2m</p>
          </div>
          <div className="bg-forest/5 p-4 rounded-lg">
            <p className="text-sm text-forest/70">Growth Rate</p>
            <p className="text-2xl font-semibold text-forest">30cm/mo</p>
          </div>
          <div className="bg-forest/5 p-4 rounded-lg">
            <p className="text-sm text-forest/70">Health Score</p>
            <p className="text-2xl font-semibold text-forest">98%</p>
          </div>
        </div>

        <div className="h-[300px] bg-white/50 rounded-lg p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" stroke="#2D5A27" />
              <YAxis stroke="#2D5A27" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E2E8F0",
                }}
              />
              <Line
                type="monotone"
                dataKey="height"
                stroke="#2D5A27"
                strokeWidth={2}
                dot={{ fill: "#2D5A27" }}
              />
              <Line
                type="monotone"
                dataKey="projected"
                stroke="#8BA888"
                strokeDasharray="5 5"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-forest/5 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold text-forest">AI Projections</h4>
          <p className="text-sm text-forest/70">
            Based on current growth patterns and environmental conditions, this tree is
            expected to reach 3.0m by July 2024. Growth rate is 15% above average for
            this species and age.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};