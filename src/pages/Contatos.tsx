import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Clock, Phone, Zap } from "lucide-react";

const Contatos = () => {
  const condominiumContacts = [
    { label: "Administração do Condomínio", phone: "+55 61 9858-7580", hours: "Segunda a Sexta: 8h às 18h" },
    { label: "Portaria do Condomínio", phone: "+55 61 9 8262-0053", hours: "24 horas" },
  ];

  const contacts = [
    {
      category: "Serviços Públicos",
      icon: Zap,
      items: [
        { label: "ANATEL (Agência Nacional de Telecomunicações)", phone: "1331", hours: "Segunda a Sexta: 8h às 20h" },
        { label: "ANEEL (Agência Nacional de Energia Elétrica)", phone: "167", hours: "Segunda a Sexta: 8h às 20h" },
        { label: "SUPERGASBRAS", phone: "0800 704 3433", hours: "Atendimento de emergência: 24h" },
        { label: "NEOENERGIA (Agência Nacional de Energia Elétrica)", phone: "116", hours: "24 horas" },
        { label: "Defesa Civil", phone: "199", hours: "24 horas" },
      ]
    },
    {
      category: "Emergência",
      icon: Phone,
      items: [
        { label: "Corpo de Bombeiros Militar", phone: "193", hours: "24 horas" },
        { label: "Polícia Civil", phone: "197", hours: "(61) 98626-1197 - Chamada tarifada. Denúncias: 24h" },
        { label: "Polícia Militar", phone: "190", hours: "24 horas" },
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Contatos Úteis</h1>
        
        {/* Contatos do Condomínio */}
        <Card className="mb-6 p-6 bg-green-50 border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-green-100">
              <Phone className="h-5 w-5 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-green-800">Contatos do Condomínio</h2>
          </div>
          
          <div className="space-y-4">
            {condominiumContacts.map((item, index) => (
              <div key={index} className="border-l-2 border-green-300 pl-4">
                <h3 className="font-medium text-green-800">{item.label}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Phone className="h-4 w-4 text-green-600" />
                  <a 
                    href={`tel:${item.phone}`} 
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    {item.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600">{item.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
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