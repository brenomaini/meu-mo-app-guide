import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const InteractiveChurrasqueirasMap = () => {
  const churrasqueiras = [
    { id: 1, name: "Churrasqueira 1", top: "25%", left: "35%" },
    { id: 2, name: "Churrasqueira 2", top: "25%", left: "65%" },
    { id: 3, name: "Churrasqueira 3", top: "50%", left: "35%" },
    { id: 4, name: "Churrasqueira 4", top: "50%", left: "65%" },
    { id: 5, name: "Churrasqueira 5", top: "75%", left: "35%" },
    { id: 6, name: "Churrasqueira 6", top: "75%", left: "65%" },
  ];

  return (
    <Card className="w-full h-[500px] relative overflow-hidden">
      <img src="/placeholder.svg" alt="Mapa das churrasqueiras" className="w-full h-full object-cover" />
      <div className="absolute inset-0">
        {churrasqueiras.map((churrasqueira) => (
          <div
            key={churrasqueira.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ top: churrasqueira.top, left: churrasqueira.left }}
          >
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              {churrasqueira.id}
            </div>
            <div className="mt-2 text-center bg-white px-2 py-1 rounded-lg shadow-md text-sm">
              {churrasqueira.name}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default InteractiveChurrasqueirasMap;
