"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ClientesCadastradosPage() {
  const navigate = useNavigate();

  // Dados simulados de clientes
  const [clientes] = useState([
    {
      id: 1,
      nome: "Maria Souza",
      idade: 34,
      tipoSanguineo: "A+",
      medicamentosNaoPodeTomar: ["Dipirona"],
      diagnosticos: ["Hipertensão"],
      carteirinha: "123456789",
      endereco: "Rua das Flores, 123, Marília - SP",
      cpf: "123.456.789-00",
      rg: "12.345.678-9",
      email: "maria.souza@email.com",
      contato: "(11) 91234-5678",
    },
    {
      id: 2,
      nome: "Carlos Oliveira",
      idade: 42,
      tipoSanguineo: "O-",
      medicamentosNaoPodeTomar: [],
      diagnosticos: [],
      carteirinha: "987654321",
      endereco: "Av. Brasil, 456, Marília - SP",
      cpf: "987.654.321-00",
      rg: "98.765.432-1",
      email: "carlos.oliveira@email.com",
      contato: "(11) 99876-5432",
    },
    {
      id: 3,
      nome: "Ana Lima",
      idade: 28,
      tipoSanguineo: "B+",
      medicamentosNaoPodeTomar: ["Omeprazol"],
      diagnosticos: ["Diabetes"],
      carteirinha: "456789123",
      endereco: "Rua das Palmeiras, 789, Marília - SP",
      cpf: "456.789.123-00",
      rg: "45.678.912-3",
      email: "ana.lima@email.com",
      contato: "(11) 91111-2222",
    },
  ]);

  return (
    <div className="min-h-screen bg-surface p-6">
      {/* Cabeçalho com botão voltar */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Users className="w-6 h-6 text-cuida-blue" /> Clientes Cadastrados
        </h1>
        <Button variant="outline" onClick={() => navigate(-1)} className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clientes.map((cliente) => (
          <Card key={cliente.id} className="shadow-cuida hover:shadow-cuida-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{cliente.nome}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Idade:</strong> {cliente.idade}</p>
              <p><strong>Tipo Sanguíneo:</strong> {cliente.tipoSanguineo}</p>
              <p><strong>Medicamentos que não pode tomar:</strong> {cliente.medicamentosNaoPodeTomar.length > 0 ? cliente.medicamentosNaoPodeTomar.join(", ") : "Nenhum"}</p>
              <p><strong>Diagnósticos:</strong> {cliente.diagnosticos.length > 0 ? cliente.diagnosticos.join(", ") : "Nenhum"}</p>
              <p><strong>Carteirinha:</strong> {cliente.carteirinha}</p>
              <p><strong>Endereço:</strong> {cliente.endereco}</p>
              <p><strong>CPF:</strong> {cliente.cpf}</p>
              <p><strong>RG:</strong> {cliente.rg}</p>
              <p><strong>E-mail:</strong> {cliente.email}</p>
              <p><strong>Contato:</strong> {cliente.contato}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}