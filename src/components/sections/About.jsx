import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontendSkills = [
    "ReactJS",
    "TypeScript",
    "JavaScript",
    "Veneer(HP UI)",
    "Jarvis(HP Library)",
    "HTML",
    "CSS",
  ];
  const backendSkills = ["Node.js", "Python", "MongoDB"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-yellow-900/10 border hover:-translate-y-1 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-yellow-600/10 text-yellow-900 py-1 px-3 rounded-full text-sm hover:bg-yellow-600/20
                                        hover:shadow-[0_2px_8px_rgba(120, 53, 15, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-yellow-600/10 text-yellow-900 py-1 px-3 rounded-full text-sm hover:bg-yellow-600/20
                                        hover:shadow-[0_2px_8px_rgba(120, 53, 15, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
              <ul className="text-yellow-900">
                <li>
                  <strong>
                    BE Computer science and Engineering (2012-2016)
                  </strong>{" "}
                  - K.S.Rangasamy College of Technology, Tiruchengode,
                  TamilNadu.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
              <div className="space-y-4 text-yellow-900">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Technical Lead at Wipro (2016 - 2024)
                  </h4>
                  <ul className="list-disc list-inside text-yellow-900 space-y-2">
                    <li>
                      Led technical initiatives for HP as a Technical Lead,
                      driving project execution and team collaboration.
                    </li>
                    <li>
                      Extensive work with Veneer framework for UI development
                      and creation of Jarvis Plugins used across projects.
                    </li>
                    <li>
                      Proven expertise in leading and mentoring development
                      teams for successful project delivery.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
