import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brain, FileText, LineChart } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Enterprise Solutions",
    content: "Implement and customize solutions around Microsoft Dynamics 365, SharePoint, Power Platforms, Azure Cloud, Salesforce, Odoo, and SAP to accelerate your digital transformation.",
    image: "/dashboard.png",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    content: "Harness our expertise in Generative AI, Chatbots, OpenAI, NLP, Machine Learning, and Computer Vision to develop cutting-edge AI digital products and solutions.",
    image: "/dashboard.png",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Data & Analytics",
    content: "Transform data into actionable insights for smarter decision-making with Data Analytics, Data Modernization, Advanced Analytics, Predictive Analytics, and RPA-driven automation.",
    image: "/dashboard.png",
    icon: <LineChart className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Consulting Services",
    content: "Accelerate business transformation through strategic consulting, digital services, dedicated team and integration of new technologies like metaverse, blockchain, and LCNC.",
    image: "/dashboard.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Service Offering" subtitle="Your Growth is Our Business">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
