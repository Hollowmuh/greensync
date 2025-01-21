import { TreeDeciduous, TreePalm, TreePine, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";
import { ProcessCard } from "@/components/ProcessCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-forest to-forest/90 text-white px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86')] bg-cover bg-center mix-blend-overlay opacity-20" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grow Your Investment,<br />Grow Our Planet
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Join the sustainable forestry revolution with AI-powered verification
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-leaf hover:bg-leaf-dark text-forest font-semibold">
                Start Investing
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Become a Scout
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Trees Planted"
              value="50,000+"
              icon={<TreeDeciduous size={24} />}
              delay="0s"
            />
            <StatsCard
              title="Total Investment"
              value="$2.5M"
              icon={<DollarSign size={24} />}
              delay="0.1s"
            />
            <StatsCard
              title="Active Scouts"
              value="200+"
              icon={<TreePalm size={24} />}
              delay="0.2s"
            />
            <StatsCard
              title="Carbon Credits"
              value="1,000t"
              icon={<TreePine size={24} />}
              delay="0.3s"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest text-center mb-16">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessCard
              title="Plant & Grow"
              description="Farmers plant and nurture trees using sustainable practices"
              icon={<TreeDeciduous size={32} />}
              delay="0s"
            />
            <ProcessCard
              title="Verify & Track"
              description="AI-powered verification ensures growth and health"
              icon={<TreePalm size={32} />}
              delay="0.2s"
            />
            <ProcessCard
              title="Invest & Earn"
              description="Generate returns while supporting reforestation"
              icon={<TreePine size={32} />}
              delay="0.4s"
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-4 bg-sage/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-16">
            Trusted by Industry Leaders
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {/* Placeholder logos - replace with actual partner logos */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-32 h-12 bg-forest/20 rounded animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;