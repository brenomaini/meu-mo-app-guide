import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Droplets, Zap, Wrench, Paintbrush, Sparkles } from "lucide-react";

const Manual = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Guia do Morador</h1>
        
        {/* Primeiros Passos */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Primeiros Passos no seu novo lar</h2>
          
          <Card className="p-6 mb-6">
            <div className="flex items-start gap-4">
              <Droplets className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Água</h3>
                <p className="text-text-secondary">
                  Não é necessário o pedido de ligação junto a CAESB. A leitura e a cobrança ficarão inicialmente sob a responsabilidade do condomínio. Para ligar a água, abra o registro geral do seu novo lar, localizado junto à previsão do hidrômetro da sua unidade. Em caso de falta d'água, verifique primeiramente se o registro de gaveta encontra-se aberto.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <div className="flex items-start gap-4">
              <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Energia Elétrica</h3>
                <p>Para solicitar uma “Nova Ligação” de luz, você precisará dos seguintes documentos:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Endereço;</li>
                  <li>Escritura (ou contrato de financiamento);</li>
                  <li>Documentos pessoais;</li>
                  <li>Habite-se (quando das primeiras ligações da torre).</li>
                </ul>
                <p className="mt-4 font-semibold">Disjuntores:</p>
                <p className="font-medium mt-2">Torres 1 e 2:</p>
                <ul className="list-disc pl-5">
                  <li>Apartamentos 3 quartos - Trifásico | Disjuntor de 50 A</li>
                  <li>Apartamentos 2 quartos - Bifásico | Disjuntor de 50 A</li>
                </ul>
                <p className="font-medium mt-2">Torres 3 a 9:</p>
                <ul className="list-disc pl-5">
                  <li>Apartamento 3 quartos: bifásico de 50 amperes</li>
                  <li>Apartamento 2 quartos: bifásico de 50 amperes</li>
                  <li>Coberturas: trifásico de 50 amperes</li>
                </ul>
                <p className="mt-4">O pedido pode ser feito no posto da Neoenergia no “Na Hora” ou através do site: <a href="https://outrosservicos.neoenergiabrasilia.com.br/acesso-servico/ln" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://outrosservicos.neoenergiabrasilia.com.br/acesso-servico/ln</a></p>
                <p className="mt-2"><span className="font-bold">IMPORTANTE:</span> Proprietários de coberturas, ao solicitarem a ligação através da INTERNET, devem preencher, assinar e digitalizar um formulário de carga.</p>
                <p className="mt-2"><span className="font-bold">IMPORTANTE (ATENDIMENTO “NA HORA”):</span> Na internet, o pedido passa por uma fila que pode demorar alguns dias. Se desejar comparecer presencialmente, vá até um ponto de atendimento da NEOENERGIA. Lá você já sai com o seu pedido de ligação concluído. Atendimento sem agendamento até às 16 horas no Na Hora.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Wrench className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Gás</h3>
                <p>A empresa que atende o condomínio é a SUPERGASBRAS. Para solicitar, acesse: <a href="https://minhaconta.supergasbras.com.br/#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://minhaconta.supergasbras.com.br/#</a></p>
                <p className="mt-2">Siga os passos: Morador ou Lojista → Primeiro acesso/Quero ser cliente.</p>
                <p className="mt-2">Após o cadastro, procure o condomínio pelo código: <span className="font-bold">4018704</span>.</p>
                <p className="text-text-secondary mt-2">Para a instalação do fogão, solicite ao condomínio o fechamento da válvula de sua prumada. Em caso de cheiro de gás, não acenda luzes, não fume, não acione interruptores e ventile o ambiente. Contrate sempre profissionais habilitados para manuseio do gás.</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Normas para Reformas */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Diretrizes para Reformas e Instalações</h2>
          
          <Card className="p-6 mb-6 border-orange-200 bg-orange-50">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-orange-800 font-medium">
                  <strong>ATENÇÃO:</strong> É terminantemente proibida a remoção, abertura de vãos ou rasgos nas paredes de concreto estrutural. Qualquer modificação estrutural compromete a segurança do edifício e anula a garantia. Todas as reformas e modificações devem ser previamente consultadas com o Condomínio e realizadas por profissionais habilitados, seguindo as diretrizes da ABNT.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <div className="flex items-start gap-4">
              <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Instalação de Ar-Condicionado</h3>
                <p className="text-text-secondary">
                  Cada apartamento possui infraestrutura para instalação de ar-condicionado nos quartos e sala. A instalação é de responsabilidade do proprietário e deve ser feita por profissional qualificado, atentando-se à perfeita ligação do dreno e vedação.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Paintbrush className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Fechamento de Varanda</h3>
                <p className="text-text-secondary">
                  O envidraçamento da varanda só é permitido após aprovação em assembleia de condôminos, para garantir um padrão visual para todo o condomínio. Consulte a administração para mais informações sobre o processo e diretrizes.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Diretrizes e Recomendações */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Diretrizes e Recomendações</h2>
          <Card className="p-6 mb-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Fechamento de Sacada</h3>
            <p className="text-text-secondary">O fechamento de sacada se dará somente por cortina de vidro e deverá seguir os seguintes padrões:</p>
            <ul className="list-disc pl-5 mt-2 text-text-secondary">
              <li>Especificações: LAMINADO CHROME - Referência INC8MM (4.4.1) MARCA GUARDIAN</li>
              <li>Estrutura Metálica: Alumínio BRANCO</li>
              <li>Abertura para a parede interna.</li>
              <li>Paginação (Torres 1 e 2): 6 (seis) folhas (três quartos) e 5 folhas (dois quartos) de vidro.</li>
              <li>Paginação (Torres 3 a 9): 7 (sete) folhas.</li>
            </ul>
            <p className="text-text-secondary mt-2">Empresas fornecedoras de vidro para obra: ESTRUTURAL VIDROS e TEMPERVIDROS</p>
          </Card>
          <Card className="p-6 mb-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Telas de Proteção</h3>
            <ul className="list-disc pl-5 mt-2 text-text-secondary">
              <li>Cor: Cinza</li>
              <li>Forma: Geométrica de losango.</li>
            </ul>
            <p className="text-text-secondary mt-2">Empresas atualmente homologadas (que seguem as diretrizes):</p>
            <ul className="list-disc pl-5 mt-2 text-text-secondary">
              <li>Só Telas - 61 99664-0480</li>
              <li>Redes e Telas Confiáveis - 98360-1497</li>
              <li>ProLife - 98631-8763</li>
            </ul>
            <p className="text-orange-800 font-medium mt-2">Atenção: Caso deseje contratar outra empresa, solicite que a mesma entre em contato com o condomínio. Instalações fora das diretrizes, poderão acarretar prejuízos futuros.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Película de Proteção</h3>
            <ul className="list-disc pl-5 mt-2 text-text-secondary">
              <li>Cor (janelas e varanda): Transparente (térmica)</li>
              <li>Cor (banheiros): Cinza claro (sem transparência)</li>
            </ul>
          </Card>
        </section>

        {/* Manutenção e Cuidados */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-6">Manutenção e Cuidados</h2>
          
          <Card className="p-6 mb-6">
            <div className="flex items-start gap-4">
              <Sparkles className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Limpeza de Pisos e Superfícies</h3>
                <p className="text-text-secondary mb-2">
                  <strong>Pisos Cerâmicos/Porcelanatos:</strong> Utilize pano úmido com detergente neutro ou desinfetante diluído em água. Evite produtos abrasivos.
                </p>
                <p className="text-text-secondary mb-2">
                  <strong>Piso Laminado:</strong> Use aspirador de pó ou vassoura de cerdas macias e pano levemente úmido com solução de água e sabão neutro. Não utilize cera, silicone ou produtos abrasivos.
                </p>
                <p className="text-text-secondary">
                  <strong>Aço Inoxidável:</strong> Limpe com sabão/detergente suave e água morna, usando pano macio ou esponja fina. Enxágue e seque bem. Evite ácidos, cloretos, alvejantes e produtos oleosos.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Wrench className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Manutenção Preventiva</h3>
                <p className="text-text-secondary">
                  A manutenção preventiva é essencial para a durabilidade do seu imóvel e para a validade da garantia. Consulte regularmente o manual para verificar as atividades de manutenção recomendadas (diárias, semanais, mensais, etc.) para cada componente do apartamento e áreas comuns. O não cumprimento das orientações pode acarretar na perda da garantia.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 mt-6">
            <div className="flex items-start gap-4">
              <Wrench className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Solicitação de Reparos de Garantia</h3>
                <p className="text-text-secondary">
                  Para solicitar reparos de garantia ou obter informações sobre a manutenção preventiva, utilize o aplicativo "Pode Morar" da Direcional ou acesse o portal através do site:
                </p>
                <a href="https://www.podemorar.com.br/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">
                  https://www.podemorar.com.br/
                </a>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Manual;