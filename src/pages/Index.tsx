import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  Package,
  Users,
  Eye,
  LogOut,
  FileText,
  Activity,
  HeartPulse,
  CheckCircle,
  AlertTriangle,
  Droplet
} from "lucide-react";

export default function EmployeeDashboardPage() {
  const navigate = useNavigate();

  const [medicamentos] = useState([
    { id: 1, nome: "Paracetamol 500mg", quantidade: 3, retiradoHoje: 5, visualizacoes: 12, fila: 8 },
    { id: 2, nome: "Dipirona 500mg", quantidade: 12, retiradoHoje: 2, visualizacoes: 7, fila: 3 },
    { id: 3, nome: "Omeprazol 20mg", quantidade: 1, retiradoHoje: 4, visualizacoes: 15, fila: 12 },
  ]);

  const [atendimentosHoje] = useState(15);
  const tempoMedioAtendimento = 12; // minutos
  const eficiencia = 85; // %

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-surface relative">
      {/* Cabeçalho */}
      <header className="bg-card shadow-cuida border-b border-border z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cuida-blue rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Painel do Funcionário</h1>
                <p className="text-sm text-muted-foreground">Sistema Interno - Secretaria de Saúde</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button className="bg-cuida-blue hover:bg-cuida-blue/90 gap-2" onClick={() => navigate("/medicamentos")}>
                Medicamentos
              </Button>
              <Button className="bg-cuida-green hover:bg-cuida-green/90 gap-2" onClick={() => navigate("/clientes-cadastrados")}>
                Clientes
              </Button>
              <Button
                className="bg-warning hover:bg-warning/90 gap-2"
                onClick={() => navigate("/documento")}
              >
                <FileText className="w-4 h-4" /> Documentos
              </Button>

              <span className="text-sm text-muted-foreground ml-4">Bem-vindo, João Silva</span>
              <Button variant="outline" size="sm" className="gap-2" onClick={handleLogout}>
                <LogOut className="w-4 h-4" /> Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative space-y-6">
        {/* Cards Estatísticos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Medicamentos</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {medicamentos.reduce((acc, m) => acc + m.quantidade, 0)}
              </div>
              <p className="text-xs text-muted-foreground">unidades em estoque</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pessoas na Fila</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {medicamentos.reduce((acc, m) => acc + m.fila, 0)}
              </div>
              <p className="text-xs text-muted-foreground">aguardando atendimento</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Visualizações Ativas</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {medicamentos.reduce((acc, m) => acc + m.visualizacoes, 0)}
              </div>
              <p className="text-xs text-muted-foreground">usuários online agora</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Atendimentos Hoje</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{atendimentosHoje}</div>
              <p className="text-xs text-muted-foreground">total de atendimentos</p>
            </CardContent>
          </Card>
        </div>

        {/* Indicadores de Eficiência */}
        <Card className="border-success bg-success-light">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-success-foreground">📊 Indicadores de Eficiência</CardTitle>
          </CardHeader>
          <CardContent className="text-base space-y-2 text-foreground">
            <p><strong>Tempo médio de atendimento:</strong> {tempoMedioAtendimento} minutos</p>
            <p><strong>Eficiência do postinho:</strong> {eficiencia}%</p>
            <p className="text-sm text-muted-foreground">Esses indicadores ajudam a monitorar a qualidade do atendimento oferecido.</p>
          </CardContent>
        </Card>

        {/* Avisos Importantes */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">📢 Avisos Importantes</h2>
          <div className="space-y-6">

            {/* Aviso 1 - Combate à Desnutrição */}
            <Card className="border-destructive bg-destructive/5">
              <CardHeader className="flex items-center gap-2">
                <Activity className="w-6 h-6 text-destructive" />
                <CardTitle className="text-destructive text-lg">Combata a Desnutrição</CardTitle>
              </CardHeader>
              <CardContent className="text-base text-foreground space-y-3 leading-relaxed">
                <p>
                  Mais de <strong>1 milhão de crianças</strong> morrem todos os anos em decorrência da desnutrição, uma condição que pode ser prevenida e tratada com os recursos certos.
                </p>
                <p>
                  Médicos Sem Fronteiras atua em comunidades vulneráveis, fornecendo alimentos terapêuticos, tratamento nutricional e cuidados médicos essenciais.
                </p>
                <p>
                  Com sua <strong>doação mensal</strong>, você ajuda a salvar vidas e permite que nossas equipes continuem respondendo a essa emergência global de forma constante e eficaz.
                </p>
                <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground text-base px-6 py-2 rounded-xl shadow">Doe Agora</Button>
              </CardContent>
            </Card>

            {/* Aviso 2 - 10 Dicas de Higiene */}
            <Card className="border-cuida-blue bg-cuida-blue/5">
              <CardHeader className="flex items-center gap-2">
                <Droplet className="w-6 h-6 text-cuida-blue" />
                <CardTitle className="text-cuida-blue text-lg">10 Dicas para Higiene Pessoal</CardTitle>
              </CardHeader>
              <CardContent className="text-base text-foreground space-y-3 leading-relaxed">
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Lave as mãos regularmente:</strong> previne infecções e mantém sua saúde protegida. <em>Dica extra: lave por pelo menos 20 segundos.</em></li>
                  <li><strong>Use sabonete adequado:</strong> escolha produtos suaves que não agridam a pele.</li>
                  <li><strong>Cuide da sua pele:</strong> hidrate diariamente para evitar ressecamento e alergias.</li>
                  <li><strong>Mantenha as unhas limpas:</strong> corte-as curtas para evitar acúmulo de sujeira e bactérias.</li>
                  <li><strong>Troque a roupa de cama semanalmente:</strong> reduz ácaros e melhora sua qualidade de sono.</li>
                  <li><strong>Utilize desodorante:</strong> prefira os que não irritam a pele. <em>Dica extra: evite aplicar imediatamente após depilar.</em></li>
                  <li><strong>Escove os dentes após refeições:</strong> previne cáries e mantém hálito fresco.</li>
                  <li><strong>Use fio dental diariamente:</strong> remove restos de comida onde a escova não alcança.</li>
                  <li><strong>Troque a escova de dentes:</strong> a cada 3 meses ou quando as cerdas desgastarem.</li>
                  <li><strong>Alimente-se bem:</strong> uma dieta saudável reflete diretamente na pele, cabelos e unhas.</li>
                </ol>
              </CardContent>
            </Card>

            {/* Aviso 3 - Setembro Amarelo */}
            <Card className="border-warning bg-warning-light">
              <CardHeader className="flex items-center gap-2">
                <HeartPulse className="w-6 h-6 text-warning" />
                <CardTitle className="text-warning text-lg">Setembro Amarelo 💛</CardTitle>
              </CardHeader>
              <CardContent className="text-base text-foreground space-y-4 leading-relaxed">
                <p>
                  <strong>Você não está sozinho!</strong> 💛 Falar é a melhor solução. O Setembro Amarelo é o mês de prevenção ao suicídio, e reforça a importância do diálogo, da empatia e do acolhimento.
                </p>
                <p>
                  Se você ou alguém que você conhece precisa de ajuda, procure apoio. O CVV (Centro de Valorização da Vida) está disponível 24h no telefone: <strong>188</strong>.
                </p>
                <Button
                  className="bg-warning hover:bg-warning/90 text-warning-foreground text-base px-6 py-2 rounded-xl shadow"
                  onClick={() => window.open("https://www.setembroamarelo.com/", "_blank")}
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

          </div>
        </section>
      </main>
    </div>
  );
}
