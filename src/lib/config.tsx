import { Icons } from "@/components/icons";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";



export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "MajlisDev",
  description: "From Dessert Sands To Digital Dreams",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["SaaS", "Template", "Next.js", "React", "Tailwind CSS" , "Web Development" ,"Mobile App Development ", "UI/UX Design ","Graphic Design","Branding","Digital Marketing","Custom Websites","E-Commerce Solutions","Full-Stack Development","Responsive Design","Creative Agency","SEO Optimization", "WordPress Development", "Logo Design","User Experience (UX)","User Interface (UI)", "Frontend Development","Backend Development", "Content Management Systems (CMS)", "Modern Web Design ", "Startup Solutions ","Visual Identity","Mobile-First Design","Prototyping","Web Applications","Interactive Design","Cloud Integration","SaaS Development","API Integration","Website Redesign","Branding Strategy"],
  links: {
    email: "support@majlisdev.com",
    twitter: "#",
    discord: "#",
    github: "https://github.com/MajlisDevTM",
    instagram: "https://www.instagram.com/majlisdev/",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <Icons.react className="h-6 w-6" />,
          title: "Web Design & Development",
          description: "Building responsive websites that engage and convert.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Digital Marketing",
            description: "Driving growth with data-driven online campaigns",
          },
          {
            href: "#",
            title: "Brand Strategy",
            description: "Crafting unique identities that resonate with your audience.",
          },
          {
            href: "#",
            title: "Content Creation",
            description: "Developing impactful visuals and stories that elevate your brand",
          },
        ],
      },
    },
    {
      trigger: "Solutions",
      content: {
        items: [
          {
            title: "E-commerce Solutions",
            href: "#",
            description: "Streamlining online stores for seamless shopping experiences.",
          },
          {
            title: "Social Media Management",
            href: "#",
            description: "Boosting engagement through tailored content and strategies.",
          },
          {
            title: "SEO Optimization",
            href: "#",
            description: "Enhancing visibility with targeted search engine techniques.",
          },
          {
            title: "UI/UX Design",
            href: "#",
            description: "Crafting user-friendly interfaces that improve customer journeys.",
          },
          {
            title: "Video Production",
            href: "#",
            description: "Creating compelling visual stories that captivate audiences.",
          },
          {
            title: "Email Marketing",
            href: "#",
            description:
              "Driving conversions with personalized, impactful campaigns.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Projects",
    },
  ],
  pricing: [
    {
      name: "Silver Package",
      href: "#",
      price: "1600",
      period: "SAR",
      yearlyPrice: "4000",
      features: [
        "Custom website design (up to 5 pages)",
        "Basic SaaS application setup",
        "Simple mobile app development",
        "Basic eCommerce website setup",
        "Limited client changes Upto 20",
        "Basic API integration",
        "Source code sharing",
        "1-month social media management",
        "Performance Report",
        "Seo Report",
        "Logo design and branding consultation"
      ],
      description: "Perfect for individuals and small projects",
      buttonText: "Subscribe",
      isPopular: false,
    },
    {
      name: "Golden Package",
      href: "#",
      price: "4200",
      period: "SAR",
      yearlyPrice: "8200",
      features: [
        "Custom website design (up to 10 pages)",
        "Full-stack SaaS platform development",
        "Cross-platform mobile app development",
        "Custom eCommerce website setup",
        "1 year of free maintenance",
        "Unlimited client changes",
        "API integration",
        "Source code sharing",
        "AI ChatBot",
        "Design Files Figma",
        "CMS Content Mangement System",
        "3-month social media marketing",
        "Basic SEO",
        "Monthly performance analytics report",
        "Branding design",
      ],
      description: "Ideal for growing businesses and teams",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "Premium Package",
      href: "#",
      price: "12480",
      period: "SAR",
      yearlyPrice: "24000",
      features: [
        "Custom website design (up to 30 pages)",
        "Minimum Viable Product development",
        "mobile app prototype",
        "NextJs eCommerce website",
        "3 months of free maintenance",
        "UnLimited client changes",
        "API integration & CMS Integration",
        "Source code sharing",
        "1-Year social media content creation",
        "Performance analytics overview",
        "Advance branding package",
        "on-page SEO",
        "42 blog posts or 56 articles",
        "user testing and feedback collection",
        "3 design revisions",
        "Mobile and tablet optimization",
        "Email marketing template & SMTP Setup",
        "Creation of social media profiles",
        "20-Min training session",
        "Basic security setup & monitoring",
        "performance optimization",
        "multilingual site setup",
        "Creation of custom forms",
      ],
      description: "For large-scale operations and high-volume users",
      buttonText: "Subscribe",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "What services does your agency offer?",
      answer: (
        <span>
          Our agency offers a range of services, including website development, SaaS
          solutions, mobile app development, eCommerce setups, branding design, and
          digital marketing services. We strive to provide tailored solutions to meet
          your specific needs.
        </span>
      ),
    },
    {
      question: "How can I get started with your services?",
      answer: (
        <span>
          You can get started by filling out the form on our website with your project
          details. Once we receive your request, our team will review it and reach out
          to discuss how we can help you achieve your goals.
        </span>
      ),
    },
    {
      question: "What is your pricing structure?",
      answer: (
        <span>
          Our pricing structure varies based on the specific services and project
          requirements. We offer several packages tailored to different needs, and we
          can provide a detailed quote after discussing your project with us.
        </span>
      ),
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: (
        <span>
          Yes, we offer a 30-day money-back guarantee on our services. If you are not
          satisfied with our work within the first 30 days, you can request a refund.
        </span>
      ),
    },
    {
      question: "Can you handle projects of all sizes?",
      answer: (
        <span>
          Absolutely! We work with businesses of all sizes, from startups to large
          enterprises. Our team is equipped to handle projects ranging from small
          websites to complex SaaS platforms and mobile applications.
        </span>
      ),
    },
    {
      question: "How long does it take to complete a project?",
      answer: (
        <span>
          The timeline for completing a project depends on its scope and complexity. We
          will provide an estimated timeline during our initial discussions and keep you
          updated throughout the development process.
        </span>
      ),
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: (
        <span>
          Yes, we offer ongoing support and maintenance services to ensure your project
          runs smoothly after completion. Our support options can be tailored to your
          needs.
        </span>
      ),
    },
    {
      question: "What technologies do you use in your projects?",
      answer: (
        <span>
          Our agency uses a variety of technologies depending on the project requirements,
          including but not limited to React, Node.js, WordPress, Shopify, and various
          mobile app development frameworks.
        </span>
      ),
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: (
        <span>
          Yes, we provide SEO and digital marketing services as part of our offerings. Our
          team can help improve your online visibility and drive traffic to your website.
        </span>
      ),
    },
  ],
  footer: [ 
    {
      title: "Social",
      links: [
        {
          href: "https://www.instagram.com/majlisdev/",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "https://github.com/MajlisDevTM",
          text: "Github",
          icon: <FaGithub />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
