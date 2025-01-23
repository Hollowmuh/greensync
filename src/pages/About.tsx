import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, TreeDeciduous, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-light/5 via-sage-light/5 to-leaf-light/5 dark:from-forest-dark dark:via-sage-dark dark:to-leaf-dark p-8 space-y-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-forest dark:text-white mb-6">
          About GreenHarvest Network
        </h1>
        <p className="text-xl text-forest-dark/80 dark:text-white/80 mb-12">
          Revolutionizing sustainable forestry through technology and community
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        <Card className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-forest dark:text-white flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-forest-dark/80 dark:text-white/80">
            <p>
              GreenHarvest Network is dedicated to creating a sustainable future through innovative
              forestry management. We combine cutting-edge AI technology with community-driven
              initiatives to maximize the impact of every tree planted.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-forest dark:text-white flex items-center gap-2">
              <Users className="h-5 w-5" />
              Our Community
            </CardTitle>
          </CardHeader>
          <CardContent className="text-forest-dark/80 dark:text-white/80">
            <p>
              We've built a thriving ecosystem of investors, scouts, and environmental enthusiasts.
              Our platform connects those who want to make a difference with those who have the
              expertise to ensure success.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-forest dark:text-white flex items-center gap-2">
              <TreeDeciduous className="h-5 w-5" />
              Technology
            </CardTitle>
          </CardHeader>
          <CardContent className="text-forest-dark/80 dark:text-white/80">
            <p>
              Our AI-powered verification system ensures accurate tracking of tree growth and health.
              Scouts use our mobile app to document progress, while investors receive real-time
              updates on their impact.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-forest dark:text-white flex items-center gap-2">
              <Award className="h-5 w-5" />
              Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="text-forest-dark/80 dark:text-white/80">
            <p>
              Since our inception, we've facilitated the planting of over 1 million trees,
              generated 50,000+ carbon credits, and created sustainable income for hundreds
              of local communities.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-forest dark:text-white text-2xl">
              Our Story
            </CardTitle>
          </CardHeader>
          <CardContent className="text-forest-dark/80 dark:text-white/80 space-y-4">
            <p>
              Founded in 2022, GreenHarvest Network emerged from a simple idea: make forestry
              investment accessible, transparent, and impactful. Our founders combined their
              expertise in technology, environmental science, and finance to create a platform
              that would revolutionize how we approach reforestation.
            </p>
            <p>
              Today, we operate in 12 countries, working with local communities to ensure
              sustainable practices while providing attractive returns for our investors.
              Our AI-powered verification system has set new standards in the industry,
              making us a trusted partner for both individual and institutional investors.
            </p>
            <p>
              Looking ahead, we're committed to expanding our impact, developing new
              technologies, and continuing to lead the way in sustainable forestry
              investment.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;