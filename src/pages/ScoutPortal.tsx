import { Camera, MapPin, CheckCircle2, XCircle, Activity, DollarSign, Star, Calendar, Wallet, ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GrowthTrackingCard } from "@/components/ai/GrowthTrackingCard";
import { VerificationModal } from "@/components/scout/VerificationModal";
import { ScoutProfile } from "@/components/scout/ScoutProfile";
import { VerificationHistory } from "@/components/scout/VerificationHistory";
import { FarmAssignment } from "@/components/scout/FarmAssignment";
import { useState, useEffect } from "react";

const ScoutPortal = () => {
  const [balance, setBalance] = useState(750000);
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [withdrawalAccount, setWithdrawalAccount] = useState('');
  const [bank, setBank] = useState('');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const nigerianBanks = [
    'First Bank of Nigeria', 
    'Access Bank', 
    'Guaranty Trust Bank', 
    'United Bank for Africa (UBA)', 
    'Zenith Bank'
  ];

  const handleWithdraw = () => {
    if (withdrawalAmount && bank) {
      setBalance(balance - parseFloat(withdrawalAmount));
    }
  };

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
    { id: 1, date: '2024-01-15', nextDue: '2024-03-15', status: 'completed' },
    { id: 1, date: '2024-03-15', nextDue: '2024-06-15', status: 'completed' },
    { id: 1, date: '2024-06-15', nextDue: '2024-08-15', status: 'completed' },
    { id: 2, date: '2024-08-01', nextDue: '2024-10-01', status: 'pending' },
  ];

  const farms = [
    { id: 1, name: 'Akete Farm', coordinates: '40.7128° N, 74.0060° W', trees: 250 },
    { id: 2, name: 'Highland Grove', coordinates: '34.0522° N, 118.2437° W', trees: 175 },
    { id: 3, name: 'Riverside Plantation', coordinates: '41.8781° N, 87.6298° W', trees: 320 },
  ];

  const payments = [
    { id: 1, amount: '500,000', date: '2024-01-01', status: 'paid' },
    { id: 2, amount: '40,000', date: '2024-03-01', status: 'paid' },
    { id: 3, amount: '50,000', date: '2024-04-01', status: 'paid' },
    { id: 4, amount: '30,000', date: '2024-02-01', status: 'paid' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-forest/5 to-sage/10 dark:from-forest-dark dark:to-natural-dark">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-forest dark:text-leaf">
            Scout Dashboard
          </h1>
          <div className={`flex items-center gap-2 ${
            isOnline ? 'bg-green-500/20' : 'bg-yellow-500/20'
          } backdrop-blur rounded-lg px-4 py-2`}>
            <div className={`w-2 h-2 rounded-full ${
              isOnline ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'
            }`} />
            <span className="text-forest-dark dark:text-leaf text-sm">
              {isOnline ? 'Online' : 'Offline Mode'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-16">
          <VerificationModal />
          <FarmAssignment />
        </div>

        {/* Balance Section */}
        <div className="mb-16 bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-6 rounded-2xl flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-forest dark:text-leaf flex items-center gap-2">
              <Wallet className="h-6 w-6" />
              Available Balance
            </h2>
            <p className="text-4xl font-bold text-forest dark:text-leaf">
              ₦{balance.toLocaleString()}
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <ArrowDownToLine className="mr-2 h-4 w-4" /> Withdraw
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Withdraw Funds</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="amount" className="text-right">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={withdrawalAmount}
                    onChange={(e) => setWithdrawalAmount(e.target.value)}
                    className="col-span-3"
                    placeholder="Enter withdrawal amount"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="amount" className="text-right">Account</Label>
                  <Input
                    id="account"
                    type="number"
                    value={withdrawalAccount}
                    onChange={(e) => setWithdrawalAccount(e.target.value)}
                    className="col-span-3"
                    placeholder="Enter withdrawal account"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="bank" className="text-right">Bank</Label>
                  <Select onValueChange={setBank}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select Bank" />
                    </SelectTrigger>
                    <SelectContent>
                      {nigerianBanks.map((bankName) => (
                        <SelectItem key={bankName} value={bankName}>
                          {bankName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={handleWithdraw} className="w-full">
                Confirm Withdrawal
              </Button>
            </DialogContent>
          </Dialog>
        </div>

        {/* Top Row */}
        <div className="grid gap-8 md:grid-cols-12 mb-16">
          <div className="md:col-span-4 bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-8 rounded-2xl">
            <ScoutProfile />
          </div>
          <div className="md:col-span-8 bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-forest dark:text-leaf mb-4">
              Verification Schedule
            </h2>
            <div className="space-y-4">
              {verifications.map((verification) => (
                <div key={verification.id} className="flex justify-between items-center p-4 bg-forest/5 dark:bg-forest-dark/50 rounded-lg">
                  <div>
                    <p className="font-medium text-forest dark:text-leaf">Last verified: {verification.date}</p>
                    <p className="text-sm text-forest/70 dark:text-leaf/70">Next due: {verification.nextDue}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    verification.status === 'completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' 
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'
                  }`}>
                    {verification.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Row */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-forest dark:text-leaf mb-4 flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              Assigned Farms
            </h2>
            <div className="space-y-4">
              {farms.map((farm) => (
                <div key={farm.id} className="p-4 bg-forest/5 dark:bg-forest-dark/50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-forest dark:text-leaf">{farm.name}</h3>
                      <p className="text-sm text-forest/70 dark:text-leaf/70">{farm.coordinates}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-forest dark:text-leaf">{farm.trees}</span>
                      <p className="text-sm text-forest/70 dark:text-leaf/70">trees</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <VerificationHistory />
        </div>

        {/* Bottom Row */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-forest dark:text-leaf mb-4">
              Payment History
            </h2>
            <ScrollArea className="h-[300px]">
              <div className="space-y-4">
                {payments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-3 bg-forest/5 dark:bg-forest-dark/50 rounded-lg">
                    <div>
                      <div className="font-medium text-forest dark:text-leaf">₦{payment.amount}</div>
                      <div className="text-sm text-forest/70 dark:text-leaf/70">{payment.date}</div>
                    </div>
                    <span className="px-2 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 rounded">
                      {payment.status}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <GrowthTrackingCard />
        </div>
      </div>
    </div>
  );
};

export default ScoutPortal;