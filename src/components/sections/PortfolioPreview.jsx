import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { projects } from "@/data/portfolio";

export default function PortfolioPreview() {
  const featured = projects.slice(0, 4);
  return (
    <section className="section bg-white">
      <div className="container-tv">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title="Results we're proud of"
            description="A glimpse of the brands we've helped design, build and grow."
            className="max-w-2xl"
          />
          <Button href="/portfolio" variant="outline" withArrow className="shrink-0">
            View all projects
          </Button>
        </div>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
