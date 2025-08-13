"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-cyan-800">Eron Felix</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-slate-600 hover:text-purple-600 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-slate-600 hover:text-purple-600 transition-colors"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-slate-600 hover:text-purple-600 transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-slate-600 hover:text-purple-600 transition-colors"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
