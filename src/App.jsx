import NavBar from "./components/navbar";
import HeroSection from "./components/heroSection";
import FeatureSection from "./components/featureSection";
import "./App.css";
import FeatureCard from "./components/featureCard";
import TestimonialSection from "./components/testimonialSection";
import TestimonialCard from "./components/testimonialCard";
import SectionWrapper from "./components/SectionWrapper";
import FaqQuestion from "./components/faq";
import PriceCard from "./components/priceCard";
import Footer from "./components/footer";
import PageLayout from "./components/pageLayout";
import { featureCardData } from "./data/featureData";
import MoreFeatureCard from "./components/moreFeatureCard";
import { MoreFeatureData } from "./data/moreFeatureData";
import PricingSection from "./components/pricingSection";
import FaqSection from "./components/faqSection";
import LastCall from "./components/lastCallSection";
import LastCallSection from "./components/lastCallSection";
import MoreFeatureSection from "./components/moreFeatureSection";

function App() {
  /*Components to be made
 1. section-header
 2. super-power section
 3. Tooltip-popup
 4. section-mini-heading
 5. feature-component
 6. testomonial-component
 7. pricing component
 8. faq-questions
 9. footer
 10.navbar                    X
 ============================
 Component name => PascalCase
 Variable, Functions, Object => camelCase
 ClassName => kebab-case
 Constant => SNAKE_CASE
 */

  return (
    <div  className="w-screen overflow-hidden">
      <NavBar />
      <PageLayout>
        <HeroSection />

        <SectionWrapper
          heading={"Discover your new superpowers"}
          miniHeading={"Our main features"}
          id={"features"}
          iconCode={<p>&#128129;</p>}
        >
          <FeatureSection />
        </SectionWrapper>

        <SectionWrapper
          heading={"Our features to make your life easier"}
          miniHeading={"And so much more..."}
          id={"more-features"}
          iconCode={<p>&#128188;</p>}
        >
          <MoreFeatureSection />
        </SectionWrapper>

        <SectionWrapper
          heading={"See what our users say about us"}
          miniHeading={"They already love our products"}
          id={"testimonial"}
          classname={"flex flex-col gap-y-4"}
          iconCode={<p>&#128525;</p>}
        >
          <TestimonialSection />
        </SectionWrapper>

        <SectionWrapper
          heading={"See what our users say about us"}
          miniHeading={"Find the best plan for your needs"}
          id={"pricing"}
          iconCode={<p>&#128176;</p>}
        >
          <PricingSection />
        </SectionWrapper>

        <SectionWrapper
          heading={"Frequently asked questions"}
          miniHeading={"Relevant stuff,bla bla... "}
          id={"faq"}
          iconCode={<p>&#128227;</p>}
        >
          <FaqSection />
        </SectionWrapper>

        <SectionWrapper
          heading={"Ready to start?"}
          miniHeading={"Last call Baby!"}
          id={"faq"}
          iconCode={<p>&#128640;</p>}
        >
          <LastCallSection />
        </SectionWrapper>
      </PageLayout>
      <Footer />
    </div>
  );
}

export default App;
