const About = () => {
  const skills = {
    techStack: [
      "CSS",
      "HTML5",
      "JavaScript",
      "PandaCss",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Fastify",
      "Node.js",
      "PostgreSQL",
    ],
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer skilled in building scalable web applications
            and innovative solutions. Always eager to learn, adapt, and push
            technology forward.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, techs]) => (
              <div
                key={category}
                className="rounded-xl p-6 hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-bold mb-4">
                  {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:cursor-pointer hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>BSc. Computer Science</strong> - University of Benin
                City, Nigeria.
              </li>
              <li>
                Key Topics: Web Development, Data Structures, Cloud Computing
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:cursor-pointer hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Experience </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">Techinc - BL Management</h4>
                <p>Still in Progress...</p>
              </div>
              <div>
                <h4 className="font-semibold">Intern - BL Management</h4>
                <p>Learn Reactjs from scratch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
