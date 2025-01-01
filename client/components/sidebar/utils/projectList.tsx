import React from "react";
import { Briefcase } from "lucide-react";
import { useGetProjectsQuery } from "@/state/api";
import { SidebarLink } from "./sidebarLink";

const ProjectList = () => {
  const { data: projects } = useGetProjectsQuery();
  return (
    <>
      {projects?.map((project) => (
        <SidebarLink
          key={project.id}
          icon={Briefcase}
          label={project.name}
          href={`/projects/${project.id}`}
        />
      ))}
    </>
  );
};

export default ProjectList;
