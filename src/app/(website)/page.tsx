    // import FAQ from "@/components/ReusableSection/FAQ";

import Review from "@/components/ReusableSection/Review";
import AboutBrokerage from "@/components/website/about/AboutBrokerage";
import AboutFeatured from "@/components/website/about/AboutFeatured";
import AboutHero from "@/components/website/about/AboutHero";
import AboutHolmes from "@/components/website/about/AboutHolmes";
import AboutWhyWorkUs from "@/components/website/about/AboutWhyWorkUs";
import CharterInThailand from "@/components/website/about/CharterInThailand";
import HowLimePitch from "@/components/website/about/HowLimePitch";
import HaveAQuestion from "@/components/website/home/HaveAQuestion";

    // import Review from "@/components/ReusableSection/Review";
    // import HaveAQuestion from "@/components/website/home/HaveAQuestion";

    // import HowToWork from "@/components/website/home/HowToWork";
    // import Subscription from "@/components/website/home/Subscription";
    // import WhyChooseUs from "@/components/website/home/WhyChooseUs";
    // import Banner from "@/components/website/PageSections/HomePage/Banner";

export default function page() {
  return (
    <div>
      {/* <Banner />
      <HowToWork />
      <WhyChooseUs />

  
      <Subscription />
      <FAQ />
      <HaveAQuestion /> */}

           <AboutHero  />
     <AboutHolmes />
     <AboutBrokerage />
     <AboutWhyWorkUs />
     <AboutFeatured />
     <CharterInThailand />
     <HowLimePitch />
     {/* <StillHaveAQuestions /> */}
      <HaveAQuestion />
           <Review />
    </div>
  );
}
