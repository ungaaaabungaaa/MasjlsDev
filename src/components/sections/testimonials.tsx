"use client";

import Marquee from "@/components/magicui/marquee";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      // light styles
      " border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props} // Spread the rest of the props here
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        src={img || "/author.jpg"}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "/author.jpg";
        }}
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at CloudTech Solutions",
    description: (
      <p>
        MajlisDev built our SaaS platform with exceptional multi-tenant architecture.
        <Highlight>
          Our platform now serves 10,000+ users seamlessly.
        </Highlight>{" "}
        The scalability and performance are outstanding.
      </p>
    ),
  },
  {
    name: "Michael Chen",
    role: "CTO at DataFlow Systems",
    description: (
      <p>
        The SaaS platform development team delivered exactly what we needed.
        <Highlight>API integrations were flawless and deployment was smooth.</Highlight>
        Our subscription management works perfectly.
      </p>
    ),
  },
  {
    name: "Lisa Rodriguez",
    role: "Founder at StartupLaunch",
    description: (
      <p>
        As a startup, we needed a robust SaaS platform quickly.
        <Highlight>MajlisDev delivered in record time with enterprise-grade features.</Highlight>
        Our users love the dashboard and analytics.
      </p>
    ),
  },
  {
    name: "David Kim",
    role: "Product Manager at ScaleUp Inc",
    description: (
      <p>
        The cloud-native SaaS platform has transformed our business operations.
        <Highlight>Auto-scaling and security features are top-notch.</Highlight>
        We couldn&apos;t be happier with the results.
      </p>
    ),
  },
  {
    name: "Jennifer Wang",
    role: "VP of Engineering at TechFlow",
    description: (
      <p>
        MajlisDev&apos;s SaaS development expertise is unmatched.
        <Highlight>Our platform handles complex workflows beautifully.</Highlight>
        The user management and permissions system is perfect.
      </p>
    ),
  },
  {
    name: "Robert Taylor",
    role: "Director at InnovateLabs",
    description: (
      <p>
        The SaaS platform development process was smooth and professional.
        <Highlight>Integration with third-party services exceeded expectations.</Highlight>
        Our analytics dashboard provides incredible insights.
      </p>
    ),
  },
  {
    name: "Amanda Foster",
    role: "CEO at CloudBridge",
    description: (
      <p>
        Working with MajlisDev on our SaaS platform was exceptional.
        <Highlight>The multi-tenant architecture scales perfectly with our growth.</Highlight>
        Their ongoing support is invaluable.
      </p>
    ),
  },
  {
    name: "Thomas Anderson",
    role: "CTO at NextGen SaaS",
    description: (
      <p>
        Our custom SaaS platform development exceeded all expectations.
        <Highlight>Security, scalability, and user experience are all perfect.</Highlight>
        We recommend MajlisDev for any SaaS project.
      </p>
    ),
  },
  {
    name: "Maria Garcia",
    role: "Product Owner at SoftwareLab",
    description: (
      <p>
        The SaaS platform development team understood our complex requirements.
        <Highlight>Custom features and integrations work flawlessly.</Highlight>
        Our customers are thrilled with the platform.
      </p>
    ),
  },
  {
    name: "James Wilson",
    role: "VP of Technology at CloudScale",
    description: (
      <p>
        MajlisDev built our enterprise SaaS platform with precision.
        <Highlight>Performance monitoring and auto-scaling work perfectly.</Highlight>
        The development process was transparent and efficient.
      </p>
    ),
  },
  {
    name: "Karen Davis",
    role: "Founder at TechStartup",
    description: (
      <p>
        Our SaaS platform launch was a huge success thanks to MajlisDev.
        <Highlight>The subscription management and billing integration are seamless.</Highlight>
        We&apos;re scaling rapidly with confidence.
      </p>
    ),
  },
  {
    name: "Brian Miller",
    role: "Engineering Lead at PlatformPro",
    description: (
      <p>
        The SaaS platform architecture is robust and well-designed.
        <Highlight>API documentation and developer experience are excellent.</Highlight>
        Our team can easily extend and maintain the platform.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <Section
      title="Testimonials"
      subtitle="What our customers are saying"
      className="max-w-8xl"
    >
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-3 xl:columns-3 2xl:columns-4">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 0,
                })}
              >
                {testimonials.filter((_, idx) => idx % 3 === i).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  );
}
