import ClientHomepageSections from "@/components/ClientHomepageSections";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ClientHomepageSections />
      <section id="about" className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-muted max-w-2xl">
            UW Blockchain Society is a student-led builder org focused on meaningful education, applied research, and shipping projects — not hype.
          </p>
        </div>
      </section>
      {/* Keep default spacing; footer is globally rendered in layout */}
      <TeamSection />
    </div>
  );
}
