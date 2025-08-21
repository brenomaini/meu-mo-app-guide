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
                  Para ligar a água, abra o registro geral do seu apartamento, localizado próximo ao hidrômetro da sua 
                  unidade. Em caso de falta d'água, este é o primeiro item a ser verificado.
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
                  A solicitação de uma nova ligação deve ser feita diretamente à Neoenergia. É necessário 
                  apresentar CPF e RG do titular. O tipo de disjuntor varia conforme o apartamento.
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
                  O fornecimento é centralizado e provido pela Supergasbras. Para ligar o gás do seu fogão, feche o registro, 
                  conecte o tubo flexível e depois reabra o registro. Em caso de cheiro de gás, não acenda luzes e ventile o 
                  ambiente.
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
                  <strong>ATENÇÃO:</strong> É terminantemente proibida a remoção, abertura de vãos ou rasgos nas paredes de 
                  concreto. Qualquer modificação estrutural compromete a segurança do edifício e anula a garantia.
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
                  Cada apartamento possui infraestrutura para instalação de ar-condicionado. A 
                  instalação é de responsabilidade do proprietário e deve ser feita por um profissional qualificado.
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
                  O envidraçamento da varanda só é permitido após aprovação em assembleia, para 
                  garantir um padrão visual para todo o condomínio.
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
                <h3 className="text-lg font-semibold text-primary mb-2">Limpeza de Pisos</h3>
                <p className="text-text-secondary">
                  Para porcelanato, utilize pano úmido com detergente neutro. Nunca use produtos abrasivos. 
                  Para piso laminado dos quartos, use vassoura de cerdas macias e pano levemente úmido.
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
                  Consulte regularmente a tabela de manutenção para garantir a durabilidade do seu 
                  imóvel e manter a garantia.
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