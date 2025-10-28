import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Back-end (Principal)",
      icon: "⚙️",
      skills: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Hibernate/JPA",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
      ],
    },
    {
      title: "Testes & Qualidade",
      icon: "✅",
      skills: [
        "JUnit 5",
        "Mockito",
        "TDD",
        "Testes de Integração",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        "Git/GitHub",
        "Docker",
        "Maven",
        "Postman",
        "AWS (EC2)",
        "IntelliJ IDEA",
      ],
    },
    {
      title: "Front-end",
      icon: "🎨",
      skills: [
        "React",
        "Next.js",
        "Angular",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "Arquitetura",
      icon: "🏗️",
      skills: [
        "Clean Architecture",
        "API REST",
        "Microserviços",
        "RabbitMQ",
        "Kafka",
      ],
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: [
        "Trabalho em Equipe",
        "Metodologias Ágeis",
        "Code Review",
        "Resolução de Problemas",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
            Stack Técnica
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para construir soluções escaláveis
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-cyan-800"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-xl font-bold text-slate-800">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-slate-600 flex items-center">
                        <span className="w-2 h-2 bg-cyan-800 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Destaque especial */}
          <div className="mt-12 text-center bg-cyan-800/10 border border-cyan-800/20 rounded-lg p-6">
            <p className="text-slate-700">
              <strong className="text-cyan-800">Especialização:</strong> Java Back-end | 
              <strong className="text-cyan-800"> Diferencial:</strong> Redis, Testes Automatizados, Sistemas em Produção
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}