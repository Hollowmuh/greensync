import React from 'react';
import { Building, Users, Globe, Award, Leaf, TreePine } from "lucide-react";
import { InvestmentOverview } from "@/components/investor/InvestmentOverview";
import { GrowthChart } from "@/components/investor/GrowthChart";
import { InvestmentHistory } from "@/components/investor/InvestmentHistory";
import { WithdrawalHistory } from "@/components/investor/WithdrawalHistory";
import { InvestorProfile } from "@/components/investor/InvestorProfile";
import { ImpactDashboard } from "@/components/investor/ImpactDashboard";

const InvestorPortal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-forest/5 to-sage/10 dark:from-forest-dark dark:to-natural-dark">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-forest dark:text-leaf tracking-tight">
            Investor Dashboard
          </h1>
          <div className="flex items-center gap-3 bg-white/90 dark:bg-forest-dark/90 backdrop-blur rounded-full px-5 py-2 shadow-sm">
            <div className="h-3 w-3 rounded-full bg-leaf animate-pulse" />
            <span className="text-forest-dark dark:text-leaf text-sm font-medium">
              Real-Time Updates
            </span>
          </div>
        </div>

        {/* Overview Grid */}
        <div className="grid gap-8 md:grid-cols-12 mb-12">
          <div className="md:col-span-4 bg-white/90 dark:bg-forest-dark/90 backdrop-blur p-6 rounded-2xl shadow-md">
            <InvestorProfile />
          </div>
          <div className="md:col-span-8 bg-white/90 dark:bg-forest-dark/90 backdrop-blur p-6 rounded-2xl shadow-md">
            <InvestmentOverview />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white/90 dark:bg-forest-dark/90 backdrop-blur p-6 rounded-2xl shadow-md">
              <InvestmentHistory />
            </div>
            <div className="bg-white/90 dark:bg-forest-dark/90 backdrop-blur p-6 rounded-2xl shadow-md">
              <WithdrawalHistory />
            </div>
          </div>

          {/* Center Column - Growth Insights */}
          <div className="lg:col-span-2 bg-white/90 dark:bg-forest-dark/90 backdrop-blur p-6 rounded-2xl shadow-md flex flex-col">
            <h2 className="text-2xl font-bold text-forest dark:text-leaf mb-4">
              Growth Insights
            </h2>
            <div className="flex-grow flex items-center justify-center h-full">
              <GrowthChart />
            </div>
          </div>
        </div>

        {/* Bottom Section - Full Width Impact Dashboard */}
        <div className="bg-white/90 dark:bg-forest-dark/90 backdrop-blur p-6 rounded-2xl shadow-md mb-12">
          <h2 className="text-2xl font-bold text-forest dark:text-leaf mb-4">
             <Leaf className="h-6 w-6" />
            Environmental Impact
          </h2>
          <ImpactDashboard />
        </div>

        {/* Stats Section */}
        {/* <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: "$500K+", label: "Total Investment", icon: Building },
            { value: "250+", label: "Active Projects", icon: TreePine },
            { value: "5,000+", label: "Trees Managed", icon: Leaf },
            { value: "100t", label: "Carbon Offset", icon: Globe }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-forest dark:bg-forest-dark text-white p-6 rounded-xl text-center flex flex-col items-center"
            >
              <stat.icon className="w-10 h-10 mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div> */}
          {/* ))} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default InvestorPortal;