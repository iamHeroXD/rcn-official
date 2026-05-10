"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is RCN?",
    a: "RCN (Roblox Creator Network) is the world's most advanced ecosystem for Roblox developers, builders, and studio owners. We provide a secure marketplace, recruitment tools, and a robust digital economy."
  },
  {
    q: "How does hiring work?",
    a: "Studios can post hiring ads in specific categories. Our AI Smart Matching system then suggests the best verified creators for the job, ensuring high-quality results and safe transactions."
  },
  {
    q: "Is RCN safe?",
    a: "Safety is our #1 priority. We use a multi-layered verification system, deal tracking, and automated scam prevention to protect every member of our community."
  },
  {
    q: "How do reviews work?",
    a: "Reviews are immutable and linked to specific deal IDs. Only members who have completed a transaction can leave a review, ensuring all feedback is authentic and verified."
  },
  {
    q: "What is RCN Prime?",
    a: "RCN Prime is our elite membership tier that grants unlimited marketplace posts, priority verification, lower coin fees, and access to exclusive networking channels."
  },
  {
    q: "What are RCN Coins?",
    a: "RCN Coins are our internal digital currency. They allow for instant, secure payouts with zero chargeback risk, making high-value trading smooth and reliable."
  },
  {
    q: "How does verification work?",
    a: "Creators must submit a detailed portfolio and undergo a manual vetting process by our safety team. Once approved, they receive a verified badge and gain access to premium marketplace features."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 px-4 bg-black relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            Common <span className="text-prime-purple">Inquiries</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/5 bg-white/5 rounded-2xl px-6">
                <AccordionTrigger className="text-white hover:text-prime-purple transition-colors text-left py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/40 leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};