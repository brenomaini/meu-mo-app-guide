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
    id: "torre-1",
    name: "Torre 1",
    position: { x: 15, y: 35 },
    spaces: [
      {
        id: "salao-festas-1",
        name: "Salão de Festas com Copa",
        capacity: 80,
        amenities: ["Copa", "Som", "Iluminação", "Ar-condicionado"],
        hours: "8h às 2h",
        available: true
      },
      {
        id: "home-office-1",
        name: "Home Office",
        capacity: 15,
        amenities: ["Mesas", "Wi-Fi", "Ar-condicionado", "Impressora"],
        hours: "6h às 22h",
        available: true
      },
      {
        id: "espaco-gourmet-1",
        name: "Espaço Gourmet",
        capacity: 40,
        amenities: ["Churrasqueira", "Bancada", "Geladeira", "Pia"],
        hours: "8h às 22h",
        available: false
      }
    ]
  },
  {
    id: "torre-2",
    name: "Torre 2",
    position: { x: 25, y: 45 },
    spaces: [
      {
        id: "espaco-teen-2",
        name: "Espaço Teen com Lavabo",
        capacity: 25,
        amenities: ["Jogos", "Lavabo", "Som", "Iluminação"],
        hours: "8h às 22h",
        available: true
      },
      {
        id: "salao-festa-2",
        name: "Salão de Festa com Copa",
        capacity: 70,
        amenities: ["Copa", "Som", "Iluminação", "Ar-condicionado"],
        hours: "8h às 2h",
        available: true
      }
    ]
  },
  {
    id: "torre-3",
    name: "Torre 3",
    position: { x: 35, y: 30 },
    spaces: [
      {
        id: "salao-festas-3",
        name: "Salão de Festas com Copa",
        capacity: 75,
        amenities: ["Copa", "Som", "Iluminação", "Ar-condicionado"],
        hours: "8h às 2h",
        available: true
      }
    ]
  },
  {
    id: "torre-4",
    name: "Torre 4",
    position: { x: 45, y: 40 },
    spaces: [
      {
        id: "oficina-bricolagem-4",
        name: "Oficina de Bricolagem",
        capacity: 15,
        amenities: ["Ferramentas", "Bancadas", "Iluminação", "Ventilação"],
        hours: "8h às 18h",
        available: true
      },
      {
        id: "bicicletario-4",
        name: "Bicicletário",
        capacity: 50,
        amenities: ["Suportes", "Segurança", "Cobertura"],
        hours: "24h",
        available: true
      }
    ]
  },
  {
    id: "torre-5",
    name: "Torre 5",
    position: { x: 55, y: 50 },
    spaces: [
      {
        id: "espaco-gourmet-5",
        name: "Espaço Gourmet",
        capacity: 45,
        amenities: ["Churrasqueira", "Bancada", "Geladeira", "Pia"],
        hours: "8h às 22h",
        available: true
      },
      {
        id: "salao-jogos-5",
        name: "Salão de Jogos Adulto",
        capacity: 30,
        amenities: ["Mesa de Sinuca", "Jogos", "Som", "Ar-condicionado"],
        hours: "8h às 22h",
        available: false
      },
      {
        id: "bicicletario-5",
        name: "Bicicletário",
        capacity: 50,
        amenities: ["Suportes", "Segurança", "Cobertura"],
        hours: "24h",
        available: true
      }
    ]
  },
  {
    id: "torre-6",
    name: "Torre 6",
    position: { x: 65, y: 35 },
    spaces: [
      {
        id: "espaco-yoga-6",
        name: "Espaço Yoga",
        capacity: 20,
        amenities: ["Tatames", "Espelhos", "Som", "Ar-condicionado"],
        hours: "6h às 22h",
        available: true
      },
      {
        id: "biblioteca-6",
        name: "Biblioteca com Espaço Leitura",
        capacity: 25,
        amenities: ["Livros", "Poltronas", "Mesas", "Wi-Fi", "Silêncio"],
        hours: "8h às 20h",
        available: true
      }
    ]
  },
  {
    id: "torre-7",
    name: "Torre 7",
    position: { x: 75, y: 45 },
    spaces: [
      {
        id: "espaco-terraco-7",
        name: "Espaço com Terraço",
        capacity: 35,
        amenities: ["Terraço", "Vista", "Mobiliário", "Iluminação"],
        hours: "8h às 22h",
        available: true
      },
      {
        id: "brinquedoteca-7",
        name: "Brinquedoteca com Terraço Leitura",
        capacity: 20,
        amenities: ["Brinquedos", "Terraço", "Livros", "Segurança"],
        hours: "8h às 18h",
        available: true
      }
    ]
  },
  {
    id: "torre-8",
    name: "Torre 8",
    position: { x: 85, y: 30 },
    spaces: [
      {
        id: "salao-reunioes-8",
        name: "Salão de Reuniões com Terraço",
        capacity: 20,
        amenities: ["Mesa", "Projetor", "Wi-Fi", "Terraço", "Ar-condicionado"],
        hours: "8h às 18h",
        available: true
      },
      {
        id: "foyer-cinema-8",
        name: "Foyer de Cinema",
        capacity: 15,
        amenities: ["Poltronas", "Iluminação", "Decoração"],
        hours: "19h às 23h",
        available: true
      },
      {
        id: "sala-projecao-8",
        name: "Sala de Projeção",
        capacity: 8,
        amenities: ["Projetor", "Som", "Controles", "Ar-condicionado"],
        hours: "19h às 23h",
        available: false
      },
      {
        id: "cinema-8",
        name: "Cinema",
        capacity: 40,
        amenities: ["Poltronas", "Tela", "Som Surround", "Ar-condicionado"],
        hours: "19h às 23h",
        available: true
      }
    ]
  },
  {
    id: "torre-9",
    name: "Torre 9",
    position: { x: 20, y: 60 },
    spaces: [
      {
        id: "salao-festas-9",
        name: "Salão de Festas com Copa",
        capacity: 85,
        amenities: ["Copa", "Som", "Iluminação", "Ar-condicionado", "Varanda"],
        hours: "8h às 2h",
        available: true
      },
      {
        id: "espaco-gourmet-9",
        name: "Espaço Gourmet",
        capacity: 50,
        amenities: ["Churrasqueira", "Bancada", "Geladeira", "Pia", "Forno"],
        hours: "8h às 22h",
        available: true
      },
      {
        id: "brinquedoteca-9",
        name: "Brinquedoteca com Terraço",
        capacity: 25,
        amenities: ["Brinquedos", "Terraço", "Segurança", "Climatização"],
        hours: "8h às 18h",
        available: false
      },
      {
        id: "espaco-stadium-9",
        name: "Espaço Stadium",
        capacity: 100,
        amenities: ["Telão", "Som", "Arquibancada", "Climatização"],
        hours: "8h às 23h",
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