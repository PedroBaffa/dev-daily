import React, { useState, useMemo } from "react";
import {
  Code2,
  Rocket,
  Zap,
  Menu,
  X,
  LayoutDashboard,
  ArrowRight,
  Github,
  Linkedin,
  Terminal,
  Database,
  Braces,
  Layers,
} from "lucide-react";

const BigHeroLogo = () => {
  return (
    <div className="relative group hidden lg:block">
      <div className="flex items-center gap-6 select-none">
        <div className="relative animate-gradient-glow">
          <img
            src="/logo/logo.svg"
            alt="Logo Dev Daily"
            className="w-24 h-24 md:w-60 md:h-60 object-contain"
          />
        </div>

        <div className="flex flex-col">
          <span className="font-squeeze font-bold text-5xl md:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-cyan-400 to-purple-600 animate-gradient-text">
            DEV DAILY
          </span>
          <span className="text-slate-400 text-sm md:text-base font-light tracking-[0.2em] uppercase">
            Studio
          </span>
        </div>
      </div>
    </div>
  );
};

const FallingMatrix = () => {
  const symbols = [
    "{ }",
    "npm",
    "</>",
    "&&",
    "||",
    "git",
    "div",
    "rm -rf",
    "sudo",
    ";",
    <Code2 size={30} />,
    <Terminal size={30} />,
    <Database size={30} />,
    <Braces size={30} />,
  ];

  const drops = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      content: symbols[Math.floor(Math.random() * symbols.length)],
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 15}s`,
      duration: `${Math.random() * 10 + 10}s`,
      size: Math.random() > 0.5 ? "text-lg" : "text-sm",
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <style>{`
        @keyframes custom-fall {
          0% { top: -10%; opacity: 0; transform: translateY(0); }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; transform: translateY(20px); }
        }
      `}</style>

      {drops.map((drop) => (
        <div
          key={drop.id}
          className={`absolute font-mono font-bold ${drop.size} text-brand-blue/30`}
          style={{
            left: drop.left,
            top: "-10%",
            animation: `custom-fall ${drop.duration} linear infinite`,
            animationDelay: drop.delay,
            opacity: drop.opacity,
          }}
        >
          {drop.content}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const teamMembers = [
    {
      name: "Pedro Baffa Carvalho",
      role: "Co-Founder & Full-Stack Developer",
      photo: "/pedro.png",
      linkedin: "https://www.linkedin.com/in/pedro-baffa/",
      github: "https://github.com/PedroBaffa",
    },
    {
      name: "Leonardo Albuquerque Avigro",
      role: "Full Support & Product Manager",
      photo: "/leo.png",
      linkedin: "https://www.linkedin.com/in/leonardo-avigro-842b76225/",
      github: "https://github.com/LeoAvigro",
    },
    {
      name: "Mateus Simões Marques",
      role: "Database & Front-End Developer",
      photo: "/mateus.png",
      linkedin: "https://www.linkedin.com/in/mateussmarques",
      github: "https://github.com/mateussmarques",
    },
    {
      name: "Iann Nogueira Schmith",
      role: "Co-Founder & Full-Stack Developer",
      photo: "/iann.png",
      linkedin: "https://www.linkedin.com/in/iannschmith/",
      github: "https://github.com/IannNS",
    },
  ];

  const projects = [
    {
      title: "Classify",
      category: "SaaS / EdTech",
      description:
        "Sistema definitivo para gestão de escalas institucionais com algoritmo inteligente.",
      image: "/classify.png",
      link: "/projects/classify",
    },
    {
      title: "DevCommerce",
      category: "E-commerce",
      description:
        "Plataforma de vendas high-performance para varejo local com integração de pagamentos.",
      image: "/ecommerce-preview.png",
      link: "/projects/ecommerce",
    },
    {
      title: "HealthTrack",
      category: "Mobile App",
      description:
        "Aplicação para monitoramento de pacientes em tempo real para clínicas.",
      image: "/app-preview.png",
      link: "/projects/healthtrack",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-deco selection:bg-brand-blue selection:text-white bg-brand-dark text-slate-50">
      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; filter: drop-shadow(0 0 15px rgba(0, 102, 255, 0.5)); }
          50% { background-position: 100% 50%; filter: drop-shadow(0 0 25px rgba(6, 182, 212, 0.6)); }
          100% { background-position: 0% 50%; filter: drop-shadow(0 0 15px rgba(168, 85, 247, 0.5)); }
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-move 4s linear infinite;
        }
        .animate-gradient-glow {
          animation: gradient-move 4s linear infinite;
        }
      `}</style>

      <header className="fixed w-full top-0 z-50 glass border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="relative flex items-center w-auto gap-4 group cursor-pointer">
                <img
                  src="/logo/logo.png"
                  alt="Logo Dev Daily"
                  className="h-10 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <span className="font-squeeze font-bold text-xl text-slate-200 tracking-wide">
                  DEV DAILY
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a
                href="#hero"
                className="hover:text-brand-blue transition-colors"
              >
                Início
              </a>
              <a
                href="#about"
                className="hover:text-brand-blue transition-colors"
              >
                Sobre
              </a>
              <a
                href="#projects"
                className="hover:text-brand-blue transition-colors"
              >
                Projetos
              </a>
              <a
                href="#services"
                className="hover:text-brand-blue transition-colors"
              >
                Serviços
              </a>
              <button className="bg-brand-blue hover:bg-blue-600 text-white px-6 py-2 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] tracking-wide font-squeeze">
                COMEÇAR PROJETO
              </button>
            </nav>

            <button className="md:hidden text-slate-300" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full glass border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
            <a
              href="#hero"
              className="text-slate-300 hover:text-brand-blue"
              onClick={toggleMenu}
            >
              Início
            </a>
            <a
              href="#about"
              className="text-slate-300 hover:text-brand-blue"
              onClick={toggleMenu}
            >
              Sobre Nós
            </a>
            <a
              href="#projects"
              className="text-slate-300 hover:text-brand-blue"
              onClick={toggleMenu}
            >
              Projetos
            </a>
            <a
              href="#services"
              className="text-slate-300 hover:text-brand-blue"
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <button className="bg-brand-blue text-white px-5 py-3 rounded-lg font-bold w-full font-squeeze tracking-wider">
              COMEÇAR PROJETO
            </button>
          </div>
        )}
      </header>

      <main className="flex-grow pt-24">
        <section
          id="hero"
          className="relative min-h-[90vh] flex items-center overflow-hidden px-6"
        >
          <FallingMatrix />
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] opacity-30"></div>

          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-brand-blue text-xs font-bold uppercase tracking-widest mb-8 font-squeeze backdrop-blur-sm">
                  <Zap className="w-3 h-3" /> Agilidade Universitária
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-squeeze font-bold text-white mb-6 leading-[0.9] uppercase">
                  Do Código à <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-cyan-400 to-purple-600 animate-gradient-text">
                    Solução Real
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-light">
                  StartUp de desenvolvimento fundado por estudantes. Unimos o
                  rigor acadêmico com a velocidade do mercado.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button className="px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 font-squeeze tracking-wide shadow-lg shadow-brand-blue/25">
                    CONHECER PROJETOS <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 glass text-white hover:bg-white/5 rounded-lg font-bold text-lg border border-white/10 transition-all font-squeeze tracking-wide">
                    FALE CONOSCO
                  </button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-center relative">
                <div className="absolute inset-0 bg-brand-blue/10 blur-[80px] rounded-full -z-10"></div>

                <BigHeroLogo />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6 bg-slate-900/30">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-16">
              <span className="text-brand-blue font-bold tracking-widest uppercase text-sm font-squeeze mb-2">
                Quem Somos
              </span>
              <h2 className="text-4xl md:text-5xl font-squeeze font-bold text-white uppercase text-center">
                Mentes por trás do código
              </h2>
              <div className="w-24 h-1 bg-brand-blue rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="glass p-6 rounded-2xl border border-white/5 group hover:border-brand-blue/40 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative mb-6 mx-auto w-32 h-32 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-brand-blue transition-colors shadow-xl">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/150/000000/FFFFFF?text=Member";
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-squeeze font-bold text-white mb-1 uppercase leading-tight">
                      {member.name.split(" ")[0]} <br />
                      <span className="text-slate-400 text-lg font-deco">
                        {member.name.split(" ").slice(1).join(" ")}
                      </span>
                    </h3>
                    <p className="text-brand-blue text-sm font-medium mb-4">
                      {member.role}
                    </p>
                    <div className="flex justify-center gap-4">
                      <a
                        href={member.github}
                        className="text-slate-500 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="text-slate-500 hover:text-white transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-16">
              <span className="text-brand-blue font-bold tracking-widest uppercase text-sm font-squeeze mb-2">
                Nosso Portfólio
              </span>
              <h2 className="text-4xl md:text-5xl font-squeeze font-bold text-white uppercase text-center">
                Projetos Recentes
              </h2>
              <div className="w-24 h-1 bg-brand-blue rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl border border-white/5 overflow-hidden group hover:border-brand-blue/50 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 w-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0 flex items-center justify-center">
                      <Layers className="w-12 h-12 text-slate-700 group-hover:text-slate-600 transition-colors" />
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 z-10 w-full h-full object-cover bg-slate-900 group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute top-4 right-4 z-30 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow relative z-30">
                    <h3 className="text-2xl font-squeeze font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-wide uppercase hover:gap-4 transition-all group-hover:text-brand-blue"
                    >
                      Ver Detalhes <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-6 bg-slate-950/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-squeeze font-bold text-white mb-4 uppercase">
                O que construímos
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Rocket className="w-8 h-8 text-brand-blue" />}
                title="SaaS Dev"
                description="Produtos escaláveis e prontos para investimento."
              />
              <ServiceCard
                icon={<LayoutDashboard className="w-8 h-8 text-brand-blue" />}
                title="Transf. Digital"
                description="Modernizamos processos manuais de empresas locais."
              />
              <ServiceCard
                icon={<Code2 className="w-8 h-8 text-brand-blue" />}
                title="Consultoria"
                description="Refatoração e metodologias ágeis."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10 px-6 bg-brand-dark">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-brand-blue rounded text-white">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-squeeze font-bold text-xl text-slate-200">
              DEV DAILY
            </span>
          </div>
          <div className="text-slate-500 text-sm font-light">
            © 2025 Dev Daily Studio.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="glass glass-hover p-8 rounded-2xl border border-white/5 group hover:border-brand-blue/30">
      <div className="mb-6 p-4 bg-slate-800/50 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300 border border-transparent group-hover:border-brand-blue/20">
        {icon}
      </div>
      <h3 className="text-2xl font-squeeze font-bold text-white mb-3 uppercase">
        {title}
      </h3>
      <p className="text-slate-400 leading-relaxed font-light">{description}</p>
    </div>
  );
}

export default App;
