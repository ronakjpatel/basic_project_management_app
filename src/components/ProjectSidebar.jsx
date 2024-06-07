import React from "react";
import Button from "./Button";

const ProjectSidebar = ({
  onCreateHandle,
  onSelectedProject,

  projects,
}) => {
  console.log("Received projects are", projects);
  return (
    <aside className="w-1/3 h-screen px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-20 text-amber-600 font-bold uppercase md:text-xl">
        Your Projects
      </h2>
      <div>
        <Button onClick={onCreateHandle}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((eachProject) => (
          <li key={eachProject.id}>
            <button
              onClick={() => onSelectedProject(eachProject.id)}
              className="w-full text-left mt-3 rounded-sm  text-stone-400 hover:bg-stone-800"
            >
              {eachProject.projectTitle}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
