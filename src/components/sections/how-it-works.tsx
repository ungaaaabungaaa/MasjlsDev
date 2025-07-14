import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Project Requirements & Analysis",
    content:
      "Share your software requirements, technical specifications, and business objectives. We conduct thorough analysis to understand your needs and propose the best technical approach.",
    image: "/idea.jpg",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Technical Planning & Architecture",
    content:
      "Our development team creates detailed technical specifications, system architecture, and development roadmap. We provide timeline estimates and technology stack recommendations.",
    image: "/comunnication.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Development & Deployment",
    content:
      "Agile development with regular deliverables, code reviews, and testing. We deliver your software solution with full documentation, deployment, and post-launch support.",
    image: "/colab.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Software Development Process" subtitle="3 Simple Steps to Launch Your Software Project">
      <Features data={data} />
    </Section>
  );
}
