import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">Meu Portfólio</h3>
              <p className="text-muted-foreground mb-4">
                Desenvolvedor Full Stack apaixonado por tecnologia, 
                buscando oportunidades para crescer e contribuir.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:seu.email@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <nav className="space-y-2">
                <a href="#sobre" className="block text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </a>
                <a href="#habilidades" className="block text-muted-foreground hover:text-primary transition-colors">
                  Habilidades
                </a>
                <a href="#projetos" className="block text-muted-foreground hover:text-primary transition-colors">
                  Projetos
                </a>
                <a href="#contato" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </nav>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tecnologias</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Angular & TypeScript</p>
                <p>Java & Spring Framework</p>
                <p>Bancos de Dados</p>
                <p>AWS Cloud Services</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Feito com <Heart className="h-4 w-4 text-red-500" /> usando React & TypeScript
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 Meu Portfólio. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;