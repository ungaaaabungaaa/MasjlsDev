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
    name: "Alex Rivera",
    role: "CTO at InnovateTech",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    description: (
      <p>
        The AI-driven analytics from #QuantumInsights have revolutionized our
        product development cycle.
        <Highlight>
          Insights are now more accurate and faster than ever.
        </Highlight>{" "}
        A game-changer for tech companies.
      </p>
    ),
  },
  {
    name: "Samantha Lee",
    role: "Marketing Director at NextGen Solutions",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    description: (
      <p>
        Implementing #AIStream&apos;s customer prediction model has drastically
        improved our targeting strategy.
        <Highlight>Seeing a 50% increase in conversion rates!</Highlight> Highly
        recommend their solutions.
      </p>
    ),
  },
  {
    name: "Raj Patel",
    role: "Founder & CEO at StartUp Grid",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    description: (
      <p>
        As a startup, we need to move fast and stay ahead. #CodeAI&apos;s
        automated coding assistant helps us do just that.
        <Highlight>Our development speed has doubled.</Highlight> Essential tool
        for any startup.
      </p>
    ),
  },
  {
    name: "Emily Chen",
    role: "Product Manager at Digital Wave",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    description: (
      <p>
        #VoiceGen&apos;s AI-driven voice synthesis has made creating global
        products a breeze.
        <Highlight>Localization is now seamless and efficient.</Highlight> A
        must-have for global product teams.
      </p>
    ),
  },
  {
    name: "Michael Brown",
    role: "Data Scientist at FinTech Innovations",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    description: (
      <p>
        Leveraging #DataCrunch&apos;s AI for our financial models has given us
        an edge in predictive accuracy.
        <Highlight>
          Our investment strategies are now powered by real-time data analytics.
        </Highlight>{" "}
        Transformative for the finance industry.
      </p>
    ),
  },
  {
    name: "Linda Wu",
    role: "VP of Operations at LogiChain Solutions",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    description: (
      <p>
        #LogiTech&apos;s supply chain optimization tools have drastically
        reduced our operational costs.
        <Highlight>
          Efficiency and accuracy in logistics have never been better.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Carlos Gomez",
    role: "Head of R&D at EcoInnovate",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    description: (
      <p>
        By integrating #GreenTech&apos;s sustainable energy solutions,
        we&apos;ve seen a significant reduction in carbon footprint.
        <Highlight>
          Leading the way in eco-friendly business practices.
        </Highlight>{" "}
        Pioneering change in the industry.
      </p>
    ),
  },
  {
    name: "Aisha Khan",
    role: "Chief Marketing Officer at Fashion Forward",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face",
    description: (
      <p>
        #TrendSetter&apos;s market analysis AI has transformed how we approach
        fashion trends.
        <Highlight>
          Our campaigns are now data-driven with higher customer engagement.
        </Highlight>{" "}
        Revolutionizing fashion marketing.
      </p>
    ),
  },
  {
    name: "Tom Chen",
    role: "Director of IT at HealthTech Solutions",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    description: (
      <p>
        Implementing #MediCareAI in our patient care systems has improved
        patient outcomes significantly.
        <Highlight>
          Technology and healthcare working hand in hand for better health.
        </Highlight>{" "}
        A milestone in medical technology.
      </p>
    ),
  },
  {
    name: "Sofia Patel",
    role: "CEO at EduTech Innovations",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    description: (
      <p>
        #LearnSmart&apos;s AI-driven personalized learning plans have doubled
        student performance metrics.
        <Highlight>
          Education tailored to every learner&apos;s needs.
        </Highlight>{" "}
        Transforming the educational landscape.
      </p>
    ),
  },
  {
    name: "Jake Morrison",
    role: "CTO at SecureNet Tech",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    description: (
      <p>
        With #CyberShield&apos;s AI-powered security systems, our data
        protection levels are unmatched.
        <Highlight>Ensuring safety and trust in digital spaces.</Highlight>{" "}
        Redefining cybersecurity standards.
      </p>
    ),
  },
  {
    name: "Nadia Ali",
    role: "Product Manager at Creative Solutions",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    description: (
      <p>
        #DesignPro&apos;s AI has streamlined our creative process, enhancing
        productivity and innovation.
        <Highlight>Bringing creativity and technology together.</Highlight> A
        game-changer for creative industries.
      </p>
    ),
  },
  {
    name: "Omar Farooq",
    role: "Founder at Startup Hub",
    img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=400&fit=crop&crop=face",
    description: (
      <p>
        #VentureAI&apos;s insights into startup ecosystems have been invaluable
        for our growth and funding strategies.
        <Highlight>Empowering startups with data-driven decisions.</Highlight> A
        catalyst for startup success.
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
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
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
