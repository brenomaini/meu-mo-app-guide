import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, AlertTriangle, Bell, BookOpen, Calendar, CheckCircle, CreditCard, Download, Key, Lightbulb, MessageSquare, RefreshCw, Shield, Smartphone, User, Users } from "lucide-react";

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
                  <p className="text-sm text-text-secondary">reservaparqueclube.mo.app.br</p>
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
              <BookOpen className="h-5 w-5" />
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
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Participação</h3>
                <a href="#assembleias" className="text-primary hover:text-primary/80 text-sm block">
                  • Como Participar de Assembleias Online
                </a>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
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

        {/* Guias Detalhados */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-text-primary text-center">
            Guias Detalhados de Comunicação
          </h2>
          
          {/* Como Fazer Login no Aplicativo */}
          <Card id="como-logar" className="p-6 border-green-200 bg-green-50/50">
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

            {/* Tabs para diferentes plataformas */}
            <Tabs defaultValue="android" className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="android">Android</TabsTrigger>
                <TabsTrigger value="ios">iOS</TabsTrigger>
              </TabsList>
              <TabsContent value="android" className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">Download na Google Play Store</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Abra a Google Play Store e pesquise por "Morador Online" e clique em "Instalar"
                  </p>
                  <div className="bg-gray-100 p-4 rounded border border-dashed">
                    <p className="text-sm text-gray-600 italic">📱 Imagem: Aplicativo Play Store Morador Online</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="ios" className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">Download na App Store</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Abra a App Store e pesquise por "Morador Online" e clique em "Obter"
                  </p>
                  <div className="bg-gray-100 p-4 rounded border border-dashed">
                    <p className="text-sm text-gray-600 italic">📱 Imagem: Aplicativo App Store Morador Online</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Passo a Passo do Login:</h4>
                <ol className="space-y-4 text-text-secondary">
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Solicite seu acesso:</strong> Se você ainda não recebeu, solicite o envio ou reenvio do e-mail de boas-vindas para o WhatsApp <a href="https://wa.me/5561998587580" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">61 99858-7580</a>.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong>Localize o e-mail de boas-vindas:</strong> Procure pelo e-mail com o título "Primeiro Acesso" na sua caixa de entrada. Se não encontrar, verifique a pasta de spam.
                      <div className="mt-3 p-3 bg-gray-100 rounded-lg border border-dashed border-gray-300">
                        <p className="text-sm text-gray-600 italic">📧 Imagem: E-mail de boas-vindas com endereço do portal</p>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong>Abra o aplicativo:</strong> Após instalar, abra o aplicativo e você verá a tela de login principal.
                      <div className="mt-3 p-3 bg-gray-100 rounded-lg border border-dashed border-gray-300">
                        <p className="text-sm text-gray-600 italic">📱 Imagem: Tela de login principal do aplicativo</p>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <strong>Digite o endereço do condomínio:</strong> No campo "Endereço Portal Condomínio", digite exatamente: 
                      <code className="bg-gray-200 px-2 py-1 rounded text-sm ml-2 font-mono">reservaparqueclube.mo.app.br</code>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
                    <div><strong>Insira seu email:</strong> No campo "E-mail", digite o email que você cadastrou ou que foi fornecido pela administração.</div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">6</span>
                    <div><strong>Digite sua senha:</strong> Insira a senha que você criou no primeiro acesso.</div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">7</span>
                    <div><strong>Aceite os termos:</strong> Marque a opção "Li e aceito as políticas de privacidade".</div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">8</span>
                    <div><strong>Faça o login:</strong> Clique no botão "ACESSAR" para entrar no aplicativo.</div>
                  </li>
                </ol>
              </div>

              {/* Recomendação de Senha Segura */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">🔒 Recomendação de Senha Segura</h4>
                    <p className="text-blue-800 text-sm mb-2">
                      Para sua segurança, utilize uma senha forte com:
                    </p>
                    <ul className="text-blue-800 text-sm space-y-1 ml-4">
                      <li>• Pelo menos 8 caracteres</li>
                      <li>• Combinação de letras maiúsculas e minúsculas</li>
                      <li>• Números e caracteres especiais (@, #, $, &)</li>
                    </ul>
                    <p className="text-blue-800 text-sm mt-2">
                      <strong>Exemplo:</strong> <code className="bg-blue-200 px-1 rounded">S3nha@Segura2025</code>
                    </p>
                  </div>
                </div>
              </div>

              {/* Alternar entre Contas */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <RefreshCw className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Alternar entre Contas</h4>
                    <p className="text-purple-800 text-sm mb-2">
                      Você pode alternar facilmente entre diferentes contas sem sair do aplicativo:
                    </p>
                    <ol className="text-purple-800 text-sm space-y-1 ml-4">
                      <li>1. Clique no menu (três pontos) no canto superior esquerdo</li>
                      <li>2. Selecione "Sair da conta" e confirme</li>
                      <li>3. Clique em "Trocar Conta" na tela de login</li>
                      <li>4. Insira as credenciais da nova conta</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Problemas Frequentes */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-3">⚠️ Problemas Frequentes</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-yellow-800 text-sm">Endereço do Portal incorreto:</p>
                    <p className="text-yellow-700 text-sm">Certifique-se de digitar corretamente o endereço informado no e-mail de boas-vindas.</p>
                  </div>
                  <div>
                    <p className="font-medium text-yellow-800 text-sm">E-mail ou senha incorretos:</p>
                    <p className="text-yellow-700 text-sm">Verifique se está usando o email correto e se a senha está digitada sem erros. Use "Esqueci a senha" se necessário.</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">❓ Dúvidas Frequentes</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-800">Onde encontro o Endereço do Portal?</p>
                    <p className="text-gray-600">No e-mail de boas-vindas enviado pela administração do condomínio.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Esqueci minha senha, o que faço?</p>
                    <p className="text-gray-600">Clique em "Problemas com acesso?" e selecione "Esqueci a senha".</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Esqueci meu e-mail, o que faço?</p>
                    <p className="text-gray-600">Entre em contato com a administração do condomínio por motivos de segurança.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Como Falar com o Síndico sobre algo URGENTE */}
          <Card id="sindico-urgente" className="p-6 border-red-200 bg-red-50/50">
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
              <h4 className="font-semibold text-text-primary mb-2">Passo a Passo:</h4>
              <ol className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong>Acesse a seção de Ocorrências:</strong> No menu lateral esquerdo da plataforma, clique em "Ocorrências".
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong>Criar nova ocorrência:</strong> Clique no botão "Nova Ocorrência" ou "Registrar Ocorrência".
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong>Defina o título:</strong> No campo "Título", insira um título descritivo e claro sobre a urgência. 
                    Ex: "Vazamento de Água no Bloco X", "Portão da Garagem Quebrado".
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <strong>Marque como urgente:</strong> Selecione a opção "URGENTE" ou "ALTA PRIORIDADE" se disponível.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <strong>Descreva detalhadamente:</strong> No campo de descrição, forneça o máximo de detalhes possível sobre o problema, incluindo localização específica, horário e gravidade.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">6</span>
                  <div>
                    <strong>Anexe evidências:</strong> Se possível, anexe fotos ou vídeos que comprovem a urgência da situação.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">7</span>
                  <div>
                    <strong>Envie a ocorrência:</strong> Clique em "Enviar" ou "Registrar" para submeter a ocorrência urgente.
                  </div>
                </li>
              </ol>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 text-sm">
                      <strong>Lembre-se:</strong> Para emergências reais (incêndio, vazamentos graves, acidentes), 
                      sempre entre em contato por telefone primeiro e registre na plataforma depois para documentar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Como Falar com a Administração */}
          <Card id="administracao" className="p-6 border-blue-200 bg-blue-50/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-100">
                <Users className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700">
                Como Falar com a Administração sobre Amenidades e Questões Gerais
              </h3>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-text-primary mb-2">Passo a Passo:</h4>
              <ol className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong>Acesse o Chat:</strong> No menu principal, localize e clique na opção "Chat" ou "Mensagens".
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong>Selecione o destinatário:</strong> Escolha "Administração" ou "Suporte" como destinatário da mensagem.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong>Digite sua mensagem:</strong> Escreva de forma clara e objetiva sobre sua questão, dúvida ou solicitação.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <strong>Anexe documentos se necessário:</strong> Utilize a opção de anexo para enviar fotos, documentos ou comprovantes relacionados.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <strong>Envie a mensagem:</strong> Clique no botão "Enviar" para submeter sua mensagem à administração.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">6</span>
                  <div>
                    <strong>Acompanhe a resposta:</strong> Você receberá uma notificação quando houver resposta. O histórico fica salvo no chat.
                  </div>
                </li>
              </ol>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-800 text-sm">
                      <strong>Dica:</strong> O horário de atendimento da administração é de Segunda a Sexta, das 8h às 18h. 
                      Mensagens enviadas fora deste horário serão respondidas no próximo dia útil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Como Dar Sugestões */}
          <Card id="sugestoes" className="p-6 border-purple-200 bg-purple-50/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-purple-100">
                <Lightbulb className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-700">
                Como Dar Sugestões na Plataforma
              </h3>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-text-primary mb-2">Passo a Passo:</h4>
              <ol className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong>Acesse "Sugestões" ou "Feedback":</strong> Procure no menu por uma seção dedicada a sugestões ou use o chat da administração.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong>Categorize sua sugestão:</strong> Indique se é sobre melhorias nas áreas comuns, serviços, tecnologia, etc.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong>Seja específico e construtivo:</strong> Descreva claramente sua ideia, explicando os benefícios e como poderia ser implementada.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <strong>Forneça justificativas:</strong> Explique por que a sugestão seria benéfica para o condomínio e os moradores.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <strong>Envie sua sugestão:</strong> Submeta sua ideia e acompanhe se haverá retorno da administração.
                  </div>
                </li>
              </ol>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-purple-800 text-sm">
                      <strong>Lembre-se:</strong> Sugestões construtivas e bem fundamentadas têm maior chance de serem consideradas. 
                      Seja respeitoso e considere a viabilidade financeira e técnica de sua proposta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Como Participar de Assembleias Online */}
          <Card id="assembleias" className="p-6 border-indigo-200 bg-indigo-50/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-indigo-100">
                <Users className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-700">
                Como Participar de Assembleias Online
              </h3>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm">
                <strong>IMPORTANTE:</strong> A funcionalidade de Assembleia Online é o espaço oficial onde você participa das reuniões, vota em pautas importantes e acompanha os resultados de forma prática, transparente e segura.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Como Acessar e Participar:</h4>
                <ol className="space-y-4 text-text-secondary">
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Acesse a funcionalidade:</strong> No menu de Serviços, localize e toque no ícone "Assembleia Online".
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong>Atualize a tela:</strong> Arraste de cima para baixo para garantir que as informações estejam atualizadas.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong>Navegue pelas abas:</strong> Você verá duas abas principais:
                      <ul className="mt-2 ml-4 space-y-1">
                        <li>• <strong>Assembleias Futuras e Atuais</strong> - Para assembleias que vão acontecer ou estão em andamento</li>
                        <li>• <strong>Assembleias Passadas</strong> - Para consultar assembleias já finalizadas</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <strong>Confirme sua presença:</strong> Na assembleia desejada, toque no botão "Confirmar Presença". Isso é obrigatório para acessar as funcionalidades.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
                    <div>
                      <strong>Verifique sua situação:</strong> Após confirmar presença, clique em "Ver Situação" para verificar se você está autorizado a votar.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">6</span>
                    <div>
                      <strong>Entre na assembleia:</strong> Clique no botão "Entrar" para acessar todos os recursos disponíveis.
                    </div>
                  </li>
                </ol>
              </div>

              {/* Funcionalidades Disponíveis */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-800 mb-3">📋 Funcionalidades Disponíveis na Assembleia</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-indigo-800 text-sm">
                  <div className="space-y-2">
                    <p>• <strong>Votação:</strong> Vote nas pautas abertas</p>
                    <p>• <strong>Resultados:</strong> Acompanhe os resultados em tempo real</p>
                    <p>• <strong>Documentos:</strong> Acesse arquivos anexados</p>
                  </div>
                  <div className="space-y-2">
                    <p>• <strong>Perguntas Públicas:</strong> Envie e comente perguntas</p>
                    <p>• <strong>Solicitar Fala:</strong> Peça para falar durante a assembleia</p>
                    <p>• <strong>Videoconferência:</strong> Participe ao vivo (se disponível)</p>
                  </div>
                </div>
              </div>

              {/* Como Votar */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">🗳️ Como Votar nas Pautas</h4>
                <ol className="text-gray-700 text-sm space-y-2 ml-4">
                  <li>1. Acesse a aba "Votação" dentro dos detalhes da assembleia</li>
                  <li>2. Leia atentamente a descrição de cada pauta</li>
                  <li>3. Selecione uma das opções de resposta disponíveis</li>
                  <li>4. Adicione uma justificativa (opcional)</li>
                  <li>5. Toque no botão "Votar" e confirme sua escolha</li>
                  <li>6. Acompanhe seus votos na aba "Meus Votos"</li>
                </ol>
              </div>

              {/* Tipos de Assembleia */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">📊 Tipos de Assembleia</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-800">Assembleia Ordinária:</p>
                    <p className="text-gray-600">Ocorre em períodos definidos (geralmente 1 vez por ano). Objetivo: aprovação de contas, eleição de síndico, previsão orçamentária.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Assembleia Extraordinária:</p>
                    <p className="text-gray-600">Sempre que necessário, fora da agenda regular. Objetivo: decisões urgentes ou pontuais, como obras ou mudanças nas regras.</p>
                  </div>
                </div>
              </div>

              {/* Dúvidas Frequentes */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-3">❓ Dúvidas Frequentes sobre Assembleias</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-yellow-800">Confirmei presença, mas não consigo votar. O que fazer?</p>
                    <p className="text-yellow-700">Verifique sua situação no botão "Ver Situação". Pode haver problemas cadastrais ou a votação pode ser específica para outra torre.</p>
                  </div>
                  <div>
                    <p className="font-medium text-yellow-800">Tenho mais de uma unidade. Isso afeta meu voto?</p>
                    <p className="text-yellow-700">Sim. O sistema calcula automaticamente os votos com base na quantidade de unidades vinculadas ao seu nome.</p>
                  </div>
                  <div>
                    <p className="font-medium text-yellow-800">Não vejo a assembleia listada. O que pode ser?</p>
                    <p className="text-yellow-700">Deslize a tela para baixo para forçar a atualização. Se ainda não aparecer, contate a administração.</p>
                  </div>
                </div>
              </div>

              {/* Dicas Importantes */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">💡 Dicas Importantes</h4>
                    <ul className="text-green-800 text-sm space-y-1 ml-4">
                      <li>• O período de votação é limitado; fique atento aos horários</li>
                      <li>• Moradores com pendências podem ter restrições para votar</li>
                      <li>• Os resultados são atualizados em tempo real</li>
                      <li>• Use a seção de perguntas para esclarecer dúvidas de forma respeitosa</li>
                      <li>• Para emergências reais, sempre contate por telefone primeiro</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        {/* Resumo Rápido */}
     
        <Card className="mt-12 p-6 bg-gray-50">
          <h3 className="text-xl font-semibold text-text-primary mb-4">📋 Resumo Rápido - Primeiro Acesso</h3>
          <ol className="space-y-2 text-text-secondary">
            <li>1. Baixe o app Morador Online na Play Store (Android) ou App Store (iOS)</li>
            <li>2. Abra o app, insira o Endereço do Portal, e-mail e senha</li>
            <li>3. Use a funcionalidade "Alternar conta" para múltiplos perfis</li>
            <li>4. Para assembleias: Serviços → Assembleia Online → Confirmar Presença → Entrar</li>
            <li>5. Consulte as Dúvidas Frequentes em caso de problemas</li>
            <li>6. Aproveite todas as funcionalidades do App</li>
          </ol>
        </Card>
      </div>
    </Layout>
  );
};

export default ManualApp;