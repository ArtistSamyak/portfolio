import { motion } from 'motion/react';

const experiences = [
  {
    role: "Software Development Engineer II",
    company: "Amazon",
    period: "Apr 2024 - Present",
    location: "Bengaluru, India",
    description: "Music streaming platform operated by Amazon with 80M+ users.",
    highlights: [
      "Owned offline download reliability, building resilient transfers and reconciliation with URLSession and CoreData, reducing sync defects at scale by 12%.",
      "Improved the streaming & playback stack using AVFoundation, lowering time-to-play by up to 0.3 seconds.",
      "Delivered voice & AI discovery experiences; owned client flows, secure integrations, and telemetry.",
      "Boosted performance by driving adoption of Swift Concurrency, eliminating main-thread work."
    ]
  },
  {
    role: "iOS Developer",
    company: "Kambi",
    period: "Oct 2022 - Apr 2024",
    location: "Copenhagen, Denmark",
    description: "European sports betting platform powering 20+ operators globally.",
    highlights: [
      "Led modularization of 25+ sportsbook apps using Swift Package Manager and Clean Architecture (MVVM + TDD).",
      "Integrated payment SDKs (Apple Pay, Trustly) and implemented anti-tampering & jailbreak detection.",
      "Owned and optimised CI/CD pipelines via Fastlane + GitLab, reducing build time by 20%."
    ]
  },
  {
    role: "Full-Stack Developer - I (iOS)",
    company: "CAE",
    period: "Jun 2021 - Oct 2022",
    location: "Pune, India",
    description: "Roster Buster, used by 600k+ pilots and crew members.",
    highlights: [
      "Built a real-time crew chat via WebSocket + Combine, enabling instant communication.",
      "Enhanced roster parsing for 30+ airlines using PDFKit + Regex, improving accuracy.",
      "Migrated hybrid UIKit architecture to SwiftUI, increasing unit test coverage."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Experience.
        </h2>
        <p className="text-xl text-white/50">Building for millions at scale.</p>
      </motion.div>

      <div className="space-y-24">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 group"
          >
            <div className="lg:w-1/3 flex flex-col shrink-0">
              <h3 className="text-2xl font-semibold mb-1 text-white group-hover:text-white transition-colors">
                {exp.company}
              </h3>
              <div className="text-lg text-white/70 font-medium mb-2">{exp.role}</div>
              <div className="text-white/40 mb-1">{exp.period}</div>
              <div className="text-sm text-white/30 truncate">{exp.location}</div>
            </div>
            
            <div className="lg:w-2/3">
              <p className="text-lg text-white/70 mb-6 font-medium">
                {exp.description}
              </p>
              <ul className="space-y-4">
                {exp.highlights.map((highlight, i) => (
                   <li key={i} className="flex items-start gap-4 text-white/60 leading-relaxed">
                     <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                     <span>{highlight}</span>
                   </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
