import { useState } from "react";
import { Search, MapPin, Calendar, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CuidaLogo from "@/components/CuidaLogo";

const Portal = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const mockUnidades = [
    {
      id: 1,
      nome: "UBS Central",
      endereco: "Rua das Flores, 123 - Centro",
      distancia: "0.8 km",
      status: "available",
      medicamentos: ["Paracetamol", "Ibuprofeno", "Dipirona"],
      horario: "7h às 17h",
      telefone: "(11) 3333-4444"
    },
    {
      id: 2,
      nome: "UBS Vila Nova",
      endereco: "Av. São João, 456 - Vila Nova",
      distancia: "1.2 km",
      status: "available",
      medicamentos: ["Amoxicilina", "Losartana", "Metformina"],
      horario: "7h às 17h",
      telefone: "(11) 3333-5555"
    },
    {
      id: 3,
      nome: "UBS Jardim Sul",
      endereco: "Rua das Palmeiras, 789 - Jardim Sul",
      distancia: "2.1 km",
      status: "limited",
      medicamentos: ["Captopril", "Sinvastatina"],
      horario: "7h às 17h",
      telefone: "(11) 3333-6666"
    }
  ];

  const filteredUnidades = mockUnidades.filter(unidade =>
    unidade.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    unidade.medicamentos.some(med => 
      med.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="bg-white shadow-cuida border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <CuidaLogo size="lg" />
            <Button variant="outline" onClick={() => window.history.back()}>
              Voltar ao Início
            </Button>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-cuida-gradient-soft py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-poppins font-bold text-primary mb-4">
              Portal do Cidadão
            </h1>
            <p className="text-muted-foreground font-nunito mb-8">
              Encontre medicamentos disponíveis nas unidades de saúde próximas a você
            </p>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Digite o nome do medicamento..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-lg bg-white shadow-cuida border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-poppins font-semibold text-primary">
              Unidades Encontradas
            </h2>
            <span className="text-muted-foreground font-nunito">
              {filteredUnidades.length} unidades disponíveis
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredUnidades.map((unidade) => (
              <Card key={unidade.id} className="hover:scale-105 transition-transform duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{unidade.nome}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {unidade.distancia}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      unidade.status === 'available' 
                        ? 'bg-success-light text-success' 
                        : 'bg-warning-light text-warning'
                    }`}>
                      {unidade.status === 'available' ? 'Disponível' : 'Limitado'}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="mb-4">
                    {unidade.endereco}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-cuida-blue" />
                      <span>{unidade.horario}</span>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2 text-cuida-blue" />
                      <span>{unidade.telefone}</span>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Medicamentos disponíveis:</p>
                      <div className="flex flex-wrap gap-1">
                        {unidade.medicamentos.map((med, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md"
                          >
                            {med}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <Button variant="cuida" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portal;