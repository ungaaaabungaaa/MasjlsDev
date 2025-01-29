import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "الابتكار الإبداعي",
    description: "إمكانات رقمية غير محدودة مصممة وفقًا لرؤيتك",
    icon: Brain,
  },
  {
    title: "النشر السريع",
    description:
      "هل لديك مواعيد نهائية ضيقة؟ لا مشكلة! فريقنا يضمن التنفيذ السريع.",
    icon: Zap,
  },
  {
    title: "السرية",
    description: "ثقتك هي أولويتنا - ما تشاركه يبقى آمنًا تمامًا معنا.",
    icon: Shield,
  },
];

export default function Component() {
  return (
    <Section
      title="ما نقدمه!"
      subtitle="التصميم الجيد ليس فقط من الناحية الجمالية، ولكنه عملي أيضًا. ينبغي أن تكون قادرة على حل المشكلة "
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
