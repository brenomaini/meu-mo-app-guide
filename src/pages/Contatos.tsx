import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Phone, Clock, MapPin, Shield, Wrench, Zap } from "lucide-react";

const Contatos = () => {
  const contacts = [
    {
      category: "Administração",
      icon: MapPin,
      items: [
        { label: "Administração do Condomínio", phone: "(11) 3456-7890", hours: "Segunda a Sexta: 8h às 18h" },
        { label: "Síndico", phone: "(11) 9876-5432", hours: "Emergências: 24h" }
      ]
    },
    {
      category: "Portaria e Segurança",
      icon: Shield,
      items: [
        { label: "Portaria Principal", phone: "(11) 3456-7891", hours: "24 horas" },
        { label: "Central de Segurança", phone: "(11) 3456-7892", hours: "24 horas" }
      ]
    },
    {
      category: "Manutenção",
      icon: Wrench,
      items: [
        { label: "Zelador", phone: "(11) 9876-5433", hours: "Segunda a Sábado: 7h às 17h" },
        { label: "Manutenção Predial", phone: "(11) 3456-7893", hours: "Segunda a Sexta: 8h às 17h" }
      ]
    },
    {
      category: "Serviços Públicos",
      icon: Zap,
      items: [
        { label: "Neoenergia (Energia)", phone: "0800-720-0196", hours: "24 horas" },
        { label: "Supergasbras (Gás)", phone: "(11) 3003-4040", hours: "Segunda a Sexta: 8h às 18h" },
        { label: "SABESP (Água)", phone: "0800-011-9911", hours: "24 horas" }
      ]
    },
    {
      category: "Emergência",
      icon: Phone,
      items: [
        { label: "Bombeiros", phone: "193", hours: "24 horas" },
        { label: "SAMU", phone: "192", hours: "24 horas" },
        { label: "Polícia Militar", phone: "190", hours: "24 horas" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Contatos Úteis</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((category) => {
            const Icon = category.icon;
            
            return (
              <Card key={category.category} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-text-primary">{category.category}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <h3 className="font-medium text-text-primary">{item.label}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Phone className="h-4 w-4 text-primary" />
                        <a 
                          href={`tel:${item.phone}`} 
                          className="text-primary hover:text-primary/80 font-medium"
                        >
                          {item.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-4 w-4 text-text-secondary" />
                        <span className="text-sm text-text-secondary">{item.hours}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
        
        <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Informações Importantes</h2>
          <ul className="space-y-2 text-text-secondary">
            <li>• Em caso de emergência, sempre ligue primeiro para os serviços de emergência (192, 193, 190)</li>
            <li>• Para manutenções programadas, entre em contato com antecedência</li>
            <li>• Guarde sempre estes contatos em local de fácil acesso</li>
            <li>• Em caso de dúvidas sobre qual contato usar, consulte primeiro a administração</li>
          </ul>
        </Card>
      </div>
    </Layout>
  );
};

export default Contatos;