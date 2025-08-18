import {
  HeroSection,
  // VideoSection,
  // ProblemStatementSection,
  // CounterSection,
  ProgramsSection,
  WhyChooseSection,
  CTA,
  FaqSection
} from '@/components/landing';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <ProblemStatementSection /> */}
      {/* <VideoSection /> */}
      {/* <CounterSection /> */}
      <ProgramsSection />
      <WhyChooseSection />
      {/* <SocialProofSection /> */}
      <CTA />
      <FaqSection />
    </>
  );
}
