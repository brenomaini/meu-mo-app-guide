import condominioImage from "@/assets/condominio-vista-aerea.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Car, Clock, ExternalLink, MapPin, Users, Wifi, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
}

const towers: Tower[] = [
  {
    id: "torre-1",
    name: "Torre 1",
    position: { x: 80.73, y: 47.87 },
    spaces: [
      {
        id: "salao-festas-1",
        name: "Salão de Festas com Copa",
        capacity: 50, // SALÃO DE FESTAS - Bloco 1
        amenities: ["Copa", "Iluminação", "Ar-condicionado"],
        hours: "10h às 2h"
      },
      {
        id: "home-office-1",
        name: "Home Office",
        capacity: 0, // Informação indisponível
        amenities: ["Mesas", "Wi-Fi", "Ar-condicionado"],
        hours: "6h às 22h"
      },
      {
        id: "espaco-gourmet-1",
        name: "Espaço Gourmet",
        capacity: 25, // ESPAÇO GOURMET - TORRE 01
        amenities: ["Bancada", "Geladeira", "Pia", "Forno", "Forno-microondas"],
        hours: "10h às 2h"
      }
    ]
  },
  {
    id: "torre-2",
    name: "Torre 2",
    position: { x: 66.28, y: 38.10 },
    spaces: [
      {
        id: "espaco-teen-2",
        name: "Espaço Teen com Lavabo",
        capacity: 0, // Informação indisponível
        amenities: ["Jogos", "Lavabo", "Iluminação"],
        hours: "8h às 22h"
      },
      {
        id: "salao-festa-2",
        name: "Salão de Festa com Copa",
        capacity: 35, // SALÃO DE FESTAS - Bloco 2
        amenities: ["Copa","Iluminação", "Ar-condicionado"],
        hours: "10h às 2h"
      }
    ]
  },
  {
    id: "torre-3",
    name: "Torre 3",
    position: { x: 55.40, y: 21.02 },
    spaces: [
      {
        id: "salao-festas-3",
        name: "Salão de Festas com Copa",
        capacity: 35, // SALÃO DE FESTAS - Bloco 3
        amenities: ["Copa", "Iluminação", "Ar-condicionado"],
        hours: "10h às 2h"
      }
    ]
  },
  {
    id: "torre-4",
    name: "Torre 4",
    position: { x: 38.54, y: 18.82 },
    spaces: [
      {
        id: "oficina-bricolagem-4",
        name: "Oficina de Bricolagem",
        capacity: 0, // Informação indisponível
        amenities: ["Ferramentas", "Bancadas", "Iluminação", "Ventilação"],
        hours: "8h às 18h"
      },
      {
        id: "bicicletario-4",
        name: "Bicicletário",
        capacity: 0, // Informação indisponível
        amenities: ["Suportes", "Segurança", "Cobertura"],
        hours: "24h"
      }
    ]
  },
  {
    id: "torre-5",
    name: "Torre 5",
    position: { x: 25.17, y: 18.41 },
    spaces: [
      {
        id: "espaco-gourmet-5",
        name: "Espaço Gourmet",
        capacity: 0, // Informação indisponível
        amenities: ["Bancada", "Geladeira", "Pia"],
        hours: "10h às 22h"
      },
      {
        id: "salao-jogos-5",
        name: "Salão de Jogos Adulto",
        capacity: 0, // Informação indisponível
        amenities: ["Mesa de Sinuca", "Jogos", "Ar-condicionado"],
        hours: "8h às 22h"
      },
      {
        id: "bicicletario-5",
        name: "Bicicletário",
        capacity: 0, // Informação indisponível
        amenities: ["Suportes", "Segurança", "Cobertura"],
        hours: "24h"
      }
    ]
  },
  {
    id: "torre-6",
    name: "Torre 6",
    position: { x: 10.80, y: 36.59 },
    spaces: [
      {
        id: "espaco-yoga-6",
        name: "Espaço Yoga",
        capacity: 0, // Informação indisponível
        amenities: ["Tatames", "Espelhos", "Ar-condicionado"],
        hours: "6h às 22h"
      },
      {
        id: "biblioteca-6",
        name: "Biblioteca com Espaço Leitura",
        capacity: 0, // Informação indisponível
        amenities: ["Livros", "Poltronas", "Mesas", "Wi-Fi", "Silêncio"],
        hours: "8h às 20h"
      }
    ]
  },
  {
    id: "torre-7",
    name: "Torre 7",
    position: { x: 23.67, y: 42.37 },
    spaces: [
      {
        id: "espaco-terraco-7",
        name: "Espaço com Espaço aberto",
        capacity: 0, // Informação indisponível
        amenities: ["Espaço aberto", "Vista", "Mobiliário", "Iluminação"],
        hours: "8h às 22h"
      },
      {
        id: "brinquedoteca-7",
        name: "Brinquedoteca com Espaço aberto Leitura",
        capacity: 0, // Informação indisponível
        amenities: ["Brinquedos", "Espaço aberto", "Livros", "Segurança"],
        hours: "8h às 18h"
      }
    ]
  },
  {
    id: "torre-8",
    name: "Torre 8",
    position: { x: 35.96, y: 47.46 },
    spaces: [
      {
        id: "salao-reunioes-8",
        name: "Salão de Reuniões com Espaço aberto",
        capacity: 0, // Informação indisponível
        amenities: ["Mesa", "Projetor", "Wi-Fi", "Espaço aberto", "Ar-condicionado"],
        hours: "8h às 18h"
      },
      {
        id: "cinema-8",
        name: "Cinema",
        capacity: 0, // Informação indisponível
        amenities: ["Poltronas", "Tela", "Som Surround", "Ar-condicionado"],
        hours: "XXh às XXh"
      }
    ]
  },
  {
    id: "torre-9",
    name: "Torre 9",
    position: { x: 54.24, y: 52.54 },
    spaces: [
      {
        id: "salao-festas-9",
        name: "Salão de Festas com Copa",
        capacity: 35, // Salão de Festas - Torre 09
        amenities: ["Copa", "Iluminação", "Ar-condicionado", "Varanda"],
        hours: "10h às 2h"
      },
      {
        id: "espaco-gourmet-9",
        name: "Espaço Gourmet",
        capacity: 25, // Espaço Gourmet - Torre 09
        amenities: ["Churrasqueira", "Bancada", "Geladeira", "Pia", "Forno"],
        hours: "10h às 22h"
      },
      {
        id: "brinquedoteca-9",
        name: "Brinquedoteca com Espaço aberto",
        capacity: 0, // Informação indisponível
        amenities: ["Brinquedos", "Espaço aberto", "Segurança", "Climatização"],
        hours: "8h às 18h"
      },
      {
        id: "espaco-stadium-9",
        name: "Espaço Stadium",
        capacity: 30, // ESPAÇO STADIUM
        amenities: ["Telão", "Arquibancada", "Climatização"],
        hours: "10h às 23h"
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
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);

  // Fechar popup de torre ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.tower-modal') && !target.closest('.tower-button')) {
        setSelectedTower(null);
      }
    };

    if (selectedTower !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [selectedTower]);

  // Fechar popup de espaço ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.space-modal') && !target.closest('.space-button')) {
        setSelectedSpace(null);
      }
    };

    if (selectedSpace !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [selectedSpace]);

  // Função para gerar links de reserva (alguns espaços podem não estar disponíveis)
  const getReservaLink = (spaceId: string) => {
    // Mapeamento de espaços disponíveis para reserva (baseado nos dados reais do sistema)
    const availableSpaces: { [key: string]: string } = {
      // Salões de Festa
      "salao-festas-1": "https://reservaparqueclube.mo.app.br/reservas/calendario.php?id_item_reserva=177", // SALÃO DE FESTAS - Bloco 1
      "salao-festa-2": "https://reservaparqueclube.mo.app.br/reservas/calendario.php?id_item_reserva=178", // SALÃO DE FESTAS - Bloco 2  
      "salao-festas-3": "https://reservaparqueclube.mo.app.br/reservas/calendario.php?id_item_reserva=188", // SALÃO DE FESTAS - Bloco 3
      "salao-festas-9": "https://reservaparqueclube.mo.app.br/reservas/calendario.php?id_item_reserva=198", // Salão de Festas - Torre 09
      
      // Espaços Gourmet
      "espaco-gourmet-1": "https://reservaparqueclube.mo.app.br/reservas/calendario.php?id_item_reserva=185", // ESPAÇO GOURMET - TORRE 01
      "espaco-gourmet-9": "https://reservaparqueclube.mo.app.br/reservas/calendario.php?id_item_reserva=197", // Espaço Gourmet - Torre 09
      
      // Atividades Aquáticas (piscina)
      "piscina-1": "https://reservaparqueclube.mo.app.br/reservas/calendario.php?id_item_reserva=191", // Hidroginástica
      "piscina-2": "https://reservaparqueclube.mo.app.br/reservas/calendario.php?id_item_reserva=190", // Natação Infantil
      
      // Espaços Especiais
      "espaco-stadium-9": "https://reservaparqueclube.mo.app.br/reservas/calendario.php?id_item_reserva=194", // ESPAÇO STADIUM
      
      // Mudança (disponível no sistema de reservas)
      "elevador-mudanca": "https://reservaparqueclube.mo.app.br/reservas/calendario.php?id_item_reserva=186" // MUDANÇA Bloco 3
    };
    
    return availableSpaces[spaceId] || null;
  };

  const handleSpaceClick = (space: Space) => {
    const reservaLink = getReservaLink(space.id);
    if (reservaLink) {
      window.open(reservaLink, '_blank');
    } else {
      setSelectedSpace(space);
    }
  };

  return (
    <div className="relative">
      <Card className="w-full h-[500px] lg:h-[600px] overflow-auto">
        <div className="relative min-w-[800px] min-h-[500px] w-full h-full">
          <img 
            src={condominioImage} 
            alt="Vista aérea do condomínio" 
            className="w-full h-full object-cover"
          />
          
          {/* Overlay escuro para destacar os pontos */}
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Pontos interativos das torres */}
          {towers.map((tower) => (
            <button
              key={tower.id}
              className={`tower-button absolute w-12 h-12 rounded-full transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-4 focus:ring-primary/50 ${
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
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-base font-semibold text-white bg-black/70 px-2 py-1 rounded-md whitespace-nowrap pointer-events-none">
                {tower.name}
              </div>
              <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
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
      </Card>
      
      {/* Modal com detalhes da torre */}
      {selectedTower && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="tower-modal w-full max-w-2xl max-h-[80vh] overflow-y-auto">
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
                  Espaços da Torre ({selectedTower.spaces.length})
                </h4>
                
                {selectedTower.spaces.map((space) => {
                  const hasReservaLink = getReservaLink(space.id);
                  return (
                    <Card 
                      key={space.id} 
                      className={`space-button p-4 border-l-4 border-l-primary bg-primary/5 transition-colors ${
                        hasReservaLink 
                          ? 'cursor-pointer hover:bg-primary/10' 
                          : 'cursor-default hover:bg-primary/5'
                      }`}
                      onClick={() => handleSpaceClick(space)}
                    >
                    <div className="mb-3">
                      <h5 className="font-semibold text-gray-800 mb-2">{space.name}</h5>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {space.capacity === 0 ? "Informação indisponível" : `${space.capacity} pessoas`}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {space.hours}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-2">
                      {space.amenities.map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>

                    {getReservaLink(space.id) ? (
                      <div className="flex items-center text-sm text-primary">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Clique para fazer reserva
                      </div>
                    ) : (
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        Ainda não disponível para reserva online
                      </div>
                    )}
                  </Card>
                  );
                })}
              </div>
              
              {/* Botão para o manual do app */}
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Como fazer reservas?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  As reservas dos espaços são feitas através do aplicativo Morador Online. 
                  Consulte nosso manual para saber como utilizar o app.
                </p>
                <Link to="/manual-app">
                  <Button className="w-full" variant="default">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Manual do App Morador Online
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      )}
      
      {/* Legenda */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Como usar:</h4>
        <ul className="text-sm text-gray-600 space-y-1 mb-4">
          <li>• Clique nos pontos <span className="inline-block w-3 h-3 bg-primary rounded-full mx-1"></span> no mapa para ver os espaços de cada torre</li>
          <li>• Clique em qualquer espaço para ver detalhes e fazer reserva</li>
          <li>• Passe o mouse sobre os pontos para ver o nome da torre</li>
          <li>• Alguns espaços podem não estar disponíveis para reserva online ainda</li>
        </ul>
        
        <div className="pt-3 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">
            <strong>Para fazer reservas:</strong> Use o aplicativo Morador Online
          </p>
          <Link to="/manual-app">
            <Button size="sm" variant="outline">
              <ExternalLink className="h-3 w-3 mr-1" />
              Manual do App
            </Button>
          </Link>
        </div>
      </div>

      {/* Popup de Reserva */}
      {selectedSpace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="space-modal w-full max-w-md bg-white">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-800">
                {selectedSpace.name}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedSpace(null)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-4">
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>Capacidade: {selectedSpace.capacity === 0 ? "Informação indisponível" : `${selectedSpace.capacity} pessoas`}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Horário: {selectedSpace.hours}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Comodidades:</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedSpace.amenities.map((amenity) => (
                    <Badge key={amenity} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Botão de reserva ou mensagem de status */}
              {(() => {
                const reservaLink = getReservaLink(selectedSpace.id);
                
                if (reservaLink) {
                  return (
                    <Button 
                      className="w-full" 
                      onClick={() => window.open(reservaLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Fazer Reserva Online
                    </Button>
                  );
                } else {
                  return (
                    <div className="text-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-700 font-medium">
                        Ainda não disponível para reserva online
                      </p>
                      <p className="text-xs text-yellow-600 mt-1">
                        Consulte a administração para mais informações
                      </p>
                    </div>
                  );
                }
              })()}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default InteractiveCondominiumMap;