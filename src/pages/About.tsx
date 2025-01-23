import { Building, Users, Globe, Award, Leaf, TreePine } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-forest/5 to-sage/10 dark:from-forest-dark dark:to-natural-dark">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-forest dark:text-leaf mb-6">
            About GreenHarvest Network
          </h1>
          <p className="text-xl text-forest/80 dark:text-leaf/80 max-w-3xl mx-auto">
            Revolutionizing sustainable forestry through technology and community engagement
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-forest dark:text-leaf mb-4">Our Mission</h2>
            <p className="text-forest/80 dark:text-leaf/80">
              GreenHarvest Network aims to create a sustainable future by connecting investors with local farmers and scouts, leveraging AI technology to verify and track tree growth while generating meaningful returns for all stakeholders.
            </p>
          </div>
          <div className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-forest dark:text-leaf mb-4">Our Vision</h2>
            <p className="text-forest/80 dark:text-leaf/80">
              We envision a world where sustainable forestry investment is accessible, transparent, and profitable, contributing to global reforestation efforts while supporting local communities.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <TreePine className="w-8 h-8" />,
              title: "AI-Powered Verification",
              description: "Advanced technology ensures accurate tracking of tree growth and health"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Community Driven",
              description: "Local scouts and farmers work together with global investors"
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Global Impact",
              description: "Contributing to worldwide reforestation efforts"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-6 rounded-xl">
              <div className="text-forest dark:text-leaf mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-forest dark:text-leaf mb-2">{feature.title}</h3>
              <p className="text-forest/70 dark:text-leaf/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "50,000+", label: "Trees Planted" },
            { value: "$2.5M+", label: "Total Investment" },
            { value: "200+", label: "Active Scouts" },
            { value: "1,000t", label: "Carbon Offset" }
          ].map((stat, index) => (
            <div key={index} className="bg-forest dark:bg-forest-dark text-white p-6 rounded-xl text-center">
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;