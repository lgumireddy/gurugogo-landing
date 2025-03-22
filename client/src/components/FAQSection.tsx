import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
  index: number;
};

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="bg-card rounded-xl p-6 border border-zinc-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button 
        className="w-full flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold text-left">{question}</h3>
        <span className="text-primary">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      {isOpen && (
        <motion.div 
          className="mt-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-muted-foreground">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export function FAQSection() {
  const faqs = [
    {
      question: "What technologies does Guru Gogo support?",
      answer: "Guru Gogo supports all major programming languages and frameworks including JavaScript, TypeScript, Python, Java, Ruby, Go, React, Vue, Angular, Node.js, Django, Rails, and many more. Our platform continuously learns and adapts to new technologies."
    },
    {
      question: "How does the waitlist work?",
      answer: "When you join our waitlist, you'll be added to our queue for early access. We're rolling out access in batches to ensure the best experience. Once it's your turn, you'll receive an email with instructions to set up your account and start using Guru Gogo."
    },
    {
      question: "Is my code data secure?",
      answer: "Absolutely. Security is our top priority. We use end-to-end encryption, and your code never leaves your environment without your explicit permission. We also offer on-premise deployment options for enterprise customers with strict security requirements."
    },
    {
      question: "How much does Guru Gogo cost?",
      answer: "We'll offer various pricing tiers including free, pro, and enterprise plans. Exact pricing will be announced when we launch. Early access users from our waitlist will receive special discounts and benefits when we transition to paid plans."
    },
    {
      question: "What integrations are available?",
      answer: "Guru Gogo integrates with popular developer tools and environments including VS Code, JetBrains IDEs, GitHub, GitLab, Bitbucket, Jira, Slack, and more. We're constantly adding new integrations based on user feedback."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about Guru Gogo.</p>
        </motion.div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
