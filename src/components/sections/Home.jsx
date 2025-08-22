import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent leading-right">
            Hi, I am Nandhini Karuppanan
          </h1>
          <p className="text-yellow-900 text-lg mb-8 max-w-lg mx-auto">
            Experienced developer with 8+ years in building scalable web apps
            using React, TypeScript, and REST APIs. Skilled in Agile
            development, UI optimization, and team leadership.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-yellow-900 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(120, 53, 15, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-yellow-900/50 text-yellow-900 py-3 px-6 rounded font-medium transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(120, 53, 15, 0.2)] hover:bg-yellow-900/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
