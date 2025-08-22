import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  const projectInfo = [
    {
      name: "HPI",
      description:
        "Led development of HP Smart Web App for printers using React.js, Jarvis Plugins & Veneer framework.",
      techStack: ["React.js", "TypeScript", "Veneer", "REST APIs"],
    },
    {
      name: "Diversey",
      description:
        "Provided L2 support, automated monitoring & optimized database queries. Collaborated on deployments & implemented system performance improvements.",
      techStack: ["React.js", "AWS", "Linux", "Automation Scripts"],
    },
    {
      name: "Looking Glass",
      description:
        "Developed IoT platform for asset management using Core Java & Vertex. Integrated Neo4j for data storage and followed Agile practices.",
      techStack: ["Core Java", "Vertex", "Neo4j", "JUnit", "Agile"],
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-scrren flex-items justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/*Project information */}

            {projectInfo.map(({ name, description, techStack }, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-yellow-900/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(120,53,15,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-yellow-900 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {techStack.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-600/10 text-yellow-900 py-1 px-3 rounded-full text-sm hover:bg-yellow-600/20 hover:shadow-[0_2px_8px_rgba(120,53,15,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
