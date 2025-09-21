import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Vamos Conversar</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Estou sempre aberto a novas oportunidades e projetos interessantes. 
                  Se você tem uma vaga ou projeto em mente, não hesite em entrar em contato!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/30">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:rodriguescalassio@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      rodriguescalassio@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/30">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <a href="tel:+5511999999999" className="text-muted-foreground hover:text-primary transition-colors">
                      (11) 99999-9999
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/30">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="font-semibold mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/FernandoDev0" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://br.linkedin.com/in/fernandoaparecidocalassio" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="mailto:rodriguescalassio@gmail.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Informações Adicionais */}
            <div className="card-modern">
              <h3 className="text-xl font-semibold mb-6">Informações Profissionais</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/20">
                  <h4 className="font-semibold mb-2">Disponibilidade</h4>
                  <p className="text-muted-foreground">
                    Aberto a oportunidades remotas e presenciais em São Paulo
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary/20">
                  <h4 className="font-semibold mb-2">Idiomas</h4>
                  <p className="text-muted-foreground">
                    Português (Nativo), Inglês (Intermediário)
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary/20">
                  <h4 className="font-semibold mb-2">Objetivo</h4>
                  <p className="text-muted-foreground">
                    Desenvolvedor Backend especializado em Java Spring Boot e AWS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;