import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "Creative Innovation",
    description:
      "Limitless digital possibilities tailored to your vision",
    icon: Brain,
  },
  {
    title: "Rapid Deployment",
    description:
      "Tight deadlines? No problem! Our team ensures swift execution.",
    icon: Zap,
  },
  {
    title: "Confidentiality",
    description:
      "Your trust is our priority—what you share remains completely secure with us.",
    icon: Shield,
  },

];

export default function Component() {
  return (
    <Section
      title="What We Offer!"
      subtitle="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
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
