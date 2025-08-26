import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Phone, Building, Home, Barbell, UtensilsCrossed, DoorOpen } from "lucide-react";

const RamaisUteis = () => {
  const ramais = [
    { category: "Portaria e Guarita", icon: Phone, items: [
      { name: "Portaria", ramal: "200 ou \"Portaria\"" },
      { name: "Guarita", ramal: "201" },
      { name: "Entrada de Serviço", ramal: "202" },
      { name: "Totem", ramal: "203" },
      { name: "Vestiários", ramal: "204" },
    ]},
    { category: "Administração", icon: Building, items: [
      { name: "Administração", ramal: "205" },
    ]},
    { category: "Áreas Comuns", icon: Home, items: [
      { name: "Academia", ramal: "?" }, // Placeholder for unknown ramal
    ]},
    { category: "Churrasqueiras", icon: UtensilsCrossed, items: [
      { name: "Churrasqueira 1", ramal: "31" },
      { name: "Churrasqueira 2", ramal: "32" },
      { name: "Churrasqueira 3", ramal: "33" },
      { name: "Churrasqueira 4", ramal: "34" },
      { name: "Churrasqueira 5", ramal: "35" },
      { name: "Churrasqueira 6", ramal: "36" },
    ]},
    { category: "Apartamentos", icon: DoorOpen, items: [
      { name: "Ligar para Apartamento", ramal: "Ex: Torre 2 Ap 206 -> 2 206" },
    ]},
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Ramais Úteis</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ramais.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-text-primary">{section.category}</h2>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-center text-text-secondary">
                      <span>{item.name}</span>
                      <span className="font-medium text-primary">{item.ramal}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default RamaisUteis;