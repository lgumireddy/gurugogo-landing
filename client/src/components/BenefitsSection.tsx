import { motion } from "framer-motion";
import { Zap, Code, Users } from "lucide-react";

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why <span className="text-primary">Choose Us</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">See how Guru Gogo transforms your development workflow and productivity.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-primary bg-opacity-20 p-2 rounded-lg mr-4 mt-1">
                  <Zap className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Boost Productivity</h3>
                  <p className="text-muted-foreground">Reduce development time by up to 40% with AI-powered code suggestions and automated workflows.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-emerald-500 bg-opacity-20 p-2 rounded-lg mr-4 mt-1">
                  <Code className="text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Write Better Code</h3>
                  <p className="text-muted-foreground">Improve code quality with real-time suggestions, best practices, and automated code reviews.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-blue-500 bg-opacity-20 p-2 rounded-lg mr-4 mt-1">
                  <Users className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Enhance Collaboration</h3>
                  <p className="text-muted-foreground">Keep your team in sync with shared insights, automated documentation, and streamlined code reviews.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-xl">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-4 mb-6">
                <h3 className="font-mono font-bold">Developer Dashboard</h3>
                <div className="text-muted-foreground text-sm">Weekly Summary</div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground text-sm">Code Quality</span>
                    <span className="text-emerald-500 font-medium">92%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground text-sm">Productivity</span>
                    <span className="text-primary font-medium">78%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground text-sm">Bug Reduction</span>
                    <span className="text-blue-500 font-medium">65%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&auto=format&fit=crop&q=80" 
                    alt="Code visualization" 
                    className="w-16 h-16 rounded-lg object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-medium mb-1">Latest Insight</h4>
                    <p className="text-muted-foreground text-sm">Refactoring opportunity found in authentication module. Potential 30% performance improvement.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-zinc-900 rounded-lg border border-zinc-800 p-4 shadow-lg w-48"
              animate={{ 
                opacity: [0.7, 1, 0.7],
                y: [0, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4, 
                ease: "easeInOut" 
              }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <div className="text-sm">
                  <p className="font-medium">New Insight</p>
                  <p className="text-muted-foreground text-xs">Check your latest performance metrics</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
