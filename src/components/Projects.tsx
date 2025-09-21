import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Truck } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Delivery Tech",
      description: "Sistema completo de delivery desenvolvido recentemente, incluindo gestão de pedidos, cardápio digital e integração com pagamentos. Projeto focado em demonstrar habilidades full stack.",
      technologies: ["Angular", "Java", "Spring Boot", "MySQL", "AWS"],
      icon: Truck,
      status: "Concluído",
      highlights: [
        "Interface responsiva e intuitiva",
        "API RESTful robusta",
        "Integração com gateway de pagamento",
        "Deploy em cloud AWS"
      ]
    }
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Projetos Recentes</span>
          </h2>
          
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="card-modern group">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <Badge variant="outline" className="text-green-400 border-green-400">
                        {project.status}
                      </Badge>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-3 text-primary">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Principais Recursos:</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm">
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-primary-glow">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Mais projetos em desenvolvimento...
            </p>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              Ver Todos no GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;