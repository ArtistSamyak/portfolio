import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ExternalLink, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-24 px-6 md:px-12 border-t border-white/5 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white max-w-md">
              Let's build something exceptional.
            </h2>
            <p className="text-xl text-white/50 mb-12 max-w-sm">
              Open to new opportunities, challenging roles, and consulting on iOS architecture.
            </p>
            
            <a 
              href="mailto:samyakpw@protonmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition-transform"
            >
              Get in touch
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex flex-col md:items-end justify-center gap-6">
            <a 
              href="https://topmate.io/samyak_pawar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-white/70 hover:text-white transition-colors group"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:bg-white/10 transition-colors">
                <Calendar className="w-5 h-5" />
              </div>
              Book an Appointment
            </a>
            <a 
              href="https://www.linkedin.com/in/samyak-pawar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-white/70 hover:text-white transition-colors group"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:bg-[#0A66C2]/20 group-hover:border-[#0A66C2]/50 transition-colors group-hover:text-[#0A66C2]">
                <Linkedin className="w-5 h-5" />
              </div>
              LinkedIn Profile
            </a>
            <a 
              href="https://github.com/ArtistSamyak" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-white/70 hover:text-white transition-colors group"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              GitHub Organization
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~018b3839aa01f5daa9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-white/70 hover:text-white transition-colors group"
            >
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:bg-[#14A800]/20 group-hover:border-[#14A800]/50 transition-colors group-hover:text-[#14A800]">
                <ExternalLink className="w-5 h-5" />
              </div>
              Upwork Profile
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Samyak Pawar. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <span className="hover:text-white transition-colors cursor-default">Designed for clarity.</span>
            <span className="hover:text-white transition-colors cursor-default">Built with React + Tailwind.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
