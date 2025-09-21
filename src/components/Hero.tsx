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
              <span className="gradient-text">Seu Nome</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Desenvolvedor Full Stack | Java & Angular
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Persisto na carreira de TI desde 2008, começando com curso de manutenção de PC, 
              depois jogos eletrônicos. Agora cursando programação na faculdade, buscando uma 
              oportunidade para mudar de vida e construir uma carreira sólida em tecnologia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
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