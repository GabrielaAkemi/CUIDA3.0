import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Calendar, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Documento: React.FC = () => {
  const navigate = useNavigate();

  // Dados simulados de documentos
  const documentos = [
    {
      id: 1,
      nome: "Relatório Mensal - Janeiro 2025",
      tipo: "Relatório",
      dataGeracao: "2025-01-15",
      tamanho: "2.3 MB",
      status: "Finalizado"
    },
    {
      id: 2,
      nome: "Lista de Medicamentos em Falta",
      tipo: "Lista",
      dataGeracao: "2025-01-20",
      tamanho: "1.1 MB",
      status: "Finalizado"
    },
    {
      id: 3,
      nome: "Protocolo de Atendimento COVID-19",
      tipo: "Protocolo",
      dataGeracao: "2025-01-18",
      tamanho: "5.7 MB",
      status: "Finalizado"
    },
    {
      id: 4,
      nome: "Inventário de Estoque - Dezembro",
      tipo: "Inventário",
      dataGeracao: "2025-01-10",
      tamanho: "3.2 MB",
      status: "Em processamento"
    }
  ];

  return (
    <div className="min-h-screen bg-surface p-8">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <FileText className="w-8 h-8 text-cuida-blue" />
              Área de Documentos
            </h1>
            <p className="text-muted-foreground mt-2">Consulte e gerencie documentos do sistema</p>
          </div>
          <Button variant="outline" onClick={() => navigate(-1)} className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Button>
        </div>

        {/* Grid de Documentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentos.map((doc) => (
            <Card key={doc.id} className="shadow-cuida hover:shadow-cuida-lg transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-cuida-blue" />
                    <span className="text-xs font-medium text-muted-foreground bg-accent px-2 py-1 rounded">
                      {doc.tipo}
                    </span>
                  </div>
                  <div className={`text-xs font-medium px-2 py-1 rounded ${
                    doc.status === 'Finalizado' 
                      ? 'bg-success-light text-success' 
                      : 'bg-warning-light text-warning'
                  }`}>
                    {doc.status}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold leading-tight">
                  {doc.nome}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(doc.dataGeracao).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="text-muted-foreground">
                    <strong>Tamanho:</strong> {doc.tamanho}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 gap-1"
                    disabled={doc.status !== 'Finalizado'}
                  >
                    <Eye className="w-3 h-3" />
                    Visualizar
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 gap-1 bg-cuida-blue hover:bg-cuida-blue/90"
                    disabled={doc.status !== 'Finalizado'}
                  >
                    <Download className="w-3 h-3" />
                    Baixar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção de Estatísticas */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-cuida-blue bg-cuida-blue/5">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-cuida-blue mb-2">
                {documentos.filter(d => d.status === 'Finalizado').length}
              </div>
              <div className="text-sm text-muted-foreground">Documentos Finalizados</div>
            </CardContent>
          </Card>
          
          <Card className="border-warning bg-warning-light">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-warning mb-2">
                {documentos.filter(d => d.status === 'Em processamento').length}
              </div>
              <div className="text-sm text-muted-foreground">Em Processamento</div>
            </CardContent>
          </Card>
          
          <Card className="border-success bg-success-light">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-success mb-2">
                {documentos.length}
              </div>
              <div className="text-sm text-muted-foreground">Total de Documentos</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Documento;