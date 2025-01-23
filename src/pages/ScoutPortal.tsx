import { Camera, MapPin, CheckCircle2, XCircle, Activity, DollarSign, Star, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GrowthTrackingCard } from "@/components/ai/GrowthTrackingCard";

const ScoutPortal = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Scout Rating Card */}
        <Card className="bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-forest" />
              Scout Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-6 w-6 ${star <= 4 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">4.0</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Based on 128 verifications</p>
          </CardContent>
        </Card>

        {/* Verification Schedule Card */}
        <Card className="bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-forest" />
              Verification Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Next verification due</span>
                <span className="font-bold text-forest">April 15, 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Last verified</span>
                <span className="text-gray-600">January 15, 2024</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Overview Card */}
        <Card className="bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-forest" />
              Payment Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Monthly earnings</span>
                <span className="font-bold text-forest">$500</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Trees verified bonus</span>
                <span className="text-forest">+$150</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Farms List */}
      <Card className="mb-8 bg-white/80 backdrop-blur">
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

      {/* Growth Tracking */}
      <GrowthTrackingCard />

      {/* Payment History */}
      <Card className="mt-8 bg-white/80 backdrop-blur">
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
    </div>
  );
};

export default ScoutPortal;