import React from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';


const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/react.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: " weather-app",
    description: " predict weather ",
    image: "/images/projects/weather.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Crpto-app",
    description: "analysis the stock of crptocurrency",
    image: "/images/projects/crpto.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Booklist",
    description: "list of books",
    image: "/images/projects/todolist.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Housing",
    description: " afforable  House price ",
    image: "/images/projects/house.jpeg",
    tag: ["All", "ML"],
    gitUrl: "/",
    previewUrl: "/",
  },
];





export const ProjectsSection = () => {
  return (
    <>    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
<div className="flex flex-row justify-center items-center gap-2 text-white my-6">
<ProjectTag
  name="All"
  onClick={handleTagChange}
  isSelected={tag === "All"}
/>
<ProjectTag
  name="Web"
  onClick={handleTagChange}
  isSelected={tag === "Web"}
/>
<ProjectTag
  name="ML"
  onClick={handleTagChange}
  isSelected={tag === "ML"}
/>

</div>
      <div className='grid md:grid-cols-2 gap-7 md:gap-12'>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}

          />
        )
        )
        }
      </div>

    </>
  );
};
