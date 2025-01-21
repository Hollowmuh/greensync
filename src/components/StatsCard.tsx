import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  delay: string;
}

export const StatsCard = ({ title, value, icon, delay }: StatsCardProps) => {
  return (
    <Card className={`p-6 bg-white/80 backdrop-blur-sm animate-float hover:shadow-lg transition-shadow duration-300`} style={{ animationDelay: delay }}>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-forest/10 rounded-full text-forest">
          {icon}
        </div>
        <div>
          <p className="text-sm text-forest/70">{title}</p>
          <p className="text-2xl font-bold text-forest">{value}</p>
        </div>
      </div>
    </Card>
  );
};