import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={profileImage} 
              alt="Minha foto profissional" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/30 glow-effect object-cover"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Fernando Aparecido</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Desenvolvedor Full Stack | Java & Angular
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou estudante de Tecnologia da Informação e atualmente curso graduação na área, buscando constante evolução e aprendizado. Minha trajetória profissional começou na área de telecomunicações, onde desenvolvi habilidades em suporte e operação técnica, mas meu objetivo é crescer na área de desenvolvimento de software.

              Tenho estudado e praticado diversas tecnologias que fazem parte do mercado atual, com foco em Java, Spring Boot, Angular e também outras ferramentas e frameworks que fortalecem minhas competências em desenvolvimento full stack. Meu interesse é aplicar esses conhecimentos na construção de soluções eficientes, com boas práticas de código e foco na experiência do usuário.
              </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="outline" size="lg" asChild>
              <a href="#contato">
                Entre em Contato
              </a>
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;