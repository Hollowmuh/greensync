import { TreePine, Users, Globe, Shield, Lock, Zap } from "lucide-react";

const About = () => {
return (
<div className="min-h-screen bg-gradient-to-b from-forest-dark/5 to-sage-dark/10 dark:bg-forest-dark/10 dark:to-natural-dark">
<div className="container mx-auto px-4 py-16">
{/* Hero Section */}
<div className="text-center mb-16 animate-fade-up">
<h1 className="text-4xl md:text-6xl font-bold text-forest dark:text-leaf mb-6">
 About GreenSync
</h1>
<p className="text-xl text-forest/80 dark:text-leaf/80 max-w-3xl mx-auto">
 Revolutionizing Environmental Investment through AI, Blockchain, and Transparent Verification
</p>
</div>

{/* Verification System Overview */}
<div className="grid md:grid-cols-2 gap-8 mb-16">
<div className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-8 rounded-2xl">
<h2 className="text-2xl font-bold text-forest dark:text-leaf mb-4">Our Mission</h2>
<p className="text-forest/80 dark:text-leaf/80">
 GreenSync aims to transform environmental investments by creating a robust, transparent verification system that combines cutting-edge artificial intelligence, blockchain technology, and human expertise to ensure accurate, trustworthy environmental conservation efforts.
</p>
</div>
<div className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-8 rounded-2xl">
<h2 className="text-2xl font-bold text-forest dark:text-leaf mb-4">Our Verification Approach</h2>
<p className="text-forest/80 dark:text-leaf/80">
 We implement a three-tiered verification system: Human Verification by Green Scouts, AI-Powered Analysis, and Blockchain-Based Record Keeping. This multi-layered approach ensures unprecedented accuracy, transparency, and reliability in environmental investment tracking.
</p>
</div>
</div>

{/* Key Technology Features */}
<div className="grid md:grid-cols-3 gap-8 mb-16">
{[
 {
 icon: <Shield className="w-8 h-8" />,
 title: "AI-Powered Verification",
 description: "Advanced computer vision technology tracks tree growth with 95%+ accuracy, similar to facial recognition but for trees"
 },
 {
 icon: <Lock className="w-8 h-8" />,
 title: "Blockchain Transparency",
 description: "Immutable record-keeping prevents fraud and provides real-time, verifiable environmental impact data"
 },
 {
 icon: <Zap className="w-8 h-8" />,
 title: "Multi-Layer Validation",
 description: "Combines AI analysis, human verification, and community validation to ensure data integrity"
 }
 ].map((feature, index) => (
<div key={index} className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-6 rounded-xl">
<div className="text-forest dark:text-leaf mb-4">{feature.icon}</div>
<h3 className="text-xl font-semibold text-forest dark:text-leaf mb-2">{feature.title}</h3>
<p className="text-forest/70 dark:text-leaf/70">{feature.description}</p>
</div>
 ))}
</div>

{/* Stakeholder Benefits */}
<div className="grid md:grid-cols-3 gap-8 mb-16">
{[
 {
 title: "For Investors",
 benefits: [
 "Verified environmental impact",
 "Transparent tracking",
 "Regular updates",
 "Risk mitigation"
 ]
 },
 {
 title: "For Farmers",
 benefits: [
 "Fair compensation",
 "Simple participation",
 "Technical support",
 "Long-term benefits"
 ]
 },
 {
 title: "For the Environment",
 benefits: [
 "Accurate measurement",
 "Sustained monitoring",
 "Protected growth",
 "Verified impact"
 ]
 }
].map((group, index) => (
<div key={index} className="bg-white/80 dark:bg-forest-dark/80 backdrop-blur p-6 rounded-xl">
<h3 className="text-2xl font-semibold text-forest dark:text-leaf mb-4">{group.title}</h3>
<ul className="space-y-2 text-forest/80 dark:text-leaf/80">
{group.benefits.map((benefit, benefitIndex) => (
 <li key={benefitIndex} className="flex items-center">
 <svg className="w-4 h-4 mr-2 text-forest dark:text-leaf" fill="currentColor" viewBox="0 0 20 20">
 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
 </svg>
 {benefit}
 </li>
))}
</ul>
</div>
 ))}
</div>

{/* Stats Section */}
<div className="grid md:grid-cols-4 gap-6 mb-16">
{[
 { value: "95%+", label: "Verification Accuracy" },
 { value: "3", label: "Verification Layers" },
 { value: "50,000+", label: "Trees Monitored" },
 { value: "24/7", label: "Real-Time Tracking" }
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