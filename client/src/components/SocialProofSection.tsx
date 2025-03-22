import { motion } from "framer-motion";
import { Star, UserCircle, Quote } from "lucide-react";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  rating: number;
  iconColor: string;
  delay: number;
};

const Testimonial = ({ quote, name, role, rating, iconColor, delay }: TestimonialProps) => {
  return (
    <motion.div 
      className="bg-card rounded-xl p-6 border border-zinc-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-4">
        <div className="text-primary text-xl mr-2">
          <Quote size={20} />
        </div>
        <div className="text-primary">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "inline-block fill-current" : "inline-block"} 
            />
          ))}
        </div>
      </div>
      <p className="text-muted-foreground mb-6">{quote}</p>
      <div className="flex items-center">
        <div className={`w-10 h-10 bg-zinc-800 rounded-full mr-3 flex items-center justify-center text-lg ${iconColor}`}>
          <UserCircle />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-muted-foreground text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "I've been looking for a tool like this for years. The code intelligence features alone could save me hours each week.",
      name: "Alex Rodriguez",
      role: "Senior Frontend Developer",
      rating: 5,
      iconColor: "text-primary",
      delay: 0.1
    },
    {
      quote: "The analytics and insights are incredibly valuable. I can see this becoming an essential tool for our entire engineering team.",
      name: "Maya Johnson",
      role: "Engineering Manager",
      rating: 5,
      iconColor: "text-emerald-500",
      delay: 0.2
    },
    {
      quote: "The collaboration features look amazing. Our remote team could really benefit from this level of code intelligence and sharing.",
      name: "David Kim",
      role: "Full Stack Developer",
      rating: 4.5,
      iconColor: "text-blue-500",
      delay: 0.3
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by <span className="text-primary">Developers</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Join developers from leading tech companies who are already on our waitlist.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="h-12 flex items-center">
            <span className="text-foreground text-2xl font-bold">Company A</span>
          </div>
          <div className="h-12 flex items-center">
            <span className="text-foreground text-2xl font-bold">Company B</span>
          </div>
          <div className="h-12 flex items-center">
            <span className="text-foreground text-2xl font-bold">Company C</span>
          </div>
          <div className="h-12 flex items-center">
            <span className="text-foreground text-2xl font-bold">Company D</span>
          </div>
        </motion.div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
              iconColor={testimonial.iconColor}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProofSection;
