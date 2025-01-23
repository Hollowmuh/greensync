import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const InvestorProfile = () => {
  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-forest flex items-center gap-2">
          <User className="h-5 w-5" />
          Investor Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-forest-dark">John Doe</h3>
            <p className="text-sage-dark">Premium Investor</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-forest">
            <Mail className="h-4 w-4" />
            <span>john.doe@example.com</span>
          </div>
          <div className="flex items-center gap-3 text-forest">
            <Phone className="h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3 text-forest">
            <Globe className="h-4 w-4" />
            <span>United States</span>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="text-sm text-forest-dark">
            <p className="font-semibold">Account Status</p>
            <p className="text-sage">Verified Since: Jan 2024</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};