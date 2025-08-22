import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Index from "./pages/Index"; // Funcionário
import Portal from "./pages/Clientes/Portal"; // Cliente
import Login from "./pages/Funcionarios/Login";
import Cadastro from "./pages/Funcionarios/Cadastro";
import LoginCli from "./pages/Clientes/loginClientes/LoginCli"; // Login Cliente
import CadastroCli from "./pages/Clientes/cadastroClientes/CadastroCli"; // Cadastro Cliente
import NotFound from "./pages/NotFound";

// Novas páginas
import Registry from "./pages/Funcionarios/Registry";
import Technologies from "./pages/Funcionarios/Technologies";
import Departments from "./pages/Funcionarios/Departments";
import ClientesCadastrados from "./pages/ClientesCadastrados";
import Documento from "./pages/Documento";
import Medicamentos from "./pages/Medicamentos";

import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<HomePage />} />

          {/* Rotas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          {/* Login e Cadastro de Clientes */}
          <Route path="/clientes/loginClientes" element={<LoginCli />} />
          <Route path="/clientes/cadastroClientes" element={<CadastroCli />} />

          {/* Portal do Cidadão */}
          <Route path="/portal-cidadao" element={<Portal />} />

          {/* Novas páginas públicas */}
          <Route path="/registry" element={<Registry />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/departments" element={<Departments />} />

          {/* Rotas protegidas - Funcionário */}
          <Route
            path="/home-funcionario"
            element={
              <PrivateRoute>
                <Index />
              </PrivateRoute>
            }
          />
          <Route
            path="/clientes-cadastrados"
            element={
              <PrivateRoute>
                <ClientesCadastrados />
              </PrivateRoute>
            }
          />
          <Route
            path="/documento"
            element={
              <PrivateRoute>
                <Documento />
              </PrivateRoute>
            }
          />
          <Route
            path="/medicamentos"
            element={
              <PrivateRoute>
                <Medicamentos />
              </PrivateRoute>
            }
          />

          {/* Rota de fallback para 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
