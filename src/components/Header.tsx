import logo from "@/assets/logo.png";
import { Building, Clock, FileText, HelpCircle, Home, MapPin, Phone, Smartphone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navigationItems = [
    { path: "/", label: "Início", icon: Home },
    { path: "/manual", label: "Guia do Morador", icon: FileText },
    { path: "/horarios", label: "Horários", icon: Clock },
    { path: "/faq", label: "FAQ", icon: HelpCircle },
        { path: "/contatos", label: "Contatos Úteis", icon: Phone },
    { path: "/ramais-uteis", label: "Ramais Úteis", icon: Phone },
    { path: "/manual-app", label: "Manual de utilização do app MO", icon: Smartphone },
    { path: "/mapas-churrasqueiras", label: "Mapas de Churrasqueiras", icon: MapPin },
    { path: "/mapas-espacos", label: "Mapa de Espaços", icon: Building },
  ];

  return (
    <header className="bg-header-bg shadow-header">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-8">
          <Link to="/" className="flex items-center space-x-4">
            <img src={logo} alt="Reserva Parque Clube" className="h-16 w-16" />
            <div className="text-primary-foreground">
              <h1 className="text-2xl font-bold">Reserva Parque Clube</h1>
              <p className="text-base opacity-90">Manual Digital da Comunidade</p>
            </div>
          </Link>
        </div>
        
        <nav className="pb-4">
          <div className="flex flex-wrap gap-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary/20 text-primary-foreground"
                      : "text-primary-foreground/80 hover:bg-primary/10 hover:text-primary-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-base font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;