import { Icons } from "@/components/icons";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";



export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "MajlisDev",
  description: "Professional IT & Software Development Services",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["SaaS", "Software Development", "Next.js", "React", "Tailwind CSS", "Web Development", "Mobile App Development", "UI/UX Design", "Custom Software", "E-Commerce Solutions", "Full-Stack Development", "Responsive Design", "API Integration", "Enterprise Solutions", "Cloud Integration", "SaaS Development", "Web Applications", "Custom Websites", "Content Management Systems (CMS)", "Modern Web Design", "Startup Solutions", "Mobile-First Design", "Prototyping", "Interactive Design", "Website Development", "Software Solutions", "Database Design", "System Integration", "Technical Consulting", "AI Development", "Data Analytics", "Performance Optimization"],
  links: {
    email: "support@majlisdev.com",
    twitter: "#",
    discord: "#",
    github: "https://github.com/MajlisDevTM",
    instagram: "https://www.instagram.com/majlisdev/",
  },
  header: [
    {
      trigger: "Services",
      content: {
        main: {
          icon: <Icons.react className="h-6 w-6" />,
          title: "Web Development",
          description: "Building responsive, scalable web applications and websites.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "SaaS Development",
            description: "Custom Software-as-a-Service platform development and deployment",
          },
          {
            href: "#",
            title: "Mobile App Development",
            description: "Cross-platform iOS and Android application development",
          },
          {
            href: "#",
            title: "API Integration",
            description: "Seamless integration with third-party APIs and services",
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
            description: "Custom online stores and e-commerce platforms with secure payment processing.",
          },
          {
            title: "Enterprise Software",
            href: "#",
            description: "Scalable enterprise solutions for business process automation.",
          },
          {
            title: "UI/UX Design",
            href: "#",
            description: "User-centered interface design for web and mobile applications.",
          },
          {
            title: "Database Design",
            href: "#",
            description: "Efficient database architecture and optimization for applications.",
          },
          {
            title: "Cloud Integration",
            href: "#",
            description: "Cloud-native solutions and migration services for modern applications.",
          },
        ],
      },
    },
  ],
  pricing: [
    {
      name: "Silver Package",
      href: "#",
      price: "₹35,200",
      period: "INR",
      yearlyPrice: "₹88,000",
      features: [
        "Custom website development (up to 5 pages)",
        "Basic SaaS application setup",
        "Simple mobile app development",
        "Basic eCommerce website setup",
        "Limited revisions (up to 20)",
        "Basic API integration",
        "Source code sharing",
        "Performance optimization",
        "Basic security setup",
        "Technical documentation",
        "UI component library"
      ],
      description: "Perfect for small businesses and startups",
      buttonText: "Get Started",
      isPopular: false,
    },
    {
      name: "Golden Package",
      href: "#",
      price: "₹92,400",
      period: "INR",
      yearlyPrice: "₹180,400",
      features: [
        "Custom website development (up to 10 pages)",
        "Full-stack SaaS platform development",
        "Cross-platform mobile app development",
        "Advanced eCommerce platform setup",
        "1 year of technical maintenance",
        "Unlimited revisions",
        "Advanced API integration",
        "Source code sharing",
        "AI ChatBot integration",
        "Figma design files",
        "CMS (Content Management System)",
        "Database design and optimization",
        "Performance analytics dashboard",
        "Security monitoring setup",
        "UI component library"
      ],
      description: "Ideal for growing tech companies",
      buttonText: "Get Started",
      isPopular: true,
    },
    {
      name: "Premium Package",
      href: "#",
      price: "₹274,560",
      period: "INR",
      yearlyPrice: "₹528,000",
      features: [
        "Custom website development (up to 30 pages)",
        "Full MVP (Minimum Viable Product) development",
        "Advanced mobile app with backend",
        "Enterprise-grade eCommerce platform",
        "3 months of technical maintenance",
        "Unlimited revisions",
        "Enterprise API integration & CMS",
        "Source code sharing with documentation",
        "Advanced AI integration",
        "Performance analytics overview",
        "Advanced security implementation",
        "Database optimization & scaling",
        "User testing and feedback system",
        "Multi-platform compatibility",
        "Technical training session (20 minutes)",
        "Load balancing and performance optimization",
        "Multi-language application setup",
        "Custom forms and workflow automation",
        "Advanced monitoring and logging",
        "UI component library"
      ],
      description: "For enterprise-level software projects",
      buttonText: "Get Started",
      isPopular: false,
    },
  ],
  
  faqs: [
    {
      question: "What software development services do you offer?",
      answer: (
        <span>
          We specialize in custom software development including web applications, SaaS platforms, 
          mobile app development, eCommerce solutions, API integrations, and enterprise software. 
          All our services fall under IT and Software development category.
        </span>
      ),
    },
    {
      question: "How can I get started with your software development services?",
      answer: (
        <span>
          You can get started by filling out the form on our contact page with your software project
          details. Our technical team will review your requirements and provide a detailed proposal
          for your software development needs.
        </span>
      ),
    },
    {
      question: "What is your pricing structure for software development?",
      answer: (
        <span>
          Our pricing varies based on the complexity and scope of your software project. We offer
          three main packages for different project sizes, and we can provide a custom quote
          based on your specific software requirements.
        </span>
      ),
    },
    {
      question: "Can you handle enterprise-level software projects?",
      answer: (
        <span>
          Absolutely! We work with businesses of all sizes, from startups to large enterprises. 
          Our team is equipped to handle complex software projects including enterprise applications,
          large-scale SaaS platforms, and mission-critical systems.
        </span>
      ),
    },
    {
      question: "How long does it take to develop custom software?",
      answer: (
        <span>
          The timeline depends on your software project&apos;s complexity and requirements. We provide
          detailed project timelines during our initial consultation and keep you updated throughout
          the development process with regular deliverables.
        </span>
      ),
    },
    {
      question: "Do you provide technical support after software deployment?",
      answer: (
        <span>
          Yes, we offer comprehensive technical support and maintenance services to ensure your
          software runs smoothly after deployment. Our support includes bug fixes, performance
          optimization, security updates, and feature enhancements.
        </span>
      ),
    },
    {
      question: "What technologies do you use for software development?",
      answer: (
        <span>
          We use modern software development technologies including React, Node.js, Next.js, 
          TypeScript, PostgreSQL, MongoDB, AWS, and various mobile development frameworks.
          We choose the best technology stack based on your project requirements.
        </span>
      ),
    },
    {
      question: "Do you develop mobile applications?",
      answer: (
        <span>
          Yes, we develop native and cross-platform mobile applications for iOS and Android.
          Our mobile development services include app design, development, testing, deployment,
          and ongoing maintenance.
        </span>
      ),
    },
  ],
  footer: [ 
  ],
};

export type SiteConfig = typeof siteConfig;
