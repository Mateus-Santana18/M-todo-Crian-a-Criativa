/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import NotificationBar from './components/NotificationBar';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import ActivitiesGrid from './components/ActivitiesGrid';
import ActivityModal from './components/ActivityModal';
import WhyItWorks from './components/WhyItWorks';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import HowItWorksSteps from './components/HowItWorksSteps';
import PricingCard from './components/PricingCard';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { Activity } from './types';

export default function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans overflow-x-hidden selection:bg-[#4C6FFF] selection:text-white relative">
      {/* Top Countdown Promotional Header */}
      <NotificationBar />

      <main>
        {/* Hero Section */}
        <Hero />

        <SectionDivider />

        {/* Activities Samples Grid */}
        <ActivitiesGrid onSelectActivity={(act) => setSelectedActivity(act)} />

        {/* Why it works */}
        <WhyItWorks />

        <SectionDivider />

        {/* 3 Super Bonuses */}
        <Bonuses />

        <SectionDivider />

        {/* Testimonials Carousel */}
        <Testimonials />

        {/* How it works steps */}
        <HowItWorksSteps />

        <SectionDivider />

        {/* Pricing / Checkout Offer Card */}
        <PricingCard />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Activity Detail Preview Modal */}
      <ActivityModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />
    </div>
  );
}
