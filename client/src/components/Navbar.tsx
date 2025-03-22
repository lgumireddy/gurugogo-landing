import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="border-b border-zinc-800 sticky top-0 bg-background bg-opacity-95 backdrop-blur-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-primary text-2xl">
                <Code />
              </span>
              <span className="font-mono font-bold text-xl">
                Guru<span className="text-emerald-500">Gogo</span>
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="tab text-muted-foreground hover:text-foreground font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-[width] hover:after:w-full"
            >
              Features
            </a>
            <a
              href="#benefits"
              className="tab text-muted-foreground hover:text-foreground font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-[width] hover:after:w-full"
            >
              Benefits
            </a>
            <a
              href="#faq"
              className="tab text-muted-foreground hover:text-foreground font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-[width] hover:after:w-full"
            >
              FAQ
            </a>
            <a href="#waitlist">
              <Button 
                className="bg-gradient-to-r from-primary to-blue-500 hover:translate-y-[-2px] transition-transform"
              >
                Join Waitlist
              </Button>
            </a>
          </div>
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-muted-foreground hover:text-foreground"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-card border-t border-zinc-800 animate-fade-in`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#features" 
            onClick={closeMobileMenu} 
            className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            Features
          </a>
          <a 
            href="#benefits" 
            onClick={closeMobileMenu} 
            className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            Benefits
          </a>
          <a 
            href="#faq" 
            onClick={closeMobileMenu} 
            className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            FAQ
          </a>
          <a 
            href="#waitlist" 
            onClick={closeMobileMenu} 
            className="block px-3 py-2 my-2 text-center rounded-md bg-gradient-to-r from-primary to-blue-500 text-white font-medium"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
