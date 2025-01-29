import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brain, FileText, LineChart } from "lucide-react";

const data = [
  {
    id: 1,
    title: "حلول المؤسسات",
    content:
      "تنفيذ وتخصيص الحلول حول Microsoft Dynamics 365 وSharePoint وPower Platforms وAzure Cloud وSalesforce وOdoo وSAP لتسريع تحولك الرقمي.",
    image: "/enterprise.png",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "الذكاء الاصطناعي",
    content:
      "استفد من خبرتنا في الذكاء الاصطناعي التوليدي، والدردشة الآلية، وOpenAI، ومعالجة اللغة الطبيعية، وتعلم الآلة، ورؤية الكمبيوتر لتطوير منتجات وحلول رقمية متطورة.",
    image: "/machinelearning.png",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "البيانات والتحليلات",
    content:
      "حول البيانات إلى رؤى قابلة للتنفيذ لاتخاذ قرارات أكثر ذكاءً من خلال تحليلات البيانات، وتحديث البيانات، والتحليلات المتقدمة، والتحليلات التنبؤية، والأتمتة المدفوعة بـ RPA.",
    image: "dashboard2.png",
    icon: <LineChart className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "خدمات الاستشارات",
    content:
      "تسريع التحول التجاري من خلال الاستشارات الاستراتيجية، والخدمات الرقمية، والفريق المخصص، ودمج التقنيات الجديدة مثل الميتافيرس، والبلوكشين، وLCNC.",
    image: "/consulting.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="تقديم الخدمة" subtitle="نموك هو عملنا">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
