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
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Criando Código, <span className="text-cyan-800">Criando Possibilidades</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Olá! Sou Eron Felix, 23 anos, desenvolvedor em transição de carreira. Explore minha jornada e descubra como
            posso contribuir para seu próximo projeto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-cyan-800 hover:bg-cyan-900 text-white px-8"
              onClick={() => scrollToSection("projects")}
            >
              Ver Projetos
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
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/eron-felix-debarros/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a href="eronf5594@gmail.com" className="text-slate-600 hover:text-purple-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
