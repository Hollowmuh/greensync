import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Crosshair, MapPin, RefreshCw } from "lucide-react";
import { useState } from "react";

export const TreeVerificationCard = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [confidence, setConfidence] = useState(0);

  const handleCapture = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setConfidence(85);
    }, 2000);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-forest">Tree Verification</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative aspect-video bg-forest/5 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {isAnalyzing ? (
              <RefreshCw className="w-12 h-12 text-forest animate-spin" />
            ) : (
              <Camera className="w-12 h-12 text-forest/50" />
            )}
          </div>
          <div className="absolute inset-0 border-2 border-dashed border-forest/30" />
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm text-forest">
            <MapPin className="w-4 h-4" />
            <span>GPS: 40.7128° N, 74.0060° W</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Crosshair className="w-24 h-24 text-forest/30" />
          </div>
        </div>

        {confidence > 0 && (
          <div className="space-y-4">
            <div className="bg-forest/5 p-4 rounded-lg space-y-2">
              <div className="flex justify-between text-sm text-forest">
                <span>Confidence Score</span>
                <span>{confidence}%</span>
              </div>
              <div className="w-full bg-white rounded-full h-2">
                <div
                  className="bg-forest rounded-full h-2 transition-all duration-500"
                  style={{ width: `${confidence}%` }}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-forest/5 p-4 rounded-lg">
                <p className="text-sm text-forest/70">Species</p>
                <p className="font-semibold text-forest">Pine (Pinus sylvestris)</p>
              </div>
              <div className="bg-forest/5 p-4 rounded-lg">
                <p className="text-sm text-forest/70">Health Status</p>
                <p className="font-semibold text-forest">Healthy (98%)</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <Button
            onClick={handleCapture}
            className="flex-1 bg-forest hover:bg-forest-dark"
          >
            {isAnalyzing ? "Analyzing..." : "Capture Image"}
          </Button>
          {confidence > 0 && (
            <Button variant="outline" onClick={() => setConfidence(0)}>
              Retake
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};