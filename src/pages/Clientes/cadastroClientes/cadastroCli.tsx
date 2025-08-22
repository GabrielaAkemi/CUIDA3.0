import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Users } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function CustomerRegisterPage() {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    endereco: "",
    cpf: "",
    rg: "",
    email: "",
    telefone: "",
    carteirinha: "",
    tipoSanguineo: "",
    medicamentosRestritos: "",
    diagnosticos: "",
    password: "",
    acceptTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { id, value, checked, type } = e.target;

    if (id === "cpf" || id === "telefone") {
      value = value.replace(/\D/g, "");
    }

    if (type === "checkbox") {
      setFormData({ ...formData, [id]: checked });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = ["nome", "idade", "endereco", "cpf", "rg", "email", "telefone", "password"];
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        alert("Preencha todos os campos obrigatórios.");
        return;
      }
    }

    if (!formData.acceptTerms) {
      alert("Você deve aceitar os termos de uso.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Cadastro realizado com sucesso!");
      navigate("/clientes/loginClientes"); // Volta para login
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Cadastro do Cidadão</CardTitle>
            <CardDescription className="text-gray-600">
              Preencha seus dados para acessar o portal
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Campos do formulário */}
                <div>
                  <Label htmlFor="nome">Nome completo *</Label>
                  <Input id="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome" required />
                </div>
                <div>
                  <Label htmlFor="idade">Idade *</Label>
                  <Input id="idade" value={formData.idade} onChange={handleChange} placeholder="Ex: 35" required />
                </div>
                <div>
                  <Label htmlFor="endereco">Endereço *</Label>
                  <Input id="endereco" value={formData.endereco} onChange={handleChange} placeholder="Seu endereço" required />
                </div>
                <div>
                  <Label htmlFor="cpf">CPF *</Label>
                  <Input id="cpf" value={formData.cpf} onChange={handleChange} placeholder="000.000.000-00" required />
                </div>
                <div>
                  <Label htmlFor="rg">RG *</Label>
                  <Input id="rg" value={formData.rg} onChange={handleChange} placeholder="00.000.000-0" required />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input id="telefone" value={formData.telefone} onChange={handleChange} placeholder="(00) 00000-0000" required />
                </div>
                <div>
                  <Label htmlFor="carteirinha">Carteirinha do posto integrado</Label>
                  <Input id="carteirinha" value={formData.carteirinha} onChange={handleChange} placeholder="Número da carteirinha" />
                </div>
                <div>
                  <Label htmlFor="tipoSanguineo">Tipo sanguíneo</Label>
                  <Input id="tipoSanguineo" value={formData.tipoSanguineo} onChange={handleChange} placeholder="Ex: A+, O-" />
                </div>
                <div>
                  <Label htmlFor="medicamentosRestritos">Medicamentos que não pode tomar</Label>
                  <Input id="medicamentosRestritos" value={formData.medicamentosRestritos} onChange={handleChange} placeholder="Liste os medicamentos" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="diagnosticos">Problemas ou diagnósticos médicos</Label>
                  <Input id="diagnosticos" value={formData.diagnosticos} onChange={handleChange} placeholder="Informe se houver" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="password">Senha *</Label>
                  <Input id="password" type="password" value={formData.password} onChange={handleChange} placeholder="Crie uma senha" required />
                </div>
              </div>

              {/* Checkbox de termos de uso */}
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked })}
                />
                <Label htmlFor="acceptTerms">
                  Aceito os{" "}
                  <a href="/termos.pdf" target="_blank" className="text-green-600 hover:text-green-700 underline">
                    termos de uso
                  </a>
                </Label>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 h-11" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm">
                Já tem conta?{" "}
                <Link to="/clientes/loginClientes" className="text-green-600 hover:text-green-700 font-medium">
                  Faça login
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
