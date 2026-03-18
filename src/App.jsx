export default function App() {
  const projects = [
    {
      title: "VR Drone Simulator",
      description:
        "A VR training simulator with drone calibration, flight controls, and immersive interaction.",
    },
    {
      title: "Police Training Simulation",
      description:
        "Interactive training scenarios designed for realistic simulation and skill development.",
    },
    {
      title: "AR Weapon System",
      description:
        "An augmented reality experience for weapon assembly and disassembly training.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold tracking-tight">Shazaib.dev</h1>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-20">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            VR • Game Dev • Simulation
          </p>
          <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            I build immersive VR simulations and interactive experiences.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Game and VR simulation developer focused on training systems,
            immersive experiences, and real-time interactive applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold">About Me</h3>
            <p className="mt-4 max-w-3xl text-gray-300">
              I create simulation-driven experiences in VR, AR, and game
              development. My work focuses on interactive training, immersive
              environments, and polished user experiences.
            </p>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-3xl font-bold">Featured Projects</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-4 h-40 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20"></div>
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-3xl font-bold">Let’s Work Together</h3>
            <p className="mx-auto mt-4 max-w-2xl text-gray-300">
              Interested in VR simulations, game development, or interactive
              experiences? Let’s connect.
            </p>
            <a
              href="mailto:your@email.com"
              className="mt-6 inline-block rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              Email Me
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}