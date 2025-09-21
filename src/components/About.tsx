const About = () => {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="card-modern">
                <h3 className="text-xl font-semibold text-primary mb-3">2008 - Início da Jornada</h3>
                <p className="text-muted-foreground">
                  Comecei minha trajetória na área de tecnologia com um curso de manutenção de PC, 
                  descobrindo minha paixão por resolver problemas técnicos e entender como as coisas funcionam.
                </p>
              </div>
              
              <div className="card-modern">
                <h3 className="text-xl font-semibold text-primary mb-3">Evolução Profissional</h3>
                <p className="text-muted-foreground">
                  Expandindo meus conhecimentos para jogos eletrônicos, sempre mantendo o foco 
                  em tecnologia e inovação, buscando entender as tendências do mercado.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card-modern">
                <h3 className="text-xl font-semibold text-primary mb-3">Presente - Programação</h3>
                <p className="text-muted-foreground">
                  Atualmente cursando programação na faculdade, focando em desenvolvimento 
                  full stack com Java, Spring e Angular. Cada linha de código é um passo 
                  em direção ao meu objetivo.
                </p>
              </div>
              
              <div className="card-modern">
                <h3 className="text-xl font-semibold text-primary mb-3">Objetivo</h3>
                <p className="text-muted-foreground">
                  Busco uma oportunidade para mudar de vida definitivamente, aplicando 
                  toda minha experiência e dedicação em uma carreira sólida como desenvolvedor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;