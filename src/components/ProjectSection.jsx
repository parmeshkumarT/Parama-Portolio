import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Hotel booking management",
    description: "A booking platform to book and also provide the users own accomodation using MERN stack",
    image: "/projects/project1.png",
    tags: ["react", "node.js", "express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Devadharsan2006/FST-Project/tree/master"
  },
  {
    id: 1,
    title: "Portfolio",
    description: "A personal Portfolio showing my excellence in the field and my projects developed using react,tailwindcss,node.js,express and MongoDB",
    image: "/projects/project2.png",
    tags: ["react", "tailwindcss"],
    demoUrl: "#",
    githubUrl: "https://github.com/parmeshkumarT/Parama-Portolio"
  },
  {
    id: 1,
    title: "Student event management",
    description: "A student club and event managing platform to manage clubs and their events according to venue and managing students enrollment using template engine and postgreSQL",
    image: "/projects/project3.png",
    tags: ["Embedded Javascript", "node.js", "express", "postgreSQL"],
    demoUrl: "#",
    githubUrl: "#"
  },

]

export const ProjectSection = () => {
  return <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        these are the projects that i have been working on the hotel management website was a team project
        done by group of three including me, the other two projects were built completely by me.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (
          <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            <div className="h-48 overflow-hidden ">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4 ">
                {project.tags.map((tag) => (
                  <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-3 px-2" >
                {project.description}
              </p>
              <div className="flex justify-between items-center ">
                <div className="flex space-x-3">
                  <a href={project.demoUrl} target="_balnk" className=" text-foreground/80 hover:text-primary transition-colors duration-300">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} target="_balnk" className=" text-foreground/80 hover:text-primary transition-colors duration-300">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="https://github.com/parmeshkumarT" target="_blank" className="cosmic-button w-fit flex items-center mx-auto">
          check my Github <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </section>
}
