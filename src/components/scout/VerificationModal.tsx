import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Camera, RefreshCw } from "lucide-react";
import { TreeVerificationCard } from "../ai/TreeVerificationCard";

export const VerificationModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-forest hover:bg-forest/90">
          <Camera className="w-4 h-4 mr-2" />
          Start New Verification
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Tree Verification</DialogTitle>
        </DialogHeader>
        <TreeVerificationCard />
      </DialogContent>
    </Dialog>
  );
};