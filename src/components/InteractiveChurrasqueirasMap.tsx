import churrasqueiraImage from "@/assets/churrasqueira-vista-aerea.jpeg";
import { Card } from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";
import { useEffect, useState } from "react";

const InteractiveChurrasqueirasMap = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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
            return (
              <div
                key={churrasqueira.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: churrasqueira.top, left: churrasqueira.left }}
              >
                <div className="w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg mx-auto">
                  <Icon className="h-10 w-10" />
                </div>
                <div className="mt-2 text-center bg-white px-2 py-1 rounded-lg shadow-md text-base font-bold">
                  {churrasqueira.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default InteractiveChurrasqueirasMap;