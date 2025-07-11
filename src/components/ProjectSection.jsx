import { ArrowBigRight, ExternalLink, Github } from "lucide-react";

const project = [
  {
    id: 1,
    title: "expense tracker",
    description:
      "keep your daily consumptio in your mind to check how to save next time",
    images: "public/web.images/project.png",
    tags: ["javascript", "bootcamp"],
    demoUrl: "#",
    githUrl: "#",
  },

  {
    id: 1,
    title: "food finder",
    description: "find a best variety of food to calm your hunger",
    images: "public/web.images/project2.png",
    tags: ["javascript", "bootcamp"],
    demoUrl: "#",
    githUrl: "#",
  },

  {
    id: 1,
    title: "tasks-setter",
    description: "decide to grow but first set your task",
    images: "public/web.images/project3.png",
    tags: ["javascript", "bootcamp"],
    demoUrl: "#",
    githUrl: "#",
  },
];

export const Project = () => {
  return (
    <div>
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4  text-center capitalize">
            featured
            <span className="text-primary mx-4 uppercase">projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            here are some of my projects .each project was carefully crafed with
            detail, and based on user experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((projects, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={projects.images}
                  alt={projects.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs  border font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1 uppercase">
                  {projects.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {projects.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={projects.demoUrl}
                      target="_blabk"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={projects.githUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="" // link of github account // 
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            check out my github <ArrowBigRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};
