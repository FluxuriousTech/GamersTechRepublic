import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { NewsTicker } from "@/components/home/NewsTicker";
import { CommunityStats } from "@/components/home/Stats";
import { PlayerOfMonthShowcase } from "@/components/home/PlayerOfMonthShowcase";
import { LeaderboardPreview } from "@/components/home/LeaderboardPreview";
import { CafeExperience } from "@/components/home/CafeExperience";
import { GamingRigShowcase } from "@/components/home/GamingRigShowcase";
import { SimRacingExperience } from "@/components/home/SimRacingExperience";
import { FeaturedPCBuild } from "@/components/home/FeaturedPCBuild";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { Testimonials } from "@/components/home/Testimonials";
import { SponsorsAndPartners } from "@/components/home/SponsorsAndPartners";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black text-white selection:bg-gtr-neon-red selection:text-white overflow-hidden">
        <Hero />
        <NewsTicker />
        <CommunityStats />
        <PlayerOfMonthShowcase />
        <LeaderboardPreview />
        <CafeExperience />
        <GamingRigShowcase />
        <SimRacingExperience />
        <FeaturedPCBuild />
        <InstagramFeed />
        <Testimonials />
        <SponsorsAndPartners />
      </main>
      <Footer />
    </>
  );
}
