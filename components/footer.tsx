import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Eron Felix</h3>
              <p className="text-slate-300 leading-relaxed">
                Desenvolvedor Java Back-end especializado em Spring Boot, PostgreSQL e Redis. 
                Experiência em sistemas em produção e testes automatizados.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-300 hover:text-white transition-colors">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-300 hover:text-white transition-colors">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://github.com/eronfelix-js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/eron-felix-debarros/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:eronf5594@gmail.com" 
                  className="text-slate-300 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
              <p className="text-slate-400 text-sm">
                eronf5594@gmail.com<br />
                (91) 98446-4655
              </p>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-300">
              © {new Date().getFullYear()} Eron Felix. Desenvolvedor Java Back-end.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}