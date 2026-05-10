import { LegalLayout } from "@/components/ui/legal-layout";

export default function GuidelinesPage() {
  const sections = [
    {
      id: "professionalism",
      title: "Professional Conduct",
      content: (
        <p>
          Creators on RCN PRIME are expected to maintain the highest standards of professionalism. This includes respectful communication, timely responses to inquiries, and clear expectations regarding project scope and delivery.
        </p>
      )
    },
    {
      id: "portfolios",
      title: "Honest Portfolios",
      content: (
        <p>
          All portfolios and work samples must be original and accurately represent the creator's skills. Plagiarism or claiming credit for work you did not perform is strictly prohibited and will result in permanent removal from the marketplace.
        </p>
      )
    },
    {
      id: "transparency",
      title: "Service Transparency",
      content: (
        <>
          <p>Transparency is key to a trusted marketplace. Creators must:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Provide accurate pricing estimates.</li>
            <li>Disclose any use of AI or third-party assets in their work.</li>
            <li>Communicate realistic delivery timelines.</li>
            <li>Maintain clear terms of service for their individual commissions.</li>
          </ul>
        </>
      )
    },
    {
      id: "integrity",
      title: "Review Integrity",
      content: (
        <p>
          Creators are prohibited from manipulating their reputation through fake reviews, "vouch-for-vouch" schemes, or pressuring clients for positive feedback. Authentic reviews are the foundation of our trust system.
        </p>
      )
    },
    {
      id: "verification",
      title: "Verification Standards",
      content: (
        <p>
          To achieve "Verified Creator" status, users must undergo a rigorous vetting process. This includes portfolio review, identity verification where applicable, and a history of successful, scam-free transactions.
        </p>
      )
    },
    {
      id: "ethics",
      title: "Collaboration Ethics",
      content: (
        <p>
          Respect fellow creators and studios. Sabotaging competitors, stealing clients through malicious means, or engaging in hostile business practices is not tolerated within the RCN PRIME ecosystem.
        </p>
      )
    }
  ];

  return (
    <LegalLayout 
      title="Creator Guidelines" 
      subtitle="Professional standards for creators using the RCN marketplace."
      sections={sections}
    />
  );
}