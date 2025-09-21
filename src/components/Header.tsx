import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">
          Meu Portfólio
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#habilidades" className="hover:text-primary transition-colors">Habilidades</a>
          <a href="#projetos" className="hover:text-primary transition-colors">Projetos</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/FernandoDev0" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://br.linkedin.com/in/fernandoaparecidocalassio" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:rodriguescalassio@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;