import FeatureCard from "@/components/FeatureCard";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import {
  Building,
  Clock,
  FileText,
  HelpCircle,
  Home,
  Map,
  MapPin,
  Phone,
  Shield,
  Smartphone,
  UtensilsCrossed,
  Wrench,
  Zap
} from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Guia do Morador",
      description: "Guia completo com orientações sobre água, energia, reformas e manutenção",
      icon: FileText,
      to: "/manual"
    },
    {
      title: "Dúvidas Frequentes",
      description: "Respostas rápidas para as perguntas mais comuns dos moradores",
      icon: HelpCircle,
      to: "/faq"
    },
    {
      title: "Contatos Úteis",
      description: "Telefones da administração, portaria e serviços de emergência",
      icon: Phone,
      to: "/contatos"
    },
    {
      title: "Manual do App MO",
      description: "Guia de utilização do aplicativo para moradores",
      icon: Smartphone,
      to: "/manual-app"
    },
    {
      title: "Horários",
      description: "Horários de funcionamento das áreas comuns e serviços",
      icon: Clock,
      to: "/horarios"
    },
    {
      title: "Mapa de Churrasqueiras",
      description: "Localização e informações sobre as churrasqueiras",
      icon: UtensilsCrossed,
      to: "/churrasqueiras"
    },
    {
      title: "Mapa de Espaços",
      description: "Localização das torres e espaços comuns do condomínio",
      icon: Map,
      to: "/espacos"
    },
    {
      title: "Ramais Úteis",
      description: "Lista completa de ramais internos do condomínio",
      icon: Phone,
      to: "/ramais"
    }
  ];

  const resumoSections = [
    {
      title: "Primeiros Passos no seu novo lar",
      icon: Home,
      items: ["Ligação de água e energia elétrica", "Instalação de gás", "Orientações iniciais"]
    },
    {
      title: "Reformas e Instalações",
      icon: Wrench,
      items: ["Regras para modificações", "Instalação de ar-condicionado", "Fechamento de varanda"]
    },
    {
      title: "Serviços Essenciais",
      icon: Zap,
      items: ["Água", "Energia elétrica", "Gás", "Internet"]
    },
    {
      title: "Manutenção e Cuidados",
      icon: Shield,
      items: ["Dicas de limpeza", "Manutenção preventiva", "Solicitação de reparos via app"]
    },
    {
      title: "Áreas Comuns",
      icon: Building,
      items: ["Salões de festa", "Academia e sauna", "Piscinas", "Espaços gourmet"]
    },
    {
      title: "Localização e Mapas",
      icon: MapPin,
      items: ["Mapa das torres", "Localização de churrasqueiras", "Espaços comuns por torre"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Bem-vindo ao Manual Digital da Comunidade
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Seu guia completo e prático para viver bem no Reserva Parque Clube. Encontre
            rapidamente as informações que precisa.
          </p>
        </div>

        {/* Seções Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              to={feature.to}
            />
          ))}
        </div>

        {/* Resumo do Conteúdo */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            O que você encontrará neste guia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumoSections.map((section) => {
              const Icon = section.icon;
              return (
                <Card key={section.title} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Informações sobre o App */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/20 rounded-full">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Aplicativo Morador Online
            </h2>
            <p className="text-text-secondary mb-6 max-w-3xl mx-auto">
              O app "Morador Online" é sua ferramenta principal para interagir com o condomínio. 
              Através dele você pode fazer reservas, solicitar serviços, acompanhar avisos e muito mais.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center">
                <UtensilsCrossed className="h-4 w-4 text-primary" />
                <span>Reserva de churrasqueiras</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Building className="h-4 w-4 text-primary" />
                <span>Reserva de espaços</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Wrench className="h-4 w-4 text-primary" />
                <span>Solicitação de reparos</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Phone className="h-4 w-4 text-primary" />
                <span>Contatos e ramais</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;