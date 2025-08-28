import churrasqueiraImage from "@/assets/churrasqueira-vista-aerea.jpeg";
import { Card } from "@/components/ui/card";
import { ExternalLink, UtensilsCrossed } from "lucide-react";
import { useEffect, useState } from "react";

const InteractiveChurrasqueirasMap = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedChurrasqueira, setSelectedChurrasqueira] = useState<number | null>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Fechar popup ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.churrasqueira-popup') && !target.closest('.churrasqueira-button')) {
        setSelectedChurrasqueira(null);
      }
    };

    if (selectedChurrasqueira !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [selectedChurrasqueira]);

  const getReservaLink = (churrasqueiraId: number) => {
    // Churrasqueira 1 não possui link ainda
    if (churrasqueiraId === 1) return null;
    
    // Churrasqueiras 2-6 correspondem aos IDs 180-184
    const reservaId = 178 + churrasqueiraId; // 180 para churrasqueira 2, etc.
    return `https://reservaparqueclube.mo.app.br/reservas/calendario.php?id_item_reserva=${reservaId}`;
  };

  const churrasqueiras = [
    { 
      id: 1, 
      name: "Churrasqueira 1", 
      top: "50.65%", 
      left: isMobile ? "95.14%" : "93.14%", 
      icon: UtensilsCrossed 
    },
    { id: 2, name: "Churrasqueira 2", top: "67.07%", left: "82.74%", icon: UtensilsCrossed },
    { id: 3, name: "Churrasqueira 3", top: "23.89%", left: "59.23%", icon: UtensilsCrossed },
    { id: 4, name: "Churrasqueira 4", top: "34%", left: "50.27%", icon: UtensilsCrossed },
    { id: 5, name: "Churrasqueira 5", top: "58.65%", left: "32.5%", icon: UtensilsCrossed },
    { 
      id: 6, 
      name: "Churrasqueira 6", 
      top: "65.71%", 
      left: isMobile ? "12.95%" : "14.95%", 
      icon: UtensilsCrossed 
    },
  ];

  const handleChurrasqueiraClick = (churrasqueiraId: number) => {
    setSelectedChurrasqueira(selectedChurrasqueira === churrasqueiraId ? null : churrasqueiraId);
  };

  return (
    <Card className="w-full h-[500px] lg:h-[600px] overflow-auto">
      <div className="relative w-full h-full min-w-[800px] min-h-[500px]">
        <img 
          src={churrasqueiraImage} 
          alt="Mapa das churrasqueiras" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 w-full h-full">
          {churrasqueiras.map((churrasqueira) => {
            const Icon = churrasqueira.icon;
            const reservaLink = getReservaLink(churrasqueira.id);
            const isSelected = selectedChurrasqueira === churrasqueira.id;
            
            return (
              <div
                key={churrasqueira.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: churrasqueira.top, left: churrasqueira.left }}
              >
                <div 
                  className={`churrasqueira-button w-20 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg mx-auto cursor-pointer transition-all duration-200 ${
                    isSelected ? 'bg-green-600 scale-110' : 'bg-red-500 hover:bg-red-600'
                  }`}
                  onClick={() => handleChurrasqueiraClick(churrasqueira.id)}
                >
                  <Icon className="h-10 w-10" />
                </div>
                <div className="mt-2 text-center bg-white px-2 py-1 rounded-lg shadow-md text-base font-bold">
                  {churrasqueira.name}
                </div>
                
                {/* Popup de informações quando selecionado */}
                {isSelected && (
                  <div className="churrasqueira-popup absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-[200px] z-10">
                    <h4 className="font-semibold text-gray-800 mb-2">{churrasqueira.name}</h4>
                    {reservaLink ? (
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Clique no botão abaixo para fazer sua reserva:</p>
                        <a
                          href={reservaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Link para Reserva
                        </a>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Reserva online ainda não disponível para esta churrasqueira.</p>
                        <p className="text-xs text-gray-500">Entre em contato com a administração.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default InteractiveChurrasqueirasMap;