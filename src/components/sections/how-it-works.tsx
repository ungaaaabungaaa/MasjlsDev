import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. قدم فكرتك",
    content:
      "قم بتحميل مفهوم تطبيقك أو موقعك الإلكتروني أو خطة عملك أو فكرة SaaS على منصتنا الآمنة. نحن نرحب بمختلف التنسيقات والتفاصيل لضمان تكامل سلس مع رؤيتك.",
    image: "/idea.jpg",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. استجابة سريعة من خبرائنا",
    content:
      "سيقوم فريقنا المخصص من الخبراء بمراجعة طلبك والرد في لحظات، وتقديم رؤى وإرشادات مخصصة لاحتياجاتك.",
    image: "/comunnication.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. استلم النموذج الأولي واستشارتك",
    content:
      "احصل على نموذج أولي واستشارة أو أفكار إبداعية حول كيفية تطوير مشروعك، مع مراعاة الميزانية التي حددتها. استفد من خبرتنا لتحقيق رؤيتك بفعالية.",
    image: "/colab.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section
      title="كيف يأتي كل ذلك معًا"
      subtitle="3 خطوات بسيطة لإطلاق مشروعك"
    >
      <Features data={data} />
    </Section>
  );
}
