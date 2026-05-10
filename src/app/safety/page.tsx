import { LegalLayout } from "@/components/ui/legal-layout";

export default function SafetyPage() {
  const sections = [
    {
      id: "commitment",
      title: "Marketplace Safety",
      content: (
        <p>
          RCN PRIME is committed to building the safest creator ecosystem on the planet. We utilize advanced algorithmic detection, manual vetting, and a robust reputation system to eliminate scammers and protect our users' creative business.
        </p>
      )
    },
    {
      id: "detection",
      title: "Scam Detection Systems",
      content: (
        <p>
          Our platform monitors for suspicious patterns, including fake vouch clusters, known scammer alternate accounts, and malicious links. Any user flagged by our system undergoes immediate moderator review.
        </p>
      )
    },
    {
      id: "tips",
      title: "Safe Trading Tips",
      content: (
        <>
          <p>Protect yourself by following these elite safety standards:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Always verify a creator's portfolio and reputation score.</li>
            <li>Conduct all deal tracking through the RCN PRIME bot.</li>
            <li>Never pay 100% upfront for unverified creators.</li>
            <li>Avoid users who refuse to communicate through authorized RCN channels.</li>
            <li>Report any suspicious activity immediately to our staff.</li>
          </ul>
        </>
      )
    },
    {
      id: "scores",
      title: "Trust Scores",
      content: (
        <p>
          Every user on RCN PRIME is assigned a Trust Score based on their transaction history, review quality, and verification status. A higher Trust Score indicates a proven track record of professional and honest business.
        </p>
      )
    },
    {
      id: "investigations",
      title: "Moderator Investigations",
      content: (
        <p>
          Our team of dedicated safety moderators investigates every scam report with extreme detail. We review Discord logs, payment receipts, and asset versions to identify fraudulent activity and enforce permanent bans.
        </p>
      )
    },
    {
      id: "badges",
      title: "Trusted Badges",
      content: (
        <p>
          Look for the RCN Verified and RCN Prime badges. These signify that the user has undergone a strict vetting process and is a recognized, high-quality member of our elite creator network.
        </p>
      )
    }
  ];

  return (
    <LegalLayout 
      title="Scam Prevention Policy" 
      subtitle="RCN PRIME’s commitment to creator safety and marketplace trust."
      sections={sections}
    />
  );
}