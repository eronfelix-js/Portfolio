export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            Sobre Mim
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-100 to-purple-100 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="/file.png"
                  alt="Eron Felix"
                  className="w-48 h-48 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                Desenvolvedor Java Back-end com <strong>mais de 1 ano de experiência</strong> construindo 
                sistemas escaláveis e APIs REST em produção.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                Tenho experiência sólida com <strong>Spring Boot, PostgreSQL, Redis</strong> e 
                testes automatizados (<strong>JUnit, Mockito</strong>). Participei de projetos em 
                equipe de 6 desenvolvedores e mantenho um sistema em produção real com pagamentos 
                PIX e autenticação JWT.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                Meu diferencial é combinar habilidades técnicas com visão de negócio, 
                entregando código limpo, testado e que realmente agrega valor ao produto.
              </p>

              <div className="pt-4">
                <h3 className="font-semibold text-slate-800 mb-3">Destaques:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-800 mr-2">✓</span>
                    <span className="text-slate-600">Sistema em produção com usuários reais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-800 mr-2">✓</span>
                    <span className="text-slate-600">Experiência com Redis para otimização</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-800 mr-2">✓</span>
                    <span className="text-slate-600">Testes automatizados (JUnit/Mockito)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-800 mr-2">✓</span>
                    <span className="text-slate-600">Trabalho em equipe ágil (Scrum)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}