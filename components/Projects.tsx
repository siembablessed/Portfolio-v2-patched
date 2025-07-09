"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";
import { MoveRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/eufilmfest.png",
    title: "European Union Film Portal",
    description:
      " The portal was built with a focus on clean UI, responsiveness, and performance,to ensure scalability and security.",
    skills: [
      "React",
      "Tailwind",
      "JavaScript",
      "Firebase",
      "Figma",
    ],
    link: "https://user-registration-zpo3.vercel.app/registration",
  },
  {
    imagePath: "/HRDash.png",
    title: "HR Management System",
    description:
      "A fully featured HR Management System with role based access, user controls, and real time data, built using React and Firebase for modern workforce management.",
    skills: [
      "Next.js",
      "Typescript",
      "JavaScript",
      "React",
      "Vercel",
      "Figma",
    ],
    link: "https://hr-dashboard-xi-jet.vercel.app/",
  },
  {
    imagePath: "/FacialR.png",
    title: "Facial Recognition Software",
    description:
      "A Python-based facial recognition system using OpenCV and dlib that detects, registers, and identifies faces in real-time via webcam with logging and GUI support.",
    skills: [
      "Python",
      "OpenCV",
      "dlib",
    ],
    link: "https://simba-s-t-journal.vercel.app/",
  },
  {
    imagePath: "/morganRR.png",
    title: "Morgan Realty Properties",
    description:
      "Built a fully responsive Real Estate Web Application with full back-end capabilities, enabling property listings, user interactions, and seamless data management across devices.",
    skills: ["Typescript", "JavaScript", "Tailwind CSS", "Vercel", "React"],
    link: "https://www.morganrealtybrokers.co.zw/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
            <div className="lg:px-12 mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground group"
          href="https://github.com/siemba-blessed"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Github Projects
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
