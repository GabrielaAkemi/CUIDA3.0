import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Registry = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-surface p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Button>
          </Link>
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold font-poppins mb-4">Registro de Unidades</h1>
          <p className="text-muted-foreground text-lg">Página em desenvolvimento</p>
        </div>
      </div>
    </div>
  );
};

export default Registry;