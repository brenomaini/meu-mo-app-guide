import InteractiveChurrasqueirasMap from "@/components/InteractiveChurrasqueirasMap";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Calendar, Info, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const MapasChurrasqueiras = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Mapa de Churrasqueiras
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore e reserve as churrasqueiras do condomínio.
          </p>
        </div>

        {/* Mapa Interativo */}
        <Card className="mb-8 p-6 border-red-200 bg-red-50/50">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-6 w-6 text-red-600" />
            <h3 className="text-xl font-semibold text-red-800">Mapa Interativo das Churrasqueiras</h3>
          </div>
          
          <p className="text-red-700 mb-6">
            Clique nos pontos no mapa para explorar as churrasqueiras disponíveis e acessar o link direto para reserva.
          </p>
          
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-sm">
              <strong>💡 Dica:</strong> Clique em qualquer churrasqueira para ver informações detalhadas e o botão de reserva direta!
            </p>
          </div>
          
          <InteractiveChurrasqueirasMap />
        </Card>

        {/* Processo de Reserva */}
        <Card className="mb-8 p-6 border-green-200 bg-green-50/50">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-6 w-6 text-green-600" />
            <h3 className="text-xl font-semibold text-green-800">Reserva Rápida</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-green-100">
              <h4 className="font-semibold text-gray-800 mb-2">🚀 Reserva Direta (Novo!)</h4>
              <p className="text-gray-600">
                Clique em qualquer churrasqueira no mapa acima para acessar diretamente o link de reserva online. 
                Disponível para as churrasqueiras 2 a 6.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-100">
              <h4 className="font-semibold text-gray-800 mb-2">📱 Pelo Aplicativo Morador Online</h4>
              <p className="text-gray-600">Acesse a seção de reservas de espaços comuns e selecione "Churrasqueiras".</p>
              <p className="mt-2">
                <Link to="/manual-app" className="text-blue-500 hover:underline">
                  Consulte o manual do app para mais detalhes.
                </Link>
              </p>
            </div>
          </div>
        </Card>

        {/* Processo Tradicional */}
        <Card className="mb-8 p-6 border-blue-200 bg-blue-50/50">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-blue-800">Processo Tradicional de Reserva</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-gray-800 mb-2">1. Acesse o Aplicativo Morador Online</h4>
              <p className="text-gray-600">Todas as reservas também podem ser feitas através do aplicativo oficial do condomínio.</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-gray-800 mb-2">2. Vá para a seção de Reservas</h4>
              <p className="text-gray-600">Encontre a área de reservas de espaços comuns e selecione "Churrasqueiras".</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-gray-800 mb-2">3. Escolha a data e confirme</h4>
              <p className="text-gray-600">Selecione a churrasqueira, a data e o horário desejado, e confirme a sua reserva.</p>
            </div>
          </div>
        </Card>

        {/* Informações Importantes */}
        <Card className="p-6 border-orange-200 bg-orange-50/50">
          <div className="flex items-center gap-3 mb-6">
            <Info className="h-6 w-6 text-orange-600" />
            <h3 className="text-xl font-semibold text-orange-800">Informações Importantes</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Horários de Funcionamento</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Churrasqueiras:</span>
                  <span>9h às 2h</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Regras Gerais</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5"></div>
                  <span>Reserva antecipada obrigatória</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5"></div>
                  <span>Limpeza após o uso</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5"></div>
                  <span>Respeitar limite de pessoas</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5"></div>
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

export default MapasChurrasqueiras;