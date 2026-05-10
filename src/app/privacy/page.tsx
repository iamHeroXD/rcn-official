import { LegalLayout } from "@/components/ui/legal-layout";

export default function PrivacyPage() {
  const sections = [
    {
      id: "collection",
      title: "Information We Collect",
      content: (
        <p>
          RCN PRIME collects information necessary to provide a high-quality marketplace and networking experience. This includes account identifiers, Discord profile metadata, and interaction data within our platform to ensure security and trust.
        </p>
      )
    },
    {
      id: "discord",
      title: "Discord Integration Data",
      content: (
        <p>
          To facilitate seamless integration, we collect public Discord information such as your username, ID, and server roles. This data is used solely for verification, role synchronization, and marketplace authentication. We do not access private messages or sensitive Discord data.
        </p>
      )
    },
    {
      id: "usage",
      title: "How Data Is Used",
      content: (
        <>
          <p>Your information is used to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Verify your identity and creator status.</li>
            <li>Maintain your marketplace reputation and review history.</li>
            <li>Protect the community from fraud and scams.</li>
            <li>Improve platform performance and user experience.</li>
          </ul>
        </>
      )
    },
    {
      id: "security",
      title: "Security Measures",
      content: (
        <p>
          We employ enterprise-grade encryption and secure authentication protocols to protect your data. RCN PRIME is committed to maintaining the highest standards of data integrity and preventing unauthorized access.
        </p>
      )
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      content: (
        <p>
          We do not sell personal information to third parties. We may share data with service providers who assist in our operations (e.g., payment processing or hosting), subject to strict confidentiality agreements.
        </p>
      )
    },
    {
      id: "rights",
      title: "User Rights",
      content: (
        <p>
          You have the right to access, update, or request the deletion of your data. RCN PRIME provides tools within the platform to manage your profile and privacy settings. For comprehensive data deletion requests, please contact our support team.
        </p>
      )
    }
  ];

  return (
    <LegalLayout 
      title="Privacy Policy" 
      subtitle="How RCN PRIME collects, uses, and protects user information."
      sections={sections}
    />
  );
}