"use client";
import { motion } from "framer-motion";
import { leaders, faculty, alumni } from "@/data/team";

function Avatar({ name, image }) {
  const initial = name?.[0]?.toUpperCase() ?? "?";
  return (
    <div className="relative h-24 w-24 mx-auto rounded-full border border-white/10 bg-black/60 flex items-center justify-center text-white">
      {/* Use a plain img to avoid Next public path constraints; fallback to initials via onError */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full rounded-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <span className="text-xl font-heading">{initial}</span>
    </div>
  );
}

function PersonCard({ name, role = [], details = [], image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center rounded-xl border border-white/10 bg-black/60 p-6 hover:border-electric transition"
    >
      <Avatar name={name} image={image} />
      <h5 className="text-white mt-3 font-heading text-lg">{name}</h5>
      {role.map((r) => (
        <p key={r} className="text-muted text-sm">{r}</p>
      ))}
      {details?.length ? (
        <div className="mt-2">
          {details.map((d) => (
            <p key={d} className="text-muted text-xs">{d}</p>
          ))}
        </div>
      ) : null}
    </motion.div>
  );
}

function Section({ title, items }) {
  return (
    <section className="mt-10">
      <h3 className="text-white font-heading text-2xl mb-4">{title}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <PersonCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}

export default function TeamSection({ className = "" }) {
  return (
    <section id="team" className={`py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-white font-heading text-3xl">Meet Our Team</h2>
          <p className="mt-3 text-muted">Students and advisors pushing blockchain forward at UW.</p>
        </div>
        <Section title="Leadership" items={leaders} />
        <Section title="Faculty Advisor" items={faculty} />
        <Section title="Alumni Network" items={alumni} />
        <p className="mt-6 text-xs text-muted">Images will display once copied into the Next.js public folder.</p>
      </div>
    </section>
  );
}