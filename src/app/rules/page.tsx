import { LegalLayout } from "@/components/ui/legal-layout";

export default function RulesPage() {
  const sections = [
    {
      id: "allowed",
      title: "Allowed Services",
      content: (
        <p>
          RCN PRIME supports a wide range of Roblox-related services, including Building, Scripting, UI/UX Design, 3D Modeling, GFX, Animation, Game Design, and Project Management. All services must comply with Roblox Terms of Service.
        </p>
      )
    },
    {
      id: "prohibited",
      title: "Prohibited Services",
      content: (
        <>
          <p>The following are strictly prohibited in the RCN marketplace:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Sale of leaked or stolen assets.</li>
            <li>Offering exploits, cheats, or malicious software.</li>
            <li>Roblox account selling or trading.</li>
            <li>Gambling-related services or systems.</li>
            <li>Real-world currency trading outside authorized RCN systems.</li>
          </ul>
        </>
      )
    },
    {
      id: "safety",
      title: "Deal Safety",
      content: (
        <p>
          Every deal must be tracked through the RCN PRIME bot system to ensure protection for both buyers and sellers. Off-platform deals or bypassing the RCN tracking system voids your ability to report scams or resolve disputes.
        </p>
      )
    },
    {
      id: "reviews",
      title: "Review System",
      content: (
        <p>
          Reviews can only be submitted for completed, tracked deals. Any attempt to post fake reviews, buy vouches, or manipulate ratings will result in an immediate and permanent ban.
        </p>
      )
    },
    {
      id: "disputes",
      title: "Dispute Handling",
      content: (
        <p>
          In the event of a disagreement, RCN PRIME offers a mediation service. Our moderators will review deal logs, communication, and deliverables to reach a fair resolution. All decisions made by RCN PRIME moderation are final.
        </p>
      )
    },
    {
      id: "moderation",
      title: "Moderation Actions",
      content: (
        <>
          <p>Violation of marketplace rules will result in:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Level 1: Official Warning.</li>
            <li>Level 2: Temporary Marketplace Suspension.</li>
            <li>Level 3: Permanent Platform Ban.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <LegalLayout 
      title="Marketplace Rules" 
      subtitle="Marketplace standards designed to keep RCN safe, transparent, and trusted."
      sections={sections}
    />
  );
}