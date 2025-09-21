import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Settings, Users, Target, Lightbulb, MessageSquare } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Angular", level: "Intermediário", icon: Code },
    { name: "Java", level: "Intermediário", icon: Code },
    { name: "Spring Framework", level: "Intermediário", icon: Settings },
    { name: "Bancos de Dados", level: "Intermediário", icon: Database },
    { name: "AWS EC2", level: "Básico", icon: Cloud },
    { name: "TypeScript", level: "Intermediário", icon: Code },
    { name: "JavaScript", level: "Intermediário", icon: Code },
    { name: "HTML/CSS", level: "Avançado", icon: Code },
  ];

  const softSkills = [
    { name: "Resolução de Problemas", icon: Target },
    { name: "Aprendizado Contínuo", icon: Lightbulb },
    { name: "Trabalho em Equipe", icon: Users },
    { name: "Comunicação", icon: MessageSquare },
    { name: "Persistência", icon: Target },
    { name: "Adaptabilidade", icon: Settings },
  ];

  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Habilidades</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Habilidades Técnicas */}
            <div className="card-modern">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Habilidades Técnicas</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{skill.name}</p>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="card-modern">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Soft Skills</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <p className="font-medium">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;