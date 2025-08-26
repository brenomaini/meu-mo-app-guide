import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Download, User, Key, Bell, Calendar, MessageSquare, CreditCard, AlertTriangle, Users, Lightbulb, MessagesSquare, BookOpen, AlertCircle, CheckCircle, Map, MapPin } from "lucide-react";

const ManualApp = () => {
  const sections = [
    {
      title: "Primeiro Acesso",
      icon: User,
      content: [
        "Solicite o envio/reenvio do e-mail de boas-vindas para o WhatsApp 61 99858-7580",
        "Localize o e-mail 'Primeiro Acesso' e crie sua senha",
        "Baixe o APP Morador On-line 2.0",
        "Acesse o APP com os dados abaixo:",
        "Endereço Portal Condomínio: reservaparqueclube.mo.app.br"
      ]
    },
    {
      title: "Funcionalidades Principais",
      icon: Smartphone,
      content: [
        "Agendar Mudanças",
        "Reservar Espaços",
        "Acessar Documentos Importantes",
        "Cadastrar Prestadores e Visitantes",
        "Registrar Ocorrências",
        "Cadastrar moradores adicionais",
        "Acessar Boletos"
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

        {/* Links de Acesso */}
        <div className="mb-8">
          <Card className="p-6 border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10">
            <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <Download className="h-5 w-5" />
              Links de Acesso ao Aplicativo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a 
                href="https://reservaparqueclube.mo.app.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-primary/20 hover:border-primary/40 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Versão Web</h3>
                  <p className="text-sm text-text-secondary">Acesse pelo navegador</p>
                </div>
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=br.app.mo.novomo&hl=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-primary/20 hover:border-primary/40 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors">
                  <Download className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Google Play</h3>
                  <p className="text-sm text-text-secondary">Para Android</p>
                </div>
              </a>
              
              <a 
                href="https://apps.apple.com/br/app/morador-online-2-0/id1598971439" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-primary/20 hover:border-primary/40 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
                  <Download className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">App Store</h3>
                  <p className="text-sm text-text-secondary">Para iOS</p>
                </div>
              </a>
            </div>
          </Card>
        </div>

        {/* Sumário */}
        <div className="mb-12">
          <Card className="p-6 border-primary/20 bg-primary/5">
            <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <User className="h-5 w-5" />
              Sumário dos Tutoriais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Primeiro Acesso</h3>
                <a href="#como-logar" className="text-primary hover:text-primary/80 text-sm block">
                  • Como Fazer Login no Aplicativo
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Comunicação Urgente</h3>
                <a href="#sindico-urgente" className="text-primary hover:text-primary/80 text-sm block">
                  • Como Falar com o Síndico sobre algo URGENTE
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Comunicação Geral</h3>
                <a href="#administracao" className="text-primary hover:text-primary/80 text-sm block">
                  • Como Falar com a Administração sobre Amenidades e Chatices
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Sugestões</h3>
                <a href="#sugestoes" className="text-primary hover:text-primary/80 text-sm block">
                  • Como Dar Sugestões na Plataforma
                </a>
              </div>
            </div>
          </Card>
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

        {/* Conteúdo Principal */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Guias Detalhados de Comunicação
          </h2>
          
          {/* Como Fazer Login no Aplicativo */}
          <Card id="como-logar" className="mb-8 p-6 border-green-200 bg-green-50/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-green-100">
                <Key className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-700">
                Como Fazer Login no Aplicativo
              </h3>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm">
                <strong>IMPORTANTE:</strong> Este manual irá guiá-lo sobre como fazer o primeiro acesso ao aplicativo Morador Online. 
                É importante seguir estes passos para configurar corretamente sua conta.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-text-primary mb-2">Passo a Passo:</h4>
                <ol className="space-y-3 text-text-secondary">
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Solicite seu acesso:</strong> Se você ainda não recebeu, solicite o envio ou reenvio do e-mail de boas-vindas para o WhatsApp <a href="https://wa.me/5561998587580" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">61 99858-7580</a>.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong>Crie sua senha:</strong> Localize o e-mail com o título "Primeiro Acesso" na sua caixa de entrada e siga as instruções para criar sua senha pessoal.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong>Baixe o aplicativo:</strong> Faça o download do aplicativo "Morador Online 2.0" na Google Play Store (Android) ou App Store (iOS), ou acesse a versão web através do navegador.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <strong>Digite o endereço do condomínio:</strong> No campo "Endereço Portal Condomínio", digite exatamente: 
                      <code className="bg-gray-200 px-2 py-1 rounded text-sm ml-1 font-mono">reservaparqueclube.mo.app.br</code>
                      <div className="mt-2 p-3 bg-gray-100 rounded-lg border border-dashed border-gray-300">
                        <p className="text-sm text-gray-600 italic">
                          📱 Espaço reservado para imagem: Tela de login mobile mostrando o campo preenchido
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
                    <div><strong>Insira seu email:</strong> No campo "Seu endereço de email", digite o email que você cadastrou ou que foi fornecido pela administração.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">6</span>
                    <div><strong>Digite sua senha:</strong> Insira a senha que você criou.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">7</span>
                    <div><strong>Aceite os termos:</strong> Marque a opção "Li e aceito as políticas de privacidade".</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">8</span>
                    <div><strong>Faça o login:</strong> Clique no botão "ACESSAR" para entrar no aplicativo.</div>
                  </li>
                </ol>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-yellow-800 text-sm">
                      <strong>Não recebeu o e-mail?</strong> Se você não encontrar o e-mail de "Primeiro Acesso", verifique sua caixa de spam ou entre em contato pelo WhatsApp para solicitar o reenvio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 text-sm">
                      <strong>Dica:</strong> O aplicativo também oferece a opção "Acesso com digital" para facilitar logins futuros, caso seu dispositivo suporte biometria.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Tela de Login (Web):</h4>
                <p className="text-sm text-text-secondary mb-4">Exemplo de como a tela aparece na versão web:</p>
                <div className="bg-white p-4 rounded border border-dashed border-gray-300">
                  <p className="text-sm text-gray-600 italic">📱 Espaço reservado para imagem da tela de login web</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Como Falar com o Síndico sobre algo URGENTE */}
          <Card id="sindico-urgente" className="mb-8 p-6 border-red-200 bg-red-50/50">
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
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
                    <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                      <strong className="text-red-800">⚠️ DIFERENÇA IMPORTANTE - Encaminhe para o Síndico:</strong> 
                      <span className="text-red-700"> No campo "Encaminhar para:", selecione </span>
                      <strong className="text-red-800">"Síndico/Representante da Torre..."</strong>
                      <span className="text-red-700"> (não Administração).</span>
                    </div>
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
          <Card id="administracao" className="mb-8 p-6 border-blue-200 bg-blue-50/50">
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
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
                    <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
                      <strong className="text-blue-800">📋 DIFERENÇA IMPORTANTE - Encaminhe para a Administração:</strong> 
                      <span className="text-blue-700"> No campo "Encaminhar para:", selecione </span>
                      <strong className="text-blue-800">"Administração"</strong>
                      <span className="text-blue-700"> (não Síndico).</span>
                    </div>
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
          <Card id="sugestoes" className="mb-8 p-6 border-green-200 bg-green-50/50">
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