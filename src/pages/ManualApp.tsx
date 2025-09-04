import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle,
  CreditCard,
  Download,
  Key,
  Lightbulb,
  MessageSquare,
  RefreshCw,
  Shield,
  Smartphone,
  User,
  Users,
} from "lucide-react";

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
        "Endereço Portal Condomínio: reservaparqueclube.mo.app.br",
      ],
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
        "Acessar Boletos",
      ],
    },
    {
      title: "Alteração de Senha",
      icon: Key,
      content: [
        "Acesse 'Meu Perfil' no menu principal",
        "Selecione 'Alterar Senha'",
        "Digite a senha atual e a nova senha",
        "Confirme a nova senha e salve as alterações",
      ],
    },
    {
      title: "Notificações",
      icon: Bell,
      content: [
        "Permita notificações para receber avisos importantes",
        "Configure quais tipos de notificação deseja receber",
        "As notificações incluem: vencimentos, comunicados e reservas",
      ],
    },
    {
      title: "Reservas de Áreas Comuns",
      icon: Calendar,
      content: [
        "Acesse 'Reservas' no menu principal",
        "Selecione a área desejada (churrasqueira, salão de festas, etc.)",
        "Escolha data e horário disponível",
        "Confirme a reserva e efetue o pagamento se necessário",
      ],
    },
    {
      title: "Chat com Administração",
      icon: MessageSquare,
      content: [
        "Use o chat integrado para contato direto",
        "Envie fotos e documentos quando necessário",
        "Acompanhe o histórico de conversas",
        "Horário de atendimento: Segunda a Sexta, 8h às 18h",
      ],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            Manual de Utilização do App MO
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Guia completo para usar o aplicativo do morador e aproveitar todas
            as funcionalidades disponíveis.
          </p>
        </div>

        {/* Navegação Principal com Tabs */}
        <Tabs defaultValue="inicio" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="inicio">Primeiros Passos</TabsTrigger>
            <TabsTrigger value="comunicacao">Comunicação</TabsTrigger>
            <TabsTrigger value="assembleias">Assembleias</TabsTrigger>
            <TabsTrigger value="transparencia">Transparência</TabsTrigger>
            <TabsTrigger value="funcionalidades">Funcionalidades</TabsTrigger>
          </TabsList>

          {/* Tab - Primeiros Passos */}
          <TabsContent value="inicio" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                Primeiros Passos
              </h2>
              <p className="text-gray-600">Como começar a usar o aplicativo</p>
            </div>

            {/* Links de Acesso */}
            <Card className="p-6 border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10">
              <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Links de Acesso ao Aplicativo
              </h3>
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
                    <h4 className="font-semibold text-text-primary">
                      Versão Web
                    </h4>
                    <p className="text-sm text-text-secondary">
                      reservaparqueclube.mo.app.br
                    </p>
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
                    <h4 className="font-semibold text-text-primary">
                      Google Play
                    </h4>
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
                    <h4 className="font-semibold text-text-primary">
                      App Store
                    </h4>
                    <p className="text-sm text-text-secondary">Para iOS</p>
                  </div>
                </a>
              </div>
            </Card>

            {/* Funcionalidades Principais em Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sections.map((section, index) => {
                const Icon = section.icon;

                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-text-primary">
                        {section.title}
                      </h3>
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

            {/* Como Fazer Login - Tutorial Completo */}
            <Card className="p-6 border-green-200 bg-green-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-green-100">
                  <Key className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-700">
                  Tutorial Completo - Como Fazer Login
                </h3>
              </div>

              <Tabs defaultValue="passo-a-passo" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="passo-a-passo">Passo a Passo</TabsTrigger>
                  <TabsTrigger value="dicas">Dicas de Segurança</TabsTrigger>
                  <TabsTrigger value="problemas">
                    Solucionando Problemas
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="passo-a-passo" className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>IMPORTANTE:</strong> Este tutorial irá guiá-lo
                      sobre como fazer o primeiro acesso ao aplicativo Morador
                      Online.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-text-primary">
                      Passos para Login:
                    </h4>
                    <ol className="space-y-4 text-text-secondary">
                      <li className="flex gap-4">
                        <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          1
                        </span>
                        <div>
                          <strong>Solicite seu acesso:</strong> WhatsApp{" "}
                          <a
                            href="https://wa.me/5561998587580"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            61 99858-7580
                          </a>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          2
                        </span>
                        <div>
                          <strong>Baixe o aplicativo:</strong> Google Play Store
                          ou App Store
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          3
                        </span>
                        <div>
                          <strong>Digite o endereço do portal:</strong>
                          <code className="bg-gray-200 px-2 py-1 rounded text-sm ml-2 font-mono">
                            reservaparqueclube.mo.app.br
                          </code>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          4
                        </span>
                        <div>
                          <strong>Insira seu email e senha</strong>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          5
                        </span>
                        <div>
                          <strong>Aceite os termos</strong> e clique em
                          "ACESSAR"
                        </div>
                      </li>
                    </ol>
                  </div>
                </TabsContent>

                <TabsContent value="dicas" className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">
                          🔒 Senha Segura
                        </h4>
                        <ul className="text-blue-800 text-sm space-y-1 ml-4">
                          <li>• Pelo menos 8 caracteres</li>
                          <li>• Letras maiúsculas e minúsculas</li>
                          <li>• Números e símbolos</li>
                        </ul>
                        <p className="text-blue-800 text-sm mt-2">
                          <strong>Exemplo:</strong>{" "}
                          <code className="bg-blue-200 px-1 rounded">
                            MinhaSenh@123
                          </code>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <RefreshCw className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">
                          Alternar Contas
                        </h4>
                        <p className="text-purple-800 text-sm">
                          Use "Trocar Conta" na tela de login para alternar
                          entre diferentes unidades.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="problemas" className="space-y-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-3">
                      ⚠️ Problemas Comuns
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-yellow-800 text-sm">
                          Endereço incorreto:
                        </p>
                        <p className="text-yellow-700 text-sm">
                          Verifique se digitou exatamente como no email de
                          boas-vindas.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-yellow-800 text-sm">
                          Email/senha incorretos:
                        </p>
                        <p className="text-yellow-700 text-sm">
                          Use "Esqueci a senha" se necessário.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            {/* Resumo Rápido */}
            <Card className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                📋 Resumo Rápido
              </h3>
              <ol className="space-y-2 text-text-secondary">
                <li>1. Baixe o app Morador Online</li>
                <li>2. Digite o endereço do portal, email e senha</li>
                <li>3. Use "Alternar conta" para múltiplos perfis</li>
                <li>4. Aproveite todas as funcionalidades!</li>
              </ol>
            </Card>

            {/* Mais tutoriais */}
            <Card className="p-6 bg-blue-50 border-blue-200 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Mais tutoriais
                </h3>
                <p className="text-blue-700 text-sm mb-2">
                  Clique para acessar o guia completo do morador com mais dicas
                  e tutoriais.
                </p>
                <a
                  href="https://docs.mo.app.br/guia-morador/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
                >
                  Acessar Guia do Morador
                </a>
              </div>
            </Card>
          </TabsContent>

          {/* Tab - Comunicação */}
          <TabsContent value="comunicacao" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">
                Comunicação
              </h2>
              <p className="text-gray-600">
                Como se comunicar com a administração e síndico
              </p>
            </div>

            <Tabs defaultValue="urgente" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="urgente">Emergências</TabsTrigger>
                <TabsTrigger value="geral">Comunicação Geral</TabsTrigger>
                <TabsTrigger value="sugestoes">Sugestões</TabsTrigger>
              </TabsList>

              <TabsContent value="urgente" className="space-y-6">
                <Card className="p-6 border-red-200 bg-red-50/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-red-100">
                      <AlertTriangle className="h-7 w-7 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-red-700">
                      Como Reportar Emergências
                    </h3>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                    <p className="text-orange-800 text-sm">
                      <strong>IMPORTANTE:</strong> Para emergências reais
                      (incêndio, vazamentos graves), sempre ligue primeiro e
                      registre na plataforma depois.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Passo a Passo:
                    </h4>
                    <ol className="space-y-3 text-text-secondary">
                      <li className="flex gap-3">
                        <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          1
                        </span>
                        <div>
                          <strong>Acesse "Ocorrências"</strong> no menu
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          2
                        </span>
                        <div>
                          <strong>Clique "Nova Ocorrência"</strong>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          3
                        </span>
                        <div>
                          <strong>Marque como "URGENTE"</strong>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          4
                        </span>
                        <div>
                          <strong>Descreva detalhadamente</strong> o problema
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          5
                        </span>
                        <div>
                          <strong>Anexe fotos/vídeos</strong> se possível
                        </div>
                      </li>
                    </ol>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="geral" className="space-y-6">
                <Card className="p-6 border-blue-200 bg-blue-50/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <MessageSquare className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700">
                      Comunicação com a Administração
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <ol className="space-y-3 text-text-secondary">
                      <li className="flex gap-3">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          1
                        </span>
                        <div>
                          <strong>Acesse o "Chat"</strong> no menu principal
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          2
                        </span>
                        <div>
                          <strong>Selecione "Administração"</strong>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          3
                        </span>
                        <div>
                          <strong>Digite sua mensagem</strong> de forma clara
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          4
                        </span>
                        <div>
                          <strong>Anexe documentos</strong> se necessário
                        </div>
                      </li>
                    </ol>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-blue-800 text-sm">
                            <strong>Horário:</strong> Segunda a Sexta, 8h às 18h
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="sugestoes" className="space-y-6">
                <Card className="p-6 border-purple-200 bg-purple-50/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-purple-100">
                      <Lightbulb className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-700">
                      Como Dar Sugestões
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <ol className="space-y-3 text-text-secondary">
                      <li className="flex gap-3">
                        <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          1
                        </span>
                        <div>
                          <strong>Use o chat</strong> ou seção "Sugestões"
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          2
                        </span>
                        <div>
                          <strong>Categorize</strong> sua sugestão
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          3
                        </span>
                        <div>
                          <strong>Seja específico</strong> e construtivo
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          4
                        </span>
                        <div>
                          <strong>Explique os benefícios</strong> da proposta
                        </div>
                      </li>
                    </ol>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Tab - Assembleias */}
          <TabsContent value="assembleias" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-indigo-800 mb-2">
                Assembleias Online
              </h2>
              <p className="text-gray-600">
                Como participar das assembleias do condomínio
              </p>
            </div>

            <Tabs defaultValue="como-participar" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="como-participar">
                  Como Participar
                </TabsTrigger>
                <TabsTrigger value="como-votar">Como Votar</TabsTrigger>
                <TabsTrigger value="duvidas-assembleia">Dúvidas</TabsTrigger>
              </TabsList>

              <TabsContent value="como-participar" className="space-y-6">
                <Card className="p-6 border-indigo-200 bg-indigo-50/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-indigo-100">
                      <Users className="h-7 w-7 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-700">
                      Participando de Assembleias
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <ol className="space-y-4 text-text-secondary">
                      <li className="flex gap-4">
                        <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          1
                        </span>
                        <div>
                          <strong>
                            Acesse "Serviços" → "Assembleia Online"
                          </strong>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          2
                        </span>
                        <div>
                          <strong>Atualize a tela</strong> (arraste de cima para
                          baixo)
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          3
                        </span>
                        <div>
                          <strong>Confirme sua presença</strong> na assembleia
                          desejada
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          4
                        </span>
                        <div>
                          <strong>Verifique sua situação</strong> (botão "Ver
                          Situação")
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          5
                        </span>
                        <div>
                          <strong>Clique "Entrar"</strong> para acessar todas as
                          funcionalidades
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6">
                    <h4 className="font-semibold text-indigo-800 mb-3">
                      📋 Funcionalidades Disponíveis
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-indigo-800 text-sm">
                      <div>• Votação nas pautas</div>
                      <div>• Resultados em tempo real</div>
                      <div>• Documentos anexados</div>
                      <div>• Perguntas públicas</div>
                      <div>• Solicitar fala</div>
                      <div>• Videoconferência</div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="como-votar" className="space-y-6">
                <Card className="p-6 border-green-200 bg-green-50/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-green-100">
                      <CheckCircle className="h-7 w-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-700">
                      Como Votar nas Pautas
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <ol className="space-y-3 text-text-secondary">
                      <li className="flex gap-3">
                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          1
                        </span>
                        <div>
                          <strong>Acesse a aba "Votação"</strong>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          2
                        </span>
                        <div>
                          <strong>Leia a descrição</strong> da pauta
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          3
                        </span>
                        <div>
                          <strong>Selecione sua opção</strong> de voto
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          4
                        </span>
                        <div>
                          <strong>Adicione justificativa</strong> (opcional)
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          5
                        </span>
                        <div>
                          <strong>Confirme seu voto</strong>
                        </div>
                      </li>
                    </ol>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-6">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        📊 Tipos de Assembleia
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-medium text-gray-800">
                            Ordinária:
                          </p>
                          <p className="text-gray-600">
                            Anual - aprovação de contas, eleições
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            Extraordinária:
                          </p>
                          <p className="text-gray-600">
                            Quando necessário - decisões urgentes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="duvidas-assembleia" className="space-y-6">
                <Card className="p-6 border-yellow-200 bg-yellow-50/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-yellow-100">
                      <AlertCircle className="h-7 w-7 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-yellow-700">
                      Dúvidas Frequentes
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-4 text-sm">
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <p className="font-medium text-yellow-800">
                          Confirmei presença mas não consigo votar
                        </p>
                        <p className="text-yellow-700">
                          Verifique sua situação no botão "Ver Situação". Pode
                          haver problemas cadastrais.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <p className="font-medium text-blue-800">
                          Tenho múltiplas unidades
                        </p>
                        <p className="text-blue-700">
                          O sistema calcula automaticamente os votos baseado nas
                          unidades vinculadas.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="font-medium text-green-800">
                          Não vejo a assembleia
                        </p>
                        <p className="text-green-700">
                          Atualize a tela deslizando para baixo. Se persistir,
                          contate a administração.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Tab - Transparência */}
          <TabsContent value="transparencia" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                Transparência
              </h2>
              <p className="text-gray-600">
                Acesse documentos e informações do condomínio
              </p>
            </div>

            <Tabs defaultValue="acesso" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="acesso">Como Acessar</TabsTrigger>
                <TabsTrigger value="documentos">
                  Visualizar Documentos
                </TabsTrigger>
                <TabsTrigger value="duvidas">Dúvidas Frequentes</TabsTrigger>
              </TabsList>

              <TabsContent value="acesso" className="space-y-6">
                <Card>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Acesso ao Portal de Transparência
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            Pela Tela Principal
                          </h4>
                          <p className="text-gray-600 mt-1">
                            Na tela principal do aplicativo, toque no card
                            "Transparência" para acessar diretamente.
                          </p>
                          <div className="mt-3">
                            <img
                              src="/assets/tela-principal-transparencia.png"
                              alt="Tela principal com card Transparência"
                              className="border rounded-lg shadow-sm max-w-md"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            Pela Tela de Serviços
                          </h4>
                          <p className="text-gray-600 mt-1">
                            Acesse "Serviços" no menu inferior e depois toque em
                            "Transparência".
                          </p>
                          <div className="mt-3">
                            <img
                              src="/assets/transparencia-acesso-pela-tela-servicos.png"
                              alt="Acesso pela tela de serviços"
                              className="border rounded-lg shadow-sm max-w-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="documentos" className="space-y-6">
                <Card>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Visualizando e Baixando Documentos
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            Expandir Card do Documento
                          </h4>
                          <p className="text-gray-600 mt-1">
                            Toque no card do documento desejado para ver as
                            opções disponíveis.
                          </p>
                          <div className="mt-3">
                            <img
                              src="/assets/transparencia-card-expandido-acoes.png"
                              alt="Card expandido com opções"
                              className="border rounded-lg shadow-sm max-w-md"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            Ver ou Baixar Arquivo
                          </h4>
                          <p className="text-gray-600 mt-1">
                            Use o botão "Ver/Baixar arquivo" para visualizar o
                            documento no navegador ou fazer o download.
                          </p>
                          <div className="mt-3">
                            <img
                              src="/assets/btn-ver-baixar-arquivo.png"
                              alt="Botão ver/baixar arquivo"
                              className="border rounded-lg shadow-sm max-w-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-blue-800">
                              Dica Importante
                            </h4>
                            <p className="text-blue-700 text-sm">
                              Os documentos podem ser visualizados diretamente
                              no aplicativo ou baixados para o dispositivo para
                              consulta posterior.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="duvidas" className="space-y-6">
                <Card>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Perguntas Frequentes - Transparência
                    </h3>

                    <div className="space-y-6">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-green-800">
                          Não consigo visualizar o documento
                        </h4>
                        <p className="text-gray-600 mt-1">
                          Verifique sua conexão com a internet e tente
                          novamente. Se o problema persistir, entre em contato
                          com a administração.
                        </p>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-blue-800">
                          O download não está funcionando
                        </h4>
                        <p className="text-gray-600 mt-1">
                          Certifique-se de que há espaço suficiente no
                          dispositivo e que as permissões de download estão
                          habilitadas no navegador.
                        </p>
                      </div>

                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-orange-800">
                          Não encontro o documento que preciso
                        </h4>
                        <p className="text-gray-600 mt-1">
                          Os documentos são atualizados regularmente. Se não
                          encontrar o que procura, verifique com a administração
                          se o documento já foi disponibilizado.
                        </p>
                      </div>

                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-purple-800">
                          Posso acessar documentos antigos?
                        </h4>
                        <p className="text-gray-600 mt-1">
                          Sim, o portal mantém um histórico dos documentos. Use
                          os filtros de data para encontrar documentos de
                          períodos anteriores.
                        </p>
                      </div>

                      <div className="bg-amber-50 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-amber-800">
                              Precisa de Mais Ajuda?
                            </h4>
                            <p className="text-amber-700 text-sm">
                              Entre em contato com a administração pelos canais
                              oficiais disponíveis na seção "Contatos" do
                              aplicativo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Tab - Funcionalidades */}
          <TabsContent value="funcionalidades" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-purple-800 mb-2">
                Funcionalidades
              </h2>
              <p className="text-gray-600">
                Todas as funcionalidades do aplicativo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Reservas
                  </h3>
                </div>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Churrasqueiras</li>
                  <li>• Salão de festas</li>
                  <li>• Quadras esportivas</li>
                  <li>• Espaços comuns</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Financeiro
                  </h3>
                </div>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Visualizar boletos</li>
                  <li>• Pagamento via PIX</li>
                  <li>• Histórico de pagamentos</li>
                  <li>• Comprovantes</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Cadastros
                  </h3>
                </div>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Prestadores de serviços</li>
                  <li>• Visitantes</li>
                  <li>• Moradores adicionais</li>
                  <li>• Veículos</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Comunicação
                  </h3>
                </div>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Chat com administração</li>
                  <li>• Notificações</li>
                  <li>• Comunicados</li>
                  <li>• Ocorrências</li>
                </ul>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ManualApp;
