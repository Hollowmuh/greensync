import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Star, Users } from "lucide-react";

export const ScoutProfile = () => {
  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5 text-forest" />
          Scout Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-forest/10 flex items-center justify-center">
              <User className="h-8 w-8 text-forest" />
            </div>
            <div>
              <h3 className="font-semibold text-forest">Martins Mellow</h3>
              <p className="text-sm text-gray-600">Active since Jan 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="font-medium">4.8/5.0 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-forest" />
            <span className="font-medium">12 Active Farms </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};