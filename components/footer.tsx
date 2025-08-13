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
                Desenvolvedor em transição de carreira, apaixonado por criar soluções inovadoras e impactantes através
                da tecnologia.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
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
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a href="mailto:eron@email.com" className="text-slate-300 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-300">© 2024 Eron Felix. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
