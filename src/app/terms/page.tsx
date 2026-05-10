import { LegalLayout } from "@/components/ui/legal-layout";

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: (
        <p>
          By accessing or using RCN PRIME, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our platform. RCN PRIME provides a centralized ecosystem for Roblox creators and studios to collaborate, trade, and manage their creative business.
        </p>
      )
    },
    {
      id: "eligibility",
      title: "User Eligibility",
      content: (
        <p>
          You must be at least 13 years of age to use RCN PRIME, in accordance with Roblox and Discord safety standards. Users under the age of 18 must have parental or legal guardian consent to engage in marketplace transactions or premium memberships.
        </p>
      )
    },
    {
      id: "security",
      title: "Accounts & Security",
      content: (
        <p>
          You are responsible for maintaining the security of your Discord account and any associated RCN PRIME profiles. Any unauthorized use of your account must be reported immediately. RCN PRIME is not liable for losses caused by compromised accounts or shared credentials.
        </p>
      )
    },
    {
      id: "marketplace",
      title: "Marketplace Usage",
      content: (
        <>
          <p>
            The RCN PRIME marketplace is designed for the trade of Roblox-related assets, services, and recruitment. All transactions must be conducted with honesty and transparency. 
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No scams or fraudulent listings.</li>
            <li>No sale of stolen, leaked, or unauthorized assets.</li>
            <li>No fake reviews or reputation manipulation.</li>
            <li>No off-platform fraud or malicious redirects.</li>
          </ul>
        </>
      )
    },
    {
      id: "prohibited",
      title: "Prohibited Activities",
      content: (
        <>
          <p>Users are strictly prohibited from engaging in the following activities on RCN PRIME:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Impersonating other creators, studios, or RCN staff.</li>
            <li>Harassment, bullying, or discriminatory behavior.</li>
            <li>Exploiting creators or manipulative pricing schemes.</li>
            <li>Distributing phishing links or malicious software.</li>
          </ul>
        </>
      )
    },
    {
      id: "coins",
      title: "RCN Coins Disclaimer",
      content: (
        <p>
          RCN Coins are a digital platform utility and have no real-world monetary value. They cannot be exchanged for fiat currency outside of authorized RCN PRIME systems. RCN PRIME reserves the right to manage, regulate, and modify the digital economy as necessary to maintain platform stability.
        </p>
      )
    },
    {
      id: "enforcement",
      title: "Platform Enforcement",
      content: (
        <p>
          RCN PRIME reserves the right to suspend or terminate accounts violating platform integrity, including but not limited to permanent bans for scamming or theft. Our moderation team has final authority on all enforcement actions.
        </p>
      )
    }
  ];

  return (
    <LegalLayout 
      title="Terms of Service" 
      subtitle="Rules, responsibilities, and platform standards for using RCN PRIME."
      sections={sections}
    />
  );
}