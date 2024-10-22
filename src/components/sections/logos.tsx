import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const techStack = [
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
 
  { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Express", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
  { name: "Redis", logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg" },
  { name: "GraphQL", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" },
  { name: "Webpack", logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Webpack.svg" },
  { name: "Vite", logo: "https://vitejs.dev/logo.svg" },
  { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Sass", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" },
  { name: "Nginx", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" },
  { name: "Flutter", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
  { name: "Django", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" }
];

export default function Logos() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h3 className="text-center text-sm font-semibold text-gray-500">
          Tech Stack We Use
        </h3>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]">
            {techStack.map((tech, idx) => (
              <Image
                key={idx}
                width={112}
                height={40}
                src={tech.logo}
                className="h-10 w-28 dark:brightness-0 dark:invert grayscale opacity-30"
                alt={tech.name}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
