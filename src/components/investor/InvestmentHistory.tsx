import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, ArrowUpRight, ArrowDownRight } from "lucide-react";

const mockInvestments = [
  {
    id: 1,
    date: "2024-03-15",
    amount: 5000,
    type: "Investment",
    status: "Completed",
    project: "Sustainable Forest Fund A",
  },
  {
    id: 2,
    date: "2024-02-28",
    amount: 3000,
    type: "Investment",
    status: "Completed",
    project: "Green Future Initiative",
  },
  {
    id: 3,
    date: "2024-01-15",
    amount: 7500,
    type: "Investment",
    status: "Completed",
    project: "Carbon Offset Program",
  },
];

export const InvestmentHistory = () => {
  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-forest flex items-center gap-2">
          <History className="h-5 w-5" />
          Investment History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockInvestments.map((investment) => (
            <div
              key={investment.id}
              className="flex items-center justify-between p-3 rounded-lg bg-forest/5 hover:bg-forest/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-leaf/20 flex items-center justify-center">
                  <ArrowUpRight className="h-5 w-5 text-leaf-dark" />
                </div>
                <div>
                  <p className="font-medium text-forest-dark">{investment.project}</p>
                  <p className="text-sm text-sage-dark">{investment.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-forest">
                  ${investment.amount.toLocaleString()}
                </p>
                <p className="text-sm text-sage">{investment.status}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};