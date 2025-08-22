import { useState } from "react";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import CuidaLogo from "@/components/CuidaLogo";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    usuario: "",
    senha: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de autenticação
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-cuida-gradient-soft flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <CuidaLogo size="xl" className="justify-center" />
        </div>

        {/* Login Card */}
        <Card className="shadow-cuida-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-poppins font-bold text-primary">
              Acesso ao Sistema
            </CardTitle>
            <CardDescription className="font-nunito">
              Área restrita para gestores e funcionários da Secretaria de Saúde
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo Usuário */}
              <div className="space-y-2">
                <Label htmlFor="usuario" className="font-poppins font-medium">
                  Usuário
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    id="usuario"
                    type="text"
                    placeholder="Digite seu usuário"
                    value={formData.usuario}
                    onChange={(e) => setFormData({ ...formData, usuario: e.target.value })}
                    className="pl-10 py-6 border-2 focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Campo Senha */}
              <div className="space-y-2">
                <Label htmlFor="senha" className="font-poppins font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    id="senha"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={formData.senha}
                    onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                    className="pl-10 pr-10 py-6 border-2 focus:border-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Botão Entrar */}
              <Button type="submit" variant="cuida" className="w-full py-6 text-lg">
                Entrar no Sistema
              </Button>

              {/* Links auxiliares */}
              <div className="text-center space-y-2">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline font-nunito"
                >
                  Esqueceu sua senha?
                </button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <Button variant="ghost" onClick={() => window.history.back()}>
            ← Voltar ao Início
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;