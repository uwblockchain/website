"use client";
import { motion } from "framer-motion";

const items = [
  {
    title: "Education",
    body: "Workshops, deep dives, and curated learning that moves beyond surface-level hype.",
  },
  {
    title: "Innovation",
    body: "Builders-first culture. Hackathons, rapid prototyping, and open-source contributions.",
  },
  {
    title: "Networking",
    body: "Industry meetups and cross-campus collaboration. Real connections, real opportunities.",
  },
  {
    title: "Projects / Research",
    body: "Applied research and capstone work exploring decentralized systems and cryptography.",
  },
];

export default function Cards() {
  return (
    <section id="focus" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl text-white">What we focus on</h2>
          <p className="mt-4 text-muted max-w-2xl">Four pillars define our club’s direction. Strong, simple, and non-generic — crafted for impact.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group rounded-xl border border-white/10 bg-black/60 p-6 hover:border-electric hover:shadow-glow transition duration-300"
            >
              <h3 className="font-heading text-xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{item.body}</p>
              <div className="mt-4 h-px w-full bg-white/10 group-hover:bg-electric transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}