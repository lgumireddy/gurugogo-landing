import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const TypingAnimation = ({ text }: { text: string }) => {
  return (
    <motion.div
      className="ml-4 text-muted-foreground mt-2 border-r-2 border-primary whitespace-nowrap overflow-hidden"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ 
        duration: 3.5, 
        ease: "easeInOut",
        delay: 0.5
      }}
    >
      {text}
    </motion.div>
  );
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-16">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 bg-primary bg-opacity-10 w-96 h-96 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 bg-emerald-500 bg-opacity-10 w-96 h-96 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-block">
              <span className="bg-primary bg-opacity-20 text-primary px-4 py-1 rounded-full text-sm font-medium">Private Beta</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Developer Intelligence <span className="text-primary">Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Unlock your coding potential with AI-powered insights, workflow optimization, and intelligent code assistance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#waitlist">
                <Button 
                  className="w-full sm:w-auto px-8 py-3 h-auto bg-gradient-to-r from-primary to-blue-500 hover:translate-y-[-2px] transition-transform"
                >
                  Join the Waitlist
                </Button>
              </a>
              <a href="#features">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto px-8 py-3 h-auto border-zinc-700 hover:border-primary text-muted-foreground"
                >
                  Learn More
                </Button>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bg-card border border-zinc-800 rounded-lg w-full max-w-lg overflow-hidden shadow-2xl">
              <div className="border-b border-zinc-800 px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto font-mono text-sm text-muted-foreground">guru_gogo.js</div>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <div className="text-muted-foreground">// Initialize Guru Gogo</div>
                <div className="text-blue-500 mt-2">import <span className="text-foreground">{'{ GuruGogo }'}</span> from <span className="text-emerald-500">'guru-gogo'</span>;</div>
                <div className="mt-4">
                  <span className="text-primary">const</span> <span className="text-blue-500">gogo</span> <span className="text-muted-foreground">=</span> <span className="text-primary">new</span> <span className="text-foreground">GuruGogo</span><span className="text-muted-foreground">({'{'}</span>
                </div>
                <div className="ml-4">
                  <span className="text-foreground">apiKey:</span> <span className="text-emerald-500">'your-api-key'</span><span className="text-muted-foreground">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-foreground">features:</span> <span className="text-muted-foreground">[</span> <span className="text-emerald-500">'codeAssist'</span><span className="text-muted-foreground">,</span> <span className="text-emerald-500">'insights'</span><span className="text-muted-foreground">,</span> <span className="text-emerald-500">'optimization'</span> <span className="text-muted-foreground">]</span>
                </div>
                <div className="text-muted-foreground">{'})'}</div>
                <div className="mt-4">
                  <span className="text-blue-500">gogo</span><span className="text-muted-foreground">.</span><span className="text-foreground">analyzeProject</span><span className="text-muted-foreground">()</span>
                </div>
                <TypingAnimation text=".then(insights => console.log(insights));" />
              </div>
              
              <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-50 animate-[shine_2s_linear_infinite]" style={{ backgroundSize: '200% 100%' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
