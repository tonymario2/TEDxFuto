import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import HighlightsSection from '@/components/home/HighlightsSection';
import StatsSection from '@/components/home/StatsSection';
import WhyJoinSection from '@/components/home/WhyJoinSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import SpeakersSection from '@/components/home/SpeakersSection';
import QuoteSection from '@/components/home/QuoteSection';
import PartnersSection from '@/components/home/PartnersSection';
import FAQSection from '@/components/home/FAQSection';
import LocationSection from '@/components/home/LocationSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <StatsSection />
      <WhyJoinSection />
      <TestimonialsSection />
      <SpeakersSection />
      <QuoteSection />
      <PartnersSection />
      <FAQSection />
      <LocationSection />
    </Layout>
  );
};

export default Index;
