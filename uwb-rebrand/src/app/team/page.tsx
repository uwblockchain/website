import TeamSection from "@/components/TeamSection";

export const metadata = {
  title: "Team – UW Blockchain",
  description: "Leadership, faculty advisors, and alumni of UW Blockchain Society.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <TeamSection />
    </div>
  );
}