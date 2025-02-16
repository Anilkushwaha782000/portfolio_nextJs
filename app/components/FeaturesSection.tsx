import { cn } from "../lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandBootstrap,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconSettings,
  IconBrandNextjs,
  IconBrandGithub,
  IconBrandMysql,
  IconFileTypeZip,
  IconBrandThreejs,
  IconCircleDottedLetterJ,
  IconKeyframeAlignCenter,
  IconBrandMatrix
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Bootstrap",
      description:
        "Rapidly design responsive, mobile-first websites with intuitive, pre-built components.",
      icon: <IconBrandBootstrap />,
    },
    {
      title: "NodeJs",
      description:
        "Build scalable, high-performance server-side applications using JavaScript.",
      icon: <IconBrandNodejs />,
    },
    {
      title: "ReactJs",
      description:
        "Build dynamic, high-performance user interfaces with a component-based architecture.",
      icon: <IconBrandReact />,
    },
    {
      title: "MongoDb",
      description: "Manage flexible, scalable NoSQL databases for efficient data storage and retrieval.",
      icon: <IconBrandMongodb />,
    },
    {
      title: "Javascript",
      description: "Create interactive and dynamic web applications with versatile client-side scripting",
      icon: <IconBrandJavascript />,
    },
    {
      title: "Tailwind Css",
      description:
        "Design custom, responsive user interfaces with a utility-first approach for rapid styling.",
      icon: <IconBrandTailwind />,
    },
    {
      title: "Api Integration",
      description:
        "Design custom, responsive user interfaces with a utility-first approach for rapid styling.",
      icon: <IconSettings />,
    },
    {
      title: "NextJs",
      description: "A powerful React framework for building server-side rendered applications.",
      icon: <IconBrandNextjs />,
    },
    {
      title: "Material UI",
      description: "A popular React UI framework for building beautiful, responsive designs.",
      icon: <IconBrandMatrix />,
    },
    {
      title: "MySQL",
      description: "A widely-used relational database management system.",
      icon: <IconBrandMysql />,
    },
    {
      title: "Git",
      description: "A version control system for tracking changes in source code during development.",
      icon: <IconBrandGithub />,
    },
    {
      title: "Jest",
      description: "A JavaScript testing framework designed for simplicity and speed.",
      icon: <IconCircleDottedLetterJ />,
    },
    {
      title: "Babel",
      description: "A JavaScript compiler that helps write modern JavaScript that works in older browsers.",
      icon: <IconKeyframeAlignCenter />,
    },
    {
      title: "Webpack",
      description: "A module bundler for JavaScript applications, optimizing assets for production.",
      icon: <IconFileTypeZip />,
    },
    {
      title: "Express.js",
      description: "A minimal and flexible Node.js web application framework for building RESTful APIs.",
      icon: <IconBrandThreejs />,
    },
    
  ];
  return (
    <section id="skills" className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
        My Expertise and Passion
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 font-normal dark:text-neutral-300">
       
        We&apos;re passionate about turning your ideas into reality, whether it&apos;s building custom APIs or creating intuitive user interfaces. With a strong foundation in full-stack development, we focus on delivering seamless, dynamic web experiences and robust applications that help bring your digital projects to life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative mt-10 z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4|| index === 8 || index === 12) && "lg:border-l dark:border-neutral-800",
        index < 12 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
