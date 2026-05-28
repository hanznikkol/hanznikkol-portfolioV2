import { projects } from "@/data/projects";
import AboutCard from "./AboutCard";
import ContactCard from "./ContactCard";
import HeroCard from "./HeroCard";
import SkillsCard from "./SkillsCard";
import GalleryCard from "./GalleryCard";
import ProjectsSlider from "./ProjectSlider";

export default function BentoGrid() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Top row */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {/* Hero */}
        <div className="md:col-span-2 lg:col-span-3">
          <HeroCard />
        </div>
        {/* About */}
        <div className="md:col-span-1">
          <AboutCard />
        </div>
      </div>

      {/* Middle row */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 items-stretch md:min-h-80">
        <div className="col-span-1 h-full">
          {/* Skills */}
          <div className="h-full">
            <SkillsCard />
          </div>

        </div>

        {/* Projects */}
        <div className="md:col-span-2 lg:col-span-3 h-full">
          <ProjectsSlider projects={projects}/>
        </div>
      </div>

       {/* Bottom row (FIXED 30/70 + equal height) */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3 items-stretch">

        {/* Gallery - 30% */}
        <div className="md:col-span-1 flex h-full">
          <GalleryCard />
        </div>

        {/* Contact - 70% */}
        <div className="md:col-span-2 flex h-full">
          <ContactCard />
        </div>

      </div>
    </div>
  )
}