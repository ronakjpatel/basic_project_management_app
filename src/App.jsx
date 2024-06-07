import CoverPage from "./components/CoverPage";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    currentProjectID: 0,
    projects: [],
  });

  function handleAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, currentProjectID: 1 };
    });
  }

  function handleAddedUserValues(projectDetails) {
    const newProject = {
      ...projectDetails,
      id: Math.random(),
    };

    setProjectState((prev) => {
      return {
        ...prev,
        projects: [...prev.projects, newProject],
        currentProjectID: 0,
      };
    });
  }
  console.log(projectState.projects);
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          onCreateHandle={handleAddProject}
          projects={projectState.projects}
        />
        {projectState.currentProjectID == 1 && (
          <NewProject addDetails={handleAddedUserValues} />
        )}

        {projectState.currentProjectID == 0 && (
          <CoverPage onCreateHandle={handleAddProject} />
        )}
      </main>
    </>
  );
}

export default App;
