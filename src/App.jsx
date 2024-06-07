import CoverPage from "./components/CoverPage";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    currentProjectID: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prev) => {
      const newTaskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.currentProjectID,
        id: newTaskId,
      };

      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((eachTask) => eachTask.id !== id),
      };
    });
  }

  function handleAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, currentProjectID: null };
    });
  }

  function handleCancelAddUser() {
    setProjectState((prev) => {
      return {
        ...prev,
        projects: [...prev.projects],
        currentProjectID: undefined,
      };
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
        currentProjectID: undefined,
      };
    });
  }

  function handleSelectProject(project_id) {
    setProjectState((prev) => {
      return {
        ...prev,
        projects: [...prev.projects],
        currentProjectID: project_id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        currentProjectID: undefined,
        projects: prev.projects.filter(
          (eachProject) => eachProject.id !== prev.currentProjectID
        ),
      };
    });
  }

  const extractedProject = projectState.projects.find(
    (eachProject) => eachProject.id === projectState.currentProjectID
  );

  let content = (
    <SelectedProject
      onDelete={handleDeleteProject}
      project={extractedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  console.log(projectState);

  if (projectState.currentProjectID === undefined) {
    content = <CoverPage onCreateHandle={handleAddProject} />;
  } else if (projectState.currentProjectID === null) {
    content = (
      <NewProject
        onSaveDetails={handleAddedUserValues}
        onCancel={handleCancelAddUser}
      />
    );
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          onCreateHandle={handleAddProject}
          projects={projectState.projects}
          onSelectedProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
