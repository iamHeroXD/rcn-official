import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { Features } from "@/components/sections/features";
import { Interactive3DSection } from "@/components/sections/interactive-3d";
import { SupportUs } from "@/components/sections/support-us";
import { Reviews } from "@/components/sections/reviews";
import { RCNCoins } from "@/components/sections/coins";
import { Premium } from "@/components/sections/premium";
import { DiscordIntegration } from "@/components/sections/discord-integration";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Trust />
      <Features />
      <Interactive3DSection />
      <SupportUs />
      <Reviews />
      <RCNCoins />
      <Premium />
      <DiscordIntegration />
      <FAQ />
      <Footer />
    </div>
  );
}