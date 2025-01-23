import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, ArrowDownRight } from "lucide-react";

const mockWithdrawals = [
  {
    id: 1,
    date: "2024-03-10",
    amount: 1200,
    status: "Completed",
    type: "Monthly Returns",
  },
  {
    id: 2,
    date: "2024-02-10",
    amount: 1150,
    status: "Completed",
    type: "Monthly Returns",
  },
  {
    id: 3,
    date: "2024-01-10",
    amount: 1100,
    status: "Completed",
    type: "Monthly Returns",
  },
];

export const WithdrawalHistory = () => {
  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-forest flex items-center gap-2">
          <History className="h-5 w-5" />
          Withdrawal History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockWithdrawals.map((withdrawal) => (
            <div
              key={withdrawal.id}
              className="flex items-center justify-between p-3 rounded-lg bg-forest/5 hover:bg-forest/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-natural/20 flex items-center justify-center">
                  <ArrowDownRight className="h-5 w-5 text-natural" />
                </div>
                <div>
                  <p className="font-medium text-forest-dark">{withdrawal.type}</p>
                  <p className="text-sm text-sage-dark">{withdrawal.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-natural">
                  -${withdrawal.amount.toLocaleString()}
                </p>
                <p className="text-sm text-sage">{withdrawal.status}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};