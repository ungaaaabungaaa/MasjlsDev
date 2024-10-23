import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Submit Your Idea",
    content:
      "Upload your app concept, website, business plan, or SaaS idea to our secure platform. We welcome various formats and details to ensure a smooth integration with your vision.",
    image: "/idea.jpg",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2.  Quick Response from Our Experts",
    content:
      "Our dedicated team of experts will review your submission and respond within moments, providing insights and guidance tailored to your needs.",
    image: "/comunnication.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Receive Your Prototype and Consultation",
    content:
      "Get a prototype, consultation, or creative ideas on how your project will be developed, all while considering the budget you’ve specified. Leverage our expertise to bring your vision to life effectively.",
    image: "/colab.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How It All Comes Together" subtitle="3 Simple Steps to Launch Your Project">
      <Features data={data} />
    </Section>
  );
}
