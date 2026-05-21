import { projects } from "@/data/projects";
import AboutCard from "./AboutCard";
import ContactCard from "./ContactCard";
import HeroCard from "./HeroCard";
import ProjectCard from "./ProjectCard";
import SkillsCard from "./SkillsCard";

export default function BentoGrid() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Top row */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {/* Hero — spans 2 cols */}
        <div className="md:col-span-2 lg:col-span-3">
          <HeroCard />
        </div>
        {/* About — 1 col */}
        <div className="md:col-span-1">
          <AboutCard />
        </div>
      </div>

      {/* Middle row */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {/* Skills */}
        <div className="md:col-span-1">
          <SkillsCard />
        </div>
        {/* Projects — spans 2 cols */}
        <div className="md:col-span-2 lg:col-span-3">
          <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-3">
        <ContactCard />
      </div>
    </div>
  )
}