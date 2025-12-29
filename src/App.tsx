import React, { useState } from "react";
import {
  Code2,
  Rocket,
  Zap,
  Menu,
  X,
  ChevronRight,
  CalendarClock,
  LayoutDashboard,
  ShieldCheck,
  ArrowRight,
  Cpu,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // Aplicando a fonte "deco" (Outfit) como padrão para todo o site
    <div className="min-h-screen flex flex-col font-deco selection:bg-brand-blue selection:text-white bg-brand-dark text-slate-50">
      {/* 1. HEADER (Navbar) */}
      <header className="fixed w-full top-0 z-50 glass border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Atualizado com Cores da Marca */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="relative flex items-center justify-center w-10 h-10 bg-white/5 rounded-lg border border-white/10 group-hover:border-brand-blue/50 transition-colors">
                {/* Ícone representando o logo geométrico */}
                <Cpu className="w-6 h-6 text-brand-blue" />
              </div>
              <span className="text-2xl font-squeeze font-bold tracking-wide text-white">
                Dev <span className="text-brand-blue">Daily</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a
                href="#hero"
                className="hover:text-brand-blue transition-colors"
              >
                Início
              </a>
              <a
                href="#classify"
                className="hover:text-brand-blue transition-colors"
              >
                Classify
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

            {/* Mobile Menu Button */}
            <button className="md:hidden text-slate-300" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
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
              href="#classify"
              className="text-slate-300 hover:text-brand-blue"
              onClick={toggleMenu}
            >
              Classify
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
        {/* 2. HERO SECTION */}
        <section
          id="hero"
          className="relative py-20 lg:py-32 overflow-hidden px-6"
        >
          {/* Background Decorative Blobs (Azuis agora) */}
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] opacity-30"></div>

          <div className="container mx-auto text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-brand-blue text-xs font-bold uppercase tracking-widest mb-8 font-squeeze">
              <Zap className="w-3 h-3" /> Agilidade Universitária
            </div>

            <h1 className="text-6xl md:text-8xl font-squeeze font-bold text-white mb-6 leading-[0.9] uppercase">
              Do Código à <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">
                Solução Real
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              O estúdio de desenvolvimento fundado por cientistas da computação.
              Unimos o rigor acadêmico com a velocidade do mercado para criar
              SaaS e produtos digitais.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 font-squeeze tracking-wide">
                CONHECER PROJETOS <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 glass text-white hover:bg-white/5 rounded-lg font-bold text-lg border border-white/10 transition-all font-squeeze tracking-wide">
                FALAR COM EXPERT
              </button>
            </div>
          </div>
        </section>

        {/* 3. NOSSO FLAGSHIP (Classify) */}
        <section id="classify" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-brand-blue/30 relative overflow-hidden group hover:border-brand-blue/50 transition-colors duration-500">
              {/* Glow effect Azul */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-1 bg-brand-blue rounded-full"></span>
                    <span className="text-brand-blue font-bold tracking-widest uppercase text-sm font-squeeze">
                      Nosso Flagship
                    </span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-squeeze font-bold text-white mb-6 uppercase">
                    Classify
                  </h2>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed font-light">
                    O sistema definitivo para{" "}
                    <strong className="text-white font-medium">
                      Gestão de Escalas Institucionais
                    </strong>
                    . Nascido da necessidade real de organizar horários
                    acadêmicos complexos.
                  </p>

                  <ul className="space-y-4 mb-8">
                    {[
                      "Algoritmo inteligente de prevenção de conflitos",
                      "Interface intuitiva para gestão acadêmica",
                      "Exportação e integração em tempo real",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-slate-300 font-light"
                      >
                        <div className="p-1 bg-brand-blue/20 rounded-full">
                          <ShieldCheck className="w-4 h-4 text-brand-blue" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button className="text-brand-blue font-bold hover:text-blue-400 flex items-center gap-2 transition-colors font-squeeze tracking-wide uppercase">
                    Ver Case Study <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Mockup Visual do Classify (Azul) */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900/80 aspect-video flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(0,102,255,0.15)] transition-shadow duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent opacity-50"></div>

                    <div className="grid grid-cols-3 gap-4 w-3/4 opacity-80 group-hover:scale-105 transition-transform duration-500">
                      <div className="col-span-1 h-24 bg-slate-800 rounded-lg border border-slate-700"></div>
                      <div className="col-span-2 h-24 bg-slate-800 rounded-lg border border-slate-700 flex items-center p-4">
                        <div className="w-full space-y-2">
                          <div className="h-2 w-1/2 bg-slate-600 rounded"></div>
                          <div className="h-2 w-3/4 bg-slate-600 rounded"></div>
                        </div>
                      </div>
                      <div className="col-span-3 h-32 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center">
                        <CalendarClock className="w-12 h-12 text-brand-blue opacity-50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SERVIÇOS */}
        <section id="services" className="py-20 px-6 bg-slate-950/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-squeeze font-bold text-white mb-4 uppercase">
                O que construímos
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto font-light">
                Utilizamos nossa stack moderna para entregar valor real.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Rocket className="w-8 h-8 text-brand-blue" />}
                title="Desenvolvimento SaaS"
                description="Criamos produtos escaláveis, multi-tenant e prontos para receber investimento."
              />
              <ServiceCard
                icon={<LayoutDashboard className="w-8 h-8 text-brand-blue" />}
                title="Transformação Digital"
                description="Modernizamos processos manuais de empresas locais com dashboards intuitivos."
              />
              <ServiceCard
                icon={<Code2 className="w-8 h-8 text-brand-blue" />}
                title="Consultoria Ágil"
                description="Refatoração e metodologias ágeis com a visão fresca da academia."
              />
            </div>
          </div>
        </section>
      </main>

      {/* 5. FOOTER */}
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

          <div className="flex gap-6 font-squeeze text-sm tracking-widest uppercase">
            <a
              href="#"
              className="text-slate-400 hover:text-brand-blue transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-brand-blue transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-brand-blue transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componente auxiliar atualizado
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
