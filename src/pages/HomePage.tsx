import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Activity, Shield } from "lucide-react";
import roboticHand from "@/assets/robotic-hand-medical.png";

const HomePage = () => {
  const navigate = useNavigate();

  // Checa se o usuário está logado
  const isLoggedIn = () => !!localStorage.getItem("clienteToken");

  const handlePortalClick = () => {
    if (isLoggedIn()) {
      navigate("/portal-cidadao");
    } else {
      navigate("/clientes/loginClientes"); // corrigido
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-surface">
      {/* Navigation */}
      <nav className="relative z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary font-poppins">CUIDA.</div>

          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">Home</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">Sobre</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">Tecnologia</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">Serviços</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={handlePortalClick}
              className="bg-primary text-primary-foreground hover:bg-primary-hover rounded-full px-6 py-2.5 text-sm font-medium transition-cuida"
            >
              Portal Cidadão
            </Button>

            <Button
              onClick={() => navigate("/login")}
              variant="outline"
              className="rounded-full px-6 py-2.5 text-sm font-medium"
            >
              Área Gestores
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm text-primary font-medium">
                  Sistema Mais Avançado de Gestão de Medicamentos da Saúde
                </p>
                <h1 className="text-6xl font-bold text-foreground leading-[1.1] font-poppins">
                  Revolucionando
                  <br />
                  <span className="bg-gradient-to-r from-primary to-cuida-green bg-clip-text text-transparent">
                    Gestão de Saúde
                  </span> com IA
                </h1>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Transforme a gestão de medicamentos com IA. Diagnósticos de estoque, 
                controle automatizado e transparência inovadora desenvolvida pelo CUIDA.
                Explore o futuro da medicina. Empodere profissionais de saúde e cidadãos.
              </p>

              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handlePortalClick}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary-hover rounded-full px-8 py-3 text-sm font-medium flex items-center gap-2 shadow-cuida"
                >
                  <Heart className="w-4 h-4" />
                  Consultar Medicamentos
                </Button>

                <Button
                  onClick={() => navigate("/registry")}
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-3 text-sm font-medium flex items-center gap-2"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Registro de Unidades
                </Button>
              </div>
            </div>

            {/* Right Side - Robot illustration with floating cards */}
            <div className="relative">
              <div className="relative z-10 flex justify-center">
                <img 
                  src={roboticHand} 
                  alt="Inteligência Artificial em Saúde" 
                  className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
                />
              </div>

              {/* Floating cards */}
              <Card className="absolute top-8 right-0 bg-card shadow-cuida rounded-2xl p-4 w-48 animate-float">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                      <div className="w-8 h-8 bg-success rounded-full border-2 border-background"></div>
                      <div className="w-8 h-8 bg-warning rounded-full border-2 border-background"></div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground font-poppins">300+</div>
                      <div className="text-sm text-muted-foreground">Gestores Especializados</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute top-48 right-8 bg-card shadow-cuida rounded-2xl p-4 w-52 animate-float-delayed">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Activity className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground font-poppins">5,000+</div>
                      <div className="text-sm text-muted-foreground">Medicamentos Controlados</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute bottom-16 left-8 bg-card shadow-cuida rounded-2xl p-4 w-48 animate-float">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground font-poppins">100%</div>
                      <div className="text-sm text-muted-foreground">Transparência</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">Funcionalidades Principais</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubra como o CUIDA está transformando o acesso à saúde através da tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-cuida hover:shadow-cuida-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-poppins">Portal do Cidadão</h3>
                <p className="text-muted-foreground">
                  Consulte medicamentos disponíveis, localize unidades de saúde e acompanhe seu histórico médico.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center shadow-cuida hover:shadow-cuida-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-poppins">Gestão Inteligente</h3>
                <p className="text-muted-foreground">
                  Ferramentas avançadas para gestores controlarem estoque e otimizarem a distribuição de medicamentos.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center shadow-cuida hover:shadow-cuida-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Activity className="w-8 h-8 text-warning" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-poppins">IA Avançada</h3>
                <p className="text-muted-foreground">
                  Inteligência artificial para previsão de demanda, alertas automáticos e otimização de recursos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
