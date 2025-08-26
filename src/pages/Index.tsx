import { FileText, HelpCircle, Phone, Smartphone } from "lucide-react";
import Layout from "@/components/Layout";
import FeatureCard from "@/components/FeatureCard";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </Layout>
  );
};

export default Index;
