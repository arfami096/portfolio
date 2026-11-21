// Компонент без состояния: только отображает полученные проекты
function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <img
          key={project.id}
          className="project-list__item"
          src={project.img}
          alt={project.category}
        />
      ))}
    </div>
  );
}

export default ProjectList;
