import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "Technical Excellence",
    description:
      "Cutting-edge software solutions built with modern technologies and best practices",
    icon: Brain,
  },
  {
    title: "Rapid Development",
    description:
      "Agile development methodology ensuring faster time-to-market for your software products",
    icon: Zap,
  },
  {
    title: "Secure & Scalable",
    description:
      "Enterprise-grade security and scalable architecture to grow with your business",
    icon: Shield,
  },

];

export default function Component() {
  return (
    <Section
      title="Why Choose Our Software Development Services"
      subtitle="We deliver professional IT and software solutions that drive your business forward"
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
