"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Instagram, Linkedin } from "lucide-react";
import { ModeToggle } from "./ui/toggle-mode";
import useActiveSection from "@/hooks/useActiveSection";

type NavItem = {
  name: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const activeSection = useActiveSection([
    "about",
    "experience",
    "projects",
    "contact",
  ]);

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.slice(1);
    return {
      linkClass: `py-3 ${isActive ? "active" : ""}`,
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive
          ? "active w-16 bg-foreground h-2"
          : "group-hover:w-16 group-hover:bg-foreground group-hover:h-px"
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive ? "text-foreground" : "text-slate-500 group-hover:text-foreground"
      }`,
    };
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4">
      {/* Introduction Section */}
      <div className="flex flex-col gap-4 lg:pr-24 mt-6 lg:mt-0">
        <h1 className="text-[42px] font-bold">Simba Mahlaulo</h1>
        <h2 className="text-xl">Software Engineer</h2>
        <p className="text-lg text-muted-foreground">
          I build seamless, user-first applications and web experiences that bridge
          the gap between tech and people.
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="lg:flex hidden">
        <ul className="flex flex-col w-max text-start gap-6 uppercase text-xs font-medium">
          {NAV_ITEMS.map(({ name, href }) => {
            const { linkClass, indicatorClass, textClass } = getNavItemClasses(href);
            return (
              <li key={name} className="group">
                <a href={href} className={linkClass}>
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Social Links */}
      <ul className="flex flex-row gap-6 mt-6 lg:mt-0">
        <SocialIcon
          href="https://github.com/siemba-blessed"
          icon={<Github className="h-[1.2rem] w-[1.2rem]" />}
        />
        <SocialIcon
          href="https://www.linkedin.com/in/siemba/"
          icon={<Linkedin className="h-[1.2rem] w-[1.2rem]" />}
        />
        <SocialIcon
          href="https://www.instagram.com/siemba.blessed/"
          icon={<Instagram className="h-[1.2rem] w-[1.2rem]" />}
        />
        <ModeToggle />
      </ul>
    </header>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Button variant="outline" size="icon">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </Button>
  );
}
