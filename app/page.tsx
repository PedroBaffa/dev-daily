"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code2, Cloud, Zap, Layers, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1525] via-[#0f1f3a] to-[#0a1525]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0f1f3a]/30 border-b border-slate-600/50 animate-in fade-in slide-in-from-top duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-white transition-transform hover:scale-105 duration-300">
              Dev Daily
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#projects" className="text-slate-300 hover:text-white transition-colors relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0066CC] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#services" className="text-slate-300 hover:text-white transition-colors relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0066CC] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#about" className="text-slate-300 hover:text-white transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0066CC] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-white transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0066CC] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Button className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#0066CC]/50">
                Start a Project
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
                Building the Code That Powers Your Daily Life.
              </h1>
              <p className="text-xl text-slate-300 text-pretty animate-in fade-in slide-in-from-left duration-700 delay-150">
                A software studio turning complex problems into simple, daily solutions. From campus to the cloud.
              </p>
              <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-left duration-700 delay-300">
                <Button
                  size="lg"
                  className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0066CC]/50"
                >
                  View Our Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-500 text-white hover:bg-[#1E88E5]/10 bg-transparent transition-all duration-300 hover:scale-105 hover:border-[#1E88E5]"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="backdrop-blur-xl bg-[#1a2f4a]/40 border border-slate-600/50 rounded-2xl p-8 shadow-2xl hover:shadow-[#0066CC]/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="space-y-4 font-mono text-sm">
                  <div className="text-slate-400 animate-in fade-in duration-500 delay-700">
                    <span className="text-[#7B8794]">const</span> <span className="text-[#1E88E5]">devDaily</span> ={" "}
                    <span className="text-[#7B8794]">{"{"}</span>
                  </div>
                  <div className="pl-4 text-slate-400 animate-in fade-in duration-500 delay-[800ms]">
                    <span className="text-[#0066CC]">mission</span>:{" "}
                    <span className="text-[#1E88E5]">'Solve Daily Problems'</span>,
                  </div>
                  <div className="pl-4 text-slate-400 animate-in fade-in duration-500 delay-[900ms]">
                    <span className="text-[#0066CC]">stack</span>:{" "}
                    <span className="text-[#1E88E5]">['React', 'Node', 'Cloud']</span>,
                  </div>
                  <div className="pl-4 text-slate-400 animate-in fade-in duration-500 delay-[1000ms]">
                    <span className="text-[#0066CC]">innovative</span>: <span className="text-[#1E88E5]">true</span>
                  </div>
                  <div className="text-[#7B8794] animate-in fade-in duration-500 delay-[1100ms]">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="featured-header"
            data-animate
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible["featured-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Innovation</h2>
            <p className="text-xl text-slate-300">Our flagship project solving real-world challenges</p>
          </div>

          <Card
            id="featured-card"
            data-animate
            className={`backdrop-blur-xl bg-[#1a2f4a]/40 border-slate-600/50 overflow-hidden shadow-2xl hover:shadow-[#0066CC]/30 transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1 ${
              isVisible["featured-card"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="space-y-6">
                <div className="inline-block backdrop-blur-md bg-[#0066CC]/20 border border-[#0066CC]/30 rounded-full px-4 py-1 text-[#1E88E5] font-semibold text-sm animate-in fade-in duration-500">
                  FLAGSHIP PROJECT
                </div>
                <h3 className="text-3xl font-bold text-white">Classify</h3>
                <p className="text-lg text-slate-300 text-pretty">
                  An intelligent institutional schedule system that solves the chaos of academic coordination. Features
                  conflict detection, resource allocation, and real-time updates.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "Vite"].map((tech, i) => (
                    <span
                      key={tech}
                      className={`backdrop-blur-md ${
                        i < 2
                          ? "bg-[#0066CC]/20 border-[#0066CC]/30 text-[#1E88E5]"
                          : "bg-[#7B8794]/20 border-[#7B8794]/30 text-[#7B8794]"
                      } border px-3 py-1 rounded-full text-sm font-medium hover:scale-110 transition-transform duration-300`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#0066CC]/50">
                  View Case Study
                </Button>
              </div>
              <div className="backdrop-blur-xl bg-[#0a1525]/60 border border-slate-600/50 rounded-xl p-6 space-y-4 hover:border-[#0066CC]/30 transition-all duration-500">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse delay-75"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse delay-150"></div>
                  <span className="ml-2 font-mono">classify-dashboard.tsx</span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-slate-400">
                    <span className="text-[#7B8794]">// Glassmorphism UI</span>
                  </div>
                  <div className="backdrop-blur-md bg-[#0066CC]/10 border border-[#0066CC]/30 rounded p-3 text-[#1E88E5] hover:bg-[#0066CC]/20 hover:-translate-y-1 transition-all duration-300">
                    <div>Schedule: CS 101</div>
                    <div className="text-xs text-slate-400">Mon 9:00 - Room A12</div>
                  </div>
                  <div className="backdrop-blur-md bg-[#7B8794]/10 border border-[#7B8794]/30 rounded p-3 text-[#7B8794] hover:bg-[#7B8794]/20 hover:-translate-y-1 transition-all duration-300">
                    <div>No Conflicts</div>
                    <div className="text-xs text-slate-400">All resources available</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="services-header"
            data-animate
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible["services-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-xl text-slate-300">End-to-end solutions for modern challenges</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "SaaS Development",
                desc: "Full-cycle development from idea to MVP. We build scalable, modern SaaS products that users love.",
                delay: "0",
                id: "service-1",
              },
              {
                icon: Zap,
                title: "Digital Transformation",
                desc: "Modernizing legacy processes for local businesses. Bringing efficiency through automation and innovation.",
                delay: "200",
                id: "service-2",
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                desc: "Scalable architectures ready for growth. Deploy with confidence using modern cloud infrastructure.",
                delay: "400",
                id: "service-3",
              },
            ].map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.id}
                  id={service.id}
                  data-animate
                  className={`backdrop-blur-xl bg-[#1a2f4a]/40 border-slate-600/50 p-8 hover:bg-[#1a2f4a]/60 hover:border-[#0066CC]/50 hover:shadow-xl hover:shadow-[#0066CC]/20 transition-all duration-500 group hover:-translate-y-2 ${
                    isVisible[service.id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: isVisible[service.id] ? service.delay + "ms" : "0ms" }}
                >
                  <div className="w-12 h-12 bg-[#0066CC]/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#1E88E5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#1E88E5] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-pretty">{service.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Dev Daily */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="about-card"
            data-animate
            className={`backdrop-blur-xl bg-gradient-to-r from-[#1a2f4a]/40 to-[#1a3a5a]/40 border border-slate-600/50 rounded-2xl p-12 lg:p-16 hover:border-[#0066CC]/50 hover:shadow-2xl hover:shadow-[#0066CC]/20 transition-all duration-700 ${
              isVisible["about-card"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Dev Daily?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#0066CC]/20 rounded-lg flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                      <Layers className="w-5 h-5 text-[#1E88E5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Born in the Lab</h3>
                      <p className="text-slate-300">
                        Founded by Computer Science students, we bring an academic rigor and fresh perspective to
                        technology challenges.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#0066CC]/20 rounded-lg flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                      <Zap className="w-5 h-5 text-[#1E88E5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Agile DNA</h3>
                      <p className="text-slate-300">
                        Fast delivery cycles using modern stacks. We iterate quickly and ship quality code that scales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-md bg-[#0a1525]/60 border border-slate-600/50 rounded-xl p-8 hover:border-[#0066CC]/30 transition-all duration-500">
                <div className="space-y-4">
                  {["Code Quality", "Innovation", "Delivery Speed"].map((label, i) => (
                    <div
                      key={label}
                      className="flex items-center justify-between p-4 backdrop-blur-sm bg-[#1a2f4a]/50 rounded-lg hover:bg-[#1a2f4a]/70 transition-all duration-300 group"
                    >
                      <span className="text-slate-300 group-hover:text-white transition-colors">{label}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <div
                            key={j}
                            className="w-2 h-8 bg-[#0066CC] rounded-full hover:scale-110 transition-transform duration-300"
                            style={{
                              animation: isVisible["about-card"]
                                ? `growBar 0.6s ease-out ${i * 200 + j * 100}ms forwards`
                                : "none",
                              transformOrigin: "bottom",
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            id="cta-card"
            data-animate
            className={`backdrop-blur-xl bg-gradient-to-r from-[#0066CC]/20 to-[#1a2f4a]/40 border border-[#0066CC]/30 rounded-2xl p-12 lg:p-16 hover:border-[#0066CC]/60 hover:shadow-2xl hover:shadow-[#0066CC]/30 hover:scale-[1.02] transition-all duration-500 ${
              isVisible["cta-card"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's turn your idea into reality. Get in touch with our team today.
            </p>
            <Button
              size="lg"
              className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold text-lg px-8 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#0066CC]/50 animate-pulse hover:animate-none"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-600/50 backdrop-blur-md bg-[#0f1f3a]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300 inline-block">
                Dev Daily
              </div>
              <p className="text-slate-400">Building the code that powers your daily life.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Projects", "Services", "About"].map((link) => (
                  <Link
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {[Github, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 backdrop-blur-md bg-[#1a2f4a]/50 border border-slate-600/50 rounded-lg flex items-center justify-center hover:bg-[#0066CC]/20 hover:border-[#0066CC]/30 hover:-translate-y-1 hover:scale-110 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-slate-300 group-hover:text-[#1E88E5] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-600/50 mt-8 pt-8 text-center text-slate-400">
            <p>© 2025 Dev Daily. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes growBar {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  )
}
