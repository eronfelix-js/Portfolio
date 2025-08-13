import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

// PARA ADICIONAR NOVOS PROJETOS:
// Simplesmente adicione um novo objeto ao array 'projects' abaixo
// Siga a mesma estrutura: title, description, image, technologies, githubUrl, liveUrl
export function Projects() {
  const projects = [
    {
      title: "MovieFlix",
      description:
        "Uma aplicação desenvolvida em Java com Spring Boot, Spring Security, JWT e PostgreSQL, focada na gestão de catálogos de filmes.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Java", "Spring Boot", "PotgresSQL", "Spring Security"],
      githubUrl: "https://github.com/eronfelix-js/MovieFlix",
      liveUrl: "https://ecommerce-demo.vercel.app",
    },
    {
      title: "Compras Já",
      description: "Back-end de um sitema de gestão de estoque e caixa ,feito para o pequeno varejista.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Java", "SpringBoot", "Docker", "PostgresSQL","EC2"],
      githubUrl: "https://github.com/eronfelix-js/ComprasJ-",
      liveUrl: "https://dashboard-demo.vercel.app",
    },
    {
      title: "Event-api",
      description:
        "Projeto de gestão de eventos, focado em Arquitetura Limpa e suas boas praticas.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Java", "Clean Architecture", "Firebase", "Tailwind"],
      githubUrl: "https://github.com/eronfelix/task-app",
      liveUrl: "https://task-app-demo.vercel.app",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">Trabalhos Recentes</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi durante minha jornada de aprendizado. Cada um representa um
            passo importante no meu crescimento como desenvolvedor.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Código
                      </a>
                    </Button>
                    <Button size="sm" className="flex items-center gap-2 bg-cyan-800 hover:bg-cyan-900" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Ver Projeto
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
