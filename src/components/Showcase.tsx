import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const apps = [
  {
    name: "BibleChat: #1 AI Guide",
    type: "AI & Lifestyle",
    description: "An innovative AI-powered spiritual guide offering personalized interactions and a rich conversational interface.",
    link: "https://apps.apple.com/us/developer/samyak-pawar/id1782872044",
    color: "from-amber-600/20 to-orange-500/20",
    border: "border-amber-500/20"
  },
  {
    name: "TicTacFlo: GiiKER Tic-Tac-Toe",
    type: "Games",
    description: "A modern, highly polished take on the classic game with smooth animations and smart logic.",
    link: "https://apps.apple.com/us/developer/samyak-pawar/id1782872044",
    color: "from-blue-600/20 to-cyan-500/20",
    border: "border-blue-500/20"
  },
  {
    name: "GitaVerse — AI Chat & Wisdom",
    type: "Reference & AI",
    description: "AI-driven application integrating the wisdom of the Gita into an interactive and accessible chat experience.",
    link: "https://apps.apple.com/us/developer/samyak-pawar/id1782872044",
    color: "from-purple-600/20 to-indigo-500/20",
    border: "border-purple-500/20"
  },
  {
    name: "Amoura – The Home of ASMR",
    type: "Health & Fitness",
    description: "A beautifully crafted streaming platform dedicated to calming ASMR audio, equipped with background playback capabilities.",
    link: "https://apps.apple.com/us/developer/samyak-pawar/id1782872044",
    color: "from-rose-600/20 to-pink-500/20",
    border: "border-rose-500/20"
  },
];

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Selected Works.
        </h2>
        <p className="text-xl text-white/50 max-w-2xl">
          Independent products designed and engineered for the App Store.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {apps.map((app, index) => (
          <motion.a
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group relative flex flex-col h-full rounded-[2rem] bg-white/[0.02] border border-white/[0.05] overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/20 transition-all hover:bg-white/[0.04]"
          >
            {/* Visual Header area */}
            <div className={`h-64 sm:h-80 w-full bg-gradient-to-br ${app.color} p-8 flex flex-col justify-end relative overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.02]`}>
               <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10`} />
               <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white">
                   <ExternalLink className="w-5 h-5" />
                 </div>
               </div>
               {/* Abstract App Icon Placeholder */}
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl bg-white/10 backdrop-blur-xl border ${app.border} shadow-2xl flex items-center justify-center transform group-hover:-translate-y-4 transition-transform duration-500`}>
                 <span className="text-4xl text-white/50">{app.name.charAt(0)}</span>
               </div>
            </div>

            {/* Content area */}
            <div className="p-8 md:p-10 flex flex-col grow relative z-20 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm -mt-20">
              <div className="text-sm font-semibold tracking-wider uppercase text-white/40 mb-3">
                {app.type}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-white/90 transition-colors">
                {app.name}
              </h3>
              <p className="text-lg text-white/60 leading-relaxed max-w-md">
                {app.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href="https://apps.apple.com/us/developer/samyak-pawar/id1782872044" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
        >
          View all on App Store
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
