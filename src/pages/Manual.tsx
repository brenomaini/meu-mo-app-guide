import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Droplets, Zap, Wrench, Paintbrush, Sparkles } from "lucide-react";

const Manual = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Manual do Morador</h1>
        
        {/* Primeiros Passos */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Primeiros Passos no seu Apartamento</h2>
          
          <Card className="p-6 mb-6">
            <div className="flex items-start gap-4">
              <Droplets className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Água</h3>
                <p className="text-text-secondary">
                  Para ligar a água, abra o registro geral do seu apartamento, localizado junto à previsão do hidrômetro da sua unidade. Em caso de falta d'água, verifique primeiramente se o registro de gaveta encontra-se aberto.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <div className="flex items-start gap-4">
              <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Energia Elétrica</h3>
                <p className="text-text-secondary">
                  A solicitação de nova ligação de energia elétrica deve ser feita diretamente à concessionária (Neoenergia), apresentando CPF e RG. O tipo de disjuntor varia conforme o apartamento. Após a ligação, acione todos os circuitos do Quadro de Distribuição de Circuitos (QDC) da sua unidade.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Wrench className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Gás</h3>
                <p className="text-text-secondary">
                  O fornecimento de gás é centralizado e provido pela Supergasbras. Para a instalação do fogão, solicite ao condomínio o fechamento da válvula de sua prumada. Em caso de cheiro de gás, não acenda luzes, não fume, não acione interruptores e ventile o ambiente. Contrate sempre profissionais habilitados para manuseio do gás.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Normas para Reformas */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Normas para Reformas e Instalações</h2>
          
          <Card className="p-6 mb-6 border-orange-200 bg-orange-50">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-orange-800 font-medium">
                  <strong>ATENÇÃO:</strong> É terminantemente proibida a remoção, abertura de vãos ou rasgos nas paredes de concreto estrutural. Qualquer modificação estrutural compromete a segurança do edifício e anula a garantia. Todas as reformas e modificações devem ser previamente consultadas com o Condomínio e realizadas por profissionais habilitados, seguindo as normas da ABNT.
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
                  O envidraçamento da varanda só é permitido após aprovação em assembleia de condôminos, para garantir um padrão visual para todo o condomínio. Consulte a administração para mais informações sobre o processo e normas.
                </p>
              </div>
            </div>
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
        </section>
      </div>
    </Layout>
  );
};

export default Manual;