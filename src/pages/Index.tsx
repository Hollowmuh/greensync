import { TreeDeciduous, TreePalm, TreePine, DollarSign, ChevronDown, Sprout, Leaf, LineChart, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";
import { ProcessCard } from "@/components/ProcessCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TreeVerificationCard } from "@/components/ai/TreeVerificationCard";
import { GrowthTrackingCard } from "@/components/ai/GrowthTrackingCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-forest/5 to-sage/10">
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

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white/80 backdrop-blur">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest text-center mb-16">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessCard
              title="Plant & Grow"
              description="Our network of certified farmers use sustainable practices to plant and nurture native tree species"
              icon={<Sprout size={32} />}
              delay="0s"
            />
            <ProcessCard
              title="Verify & Track"
              description="AI-powered verification ensures optimal growth and health through regular monitoring"
              icon={<Leaf size={32} />}
              delay="0.2s"
            />
            <ProcessCard
              title="Invest & Earn"
              description="Generate competitive returns while contributing to global reforestation efforts"
              icon={<LineChart size={32} />}
              delay="0.4s"
            />
          </div>
        </div>
      </section>

      {/* AI Technology Showcase */}
      <section className="py-24 px-4 bg-forest/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
              AI-Powered Verification
            </h2>
            <p className="text-lg text-forest/70 max-w-2xl mx-auto">
              Our advanced AI technology ensures accurate tracking and verification of tree growth,
              providing real-time insights and projections for optimal forest management.
            </p>
          </div>

          <div className="space-y-12">
            <TreeVerificationCard />
            <GrowthTrackingCard />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-4 bg-white/80 backdrop-blur">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-16">
            Trusted by Industry Leaders
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-forest/5 rounded-lg">
              <Shield className="w-12 h-12 text-forest mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-forest mb-2">Certified Security</h3>
              <p className="text-forest/70">
                ISO 27001 certified platform ensuring your investments are protected
              </p>
            </div>
            <div className="p-6 bg-forest/5 rounded-lg">
              <Award className="w-12 h-12 text-forest mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-forest mb-2">Award Winning</h3>
              <p className="text-forest/70">
                Recognized for innovation in sustainable forestry management
              </p>
            </div>
            <div className="p-6 bg-forest/5 rounded-lg">
              <Users className="w-12 h-12 text-forest mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-forest mb-2">Global Community</h3>
              <p className="text-forest/70">
                Join thousands of investors making a positive impact
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel>
              <CarouselContent>
                {[1, 2, 3].map((index) => (
                  <CarouselItem key={index}>
                    <div className="p-6 bg-forest/5 rounded-lg">
                      <p className="text-lg text-forest/80 italic mb-4">
                        "GreenHarvest Network has transformed our approach to sustainable forestry.
                        The AI-powered verification system provides unprecedented accuracy and efficiency."
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-forest/20 rounded-full" />
                        <div className="text-left">
                          <p className="font-semibold text-forest">Dr. Sarah Chen</p>
                          <p className="text-sm text-forest/70">Environmental Scientist</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 px-4 bg-forest/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-16">
            Our Global Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="p-6 bg-white/80 backdrop-blur rounded-lg">
              <p className="text-4xl font-bold text-forest mb-2">12+</p>
              <p className="text-forest/70">Countries</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur rounded-lg">
              <p className="text-4xl font-bold text-forest mb-2">1.2M</p>
              <p className="text-forest/70">Trees Planted</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur rounded-lg">
              <p className="text-4xl font-bold text-forest mb-2">15K+</p>
              <p className="text-forest/70">Hectares Protected</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur rounded-lg">
              <p className="text-4xl font-bold text-forest mb-2">50K+</p>
              <p className="text-forest/70">Carbon Credits Generated</p>
            </div>
          </div>

          <div className="aspect-[2/1] bg-white/80 backdrop-blur rounded-lg p-8">
            <div className="w-full h-full bg-forest/5 rounded-lg flex items-center justify-center">
              <p className="text-forest/50">Interactive World Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;