import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brain, FileText, LineChart } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Enterprise Software Solutions",
    content: "Custom enterprise applications using Microsoft .NET, Java, Python, and cloud platforms like Azure and AWS. Scalable solutions for business process automation and digital transformation.",
    image: "/enterprise.png",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "AI & Machine Learning Development",
    content: "Advanced AI solutions including machine learning models, computer vision, natural language processing, and chatbot development using TensorFlow, PyTorch, and OpenAI APIs.",
    image: "/machinelearning.png",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Data Analytics & Business Intelligence",
    content: "Custom dashboards, data visualization, ETL processes, and business intelligence solutions using modern data stack technologies and cloud-native analytics platforms.",
    image: "dashboard2.png",
    icon: <LineChart className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Software Architecture & Technical Consulting",
    content: "Software architecture design, system integration, database design, API development, and technical consulting for complex software projects and technology stack decisions.",
    image: "/consulting.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Core Software Development Services" subtitle="Comprehensive IT Solutions for Your Business">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
