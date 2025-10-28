"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="gradient-bg min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge de destaque */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-800/10 border border-cyan-800/20 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-800 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-800"></span>
            </span>
            <span className="text-sm font-medium text-cyan-800">Disponível para oportunidades</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Desenvolvedor <span className="text-cyan-800">Java Back-end</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Especializado em <strong>Spring Boot, PostgreSQL e Redis</strong>. 
            Experiência em sistemas em produção real com foco em performance, 
            testes automatizados e arquitetura escalável.
          </p>

          <p className="text-base text-slate-500 mb-8 max-w-2xl mx-auto">
            1+ ano de experiência | Projetos em produção | Testes com JUnit/Mockito
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-cyan-800 hover:bg-cyan-900 text-white px-8"
              onClick={() => scrollToSection("projects")}
            >
              Ver Projetos em Produção
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-800 text-cyan-800 hover:bg-cyan-50 px-8 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Entre em Contato
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/eronfelix-js"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-cyan-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/eron-felix-debarros/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-cyan-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:eronf5594@gmail.com" 
              className="text-slate-600 hover:text-cyan-800 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}