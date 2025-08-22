import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Smartphone, Download, User, Key, Bell, Calendar, MessageSquare, CreditCard, AlertTriangle, Users, Lightbulb, MessagesSquare } from "lucide-react";

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

        {/* Guias Detalhados de Comunicação */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Guias Detalhados de Comunicação
          </h2>
          
          {/* Como Falar com o Síndico sobre algo URGENTE */}
          <Card className="mb-8 p-6 border-red-200 bg-red-50/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-red-100">
                <AlertTriangle className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-red-700">
                Como Falar com o Síndico sobre algo URGENTE
              </h3>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <p className="text-orange-800 text-sm">
                <strong>IMPORTANTE:</strong> Para emergências que exijam ação imediata (ex: vazamento grave, incêndio, etc.), 
                o contato telefônico direto com a portaria ou síndico ainda é o mais indicado. A ocorrência deve ser 
                registrada na plataforma posteriormente para formalização.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-text-primary mb-2">Passo a Passo:</h4>
                <ol className="space-y-3 text-text-secondary">
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Acesse a seção de Ocorrências:</strong> No menu lateral esquerdo da plataforma, clique em "Ocorrências".
                      <div className="mt-2 p-3 bg-gray-100 rounded-lg border border-dashed border-gray-300">
                        <p className="text-sm text-gray-600 italic">
                          📱 Espaço reservado para imagem: Tela de Ocorrências (versão web e mobile)
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                    <div><strong>Preencha o Título:</strong> No campo "Titulo", insira um título descritivo e claro sobre a urgência. Ex: "Vazamento de Água no Bloco X", "Portão da Garagem Quebrado".</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                    <div><strong>Descreva a Ocorrência:</strong> No campo "Texto Ocorrência", detalhe o problema de forma concisa e com todas as informações relevantes. Inclua o local exato, o que está acontecendo e, se possível, a gravidade da situação.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                    <div><strong>Selecione o Tipo de Ocorrência:</strong> No campo "Tipo Ocorrencia", selecione a opção que melhor se encaixa na sua situação. Para urgências, "Reclamacao" ou "Outros Assuntos" são as mais indicadas.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
                    <div><strong>Encaminhe para o Síndico:</strong> No campo "Encaminhar para:", selecione "Síndico/Representante da Torre...".</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">6</span>
                    <div><strong>Anexe Fotos/Imagens (Opcional, mas recomendado):</strong> Se possível, anexe fotos ou vídeos que comprovem a urgência da situação. Isso pode agilizar a resolução do problema.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">7</span>
                    <div><strong>Registre a Ocorrência:</strong> Após preencher todos os campos, clique no botão "Registrar Ocorrência".</div>
                  </li>
                </ol>
              </div>
            </div>
          </Card>

          {/* Como Falar com a Administração sobre Amenidades e Chatices */}
          <Card className="mb-8 p-6 border-blue-200 bg-blue-50/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-100">
                <Users className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700">
                Como Falar com a Administração sobre Amenidades e Chatices
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-text-primary mb-2">Passo a Passo:</h4>
                <ol className="space-y-3 text-text-secondary">
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Acesse a seção de Ocorrências:</strong> No menu lateral esquerdo da plataforma, clique em "Ocorrências".
                      <div className="mt-2 p-3 bg-gray-100 rounded-lg border border-dashed border-gray-300">
                        <p className="text-sm text-gray-600 italic">
                          📱 Espaço reservado para imagem: Tela de Ocorrências para Administração (versão web e mobile)
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                    <div><strong>Preencha o Título:</strong> No campo "Titulo", insira um título descritivo e claro sobre o assunto. Ex: "Sugestão de Melhoria na Área de Lazer", "Barulho Excessivo no Bloco Y", "Problema com Coleta de Lixo".</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                    <div><strong>Descreva a Ocorrência:</strong> No campo "Texto Ocorrência", detalhe o problema ou sugestão de forma concisa e com todas as informações relevantes. Seja específico sobre o local, o horário (se aplicável) e o impacto da situação.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                    <div><strong>Selecione o Tipo de Ocorrência:</strong> No campo "Tipo Ocorrencia", selecione a opção que melhor se encaixa na sua situação. Para reclamações, escolha "Reclamacao". Para sugestões, escolha "Sugestao". Para outros assuntos, "Outros Assuntos".</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
                    <div><strong>Encaminhe para a Administração:</strong> No campo "Encaminhar para:", selecione "Administração".</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">6</span>
                    <div><strong>Anexe Fotos/Imagens (Opcional):</strong> Se tiver fotos ou vídeos que ajudem a ilustrar o problema ou a sugestão, anexe-os. Isso pode facilitar a compreensão e a resolução por parte da administração.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">7</span>
                    <div><strong>Registre a Ocorrência:</strong> Após preencher todos os campos, clique no botão "Registrar Ocorrência".</div>
                  </li>
                </ol>
              </div>
            </div>
          </Card>

          {/* Como Dar Sugestões na Plataforma */}
          <Card className="mb-8 p-6 border-green-200 bg-green-50/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-green-100">
                <Lightbulb className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-700">
                Como Dar Sugestões na Plataforma Morador Online
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-3 text-lg">1. Dando Sugestões Formais (via Ocorrências)</h4>
                <p className="text-text-secondary mb-4">Para sugestões que você deseja que a administração analise formalmente, utilize a seção de Ocorrências:</p>
                
                <ol className="space-y-3 text-text-secondary">
                  <li className="flex gap-3">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Acesse a seção de Ocorrências:</strong> No menu lateral esquerdo da plataforma, clique em "Ocorrências".
                      <div className="mt-2 p-3 bg-gray-100 rounded-lg border border-dashed border-gray-300">
                        <p className="text-sm text-gray-600 italic">
                          📱 Espaço reservado para imagem: Tela de Ocorrências para Sugestões (versão web e mobile)
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                    <div><strong>Preencha o Título:</strong> No campo "Titulo", insira um título claro e objetivo para sua sugestão. Ex: "Sugestão para Implantação de Coleta Seletiva", "Ideia para Melhoria da Segurança".</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                    <div><strong>Descreva a Sugestão:</strong> No campo "Texto Ocorrência", detalhe sua sugestão, explicando os benefícios e, se possível, como ela poderia ser implementada.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                    <div><strong>Selecione o Tipo de Ocorrência:</strong> No campo "Tipo Ocorrencia", selecione a opção "Sugestao".</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
                    <div><strong>Encaminhe para a Administração:</strong> No campo "Encaminhar para:", selecione "Administração".</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">6</span>
                    <div><strong>Anexe Fotos/Imagens (Opcional):</strong> Se tiver imagens ou documentos que complementem sua sugestão, anexe-os.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">7</span>
                    <div><strong>Registre a Ocorrência:</strong> Após preencher todos os campos, clique no botão "Registrar Ocorrência".</div>
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-text-primary mb-3 text-lg">2. Dando Sugestões e Debatendo Ideias (via Fórum)</h4>
                <p className="text-text-secondary mb-4">Para sugestões que você gostaria de debater com outros moradores e coletar opiniões, o Fórum é o local ideal:</p>
                
                <ol className="space-y-3 text-text-secondary">
                  <li className="flex gap-3">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                    <div><strong>Acesse a seção de Fórum:</strong> No menu lateral esquerdo da plataforma, clique em "Fórum".</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                    <div><strong>Crie um Novo Tópico:</strong> Dentro do Fórum, procure pela opção "Crie seu Tópico" ou similar.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                    <div><strong>Defina o Título do Tópico:</strong> Dê um título claro e convidativo para sua sugestão/ideia.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                    <div><strong>Descreva sua Sugestão:</strong> No corpo do tópico, detalhe sua sugestão e convide os moradores a participar do debate.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
                    <div><strong>Publique o Tópico:</strong> Após escrever, publique o tópico para que outros moradores possam visualizá-lo e interagir.</div>
                  </li>
                </ol>
              </div>
            </div>
          </Card>

          {/* Como Debater Coisas na Plataforma */}
          <Card className="mb-8 p-6 border-purple-200 bg-purple-50/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-purple-100">
                <MessagesSquare className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-700">
                Como Debater Coisas na Plataforma Morador Online
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-3 text-lg">1. Debatendo no Fórum</h4>
                <p className="text-text-secondary mb-4">O Fórum é o espaço ideal para discussões abertas e contínuas sobre diversos temas do condomínio.</p>
                
                <ol className="space-y-3 text-text-secondary">
                  <li className="flex gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Acesse a seção de Fórum:</strong> No menu lateral esquerdo da plataforma, clique em "Fórum".
                      <div className="mt-2 p-3 bg-gray-100 rounded-lg border border-dashed border-gray-300">
                        <p className="text-sm text-gray-600 italic">
                          📱 Espaço reservado para imagem: Tela do Fórum (versão web e mobile)
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong>Crie um Novo Tópico (se desejar iniciar um novo debate):</strong>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Procure pela opção "Crie seu Tópico" ou similar.</li>
                        <li>• Defina um título claro e convidativo para o seu tópico de debate.</li>
                        <li>• No corpo do tópico, apresente o assunto que deseja debater, seus pontos de vista e convide outros moradores a participar.</li>
                        <li>• Publique o tópico.</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong>Participe de Tópicos Existentes:</strong>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Na página do Fórum, você verá uma lista de tópicos criados por outros moradores.</li>
                        <li>• Clique no tópico que deseja participar.</li>
                        <li>• Leia as mensagens existentes e utilize o campo de resposta para adicionar seus comentários, opiniões ou perguntas.</li>
                        <li>• Você também pode "curtir" mensagens ou tópicos que considerar relevantes.</li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-text-primary mb-3 text-lg">2. Debatendo em Discussões sobre Tópicos (Assembleias)</h4>
                <p className="text-text-secondary mb-4">Esta seção permite discutir tópicos que podem se tornar pauta de assembleias futuras.</p>
                
                <ol className="space-y-3 text-text-secondary">
                  <li className="flex gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                    <div><strong>Acesse a seção de Assembleias:</strong> No menu lateral esquerdo da plataforma, clique em "Assembleias".</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                    <div><strong>Acesse "Discussões Sobre Tópicos":</strong> Dentro da seção de Assembleias, clique em "Discussões Sobre Tópicos".</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                    <div><strong>Crie um Tópico para Discussão:</strong> Procure pela opção "Crie seu Tópico" e crie um tópico com sua sugestão para ser discutida em assembleia. Os tópicos mais curtidos podem se tornar pauta.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                    <div><strong>Participe de Discussões Existentes:</strong> Navegue pelos tópicos existentes, clique nos que lhe interessam, contribua com seus comentários e "curta" os tópicos que você apoia.</div>
                  </li>
                </ol>
              </div>
            </div>
          </Card>
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