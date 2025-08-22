import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UserPlus, Eye, EyeOff, ArrowLeft, Heart } from "lucide-react";

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    employeeId: "",
    department: "",
    position: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    setIsLoading(true);

    // Simular cadastro e salvar no localStorage
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      setIsLoading(false);
      alert("Cadastro realizado! Aguarde aprovação do administrador.");
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cuida-gradient-soft flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Voltar ao login */}
        <button
          onClick={() => navigate("/login")}
          className="inline-flex items-center gap-2 text-cuida-blue hover:text-cuida-blue/80 mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao login
        </button>

        {/* Header da logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-cuida-blue rounded-lg flex items-center justify-center">
            <Heart className="w-7 h-7 text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-lg font-bold text-foreground">Secretaria de Saúde</h1>
            <p className="text-sm text-muted-foreground">Marília - SP</p>
          </div>
        </div>

        {/* Card de cadastro */}
        <Card className="shadow-cuida-lg border-0">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-cuida-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus className="w-8 h-8 text-cuida-blue" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Cadastro de Funcionário</CardTitle>
            <CardDescription className="text-muted-foreground">
              Solicite acesso ao sistema interno da Secretaria de Saúde
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome completo</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email institucional</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="funcionario@saude.marilia.sp.gov.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="employeeId">Matrícula funcional</Label>
                <Input
                  id="employeeId"
                  type="text"
                  placeholder="Digite sua matrícula"
                  value={formData.employeeId}
                  onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                  required
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Departamento</Label>
                <Input
                  id="department"
                  type="text"
                  placeholder="Ex: Enfermagem, Farmácia..."
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  required
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Cargo/Função</Label>
                <Input
                  id="position"
                  type="text"
                  placeholder="Ex: Enfermeiro, Médico..."
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  required
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Crie uma senha segura"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    className="h-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar senha</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Digite a senha novamente"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                    className="h-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-cuida-blue hover:bg-cuida-blue/90 font-medium mt-4"
                disabled={isLoading}
              >
                {isLoading ? "Enviando solicitação..." : "Solicitar Cadastro"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Já possui conta?{" "}
                <button onClick={() => navigate("/login")} className="text-cuida-blue font-medium hover:text-cuida-blue/80">
                  Voltar ao login
                </button>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Seu cadastro será analisado pelo administrador do sistema antes da aprovação
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cadastro;