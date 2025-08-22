import { RevealOnScroll } from "../RevealOnScroll";
import { Mail, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="mailto:mailtonandhini.k@gmail.com"
              className="flex items-center gap-2 text-yellow-900"
            >
              <Mail size={20} />
              mailtonandhini.k@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/nandhini-karuppanan/"
              className="flex items-center gap-2 text-yellow-900"
              target="_blank"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
