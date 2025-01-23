import { TreeDeciduous, TreePalm, TreePine, DollarSign, ChevronDown, Sprout, Leaf, LineChart, Shield, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";
import { ProcessCard } from "@/components/ProcessCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-forest-dark/5 to-sage-dark/10 dark:bg-forest-dark/10 dark:to-natural-dark">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-forest-dark to-forest-dark/90 text-white px-4">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-leaf dark:text-white">
              AI-Powered Environmental Verification
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Transforming Sustainable Investments Through Blockchain and AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-leaf dark:bg-white dark:text-forest text-white font-semibold">
                Start Investing
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Our Technology
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Verification Accuracy"
              value="95%+"
              icon={<Shield size={24} />}
              delay="0s"
              
            />
            <StatsCard
              title="Trees Monitored"
              value="50,000+"
              icon={<TreeDeciduous size={24} />}
              delay="0.1s"
              
            />
            <StatsCard
              title="Blockchain Layers"
              value="3"
              icon={<Lock size={24} />}
              delay="0.2s"
              
            />
            <StatsCard
              title="Real-Time Tracking"
              value="24/7"
              icon={<Zap size={24} />}
              delay="0.3s"
              
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </section>

      {/* Verification Technology Section */}
      <section className="py-24 px-4 bg-white/80 dark:bg-forest-dark/80 backdrop-blur">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest dark:text-leaf text-center mb-16">
            Our Verification Ecosystem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessCard
              title="AI Tree Recognition"
              description="Advanced computer vision tracks tree growth with precision, similar to facial recognition technology"
              icon={<Leaf size={32} />}
              delay="0s"
              
            />
            <ProcessCard
              title="Blockchain Validation"
              description="Immutable record-keeping ensures complete transparency and prevents fraudulent reporting"
              icon={<Lock size={32} />}
              delay="0.2s"
              
            />
            <ProcessCard
              title="Multi-Layer Verification"
              description="Combines AI analysis, human verification, and community validation for ultimate accuracy"
              icon={<Shield size={32} />}
              delay="0.4s"
              
            />
          </div>
        </div>
      </section>

      {/* Platform Details */}
      <section className="py-24 px-4 bg-forest-dark/5 dark:bg-natural-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest dark:text-leaf mb-4">
              How GreenSync Works
            </h2>
            <p className="text-lg text-forest/70 dark:text-leaf/70 max-w-2xl mx-auto">
              A comprehensive platform transforming environmental investments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-forest dark:text-leaf mb-4">Investor Experience</h3>
              <ul className="space-y-4 text-forest/80 dark:text-leaf/80">
                <li>1. Choose verified environmental projects</li>
                <li>2. Invest with minimum $100 contribution</li>
                <li>3. Receive blockchain-verified quarterly reports</li>
                <li>4. Track real-time environmental impact</li>
              </ul>
            </div>
            <div className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-forest dark:text-leaf mb-4">Global Impact</h3>
              <ul className="space-y-4 text-forest/80 dark:text-leaf/80">
                <li>Support sustainable agriculture</li>
                <li>Create economic opportunities</li>
                <li>Restore ecosystems</li>
                <li>Generate verified carbon credits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-white/80 dark:bg-forest-dark/80 backdrop-blur">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest dark:text-leaf mb-16">
            Expert Perspectives
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Carousel>
              <CarouselContent>
                {[
                  {
                    quote: "GreenSync's AI and blockchain approach sets a new standard for environmental investment verification.",
                    name: "Dr. Elena Rodriguez",
                    title: "Climate Technology Expert"
                  },
                  {
                    quote: "Unprecedented accuracy in tracking and verifying environmental impact.",
                    name: "Mark Thompson",
                    title: "Sustainable Investment Analyst"
                  }
                ].map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6 bg-forest/5 dark:bg-forest-dark/20 rounded-lg">
                      <p className="text-lg text-forest/80 dark:text-leaf/80 italic mb-4">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-forest/20 dark:bg-leaf/20 rounded-full" />
                        <div className="text-left">
                          <p className="font-semibold text-forest dark:text-leaf">{testimonial.name}</p>
                          <p className="text-sm text-forest/70 dark:text-leaf/70">{testimonial.title}</p>
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

      {/* Global Impact Section */}
      <section className="py-24 px-4 bg-forest-dark/5 dark:bg-natural-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest dark:text-leaf mb-16">
            Our Global Footprint
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { value: "15+", label: "Countries" },
              { value: "50,000+", label: "Trees Monitored" },
              { value: "25K", label: "Hectares Protected" },
              { value: "1,000t", label: "Carbon Credits" }
            ].map((stat, index) => (
              <div key={index} className="bg-forest dark:bg-forest-dark text-white p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-16 bg-white/80 dark:bg-forest-dark/80 backdrop-blur">
        <div className="container mx-auto text-center">
          <div className="inline-block p-4 bg-forest/5 dark:bg-natural-dark rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
  <defs>
    <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#2ecc71" stopOpacity="1" />
      <stop offset="100%" stopColor="#27ae60" stopOpacity="1" />
    </linearGradient>
  </defs>
  <g transform="translate(20, 20)">
    <path 
      d="M80 40 C100 20, 160 30, 160 60 C160 90, 100 80, 80 60 C60 40, 0 50, 0 20 C0 -10, 60 0, 80 20" 
      fill="url(#leafGradient)" 
      stroke="#2c3e50"
      strokeWidth="2"
    />
    <text 
      x="10" 
      y="90" 
      fontFamily="Arial, sans-serif" 
      fontSize="20" 
      fontWeight="bold" 
      fill="#2c3e50"
    >
      GreenSync
    </text>
  </g>
</svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;