import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SECTION_LEDGE_LAYOUTS = {
  about: [
    { key: "entry", left: 28, y: 200, width: 220, side: "left" },
    // { key: "mid", right: 120, y: 96, width: 170, side: "mid" },
    // { key: "lower", right: 210, y: 170, width: 150, side: "mid" },
  ],
  "project-summary": [
    { key: "entry", right: 160, y: 400, width: 220, side: "left" },
    { key: "mid", right: 28, y: 690, width: 110, side: "right" },
    // { key: "lower", left: 210, y: 170, width: 150, side: "mid" },
  ],
  projects: [
    { key: "entry", right: 28, y: 450, width: 220, side: "right" },
    { key: "mid", right: 260, y: 350, width: 120, side: "mid" },
    // { key: "lower", right: 210, y: 170, width: 150, side: "mid" },
  ],
  contact: [
    { key: "entry", left: 28, y: 300, width: 220, side: "left" },
    // { key: "mid", left: 120, y: 96, width: 170, side: "mid" },
    // { key: "lower", left: 210, y: 170, width: 150, side: "mid" },
  ],
};

export default function App() {
  const base = import.meta.env.BASE_URL;
  const pageRef = useRef(null);
  const MotionDiv = motion.div;

  const projects = [
    {
      title: "VR Drone Simulator",
      description:
        "A VR training simulator with drone calibration, flight controls, and immersive interaction.",
      image: `${base}projects/Drone.png`,
    },
    {
      title: "Crime Scene Simulation",
      description:
        "A realistic VR crime scene simulation for investigative training and scenario analysis.",
      image: `${base}projects/CrimeScene.png`,
    },
    {
      title: "Rowing Machine VR Experience",
      description:
        "An immersive VR experience using a real rowing machine for training and performance analysis.",
      image: `${base}projects/Rowing.png`,
    },
    {
      title: "First Aid Training Simulation",
      description:
        "An immersive VR experience for first aid training and emergency response simulation.",
      image: `${base}projects/FirstAid.png`,
    },
    {
      title: "K9 Training Simulator",
      description:
        "An immersive VR experience for K9 training and simulation.",
      image: `${base}projects/k9.png`,
    },
    {
      title: "Arson Investigation Simulation",
      description:
        "An immersive VR experience for arson investigation and evidence analysis.",
      image: `${base}projects/Arson.png`,
    },
    {
      title: "Driving Simulation",
      description:
        "An immersive VR experience for driving and traffic law training.",
      image: `${base}projects/Driving.png`,
    },
  ];

  const [activeProject, setActiveProject] = useState(0);

  const horizontalBias = 180;

  const prevSlide = () =>
    setActiveProject((s) => (s - 1 + projects.length) % projects.length);
  const nextSlide = () => setActiveProject((s) => (s + 1) % projects.length);

  return (
    <div
      ref={pageRef}
      className="relative isolate min-h-screen overflow-hidden bg-[#0b1020] text-white"
    >
      <VRBackground />
      <PortfolioMiniGame sceneRef={pageRef} />

      <div className="relative z-10">
        <header className="border-b border-white/10 bg-black/10 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
            <h1 className="text-lg font-bold tracking-tight sm:text-xl md:text-2xl">
              M.Shazaib
            </h1>

            <div className="flex items-center gap-3 text-xs text-gray-300 sm:gap-4 sm:text-sm md:gap-7 md:text-[1.15rem]">
              <a
                href="#about"
                data-platform="true"
                className="transition hover:text-cyan-300"
              >
                About
              </a>
              <a
                href="#projects"
                data-platform="true"
                className="transition hover:text-cyan-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                data-platform="true"
                className="transition hover:text-cyan-300"
              >
                Contact
              </a>
              <a
                href={`${base}CV.pdf`}
                data-platform="true"
                download="M_Shazaib_CV.pdf"
                type="application/pdf"
                className="rounded-lg border border-cyan-300/50 bg-cyan-900/30 px-3 py-2 text-[0.8rem] font-semibold text-cyan-100 transition hover:bg-cyan-500/30 hover:text-white"
              >
                Download CV
              </a>
            </div>
          </nav>
        </header>

        <main>
          <section className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-4 py-14 sm:px-6 sm:py-16 md:py-20">
            <div className="grid w-full items-center gap-10 md:grid-cols-2 md:gap-12">
              <MotionDiv
                data-platform="true"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-cyan-200 drop-shadow-[0_0_18px_rgba(34,211,238,0.42)] sm:text-sm md:text-base md:tracking-[0.36em]">
                  VR • Game Dev • Simulation
                </p>

                <h2 className="max-w-4xl bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-4xl font-black leading-tight text-transparent drop-shadow-[0_0_40px_rgba(124,211,254,0.4)] sm:text-5xl md:text-6xl lg:text-7xl">
                  Immersive. Interactive. Real-Time.
                </h2>

                <p className="mt-6 max-w-2xl text-base text-cyan-100/90 drop-shadow-[0_0_12px_rgba(34,211,238,0.32)] sm:text-lg md:text-xl">
                  Game and VR simulation developer creating advanced training
                  systems and engaging digital experiences.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="#projects"
                    data-platform="true"
                    className="rounded-2xl bg-cyan-400 px-6 py-3 text-center font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,0.35),0_0_16px_rgba(34,211,238,0.25)] transition hover:scale-105 hover:shadow-[0_0_45px_rgba(34,211,238,0.45),0_0_20px_rgba(34,211,238,0.38)]"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    data-platform="true"
                    className="rounded-2xl border border-cyan-300/35 bg-cyan-700/20 px-6 py-3 text-center font-semibold text-cyan-100 transition hover:bg-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.38)]"
                  >
                    Contact Me
                  </a>
                </div>
              </MotionDiv>

              <div className="order-1 flex justify-center md:order-2">
                <Hero3DCard />
              </div>
            </div>
          </section>

          <section
            id="about"
            data-step-section="true"
            className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16"
          >
            <div
              data-platform="true"
              className="rounded-3xl border border-cyan-300/50 bg-cyan-900/20 p-6 shadow-[0_0_35px_rgba(34,211,238,0.35)] backdrop-blur-sm md:p-8"
            >
              <h3 className="text-2xl font-bold text-cyan-100">About Me</h3>
              <p className="mt-4 text-left text-sm leading-7 text-cyan-100/85 sm:text-base">
                I create high-fidelity, simulation-driven experiences across VR,
                AR, and game development. My focus lies in building interactive
                training systems, immersive environments, and seamless real-time
                experiences.
              </p>
            </div>
          </section>

          <section
            id="project-summary"
            data-step-section="true"
            className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16"
          >
            <div
              data-platform="true"
              className="rounded-3xl border border-cyan-300/50 bg-cyan-900/20 p-6 shadow-[0_0_35px_rgba(34,211,238,0.35)] backdrop-blur-sm md:p-8"
            >
              <h3 className="text-2xl font-bold text-cyan-100 md:text-3xl">
                Project Highlights Video
              </h3>
              <p className="mt-4 text-left text-sm leading-7 text-cyan-100/85 sm:text-base">
                A selection of recent projects is shown below. Some work remains
                confidential due to its association with Abu Dhabi Police.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-cyan-300/30 bg-black/40">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/Zgb_aXet-sk"
                    title="Project Highlights Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          <section
            id="projects"
            data-step-section="true"
            className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16"
          >
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:mb-16">
              <h3 className="text-2xl font-bold text-cyan-100 md:text-3xl">
                Featured Projects
              </h3>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  data-platform="true"
                  className="rounded-lg border border-cyan-300/50 bg-cyan-900/30 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-800/40"
                >
                  Prev
                </button>
                <button
                  onClick={nextSlide}
                  data-platform="true"
                  className="rounded-lg border border-cyan-300/50 bg-cyan-900/30 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-800/40"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Mobile / small screens */}
            <div className="space-y-4 md:hidden">
              {projects.map((project) => (
                <div
                  key={project.title}
                  data-platform="true"
                  className="rounded-3xl border border-cyan-300/40 bg-cyan-900/30 p-4 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full rounded-2xl object-cover"
                  />
                  <h4 className="mt-4 text-xl font-semibold">{project.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop carousel */}
            <div className="relative mx-auto hidden h-[480px] w-full max-w-[1100px] items-center justify-center md:flex">
              <div className="relative h-full w-full max-w-[900px] [perspective:1400px]">
                {projects.map((project, index) => {
                  const offset =
                    (index - activeProject + projects.length) % projects.length;
                  const normalized =
                    offset > projects.length / 2 ? offset - projects.length : offset;

                  const state = Math.abs(normalized);

                  const transforms = {
                    0: `translate(-50%, 0) translateX(${0 + horizontalBias}px) translateZ(260px) rotateY(0deg) scale(1.02)`,
                    1: `translate(-50%, 0) translateX(${220 + horizontalBias}px) translateZ(90px) rotateY(-25deg) scale(0.9)`,
                    "-1": `translate(-50%, 0) translateX(${-220 + horizontalBias}px) translateZ(90px) rotateY(25deg) scale(0.9)`,
                    2: `translate(-50%, 0) translateX(${390 + horizontalBias}px) translateZ(-30px) rotateY(-40deg) scale(0.8)`,
                    "-2": `translate(-50%, 0) translateX(${-390 + horizontalBias}px) translateZ(-30px) rotateY(40deg) scale(0.8)`,
                  };

                  const transform =
                    transforms[normalized] ||
                    `translate(-50%, 0) translateX(${horizontalBias}px) translateZ(-140px) rotateY(60deg) scale(0.7)`;

                  const isActive = normalized === 0;

                  return (
                    <MotionDiv
                      key={project.title}
                      data-platform="true"
                      className="absolute left-1/2 top-8 h-[400px] w-[360px] -translate-x-1/2 overflow-hidden rounded-3xl border border-cyan-300/40 bg-cyan-900/30 p-4 text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
                      style={{
                        transform,
                        zIndex: isActive ? 50 : 20 - state,
                        opacity: isActive ? 1 : state > 2 ? 0.25 : 0.7,
                        filter: isActive ? "blur(0px)" : "blur(8px)",
                        transition:
                          "transform 1s ease, opacity 0.7s ease, filter 0.4s ease",
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
                    </MotionDiv>
                  );
                })}
              </div>
            </div>
          </section>

          <section
            id="contact"
            data-step-section="true"
            className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20"
          >
            <div
              data-platform="true"
              className="relative overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-cyan-950/20 p-6 shadow-[0_0_40px_rgba(34,211,238,0.18)] backdrop-blur-xl md:p-12"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_30%)]" />
              <div className="absolute -right-16 top-8 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-3xl" />

              <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
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

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                    <a
                      href="mailto:muhammad.shazaibb@gmail.com"
                      data-platform="true"
                      className="inline-flex items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.28)] transition hover:scale-[1.03] hover:shadow-[0_0_42px_rgba(34,211,238,0.38)]"
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

                    <span className="text-center text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/45">
                      or
                    </span>

                    <a
                      href="https://wa.me/971568441057?text=Hi%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect"
                      data-platform="true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-2xl border border-green-400/30 bg-green-500/10 px-6 py-3 font-semibold text-green-300 shadow-[0_0_25px_rgba(34,197,94,0.18)] transition hover:scale-[1.03] hover:bg-green-500/20 hover:shadow-[0_0_38px_rgba(34,197,94,0.28)]"
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
                  <div
                    data-platform="true"
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[inset_0_0_30px_rgba(34,211,238,0.05)] backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.85)]" />
                      <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/70">
                        Availability
                      </p>
                    </div>

                    <div className="mt-6 space-y-4 text-sm text-cyan-100/80">
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-cyan-300">Services</p>
                        <p className="mt-1">
                          VR Simulations • Interactive Experiences • Game Development
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-cyan-300">Preferred Contact</p>
                        <p className="mt-1">
                          Email for detailed inquiries, WhatsApp for quick contact
                        </p>
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
  const base = import.meta.env.BASE_URL;
  const MotionImg = motion.img;
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767px)").matches
      : false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncIsMobile = (event) => setIsMobile(event.matches);

    mediaQuery.addEventListener("change", syncIsMobile);

    return () => mediaQuery.removeEventListener("change", syncIsMobile);
  }, []);

  const dpadCount = isMobile ? 90 : 500;

  const dpadConfigs = Array.from({ length: dpadCount }, (_, i) => ({
    top: `${7 + (i * 6) % 83}%`,
    left: `${(i * 17) % 90}%`,
    width: 10 + (i % 6) * 4,
    rotate: (i * 90) % 360,
    hue: (i * 4) % 360,
    opacity: isMobile ? 0.008 + ((i % 4) * 0.012) : 0.01 + ((i % 5) * 0.03),
    xMotion: (i % 3) * 5,
    yMotion: (i % 4) * -4,
    delay: (i % 4) * 0.5,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_24%),linear-gradient(to_bottom,#08101f,#0b1020,#050816)]" />

      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(34,211,238,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.10)_1px,transparent_1px)] [background-size:90px_90px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />

      {dpadConfigs.map((cfg, idx) => (
        <MotionImg
          key={`dpad-${idx}`}
          src={`${base}Dpad.png`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute select-none"
          style={{
            top: cfg.top,
            left: cfg.left,
            width: `${cfg.width}px`,
            height: `${cfg.width}px`,
            zIndex: 0,
            transform: "translate3d(-50%, -50%, 0)",
            filter: isMobile
              ? "invert(1) saturate(0.8) brightness(0.7)"
              : `invert(1) sepia(1) saturate(900) hue-rotate(${cfg.hue}deg) contrast(1.4) brightness(1.1)`,
            opacity: cfg.opacity,
            willChange: isMobile ? "auto" : "transform, opacity",
          }}
          initial={{ x: 0, y: 0, rotate: cfg.rotate, opacity: cfg.opacity }}
          animate={{
            x: isMobile ? 0 : [0, cfg.xMotion, 0],
            y: isMobile ? 0 : [0, cfg.yMotion, 0],
            rotate: isMobile ? cfg.rotate : [cfg.rotate, cfg.rotate + 10, cfg.rotate],
            opacity: isMobile
              ? cfg.opacity
              : [cfg.opacity * 0.7, cfg.opacity, cfg.opacity * 0.7],
          }}
          transition={{
            duration: isMobile ? 0 : 6 + (idx % 3),
            repeat: isMobile ? 0 : Infinity,
            ease: "easeInOut",
            delay: cfg.delay,
          }}
        />
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-[linear-gradient(to_top,rgba(34,211,238,0.07),transparent)]" />
    </div>
  );
}

function PortfolioMiniGame({ sceneRef }) {
  const PLAYER_WIDTH = 34;
  const PLAYER_HEIGHT = 48;
  const STEP_HEIGHT = 16;
  const MOVE_SPEED = 380;
  const ACCELERATION = 2600;
  const AIR_CONTROL = 1800;
  const JUMP_VELOCITY = 860;
  const GRAVITY = 1000;
  const playerElementRef = useRef(null);
  const tooltipElementRef = useRef(null);
  const tooltipFollowYRef = useRef(
    typeof window !== "undefined" ? window.scrollY + 80 : 80,
  );
  const keysRef = useRef({
    left: false,
    right: false,
    jump: false,
  });
  const jumpQueuedRef = useRef(false);
  const platformElementsRef = useRef([]);
  const groundedPlatformRef = useRef(null);
  const sceneHeightRef = useRef(0);
  const sceneWidthRef = useRef(0);
  const userScrollPriorityUntilRef = useRef(0);
  const autoScrollLockRef = useRef(false);
  const playerRef = useRef({
    x: 96,
    y: 120,
    vx: 0,
    vy: 0,
    facing: 1,
    onGround: false,
    initialized: false,
  });
  const [touchMode, setTouchMode] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(pointer: coarse)").matches
      : false,
  );
  const [minigameEnabled, setMinigameEnabled] = useState(() =>
    typeof window !== "undefined"
      ? !window.matchMedia("(max-width: 767px)").matches
      : true,
  );
  const [stepPlatforms, setStepPlatforms] = useState([]);
  const [playerState, setPlayerState] = useState({
    facing: 1,
    onGround: false,
    ready: false,
  });

  const buildSectionStepPlatforms = (scene) => {
    const sceneRect = scene.getBoundingClientRect();

    return Array.from(scene.querySelectorAll("[data-step-section='true']")).flatMap(
      (section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top - sceneRect.top;
        const sectionId = section.id;
        const fallbackSide = index % 2 === 1 ? "right" : "left";
        const fallbackLayout = [
          { key: "entry", [fallbackSide]: 28, y: 22, width: 220, side: fallbackSide },
          { key: "mid", [fallbackSide]: 120, y: 96, width: 170, side: "mid" },
          { key: "lower", [fallbackSide]: 210, y: 170, width: 150, side: "mid" },
        ];
        const layout = SECTION_LEDGE_LAYOUTS[sectionId] ?? fallbackLayout;

        return layout.map((ledge) => {
          const width = ledge.width;
          const x =
            typeof ledge.left === "number"
              ? ledge.left
              : scene.clientWidth - width - (ledge.right ?? 0);

          return {
            key: `section-step-${sectionId}-${ledge.key}`,
            element: null,
            x,
            y: sectionTop + ledge.y,
            width,
            height: ledge.height ?? STEP_HEIGHT,
            isSpawn: false,
            side: ledge.side ?? "mid",
            variant: ledge.key,
          };
        });
      },
    );
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const syncTouchMode = (event) => setTouchMode(event.matches);

    mediaQuery.addEventListener("change", syncTouchMode);

    return () => mediaQuery.removeEventListener("change", syncTouchMode);
  }, [sceneRef]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncMinigameEnabled = (event) => setMinigameEnabled(!event.matches);

    mediaQuery.addEventListener("change", syncMinigameEnabled);

    return () => mediaQuery.removeEventListener("change", syncMinigameEnabled);
  }, []);

  useEffect(() => {
    if (!minigameEnabled) {
      return undefined;
    }

    let frameId = 0;

    const followTooltip = () => {
      const tooltipElement = tooltipElementRef.current;
      if (tooltipElement) {
        const targetY = window.scrollY + 80;
        const currentY = tooltipFollowYRef.current;
        const nextY = currentY + (targetY - currentY) * 0.16;

        tooltipFollowYRef.current = Math.abs(targetY - nextY) < 0.5 ? targetY : nextY;
        tooltipElement.style.transform = `translate3d(0, ${tooltipFollowYRef.current}px, 0)`;
      }

      frameId = window.requestAnimationFrame(followTooltip);
    };

    frameId = window.requestAnimationFrame(followTooltip);

    return () => window.cancelAnimationFrame(frameId);
  }, [minigameEnabled]);

  useEffect(() => {
    if (!minigameEnabled) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      const isMovementKey = [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "KeyA",
        "KeyD",
        "KeyW",
        "Space",
      ].includes(event.code);

      if (isMovementKey) {
        event.preventDefault();
      }

      if (event.repeat) {
        return;
      }

      if (["ArrowLeft", "KeyA"].includes(event.code)) {
        keysRef.current.left = true;
      }

      if (["ArrowRight", "KeyD"].includes(event.code)) {
        keysRef.current.right = true;
      }

      if (["ArrowUp", "KeyW", "Space"].includes(event.code)) {
        keysRef.current.jump = true;
        jumpQueuedRef.current = true;
      }
    };

    const handleKeyUp = (event) => {
      if (
        ["ArrowLeft", "ArrowRight", "ArrowUp", "KeyA", "KeyD", "KeyW", "Space"].includes(
          event.code,
        )
      ) {
        event.preventDefault();
      }

      if (["ArrowLeft", "KeyA"].includes(event.code)) {
        keysRef.current.left = false;
      }

      if (["ArrowRight", "KeyD"].includes(event.code)) {
        keysRef.current.right = false;
      }

      if (["ArrowUp", "KeyW", "Space"].includes(event.code)) {
        keysRef.current.jump = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [minigameEnabled]);

  useEffect(() => {
    if (!minigameEnabled) {
      return undefined;
    }

    const giveUserScrollPriority = () => {
      if (autoScrollLockRef.current) {
        return;
      }

      userScrollPriorityUntilRef.current = performance.now() + 1400;
    };

    const handleWheel = () => {
      giveUserScrollPriority();
    };

    const handleTouchMove = () => {
      giveUserScrollPriority();
    };

    const handleScroll = () => {
      giveUserScrollPriority();
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [minigameEnabled]);

  useEffect(() => {
    if (!minigameEnabled) {
      groundedPlatformRef.current = null;
      playerRef.current.initialized = false;
      return undefined;
    }

    if (!sceneRef.current) {
      return undefined;
    }

    const getPlatformRects = () => {
      const scene = sceneRef.current;
      if (!scene) {
        return [];
      }

      const basePlatforms = platformElementsRef.current.map((element) => {
        const sceneRect = scene.getBoundingClientRect();
        const rect = element.getBoundingClientRect();
        const isFixed = window.getComputedStyle(element).position === "fixed";

        return {
          key: element,
          element,
          x: isFixed ? rect.left : rect.left - sceneRect.left,
          y: isFixed ? rect.top + window.scrollY : rect.top - sceneRect.top,
          width: rect.width,
          height: rect.height,
          isSpawn: element.dataset.spawnPlatform === "true",
        };
      });

      const sectionStepPlatforms = buildSectionStepPlatforms(scene);

      return [...basePlatforms, ...sectionStepPlatforms];
    };

    const measurePlatforms = () => {
      const scene = sceneRef.current;
      if (!scene) {
        return;
      }

      platformElementsRef.current = Array.from(
        scene.querySelectorAll("[data-platform='true']"),
      );

      sceneHeightRef.current = scene.scrollHeight;
      sceneWidthRef.current = scene.clientWidth;
      setStepPlatforms(buildSectionStepPlatforms(scene));

      const platformRects = getPlatformRects();

      if (!playerRef.current.initialized && platformRects.length > 0) {
        const spawnPlatform =
          platformRects.find((platform) => platform.isSpawn) ?? platformRects[0];
        playerRef.current = {
          ...playerRef.current,
          x: Math.max(24, spawnPlatform.x + 56),
          y: Math.max(0, spawnPlatform.y - PLAYER_HEIGHT),
          initialized: true,
          onGround: true,
        };
        groundedPlatformRef.current = spawnPlatform.key;

        if (playerElementRef.current) {
          playerElementRef.current.style.transform = `translate3d(${playerRef.current.x}px, ${playerRef.current.y}px, 0) scaleX(${playerRef.current.facing})`;
        }

        setPlayerState({
          facing: playerRef.current.facing,
          onGround: true,
          ready: true,
        });
      }
    };

    measurePlatforms();

    const resizeObserver = new ResizeObserver(measurePlatforms);
    resizeObserver.observe(sceneRef.current);

    platformElementsRef.current.forEach((element) => resizeObserver.observe(element));

    window.addEventListener("resize", measurePlatforms);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measurePlatforms);
    };
  }, [sceneRef, minigameEnabled]);

  useEffect(() => {
    if (!minigameEnabled) {
      return undefined;
    }

    let frameId = 0;
    let previousTime = performance.now();

    const tick = (currentTime) => {
      const player = playerRef.current;
      const scene = sceneRef.current;

      if (!scene) {
        frameId = window.requestAnimationFrame(tick);
        return;
      }

      const basePlatforms = platformElementsRef.current.map((element) => {
        const sceneRect = scene.getBoundingClientRect();
        const rect = element.getBoundingClientRect();
        const isFixed = window.getComputedStyle(element).position === "fixed";

        return {
          key: element,
          element,
          x: isFixed ? rect.left : rect.left - sceneRect.left,
          y: isFixed ? rect.top + window.scrollY : rect.top - sceneRect.top,
          width: rect.width,
          height: rect.height,
        };
      });
      const sectionStepPlatforms = buildSectionStepPlatforms(scene);
      const platforms = [...basePlatforms, ...sectionStepPlatforms];

      if (!player.initialized) {
        frameId = window.requestAnimationFrame(tick);
        return;
      }

      const deltaTime = Math.min((currentTime - previousTime) / 1000, 0.033);
      previousTime = currentTime;

      const direction =
        (keysRef.current.right ? 1 : 0) - (keysRef.current.left ? 1 : 0);
      const targetVelocity = direction * MOVE_SPEED;
      const acceleration = player.onGround ? ACCELERATION : AIR_CONTROL;
      const velocityDelta = targetVelocity - player.vx;
      const maxVelocityChange = acceleration * deltaTime;

      if (Math.abs(velocityDelta) <= maxVelocityChange) {
        player.vx = targetVelocity;
      } else {
        player.vx += Math.sign(velocityDelta) * maxVelocityChange;
      }

      if (direction !== 0) {
        player.facing = direction;
      }

      const currentGroundPlatform = groundedPlatformRef.current
        ? platforms.find(
            (platform) => platform.key === groundedPlatformRef.current,
          )
        : null;

      if (player.onGround && currentGroundPlatform && !jumpQueuedRef.current) {
        const stillOverPlatform =
          player.x + PLAYER_WIDTH > currentGroundPlatform.x + 18 &&
          player.x < currentGroundPlatform.x + currentGroundPlatform.width - 18;

        if (stillOverPlatform) {
          player.y = currentGroundPlatform.y - PLAYER_HEIGHT;
          if (player.vy > 0) {
            player.vy = 0;
          }
        } else {
          groundedPlatformRef.current = null;
          player.onGround = false;
        }
      }

      if (jumpQueuedRef.current && player.onGround) {
        player.vy = -JUMP_VELOCITY;
        player.onGround = false;
        groundedPlatformRef.current = null;
      }
      jumpQueuedRef.current = false;

      player.vy += GRAVITY * deltaTime;

      let nextX = player.x + player.vx * deltaTime;
      let nextY = player.y + player.vy * deltaTime;
      const previousBottom = player.y + PLAYER_HEIGHT;
      const nextBottom = nextY + PLAYER_HEIGHT;
      const sceneWidth = sceneWidthRef.current || window.innerWidth;
      const sceneHeight = sceneHeightRef.current || window.innerHeight;
      const floorY = sceneHeight - PLAYER_HEIGHT - 24;

      nextX = Math.max(10, Math.min(sceneWidth - PLAYER_WIDTH - 10, nextX));

      let landedPlatform = null;

      if (player.vy >= 0) {
        platforms.forEach((platform) => {
          const horizontalOverlap =
            nextX + PLAYER_WIDTH > platform.x + 18 &&
            nextX < platform.x + platform.width - 18;
          const wasAbovePlatform = previousBottom <= platform.y + 18;
          const crossesPlatform = nextBottom >= platform.y;

          if (horizontalOverlap && wasAbovePlatform && crossesPlatform) {
            if (!landedPlatform || platform.y < landedPlatform.y) {
              landedPlatform = platform;
            }
          }
        });
      }

      if (landedPlatform) {
        nextY = landedPlatform.y - PLAYER_HEIGHT;
        player.vy = 0;
        player.onGround = true;
        groundedPlatformRef.current = landedPlatform.key;
      } else if (nextY >= floorY) {
        nextY = floorY;
        player.vy = 0;
        player.onGround = true;
        groundedPlatformRef.current = null;
      } else {
        player.onGround = false;
        groundedPlatformRef.current = null;
      }

      player.x = nextX;
      player.y = nextY;

      if (playerElementRef.current) {
        playerElementRef.current.style.transform = `translate3d(${player.x}px, ${player.y}px, 0) scaleX(${player.facing})`;
      }

      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight;
      const playerBottom = player.y + PLAYER_HEIGHT;
      const playerTop = player.y;
      const canAutoScroll =
        performance.now() >= userScrollPriorityUntilRef.current;

      if (canAutoScroll && player.vy > 0 && playerBottom > viewportBottom - 80) {
        const maxScrollTop =
          document.documentElement.scrollHeight - window.innerHeight;
        const targetScrollTop = Math.min(
          maxScrollTop,
          playerBottom - window.innerHeight + 120,
        );

        if (targetScrollTop > viewportTop) {
          autoScrollLockRef.current = true;
          window.scrollTo({
            top: Math.min(targetScrollTop, viewportTop + 18),
            behavior: "auto",
          });
          requestAnimationFrame(() => {
            autoScrollLockRef.current = false;
          });
        }
      }

      if (canAutoScroll && player.vy < 0 && playerTop < viewportTop + 90) {
        const targetScrollTop = Math.max(0, playerTop - 120);

        if (targetScrollTop < viewportTop) {
          autoScrollLockRef.current = true;
          window.scrollTo({
            top: Math.max(targetScrollTop, viewportTop - 18),
            behavior: "auto",
          });
          requestAnimationFrame(() => {
            autoScrollLockRef.current = false;
          });
        }
      }

      setPlayerState((previousState) => {
        if (
          previousState.ready &&
          previousState.facing === player.facing &&
          previousState.onGround === player.onGround
        ) {
          return previousState;
        }

        return {
          facing: player.facing,
          onGround: player.onGround,
          ready: true,
        };
      });

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [sceneRef, minigameEnabled]);

  if (!minigameEnabled) {
    return null;
  }

  const setTouchDirection = (direction, active) => {
    keysRef.current[direction] = active;
  };

  const triggerTouchJump = () => {
    jumpQueuedRef.current = true;
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {stepPlatforms.map((step) => (
        <div
          key={step.key}
          className="absolute"
          style={{
            left: `${step.x}px`,
            top: `${step.y}px`,
            width: `${step.width}px`,
            height: `${step.height}px`,
          }}
        >
          <div
            className={`absolute inset-0 rounded-full border ${
              step.side === "right"
                ? "border-fuchsia-300/80 bg-fuchsia-400/20 shadow-[0_0_18px_rgba(217,70,239,0.65),0_0_34px_rgba(217,70,239,0.3)]"
                : step.side === "left"
                  ? "border-cyan-300/80 bg-cyan-400/20 shadow-[0_0_18px_rgba(34,211,238,0.65),0_0_34px_rgba(34,211,238,0.3)]"
                  : "border-emerald-300/80 bg-emerald-400/20 shadow-[0_0_18px_rgba(52,211,153,0.6),0_0_30px_rgba(52,211,153,0.25)]"
            }`}
          />
          <div
            className={`absolute top-1/2 h-[2px] -translate-y-1/2 ${
              step.side === "right"
                ? "left-[-32px] w-12 bg-gradient-to-l from-fuchsia-300 to-transparent"
                : step.side === "left"
                  ? "right-[-32px] w-12 bg-gradient-to-r from-cyan-300 to-transparent"
                  : "left-1/2 w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
            }`}
          />
        </div>
      ))}

      {playerState.ready ? (
        <div
          ref={playerElementRef}
          className="absolute"
          style={{
            left: 0,
            top: 0,
            width: `${PLAYER_WIDTH}px`,
            height: `${PLAYER_HEIGHT}px`,
            transform: `translate3d(0, 0, 0) scaleX(${playerState.facing})`,
            transformOrigin: "center center",
            willChange: "transform",
          }}
        >
          <div className="absolute inset-x-[7px] top-0 h-5 rounded-full border border-cyan-200/70 bg-cyan-200 shadow-[0_0_16px_rgba(103,232,249,0.8)]" />
          <div className="absolute inset-x-0 top-4 h-8 rounded-[16px] border border-cyan-300/55 bg-cyan-400/80 shadow-[0_0_18px_rgba(34,211,238,0.55)]" />
          <div className="absolute left-[2px] top-[23px] h-2 w-3 rounded-full bg-[#08101f]" />
          <div className="absolute right-[2px] top-[23px] h-2 w-3 rounded-full bg-[#08101f]" />
          <div className="absolute left-[6px] top-[18px] h-4 w-2 rounded-full bg-cyan-100" />
          <div className="absolute right-[6px] top-[18px] h-4 w-2 rounded-full bg-cyan-100" />
          <div
            className={`absolute bottom-0 left-[4px] h-4 w-2 rounded-full ${
              playerState.onGround ? "bg-cyan-950" : "bg-cyan-100"
            }`}
          />
          <div
            className={`absolute bottom-0 right-[4px] h-4 w-2 rounded-full ${
              playerState.onGround ? "bg-cyan-950" : "bg-cyan-100"
            }`}
          />
        </div>
      ) : null}

      <div
        ref={tooltipElementRef}
        data-platform="true"
        data-spawn-platform="true"
        className="absolute right-4 top-0 max-w-[230px] rounded-2xl border border-cyan-300/30 bg-slate-950/70 px-4 py-3 text-xs text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.18)] backdrop-blur-md"
        style={{
          transform: "translate3d(0, 80px, 0)",
          willChange: "transform",
        }}
      >
        <p className="font-semibold uppercase tracking-[0.24em] text-cyan-300/85">
          Mini Game
        </p>
        <p className="mt-2 leading-5 text-cyan-100/75">
          Use A/D or arrow keys to move. Press W, up arrow, or space to jump on
          the section cards.
        </p>
      </div>

      {touchMode ? (
        <div className="fixed bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="pointer-events-auto flex gap-3">
            <button
              type="button"
              data-platform="true"
              className="rounded-2xl border border-cyan-300/40 bg-slate-950/75 px-5 py-4 text-xl text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.18)] backdrop-blur"
              onPointerDown={() => setTouchDirection("left", true)}
              onPointerUp={() => setTouchDirection("left", false)}
              onPointerLeave={() => setTouchDirection("left", false)}
            >
              ◀
            </button>
            <button
              type="button"
              data-platform="true"
              className="rounded-2xl border border-cyan-300/40 bg-slate-950/75 px-5 py-4 text-xl text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.18)] backdrop-blur"
              onPointerDown={() => setTouchDirection("right", true)}
              onPointerUp={() => setTouchDirection("right", false)}
              onPointerLeave={() => setTouchDirection("right", false)}
            >
              ▶
            </button>
          </div>

          <button
            type="button"
            data-platform="true"
            className="pointer-events-auto rounded-2xl border border-cyan-300/40 bg-cyan-400/85 px-6 py-4 font-semibold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.25)]"
            onPointerDown={triggerTouchJump}
          >
            Jump
          </button>
        </div>
      ) : null}
    </div>
  );
}

function Hero3DCard() {
  const base = import.meta.env.BASE_URL;
  const MotionDiv = motion.div;
  const MotionImg = motion.img;

  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15 }}
      className="flex justify-center"
    >
      <div className="relative h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px]">
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

        <MotionDiv
          data-platform="true"
          className="relative h-full w-full"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={`${base}vr-headset.png`}
            alt="VR Headset"
            data-platform="true"
            className="h-full w-full object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.5)]"
          />
        </MotionDiv>

        <MotionImg
          src={`${base}controller2.png`}
          alt="Controller"
          data-platform="true"
          className="absolute right-[-60px] top-1/2 w-16 -translate-y-1/2 drop-shadow-[0_0_30px_rgba(34,211,238,0.35)] sm:right-[-100px] sm:w-24 md:right-[-160px] md:w-32"
          animate={{ y: [0, -35, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </MotionDiv>
  );
}
