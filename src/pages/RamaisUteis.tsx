import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Building, DoorOpen, Home, Phone, UtensilsCrossed } from "lucide-react";

const RamaisUteis = () => {
  const ramais = [
    {
      category: "Portaria e Guarita",
      icon: Phone,
      items: [
        { name: "Portaria", ramal: "#200 (ou tecla portaria)" },
        { name: "Guarita", ramal: "#201" },
        { name: "Entrada de serviço", ramal: "#202" },
        { name: "Totem", ramal: "#203" },
        { name: "Vestiários", ramal: "#204" },
      ],
    },
    {
      category: "Administração",
      icon: Building,
      items: [{ name: "Administração", ramal: "#205" }],
    },
    {
      category: "Áreas Comuns",
      icon: Home,
      items: [{ name: "Academia", ramal: "#30" }],
    },
    {
      category: "Churrasqueiras",
      icon: UtensilsCrossed,
      items: [
        { name: "Churrasqueira 01", ramal: "#31" },
        { name: "Churrasqueira 02", ramal: "#32" },
        { name: "Churrasqueira 03", ramal: "#33" },
        { name: "Churrasqueira 04", ramal: "#34" },
        { name: "Churrasqueira 05", ramal: "#35" },
        { name: "Churrasqueira 06", ramal: "#36" },
      ],
    },
    {
      category: "Pilotis Torre 01",
      icon: Home,
      items: [
        { name: "Tech - Fone 01", ramal: "#10" },
        { name: "Tech - Fone 02", ramal: "#11" },
        { name: "Salão de Festas", ramal: "#12" },
        { name: "Espaço Gourmet", ramal: "#13" },
      ],
    },
    {
      category: "Pilotis Torre 02",
      icon: Home,
      items: [
        { name: "Tech - Fone 01", ramal: "#20" },
        { name: "Tech - Fone 02", ramal: "#21" },
        { name: "Salão de Festas", ramal: "#22" },
      ],
    },
    {
      category: "Pilotis Torre 03",
      icon: Home,
      items: [
        { name: "Garagem", ramal: "#37" },
        { name: "Tech - Fone 01", ramal: "#38" },
        { name: "Tech - Fone 02", ramal: "#39" },
        { name: "Copa", ramal: "#40" },
      ],
    },
    {
      category: "Pilotis Torre 04",
      icon: Home,
      items: [
        { name: "Tech - Fone 01", ramal: "#41" },
        { name: "Tech - Fone 02", ramal: "#42" },
      ],
    },
    {
      category: "Apartamentos",
      icon: DoorOpen,
      items: [
        {
          name: "Ligar para Apartamento",
          ramal: "Ex: Torre 2 Ap 206 -> #2 206",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">
          Ramais Úteis
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ramais.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-text-primary">
                    {section.category}
                  </h2>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex justify-between items-center text-text-secondary"
                    >
                      <span>{item.name}</span>
                      <span className="font-medium text-primary">
                        {item.ramal}
                      </span>
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
