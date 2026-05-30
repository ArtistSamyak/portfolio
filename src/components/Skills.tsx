import { motion } from 'motion/react';
import { ArrowUpRight, Code, Database, Layout, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="w-5 h-5" />,
    items: ["Swift (Advanced)", "Objective-C", "C++", "SwiftUI", "UIKit", "Combine", "RxSwift"]
  },
  {
    title: "Architecture & Concurrency",
    icon: <Layout className="w-5 h-5" />,
    items: ["Clean Architecture", "MVVM", "VIPER", "Modularisation", "Swift Concurrency", "GCD", "Operations"]
  },
  {
    title: "Persistence & Specialized",
    icon: <Database className="w-5 h-5" />,
    items: ["SwiftData", "CoreData", "Realm", "MySQL", "ARKit", "Metal", "CoreML", "PDFKit", "Apple Foundation Models"]
  },
  {
    title: "DevOps & Tooling",
    icon: <Settings className="w-5 h-5" />,
    items: ["TDD & XCTest", "UI Tests", "Snapshot Testing", "A/B Testing", "Fastlane", "GitLab CI", "App Store Connect", "Instruments"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Core Expertise.
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            A comprehensive toolkit focused on building robust, performant iOS applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.03] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex items-center gap-3 mb-6 text-white/80">
                <div className="p-2.5 rounded-xl bg-white/[0.08] backdrop-blur-sm text-white">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/[0.05] text-white/70 border border-white/[0.05]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
