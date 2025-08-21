import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Smartphone, Download, User, Key, Bell, Calendar, MessageSquare, CreditCard } from "lucide-react";

const ManualApp = () => {
  const sections = [
    {
      title: "Download e Instalação",
      icon: Download,
      content: [
        "Baixe o app 'MO - Morador' na App Store (iOS) ou Google Play Store (Android)",
        "Instale o aplicativo no seu dispositivo",
        "Certifique-se de ter uma conexão estável com a internet"
      ]
    },
    {
      title: "Primeiro Acesso",
      icon: User,
      content: [
        "Abra o aplicativo e selecione 'Reserva Parque Clube'",
        "Digite seu CPF e a senha fornecida pela administração",
        "Complete seu perfil com informações pessoais",
        "Confirme seu email e número de telefone"
      ]
    },
    {
      title: "Funcionalidades Principais",
      icon: Smartphone,
      content: [
        "Visualizar extratos e boletos do condomínio",
        "Fazer reservas de áreas comuns",
        "Comunicar-se com a administração",
        "Receber avisos e comunicados importantes",
        "Registrar ocorrências e solicitações de manutenção"
      ]
    },
    {
      title: "Alteração de Senha",
      icon: Key,
      content: [
        "Acesse 'Meu Perfil' no menu principal",
        "Selecione 'Alterar Senha'",
        "Digite a senha atual e a nova senha",
        "Confirme a nova senha e salve as alterações"
      ]
    },
    {
      title: "Notificações",
      icon: Bell,
      content: [
        "Permita notificações para receber avisos importantes",
        "Configure quais tipos de notificação deseja receber",
        "As notificações incluem: vencimentos, comunicados e reservas"
      ]
    },
    {
      title: "Reservas de Áreas Comuns",
      icon: Calendar,
      content: [
        "Acesse 'Reservas' no menu principal",
        "Selecione a área desejada (churrasqueira, salão de festas, etc.)",
        "Escolha data e horário disponível",
        "Confirme a reserva e efetue o pagamento se necessário"
      ]
    },
    {
      title: "Chat com Administração",
      icon: MessageSquare,
      content: [
        "Use o chat integrado para contato direto",
        "Envie fotos e documentos quando necessário",
        "Acompanhe o histórico de conversas",
        "Horário de atendimento: Segunda a Sexta, 8h às 18h"
      ]
    },
    {
      title: "Pagamentos",
      icon: CreditCard,
      content: [
        "Visualize boletos em aberto na aba 'Financeiro'",
        "Pague diretamente pelo app via PIX ou cartão",
        "Acompanhe o histórico de pagamentos",
        "Receba comprovantes por email automaticamente"
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            Manual de Utilização do App MO
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Guia completo para usar o aplicativo do morador e aproveitar todas as funcionalidades disponíveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-text-primary">{section.title}</h2>
                </div>
                
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Dicas Importantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-text-primary mb-2">Suporte Técnico</h3>
              <p className="text-sm text-text-secondary">
                Em caso de problemas técnicos com o app, entre em contato com a administração 
                ou acesse a seção de ajuda dentro do aplicativo.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-text-primary mb-2">Atualizações</h3>
              <p className="text-sm text-text-secondary">
                Mantenha o app sempre atualizado para ter acesso às novas funcionalidades 
                e correções de segurança.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-text-primary mb-2">Segurança</h3>
              <p className="text-sm text-text-secondary">
                Nunca compartilhe sua senha com terceiros. Use uma senha forte e 
                altere-a periodicamente.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-text-primary mb-2">Conectividade</h3>
              <p className="text-sm text-text-secondary">
                Para melhor experiência, use o app com conexão Wi-Fi estável. 
                Algumas funções podem não funcionar offline.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default ManualApp;