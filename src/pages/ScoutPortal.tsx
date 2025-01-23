import { Camera, MapPin, CheckCircle2, XCircle, Activity, DollarSign, Star, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GrowthTrackingCard } from "@/components/ai/GrowthTrackingCard";
import { VerificationModal } from "@/components/scout/VerificationModal";
import { ScoutProfile } from "@/components/scout/ScoutProfile";
import { VerificationHistory } from "@/components/scout/VerificationHistory";
import { FarmAssignment } from "@/components/scout/FarmAssignment";
import { useEffect, useState } from "react";

const ScoutPortal = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const verifications = [
    { id: 1, date: '2024-01-15', nextDue: '2024-04-15', status: 'completed' },
    { id: 2, date: '2024-02-01', nextDue: '2024-05-01', status: 'pending' },
  ];

  const farms = [
    { id: 1, name: 'Green Valley Farm', coordinates: '40.7128° N, 74.0060° W', trees: 250 },
    { id: 2, name: 'Highland Grove', coordinates: '34.0522° N, 118.2437° W', trees: 175 },
    { id: 3, name: 'Riverside Plantation', coordinates: '41.8781° N, 87.6298° W', trees: 320 },
  ];

  const payments = [
    { id: 1, amount: 500, date: '2024-02-01', status: 'paid' },
    { id: 2, amount: 450, date: '2024-01-01', status: 'paid' },
  ];

  return (
    <div className="min-h-screen bg-forest/10 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Online/Offline Status */}
        <div className={`fixed bottom-4 right-4 px-4 py-2 rounded-full ${
          isOnline ? 'bg-green-500' : 'bg-yellow-500'
        } text-white flex items-center gap-2`}>
          <div className={`w-2 h-2 rounded-full ${
            isOnline ? 'bg-white animate-pulse' : 'bg-white'
          }`} />
          {isOnline ? 'Online' : 'Offline Mode'}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <VerificationModal />
          <FarmAssignment />
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScoutProfile />
          <Card className="md:col-span-2 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle>Verification Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {verifications.map((verification) => (
                  <div key={verification.id} className="flex justify-between items-center p-4 bg-forest/5 rounded-lg">
                    <div>
                      <p className="font-medium">Last verified: {verification.date}</p>
                      <p className="text-sm text-forest">Next due: {verification.nextDue}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      verification.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {verification.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-forest" />
                Assigned Farms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {farms.map((farm) => (
                  <div key={farm.id} className="p-4 bg-sage/20 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-forest">{farm.name}</h3>
                        <p className="text-sm text-gray-600">{farm.coordinates}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-forest">{farm.trees}</span>
                        <p className="text-sm text-gray-600">trees</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <VerificationHistory />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {payments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-3 bg-sage/20 rounded-lg">
                      <div>
                        <div className="font-medium">${payment.amount}</div>
                        <div className="text-sm text-gray-500">{payment.date}</div>
                      </div>
                      <span className="px-2 py-1 text-sm bg-green-100 text-green-800 rounded">
                        {payment.status}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <GrowthTrackingCard />
        </div>
      </div>
    </div>
  );
};

export default ScoutPortal;