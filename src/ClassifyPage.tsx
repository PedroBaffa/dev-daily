import React, { useEffect } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  Database,
  Layout,
  Server,
  ExternalLink,
  Cpu,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-deco bg-brand-dark text-slate-50 selection:bg-brand-blue selection:text-white">
      <nav className="fixed w-full top-0 z-50 glass border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold">Voltar para Home</span>
          </Link>

          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-brand-blue" />
            <span className="font-squeeze font-bold tracking-wide">
              Dev <span className="text-brand-blue">Daily</span>
            </span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <header className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              Case Study • EdTech
            </div>

            <h1 className="text-5xl md:text-7xl font-squeeze font-bold text-white mb-6 uppercase leading-tight">
              Classify <span className="text-slate-600">System</span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-8">
              A revolução na gestão de escalas universitárias. Transformamos um
              processo manual de 40 horas numa tarefa de 15 minutos com
              algoritmos inteligentes.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-brand-blue/20 flex items-center gap-2 font-squeeze tracking-wide">
                VISITAR APLICAÇÃO <ExternalLink className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4 px-6 py-3 rounded-lg border border-white/10 glass">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-slate-700 border-2 border-brand-dark flex items-center justify-center text-xs text-white"
                    >
                      <Users size={12} />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-slate-300 font-medium">
                  +500 Alunos ativos
                </span>
              </div>
            </div>
          </header>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-20 group">
            <div className="absolute inset-0 bg-slate-800/50 flex items-center justify-center">
              <div className="text-center">
                <Layout className="w-20 h-20 text-slate-600 mb-4 mx-auto group-hover:text-brand-blue transition-colors duration-500" />
                <p className="text-slate-500 font-mono text-sm">
                  Preview da Interface do Classify
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-squeeze font-bold text-white mb-6 uppercase">
                O Desafio
              </h2>
              <div className="prose prose-invert text-slate-400 font-light leading-relaxed mb-10">
                <p className="mb-4">
                  A instituição enfrentava um caos logístico a cada semestre.
                  Coordenadores gastavam semanas tentando encaixar horários de
                  professores, disponibilidade de salas e turmas de alunos sem
                  gerar conflitos.
                </p>
                <p>
                  O uso de planilhas Excel resultava em erros humanos
                  frequentes, dupla reserva de salas e frustração geral. Era
                  necessário um sistema centralizado, à prova de falhas e
                  automatizado.
                </p>
              </div>

              <h2 className="text-3xl font-squeeze font-bold text-white mb-6 uppercase">
                A Solução
              </h2>
              <ul className="space-y-4">
                {[
                  "Algoritmo de 'Backtracking' para resolução de conflitos de horário.",
                  "Interface Drag-and-Drop intuitiva para ajustes finos.",
                  "Sistema de notificações em tempo real para alunos e professores.",
                  "Geração automática de relatórios em PDF para a coordenação.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 glass rounded-xl border border-white/5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="glass p-6 rounded-2xl border border-white/5 sticky top-24">
                <h3 className="text-xl font-squeeze font-bold text-white mb-6 uppercase border-b border-white/10 pb-4">
                  Tech Stack
                </h3>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                      Front-end
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <TechBadge icon={<Code2 size={14} />} name="React" />
                      <TechBadge icon={<Layout size={14} />} name="Tailwind" />
                      <TechBadge icon={<Code2 size={14} />} name="TypeScript" />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                      Back-end
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <TechBadge icon={<Server size={14} />} name="Node.js" />
                      <TechBadge
                        icon={<Database size={14} />}
                        name="PostgreSQL"
                      />
                      <TechBadge icon={<Server size={14} />} name="Prisma" />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                      Segurança
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <TechBadge
                        icon={<ShieldCheck size={14} />}
                        name="JWT Auth"
                      />
                      <TechBadge
                        icon={<ShieldCheck size={14} />}
                        name="Bcrypt"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-slate-600 text-sm">
        © 2025 Dev Daily - Classify Project
      </footer>
    </div>
  );
};

const TechBadge = ({ icon, name }: { icon: any; name: string }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 text-slate-300 text-sm border border-white/5 hover:border-brand-blue/30 transition-colors cursor-default">
    {icon}
    {name}
  </span>
);

export default ProjectPage;
