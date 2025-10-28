import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Zap } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Rifa Max",
      isLive: true, // BADGE EM PRODUÇÃO
      description:
        "Sistema completo de rifas online em PRODUÇÃO REAL com pagamentos PIX, Redis para cache (60% mais rápido) e testes automatizados.",
      image: "/RIFAMAX.png",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "JUnit", "Mockito", "Docker", "PicPay API"],
      highlights: ["Sistema em produção", "60% mais rápido com Redis", "Testes automatizados"],
      githubUrl: "https://github.com/eronfelix-js/Rifa-Back-end",
      liveUrl: "#", // Adicionar link real se tiver
    },
    {
      title: "MovieFlix",
      isLive: false,
      description:
        "API de catálogo de filmes com Spring Security, JWT e PostgreSQL. CRUD completo com autenticação e controle de permissões.",
      image: "/movieflix.png",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "JWT"],
      highlights: ["API REST", "Autenticação JWT", "Spring Security"],
      githubUrl: "https://github.com/eronfelix-js/MovieFlix",
      liveUrl: "#",
    },
    {
      title: "User Email Send",
      isLive: false,
      description: "Microserviço de envio de emails com RabbitMQ, demonstrando arquitetura de mensageria e comunicação assíncrona.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Java", "RabbitMQ", "JavaMailSender", "PostgreSQL", "Flyway", "AWS EC2"],
      highlights: ["Microserviço", "RabbitMQ", "Deploy AWS"],
      githubUrl: "https://github.com/eronfelix-js/user-email-send",
      liveUrl: "#",
    },
    {
      title: "Basket API",
      isLive: false,
      description: "API de carrinho de compras com MongoDB e Redis. Cache de sessões e performance otimizada.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Java", "Spring", "MongoDB", "Redis", "Actuator"],
      highlights: ["NoSQL", "Redis Cache", "Monitoramento"],
      githubUrl: "https://github.com/eronfelix-js/BASKET",
      liveUrl: "#",
    },
    {
      title: "Compras Já",
      isLive: false,
      description: "Sistema de gestão de estoque e caixa para pequeno varejo. Docker e deploy na AWS EC2.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Java", "Spring Boot", "Docker", "PostgreSQL", "AWS EC2"],
      highlights: ["Gestão empresarial", "Docker", "AWS"],
      githubUrl: "https://github.com/eronfelix-js/ComprasJ-",
      liveUrl: "#",
    },
    {
      title: "Event API",
      isLive: false,
      description:
        "Gestão de eventos com foco em Clean Architecture e boas práticas de desenvolvimento.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Java", "Clean Architecture", "Firebase"],
      highlights: ["Clean Code", "Arquitetura limpa", "Boas práticas"],
      githubUrl: "https://github.com/eronfelix/task-app",
      liveUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Sistemas reais desenvolvidos com foco em qualidade, performance e boas práticas
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card overflow-hidden relative">
                {/* Badge EM PRODUÇÃO */}
                {project.isLive && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1.5 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      EM PRODUÇÃO
                    </div>
                  </div>
                )}

                <div className="aspect-video overflow-hidden bg-gradient-to-br from-cyan-100 to-slate-100">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                    {project.title}
                    {project.isLive && <Zap className="text-green-500 w-5 h-5" />}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-cyan-50 text-cyan-800 text-xs rounded-md font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botões */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 bg-transparent flex-1" 
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Código
                      </a>
                    </Button>
                    {project.isLive && (
                      <Button 
                        size="sm" 
                        className="flex items-center gap-2 bg-cyan-800 hover:bg-cyan-900 flex-1" 
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Ver Live
                        </a>
                      </Button>
                    )}
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