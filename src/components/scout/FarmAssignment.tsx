import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, PlusCircle } from "lucide-react";
import { useState } from "react";

export const FarmAssignment = () => {
  const [corners, setCorners] = useState<number>(0);
  const [coordinates, setCoordinates] = useState<string[]>([]);

  const handleAddCorner = () => {
    // Simulate getting GPS coordinates
    const newCoord = `${(Math.random() * 180 - 90).toFixed(4)}°, ${(Math.random() * 360 - 180).toFixed(4)}°`;
    setCoordinates([...coordinates, newCoord]);
    setCorners(corners + 1);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-white/80 backdrop-blur">
          <PlusCircle className="w-4 h-4 mr-2" />
          Assign New Farm
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Farm Assignment</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-forest/5 p-4 rounded-lg">
            <p className="text-sm text-forest mb-2">
              Stand at each corner of the farm to mark its boundaries.
              {corners < 4 ? ` ${4 - corners} corners remaining.` : ' All corners marked!'}
            </p>
            {coordinates.map((coord, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-forest mb-2">
                <MapPin className="w-4 h-4" />
                <span>Corner {index + 1}: {coord}</span>
              </div>
            ))}
          </div>
          <Button
            onClick={handleAddCorner}
            disabled={corners >= 4}
            className="w-full bg-forest hover:bg-forest/90"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Mark Corner {corners + 1}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};