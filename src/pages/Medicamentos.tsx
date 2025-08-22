"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, Users, Eye, Search, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Medicamento {
  id: string;
  nome: string;
  bula: string;
  receita: boolean;
  quantidade: number;
  fila: number;
  visualizacoes: number;
}

export default function MedicamentosPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const medicamentos: Medicamento[] = [
    {
      id: "1",
      nome: "Paracetamol 500mg",
      bula: "Alívio da dor e febre. Tomar com água.",
      receita: false,
      quantidade: 150,
      fila: 8,
      visualizacoes: 12,
    },
    {
      id: "2",
      nome: "Dipirona 500mg",
      bula: "Analgésico e antitérmico.",
      receita: true,
      quantidade: 89,
      fila: 3,
      visualizacoes: 7,
    },
    {
      id: "3",
      nome: "Omeprazol 20mg",
      bula: "Reduz ácido estomacal.",
      receita: false,
      quantidade: 45,
      fila: 12,
      visualizacoes: 15,
    },
    {
      id: "4",
      nome: "Amoxicilina 500mg",
      bula: "Antibiótico para infecções bacterianas.",
      receita: true,
      quantidade: 67,
      fila: 5,
      visualizacoes: 9,
    },
    {
      id: "5",
      nome: "Ibuprofeno 400mg",
      bula: "Anti-inflamatório e analgésico.",
      receita: false,
      quantidade: 23,
      fila: 15,
      visualizacoes: 18,
    }
  ];

  const filteredMedicamentos = medicamentos.filter(med =>
    med.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getEstoqueStatus = (quantidade: number) => {
    if (quantidade > 50) return { status: "Alto", variant: "default" as const };
    if (quantidade > 20) return { status: "Médio", variant: "secondary" as const };
    return { status: "Baixo", variant: "destructive" as const };
  };

  return (
    <div className="min-h-screen bg-surface py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Package className="w-8 h-8 text-cuida-blue" />
              Medicamentos Disponíveis
            </h1>
            <p className="text-muted-foreground mt-2">Consulte o estoque e disponibilidade de medicamentos</p>
          </div>
          <Button variant="outline" onClick={() => navigate(-1)} className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Button>
        </div>

        {/* Barra de pesquisa */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar medicamento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Estatísticas rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-cuida-blue mb-1">
                {medicamentos.length}
              </div>
              <div className="text-sm text-muted-foreground">Total de Medicamentos</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success mb-1">
                {medicamentos.reduce((acc, med) => acc + med.quantidade, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Unidades em Estoque</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning mb-1">
                {medicamentos.reduce((acc, med) => acc + med.fila, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Pessoas na Fila</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-cuida-green mb-1">
                {medicamentos.reduce((acc, med) => acc + med.visualizacoes, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Visualizações Ativas</div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de medicamentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicamentos.map((medicamento) => {
            const estoqueStatus = getEstoqueStatus(medicamento.quantidade);
            
            return (
              <Card key={medicamento.id} className="shadow-cuida hover:shadow-cuida-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-bold">{medicamento.nome}</CardTitle>
                    <Badge variant={estoqueStatus.variant}>
                      {estoqueStatus.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {medicamento.receita
                      ? "⚠️ Medicamento controlado: requer receita médica"
                      : "✅ Medicamento sem necessidade de receita"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{medicamento.bula}</p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <Package className="w-3 h-3" /> {medicamento.quantidade} unidades
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Users className="w-3 h-3" /> {medicamento.fila} na fila
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Eye className="w-3 h-3" /> {medicamento.visualizacoes} visualizando
                    </Badge>
                  </div>

                  <div className="pt-2">
                    <Button 
                      className="w-full bg-cuida-blue hover:bg-cuida-blue/90"
                      onClick={() => navigate(`/medicamento/${medicamento.id}`)}
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredMedicamentos.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Nenhum medicamento encontrado</h3>
            <p className="text-muted-foreground">Tente pesquisar com outros termos.</p>
          </div>
        )}
      </div>
    </div>
  );
}