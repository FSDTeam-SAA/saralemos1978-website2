import Review from "@/components/ReusableSection/Review";
import AboutBrokerage from "@/components/website/about/AboutBrokerage";
import AboutFeatured from "@/components/website/about/AboutFeatured";
import AboutHero from "@/components/website/about/AboutHero";
import AboutHolmes from "@/components/website/about/AboutHolmes";
import AboutWhyWorkUs from "@/components/website/about/AboutWhyWorkUs";
import CharterInThailand from "@/components/website/about/CharterInThailand";
import HowLimePitch from "@/components/website/about/HowLimePitch";
import HaveAQuestion from "@/components/website/home/HaveAQuestion";

export default function page() {
  return (
    <div>
      <AboutHero />
      <AboutHolmes />
      <AboutBrokerage />
      <AboutWhyWorkUs />
      <AboutFeatured />
      <CharterInThailand />
      <HowLimePitch />
      <HaveAQuestion />
      <Review />
    </div>
  );
}
