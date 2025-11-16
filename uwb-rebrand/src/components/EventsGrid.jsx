"use client";
import { motion } from "framer-motion";

const upcoming = [
  { title: "2025–2026 Year First Workshop", meta: "Nov 25 • Room TBA" },
  { title: "Midwest Blockchain Conference", meta: "Dec 5–6 • University of Michigan" },
];

const past = [
  { title: "UW Case Hack 2022 – $10K Prize", meta: "Maple Great Room" },
  { title: "Workshop with NEAR Social" },
  { title: "LayerZero Labs Workshop" },
  { title: "EigenLayer & Ethereum Staking" },
  { title: "More…" },
];

export default function EventsGrid() {
  return (
    <section id="events" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-heading text-3xl text-white">Highlights</h2>
          <p className="mt-3 text-muted">Upcoming sessions and a snapshot of recent events — workshops, conferences, and community meetups.</p>
        </div>

        <div className="mb-6">
          <h3 className="font-heading text-xl text-white">Upcoming Events</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-black/60 p-5 hover:border-electric hover:shadow-glow transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-heading text-lg">{e.title}</h3>
                <span className="text-xs text-muted">Upcoming</span>
              </div>
              {e.meta ? <p className="mt-2 text-sm text-muted">{e.meta}</p> : null}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 mb-6">
          <h3 className="font-heading text-xl text-white">Past Events</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {past.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-black/60 p-5 hover:border-electric hover:shadow-glow transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-heading text-lg">{e.title}</h3>
                <span className="text-xs text-muted">Past</span>
              </div>
              {e.meta ? <p className="mt-2 text-sm text-muted">{e.meta}</p> : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}