import { PROJECTS } from "@/data/siteContent";
import { Button } from "../shared/sharedElements";
import { Pop, PopImage, PopColumns, PopActions } from "./popoverElements";

type Project = (typeof PROJECTS.items)[number];

const { popover } = PROJECTS;

export function ProjectPopover({
  id,
  project,
  showImage = true,
}: {
  id: string;
  project: Project;
  showImage?: boolean;
}) {
  return (
    <Pop id={id} role="tooltip">
      {showImage && <PopImage src={project.image} alt={project.imageAlt} loading="lazy" />}
      <PopColumns>
        <div>
          <h4>{popover.problem}</h4>
          <p>{project.problem}</p>
        </div>
        <div>
          <h4>{popover.built}</h4>
          <p>{project.built}</p>
        </div>
      </PopColumns>
      <PopActions>
        {project.live && (
          <Button href={project.live} target="_blank" rel="noreferrer" $variant="primary">
            {popover.live}
          </Button>
        )}
        {project.code && (
          <Button href={project.code} target="_blank" rel="noreferrer">
            {popover.source}
          </Button>
        )}
      </PopActions>
    </Pop>
  );
}
