import { motion } from "framer-motion";
import { Brain, BarChart, Target } from "lucide-react";

export function WorkspaceShowcase() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your <span className="text-primary">Workspace</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">See how Guru Gogo integrates seamlessly into your development environment.</p>
        </motion.div>
        
        <motion.div 
          className="bg-card rounded-xl p-4 md:p-8 border border-zinc-800 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-2/5 mb-8 md:mb-0 md:pr-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                      <span className="text-primary text-sm">1</span>
                    </div>
                    <h3 className="font-bold text-lg">Code With Confidence</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-8">Get real-time suggestions and fixes as you write code. Our AI understands your codebase context.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-emerald-500 bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                      <span className="text-emerald-500 text-sm">2</span>
                    </div>
                    <h3 className="font-bold text-lg">Visualize Performance</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-8">See detailed analytics about your code quality, performance metrics, and potential optimizations.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-500 text-sm">3</span>
                    </div>
                    <h3 className="font-bold text-lg">Collaborate Effectively</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-8">Share insights with team members and improve code review processes with AI-assisted feedback.</p>
                </motion.div>
              </div>
            </div>
            
            <div className="md:w-3/5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&auto=format&fit=crop&q=80" 
                  alt="Developer workspace with multiple monitors" 
                  className="rounded-lg w-full shadow-lg h-[300px] md:h-[400px] object-cover" 
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="bg-zinc-900 bg-opacity-70 backdrop-blur-sm p-2 rounded-lg flex items-center">
                    <span className="text-primary text-sm mr-1"><Brain size={16} /></span>
                    <span className="text-xs text-foreground">AI Active</span>
                  </div>
                  <div className="bg-zinc-900 bg-opacity-70 backdrop-blur-sm p-2 rounded-lg flex items-center">
                    <span className="text-emerald-500 text-sm mr-1"><BarChart size={16} /></span>
                    <span className="text-xs text-foreground">Insights</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WorkspaceShowcase;
