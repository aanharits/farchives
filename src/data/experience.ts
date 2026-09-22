export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Remote" | "Onsite" | "Hybrid";
  description: string;
}

export const experiences: Experience[] = [
  {
    role: "AI Full-Stack Developer (Cohort)",
    company: "ASAH led by Dicoding",
    period: "Aug 2026 — Present",
    location: "Indonesia",
    type: "Remote",
    description:
      "Selected as a cohort student to learn modern full-stack development and applied AI, focusing on AI model integration to build end-to-end solutions.",
  },
  {
    role: "Full-Stack Developer (Cohort)",
    company: "Coding Camp DBS Foundation",
    period: "Feb 2026 — Jul 2026",
    location: "Indonesia",
    type: "Remote",
    description:
      "Completed an intensive full-stack web development & applied AI/ML program. Built Emigria, a fraud-detection capstone platform. handling the UI, backend, and integrating the team's ML model into a pipeline backed by a Neon (PostgreSQL) database.",
  },
  {
    role: "Top 15 Finalist",
    company: "Amartha x GDG Jakarta Hackathon",
    period: "Nov 2025",
    location: "Jakarta, ID",
    type: "Onsite",
    description:
      "Contributed as Graph Visualization Specialist on a 5-person team that built SocialCollateral AI is a social graph engine for inclusive microfinance lending. Reached Top 15 among 140+ competing teams.",
  },
  {
    role: "Member",
    company: "GDGOC Universitas Gunadarma",
    period: "Nov 2023 — Present",
    location: "Depok, ID",
    type: "Hybrid",
    description:
      "Active member of the Google Developer Groups on Campus chapter at Universitas Gunadarma. Participating in tech events, study jams, and collaborative sessions around Google technologies and open-source.",
  },
];
