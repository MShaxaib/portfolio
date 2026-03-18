import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const projects = [
    {
      title: "VR Drone Simulator",
      description:
        "A VR training simulator with drone calibration, flight controls, and immersive interaction.",
      image: "/projects/Drone.png",
    },
    {
      title: "Crime Scene Simulation",
      description:
        "A realistic VR crime scene simulation for investigative training and scenario analysis.",
      image: "/projects/CrimeScene.png",
    },
    {
      title: "Rowing Machine VR Experience",
      description:
        "An immersive VR experience using a real rowing machine for training and performance analysis.",
      image: "/projects/Rowing.png",
    },
    {
      title: "First Aid Training Simulation",
      description:
        "An immersive VR experience for first aid training and emergency response simulation.",
      image: "/projects/FirstAid.png",
    },
    {
      title: "K9 Training Simulator",
      description:
        "An immersive VR experience for K9 training and simulation.",
      image: "/projects/k9.png",
    },
    {
      title: "Arson Investigation Simulation",
      description:
        "An immersive VR experience for arson investigation and evidence analysis.",
      image: "/projects/Arson.png",
    },
    {
      title: "Driving Simulation",
      description:
        "An immersive VR experience for driving and traffic law training.",
      image: "/projects/Driving.png",
    },
  ];

  const [activeProject, setActiveProject] = useState(0);

  // custom positioning controls for the 3D loop
  const horizontalBias = 180; // + moves right, - moves left
  const perspective = 1400; // higher = flatter, lower = deeper 3D
  const cardBaseWidth = 360;

  const prevSlide = () => setActiveProject((s) => (s - 1 + projects.length) % projects.length);
  const nextSlide = () => setActiveProject((s) => (s + 1) % projects.length);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b1020] text-white">
      <VRBackground />

      <div className="relative z-10">
        <header className="border-b border-white/10 bg-black/10 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <h1 className="text-2xl font-bold tracking-tight">M.Shazaib</h1>
            <div className="flex gap-7 text-[1.25rem] text-gray-300">
              <a href="#about" className="transition hover:text-cyan-300">
                About
              </a>
              <a href="#projects" className="transition hover:text-cyan-300">
                Projects
              </a>
              <a href="#contact" className="transition hover:text-cyan-300">
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main>
          <section className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-20">
            <div className="grid w-full items-center gap-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="mb-4 text-base uppercase tracking-[0.36em] text-cyan-200 drop-shadow-[0_0_18px_rgba(34,211,238,0.42)]">
                  VR • Game Dev • Simulation
                </p>
                <h2 className="max-w-4xl text-5xl font-black leading-tight text-transparent bg-clip-text md:text-7xl bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 drop-shadow-[0_0_40px_rgba(124,211,254,0.4)]">
                  Immersive. Interactive. Real-Time.
                </h2>
                <p className="mt-6 max-w-2xl text-xl text-cyan-100/90 drop-shadow-[0_0_12px_rgba(34,211,238,0.32)]">
                  Game and VR simulation developer creating advanced training
                  systems and engaging digital experiences.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,0.35),0_0_16px_rgba(34,211,238,0.25)] transition hover:scale-105 hover:shadow-[0_0_45px_rgba(34,211,238,0.45),0_0_20px_rgba(34,211,238,0.38)]"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="rounded-2xl border border-cyan-300/35 bg-cyan-700/20 px-6 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.38)]"
                  >
                    Contact Me
                  </a>
                </div>
              </motion.div>

              <Hero3DCard />
            </div>
          </section>

          <section id="about" className="mx-auto max-w-6xl px-6 py-16">
            <div className="rounded-3xl border border-cyan-300/50 bg-cyan-900/20 p-8 backdrop-blur-sm shadow-[0_0_35px_rgba(34,211,238,0.35)]">
              <h3 className="text-2xl font-bold text-cyan-100">About Me</h3>
              <p className="mt-4 text-left text-cyan-100/85">
                I create high-fidelity, simulation-driven experiences across VR,
                AR, and game development. My focus lies in building interactive
                training systems, immersive environments, and seamless real-time
                experiences.
              </p>
            </div>
          </section>

          <section id="project-summary" className="mx-auto max-w-6xl px-6 py-16">
            <div className="rounded-3xl border border-cyan-300/50 bg-cyan-900/20 p-8 backdrop-blur-sm shadow-[0_0_35px_rgba(34,211,238,0.35)]">
              <h3 className="text-3xl font-bold text-cyan-100">Project Highlights Video</h3>
              <p className="mt-4 text-left text-cyan-100/85">
                A selection of recent projects is shown below. Some work remains confidential due to its association with Abu Dhabi Police.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-cyan-300/30 bg-black/40">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://youtu.be/Zgb_aXet-sk"
                    title="Project Highlights Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-20 flex items-center justify-between">
              <h3 className="text-3xl font-bold text-cyan-100">Featured Projects</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="rounded-lg border border-cyan-300/50 bg-cyan-900/30 px-4 py-2 text-cyan-100"
                >
                  Prev
                </button>
                <button
                  onClick={nextSlide}
                  className="rounded-lg border border-cyan-300/50 bg-cyan-900/30 px-4 py-2 text-cyan-100"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="relative mx-auto h-[480px] w-full max-w-[1100px] flex justify-center items-center">
              <div className="relative h-full w-full max-w-[900px] [perspective:1400px]">
                {projects.map((project, index) => {
                  const offset = ((index - activeProject + projects.length) % projects.length);
                  const normalized = offset > projects.length / 2 ? offset - projects.length : offset;

                  const state = Math.abs(normalized);
                  const transforms = {
                    0: `translate(-50%, 0) translateX(${0 + horizontalBias}px) translateZ(260px) rotateY(0deg) scale(1.02)`,
                    1: `translate(-50%, 0) translateX(${220 + horizontalBias}px) translateZ(90px) rotateY(-25deg) scale(0.9)`,
                    '-1': `translate(-50%, 0) translateX(${-220 + horizontalBias}px) translateZ(90px) rotateY(25deg) scale(0.9)`,
                    2: `translate(-50%, 0) translateX(${390 + horizontalBias}px) translateZ(-30px) rotateY(-40deg) scale(0.8)`,
                    '-2': `translate(-50%, 0) translateX(${-390 + horizontalBias}px) translateZ(-30px) rotateY(40deg) scale(0.8)`,
                  };

                  const transform = transforms[normalized] || `translate(-50%, 0) translateX(${horizontalBias}px) translateZ(-140px) rotateY(60deg) scale(0.7)`;
                  const isActive = normalized === 0;

                  return (
                    <motion.div
                      key={project.title}
                      className="absolute left-1/2 top-8 h-[400px] w-[360px] -translate-x-1/2 overflow-hidden rounded-3xl border border-cyan-300/40 bg-cyan-900/30 p-4 text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
                      style={{
                        transform,
                        zIndex: isActive ? 50 : 20 - state,
                        opacity: isActive ? 1 : state > 2 ? 0.25 : 0.7,
                        filter: isActive ? "blur(0px)" : "blur(8px)",
                        transition: "transform 1s ease, opacity 0.7s ease, filter 0.4s ease",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-40 w-full rounded-2xl object-cover"
                      />
                      <h4 className="mt-4 text-xl font-semibold">{project.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        {project.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </section>
          <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-cyan-950/20 p-8 shadow-[0_0_40px_rgba(34,211,238,0.18)] backdrop-blur-xl md:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_30%)]" />
              <div className="absolute -right-16 top-8 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-3xl" />

              <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.32em] text-cyan-300/80">
                    Contact
                  </p>
                  <h3 className="text-3xl font-bold text-white md:text-4xl">
                    Let’s build something immersive together
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-cyan-100/80 md:text-lg">
                    Interested in VR simulations, training systems, or interactive
                    real-time experiences? Reach out through email or WhatsApp and
                    let’s talk about your project.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="mailto:muhammad.shazaibb@gmail.com"
                      className="inline-flex items-center gap-3 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.28)] transition hover:scale-[1.03] hover:shadow-[0_0_42px_rgba(34,211,238,0.38)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current"
                      >
                        <path d="M4 4h16a2 2 0 0 1 2 2v.4l-10 6.25L2 6.4V6a2 2 0 0 1 2-2Zm18 4.75v9.25a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.75l9.47 5.92a1 1 0 0 0 1.06 0L22 8.75Z" />
                      </svg>
                      Email Me
                    </a>

                    <span className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/45">
                      or
                    </span>

                    <a
                      href="https://wa.me/971568441057?text=Hi%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-2xl border border-green-400/30 bg-green-500/10 px-6 py-3 font-semibold text-green-300 shadow-[0_0_25px_rgba(34,197,94,0.18)] transition hover:scale-[1.03] hover:bg-green-500/20 hover:shadow-[0_0_38px_rgba(34,197,94,0.28)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="h-5 w-5 fill-current"
                      >
                        <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.893.757 5.72 2.193 8.21L0 32l7.593-2.146A15.89 15.89 0 0016 32c8.836 0 16-7.164 16-16.396C32 7.56 24.836.396 16 .396zm0 29.348a13.17 13.17 0 01-6.72-1.86l-.48-.28-4.5 1.27 1.2-4.38-.31-.45a13.19 13.19 0 01-2.05-7.1c0-7.27 5.91-13.18 13.18-13.18 7.27 0 13.18 5.91 13.18 13.18 0 7.27-5.91 13.18-13.18 13.18zm7.43-9.89c-.41-.21-2.43-1.2-2.81-1.34-.38-.14-.66-.21-.94.21-.28.41-1.08 1.34-1.32 1.62-.24.28-.48.31-.89.1-.41-.21-1.74-.64-3.31-2.05-1.22-1.09-2.05-2.43-2.29-2.84-.24-.41-.03-.63.18-.83.18-.18.41-.48.62-.72.21-.24.28-.41.41-.69.14-.28.07-.52-.03-.72-.1-.21-.94-2.27-1.29-3.11-.34-.83-.69-.72-.94-.73l-.8-.01c-.28 0-.72.1-1.1.52-.38.41-1.45 1.42-1.45 3.46s1.49 4.01 1.7 4.29c.21.28 2.94 4.49 7.12 6.3.99.43 1.77.69 2.38.88 1 .32 1.91.27 2.63.16.8-.12 2.43-.99 2.77-1.95.34-.96.34-1.79.24-1.95-.1-.17-.38-.27-.79-.48z" />
                      </svg>
                      WhatsApp Me
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[inset_0_0_30px_rgba(34,211,238,0.05)] backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.85)]" />
                      <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/70">
                        Availability
                      </p>
                    </div>

                    <div className="mt-6 space-y-4 text-sm text-cyan-100/80">
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-cyan-300">Services</p>
                        <p className="mt-1">VR Simulations • Interactive Experiences • Game Development</p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-cyan-300">Preferred Contact</p>
                        <p className="mt-1">Email for detailed inquiries, WhatsApp for quick contact</p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-cyan-300">Based In</p>
                        <p className="mt-1">Abu Dhabi, UAE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function VRBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_24%),linear-gradient(to_bottom,#08101f,#0b1020,#050816)]" />

      {/* <motion.img
        src="/controller.png"
        alt="controller"
        className="absolute right-[10%] top-[22%] h-56 w-56 drop-shadow-[0_0_40px_rgba(34,211,238,0.2)]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      /> */}
      

      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(34,211,238,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.10)_1px,transparent_1px)] [background-size:90px_90px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-[linear-gradient(to_top,rgba(34,211,238,0.07),transparent)]" />
    </div>
  );
}

function Hero3DCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15 }}
      className="flex justify-center"
    >
      <div className="relative h-[360px] w-[360px]">
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

        <motion.div
          className="relative h-full w-full"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/vr-headset.png"
            alt="VR Headset"
            className="h-full w-full object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.5)]"
          />
        </motion.div>

        <motion.img
          src="/controller.png"
          alt="Controller"
          className="absolute right-[-200px]  w-50 -translate-y-1/2 drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]"
          animate={{ y: [0, -35, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}