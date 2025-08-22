import { Heart } from "lucide-react";

interface CuidaLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

const CuidaLogo = ({ size = "md", showText = true, className = "" }: CuidaLogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl", 
    xl: "text-4xl"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} flex items-center justify-center bg-cuida-gradient rounded-lg shadow-cuida`}>
        <Heart className="w-2/3 h-2/3 text-white fill-white" />
      </div>
      {showText && (
        <div className="flex flex-col">
          <h1 className={`font-poppins font-bold text-primary ${textSizeClasses[size]} leading-none`}>
            CUIDA
          </h1>
          <span className="text-xs text-muted-foreground font-nunito leading-tight max-w-[200px]">
            Consulta Unificada e Inteligente para Disponibilidade e Acesso
          </span>
        </div>
      )}
    </div>
  );
};

export default CuidaLogo;