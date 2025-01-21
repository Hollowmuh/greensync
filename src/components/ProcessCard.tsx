import { Card } from "@/components/ui/card";

interface ProcessCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

export const ProcessCard = ({ title, description, icon, delay }: ProcessCardProps) => {
  return (
    <Card className={`p-6 bg-white animate-fade-up`} style={{ animationDelay: delay }}>
      <div className="flex flex-col items-center text-center gap-4">
        <div className="p-4 bg-sage/10 rounded-full text-sage-dark">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-forest">{title}</h3>
        <p className="text-forest/70">{description}</p>
      </div>
    </Card>
  );
};