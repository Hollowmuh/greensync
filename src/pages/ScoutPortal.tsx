import { Camera, MapPin, CheckCircle2, XCircle, Activity, Loader } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

const ScoutPortal = () => {
  return (
    <div className="min-h-screen bg-forest/10 p-6">
      {/* Verification Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-forest" />
              Daily Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Trees to verify</span>
                <span className="font-bold">12/20</span>
              </div>
              <Progress value={60} className="bg-sage/30" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-forest" />
              Route Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] bg-sage/20 rounded-lg flex items-center justify-center">
              Map Placeholder
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-forest" />
              Sync Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-forest">
              <CheckCircle2 className="h-5 w-5" />
              All data synced
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Verification Interface */}
      <Card className="mb-8 bg-white/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-forest" />
            Tree Verification
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="h-[300px] bg-sage/20 rounded-lg flex items-center justify-center border-2 border-dashed border-forest/30">
                Camera Preview
              </div>
              <Button className="w-full bg-forest hover:bg-forest-dark">
                <Camera className="mr-2 h-4 w-4" /> Capture Photo
              </Button>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-sage/20">
                <h3 className="font-semibold mb-2">Analysis Results</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Species</span>
                    <span>Pine</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Health</span>
                    <span className="text-green-600">Good</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Height</span>
                    <span>4.2m</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="w-full">Retake</Button>
                <Button className="w-full bg-forest hover:bg-forest-dark">Submit</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity Center */}
      <Card className="bg-white/80 backdrop-blur">
        <CardHeader>
          <CardTitle>Recent Verifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-sage/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${i % 2 === 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                      {i % 2 === 0 ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">Tree #{i}</div>
                      <div className="text-sm text-gray-500">2h ago</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
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