import { motion } from "framer-motion";
import { WandSparkles, BarChart2, GitBranch, Bug, Zap, GraduationCap } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  codeSnippet: string;
  iconColor: string;
  delay: number;
};

const FeatureCard = ({ icon, title, description, codeSnippet, iconColor, delay }: FeatureCardProps) => {
  return (
    <motion.div 
      className="feature-card bg-card rounded-xl p-6 border border-zinc-800 hover:border-primary/50 transition-all hover:translate-y-[-5px] hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`mb-4 ${iconColor} text-2xl`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <div className="bg-background p-3 rounded font-mono text-xs text-muted-foreground border border-zinc-800">
        <span className="text-blue-500">gogo</span><span className="text-muted-foreground">.</span><span className="text-foreground">{codeSnippet.split("(")[0]}</span><span className="text-muted-foreground">(</span><span className="text-emerald-500">{codeSnippet.split("(")[1]}</span>
      </div>
    </motion.div>
  );
};

export function FeaturesSection() {
  const features = [
    {
      icon: <WandSparkles />,
      title: "Code Intelligence",
      description: "Get context-aware suggestions and refactoring tips as you code. Our AI analyzes your codebase for improvements.",
      codeSnippet: "suggest('optimization')",
      iconColor: "text-primary",
      delay: 0.1
    },
    {
      icon: <BarChart2 />,
      title: "Developer Analytics",
      description: "Track your productivity, code quality metrics, and identify bottlenecks in your development workflow.",
      codeSnippet: "getMetrics('last7days')",
      iconColor: "text-emerald-500",
      delay: 0.2
    },
    {
      icon: <GitBranch />,
      title: "Team Collaboration",
      description: "Seamlessly share code, insights, and suggestions with your team. Improve code reviews and knowledge sharing.",
      codeSnippet: "shareInsights('team-id')",
      iconColor: "text-blue-500",
      delay: 0.3
    },
    {
      icon: <Bug />,
      title: "Bug Prediction",
      description: "Identify potential bugs before they happen with our machine learning-powered code analysis system.",
      codeSnippet: "predictIssues('./src')",
      iconColor: "text-primary",
      delay: 0.4
    },
    {
      icon: <Zap />,
      title: "Workflow Automation",
      description: "Automate repetitive development tasks and create custom workflows to save time and reduce errors.",
      codeSnippet: "automate('deployment')",
      iconColor: "text-emerald-500",
      delay: 0.5
    },
    {
      icon: <GraduationCap />,
      title: "Skill Development",
      description: "Personalized learning recommendations based on your coding patterns and technology stack.",
      codeSnippet: "learnNext('react')",
      iconColor: "text-blue-500",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful <span className="text-primary">Features</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Tools built for developers, by developers. Supercharge your workflow with intelligent features.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              codeSnippet={feature.codeSnippet}
              iconColor={feature.iconColor}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
