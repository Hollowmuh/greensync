import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, XCircle, Camera } from "lucide-react";

const verificationHistory = [
  { id: 1, status: 'accepted', date: '2024-02-15', time: '14:30', confidence: 95 },
  { id: 2, status: 'rejected', date: '2024-02-14', time: '11:20', confidence: 45 },
  { id: 3, status: 'accepted', date: '2024-02-14', time: '09:15', confidence: 88 },
];

export const VerificationHistory = () => {
  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-5 w-5 text-forest" />
          Recent Verifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {verificationHistory.map((verification) => (
              <div
                key={verification.id}
                className="p-4 bg-white rounded-lg border border-gray-100 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  {verification.status === 'accepted' ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                  <div>
                    <p className="font-medium">
                      {verification.status === 'accepted' ? 'Verified' : 'Rejected'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {verification.date} at {verification.time}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{verification.confidence}%</p>
                  <p className="text-sm text-gray-500">Confidence</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};