import { useState, useEffect } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Header } from './components/construction/Header';
import { NotificationBar } from './components/construction/NotificationBar';
import { HeroSection } from './components/construction/HeroSection';
import { ServicesSection } from './components/construction/ServicesSection';
import { WhyChooseSection } from './components/construction/WhyChooseSection';
import { ProjectGallery } from './components/construction/ProjectGallery';
import { ContactSection } from './components/construction/ContactSection';
import { Footer } from './components/construction/Footer';
import { WhatsAppButton } from './components/construction/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NotificationBar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProjectGallery />
      <ContactSection />
      <Footer />
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
