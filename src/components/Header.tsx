import { FileText, Home, HelpCircle, Phone, Smartphone, MapPin, Building } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();

  const navigationItems = [
    { path: "/", label: "Início", icon: Home },
    { path: "/manual", label: "Manual", icon: FileText },
    { path: "/faq", label: "FAQ", icon: HelpCircle },
    { path: "/contatos", label: "Contatos Úteis", icon: Phone },
    { path: "/manual-app", label: "Manual de utilização do app MO", icon: Smartphone },
    { path: "/mapas-churrasqueiras", label: "Mapas de Churrasqueiras", icon: MapPin },
    { path: "/mapas-espacos", label: "Mapa de Espaços", icon: Building },
  ];

  return (
    <header className="bg-header-bg shadow-header">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Reserva Parque Clube" className="h-12 w-12" />
            <div className="text-primary-foreground">
              <h1 className="text-xl font-bold">Reserva Parque Clube</h1>
              <p className="text-sm opacity-90">Manual Digital do Morador</p>
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
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary/20 text-primary-foreground"
                      : "text-primary-foreground/80 hover:bg-primary/10 hover:text-primary-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
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