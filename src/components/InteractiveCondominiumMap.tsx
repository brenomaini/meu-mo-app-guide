import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, MapPin, Users, Clock, Wifi, Car } from "lucide-react";
import condominioImage from "@/assets/condominio-vista-aerea.png";

interface Tower {
  id: string;
  name: string;
  position: { x: number; y: number };
  spaces: Space[];
}

interface Space {
  id: string;
  name: string;
  capacity: number;
  amenities: string[];
  hours: string;
  available: boolean;
}

const towers: Tower[] = [
  {
    id: "torre-a",
    name: "Torre A",
    position: { x: 20, y: 40 },
    spaces: [
      {
        id: "salao-a",
        name: "Salão de Festas A",
        capacity: 80,
        amenities: ["Som", "Iluminação", "Cozinha", "Ar-condicionado"],
        hours: "8h às 2h",
        available: true
      },
      {
        id: "academia-a",
        name: "Academia Torre A",
        capacity: 15,
        amenities: ["Equipamentos", "Vestiário", "Ar-condicionado"],
        hours: "6h às 22h",
        available: true
      }
    ]
  },
  {
    id: "torre-b",
    name: "Torre B",
    position: { x: 35, y: 45 },
    spaces: [
      {
        id: "salao-b",
        name: "Salão de Festas B",
        capacity: 60,
        amenities: ["Som", "Cozinha", "Varanda"],
        hours: "8h às 2h",
        available: false
      },
      {
        id: "playground-b",
        name: "Playground Torre B",
        capacity: 20,
        amenities: ["Brinquedos", "Área coberta", "Bancos"],
        hours: "6h às 20h",
        available: true
      }
    ]
  },
  {
    id: "torre-c",
    name: "Torre C",
    position: { x: 50, y: 35 },
    spaces: [
      {
        id: "espaco-gourmet-c",
        name: "Espaço Gourmet C",
        capacity: 40,
        amenities: ["Churrasqueira", "Bancada", "Geladeira", "Pia"],
        hours: "8h às 22h",
        available: true
      },
      {
        id: "sala-reuniao-c",
        name: "Sala de Reuniões C",
        capacity: 12,
        amenities: ["Mesa", "Cadeiras", "TV", "Wi-Fi"],
        hours: "8h às 18h",
        available: true
      }
    ]
  },
  {
    id: "torre-d",
    name: "Torre D",
    position: { x: 65, y: 50 },
    spaces: [
      {
        id: "quadra-d",
        name: "Quadra Poliesportiva D",
        capacity: 30,
        amenities: ["Iluminação", "Vestiário", "Arquibancada"],
        hours: "6h às 22h",
        available: true
      },
      {
        id: "piscina-d",
        name: "Área da Piscina D",
        capacity: 50,
        amenities: ["Piscina", "Ducha", "Deck", "Guarda-vidas"],
        hours: "6h às 20h",
        available: false
      }
    ]
  },
  {
    id: "torre-e",
    name: "Torre E",
    position: { x: 80, y: 40 },
    spaces: [
      {
        id: "coworking-e",
        name: "Espaço Coworking E",
        capacity: 25,
        amenities: ["Mesas", "Wi-Fi", "Impressora", "Café"],
        hours: "6h às 22h",
        available: true
      }
    ]
  }
];

const getAmenityIcon = (amenity: string) => {
  switch (amenity.toLowerCase()) {
    case "wi-fi":
    case "wifi":
      return <Wifi className="h-3 w-3" />;
    case "estacionamento":
    case "garagem":
      return <Car className="h-3 w-3" />;
    default:
      return null;
  }
};

const InteractiveCondominiumMap = () => {
  const [selectedTower, setSelectedTower] = useState<Tower | null>(null);
  const [hoveredTower, setHoveredTower] = useState<string | null>(null);

  return (
    <div className="relative">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg border">
        <img 
          src={condominioImage} 
          alt="Vista aérea do condomínio" 
          className="w-full h-[600px] object-cover"
        />
        
        {/* Overlay escuro para destacar os pontos */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Pontos interativos das torres */}
        {towers.map((tower) => (
          <button
            key={tower.id}
            className={`absolute w-6 h-6 rounded-full transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-4 focus:ring-primary/50 ${
              hoveredTower === tower.id || selectedTower?.id === tower.id
                ? "bg-primary shadow-lg shadow-primary/50 animate-pulse"
                : "bg-primary/80 hover:bg-primary"
            }`}
            style={{
              left: `${tower.position.x}%`,
              top: `${tower.position.y}%`,
              transform: "translate(-50%, -50%)"
            }}
            onClick={() => setSelectedTower(tower)}
            onMouseEnter={() => setHoveredTower(tower.id)}
            onMouseLeave={() => setHoveredTower(null)}
            aria-label={`Abrir detalhes da ${tower.name}`}
          >
            <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center">
              <MapPin className="h-3 w-3 text-primary" />
            </div>
          </button>
        ))}
        
        {/* Tooltip para torre em hover */}
        {hoveredTower && (
          <div 
            className="absolute pointer-events-none z-10 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium"
            style={{
              left: `${towers.find(t => t.id === hoveredTower)?.position.x}%`,
              top: `${(towers.find(t => t.id === hoveredTower)?.position.y || 0) - 8}%`,
              transform: "translate(-50%, -100%)"
            }}
          >
            {towers.find(t => t.id === hoveredTower)?.name}
          </div>
        )}
      </div>
      
      {/* Modal com detalhes da torre */}
      {selectedTower && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  {selectedTower.name}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTower(null)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Espaços Disponíveis ({selectedTower.spaces.length})
                </h4>
                
                {selectedTower.spaces.map((space) => (
                  <Card key={space.id} className={`p-4 border-l-4 ${space.available ? 'border-l-green-500 bg-green-50/50' : 'border-l-red-500 bg-red-50/50'}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h5 className="font-semibold text-gray-800">{space.name}</h5>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {space.capacity} pessoas
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {space.hours}
                          </span>
                        </div>
                      </div>
                      <Badge variant={space.available ? "default" : "destructive"}>
                        {space.available ? "Disponível" : "Ocupado"}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {space.amenities.map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="text-xs">
                          {getAmenityIcon(amenity)}
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                    
                    {space.available && (
                      <Button className="w-full mt-3" size="sm">
                        Reservar {space.name}
                      </Button>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}
      
      {/* Legenda */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Como usar:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Clique nos pontos <span className="inline-block w-3 h-3 bg-primary rounded-full mx-1"></span> no mapa para ver os espaços de cada torre</li>
          <li>• Passe o mouse sobre os pontos para ver o nome da torre</li>
          <li>• Espaços com borda verde estão disponíveis para reserva</li>
          <li>• Espaços com borda vermelha estão atualmente ocupados</li>
        </ul>
      </div>
    </div>
  );
};

export default InteractiveCondominiumMap;