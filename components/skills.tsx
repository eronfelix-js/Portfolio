import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Micro Serviços","Java","Spring Boot","Type Script","Node.js", "Express", "API REST", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Ferramentas",
      skills: ["Git", "GitHub", "VS Code","intellij", "Figma", "Vercel", "Netlify"],
    },
    {
      title: "Soft Skills",
      skills: ["Resolução de Problemas", "Trabalho em Equipe", "Comunicação", "Aprendizado Contínuo"],
    },
  ]

  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Habilidades</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cyan-800 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-slate-600 flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
