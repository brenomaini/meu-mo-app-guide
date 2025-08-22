import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Info } from "lucide-react";
import InteractiveCondominiumMap from "@/components/InteractiveCondominiumMap";

const MapasEspacos = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Mapa de Espaços
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore e reserve os espaços comuns do condomínio
          </p>
        </div>

        {/* Mapa Interativo */}
        <Card className="mb-8 p-6 border-purple-200 bg-purple-50/50">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-6 w-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-purple-800">Mapa Interativo do Condomínio</h3>
          </div>
          
          <p className="text-purple-700 mb-6">
            Clique nos pontos no mapa para explorar os espaços disponíveis em cada torre do condomínio.
          </p>
          
          <InteractiveCondominiumMap />
        </Card>

        {/* Processo de Reserva */}
        <Card className="mb-8 p-6 border-indigo-200 bg-indigo-50/50">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-6 w-6 text-indigo-600" />
            <h3 className="text-xl font-semibold text-indigo-800">Processo de Reserva</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-indigo-100">
              <h4 className="font-semibold text-gray-800 mb-2">1. Selecione o espaço</h4>
              <p className="text-gray-600">Toque no espaço desejado no mapa para ver disponibilidade</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-indigo-100">
              <h4 className="font-semibold text-gray-800 mb-2">2. Verifique disponibilidade</h4>
              <p className="text-gray-600">Consulte o calendário para datas e horários livres</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-indigo-100">
              <h4 className="font-semibold text-gray-800 mb-2">3. Preencha os dados</h4>
              <p className="text-gray-600">Informe data, horário, número de convidados e finalidade</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-indigo-100">
              <h4 className="font-semibold text-gray-800 mb-2">4. Confirme a reserva</h4>
              <p className="text-gray-600">Revise as informações e finalize sua reserva</p>
            </div>
          </div>
        </Card>

        {/* Informações Importantes */}
        <Card className="p-6 border-teal-200 bg-teal-50/50">
          <div className="flex items-center gap-3 mb-6">
            <Info className="h-6 w-6 text-teal-600" />
            <h3 className="text-xl font-semibold text-teal-800">Informações Importantes</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Horários de Funcionamento</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salão de Festas:</span>
                  <span>10h às 22h</span>
                </div>
                <div className="flex justify-between">
                  <span>Quadras:</span>
                  <span>8h às 22h</span>
                </div>
                <div className="flex justify-between">
                  <span>Playground:</span>
                  <span>8h às 20h</span>
                </div>
                <div className="flex justify-between">
                  <span>Academia:</span>
                  <span>6h às 22h</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Regras Gerais</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5"></div>
                  <span>Reserva antecipada obrigatória</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5"></div>
                  <span>Limpeza após o uso</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5"></div>
                  <span>Respeitar limite de pessoas</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5"></div>
                  <span>Não permitido som alto após 22h</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default MapasEspacos;