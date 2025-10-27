export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Sobre Mim</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-100 to-purple-100 rounded-full flex items-center justify-center">
                <img
                  src="/file.png"
                  alt="Eron Felix"
                  className="w-48 h-48 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Aos 23 anos, estou em uma empolgante transição de carreira para o desenvolvimento de software. Minha
                paixão por tecnologia e resolução de problemas me levou a mergulhar no mundo da programação.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Sou desenvolvedor full stack com experiência em projetos web e mobile, utilizando tecnologias como Java, Spring Boot, React, React Native e Firebase. Tenho um olhar voltado não apenas para o código, mas também para os objetivos de negócio, unindo tecnologia e estratégia para entregar soluções que realmente geram valor.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Busco oportunidades para aplicar meus conhecimentos em projetos reais e contribuir para equipes que
                valorizam inovação, qualidade e crescimento mútuo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
