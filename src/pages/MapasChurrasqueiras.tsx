import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Users } from "lucide-react";

const MapasChurrasqueiras = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Mapas de Churrasqueiras
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Localize e reserve as churrasqueiras do condomínio
          </p>
        </div>

        {/* Mapas de Churrasqueiras */}
        <Card className="mb-8 p-6 border-blue-200 bg-blue-50/50">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-blue-800">Localizando Churrasqueiras</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-gray-800 mb-2">1. Acesse o mapa de churrasqueiras</h4>
              <p className="text-gray-600 mb-3">No app MO, procure pela seção "Áreas Comuns" ou "Mapas"</p>
              <div className="bg-gray-100 p-3 rounded border text-center text-gray-500">
                [Imagem: Tela inicial do app com destaque para "Mapas"]
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-gray-800 mb-2">2. Visualize as churrasqueiras disponíveis</h4>
              <p className="text-gray-600 mb-3">Veja a localização e status de cada churrasqueira</p>
              <div className="bg-gray-100 p-3 rounded border text-center text-gray-500">
                [Imagem: Mapa com churrasqueiras marcadas]
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-gray-800 mb-2">3. Informações importantes</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Disponível</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Ocupada</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Manutenção</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Como Reservar */}
        <Card className="mb-8 p-6 border-green-200 bg-green-50/50">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-6 w-6 text-green-600" />
            <h3 className="text-xl font-semibold text-green-800">Como Reservar</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-green-100">
              <h4 className="font-semibold text-gray-800 mb-2">1. Selecione a churrasqueira</h4>
              <p className="text-gray-600">Toque na churrasqueira desejada no mapa</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-100">
              <h4 className="font-semibold text-gray-800 mb-2">2. Escolha data e horário</h4>
              <p className="text-gray-600">Selecione o dia e período desejado</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-100">
              <h4 className="font-semibold text-gray-800 mb-2">3. Confirme a reserva</h4>
              <p className="text-gray-600">Revise os dados e confirme sua reserva</p>
            </div>
          </div>
        </Card>

        {/* Regras de Uso */}
        <Card className="p-6 border-orange-200 bg-orange-50/50">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-orange-600" />
            <h3 className="text-xl font-semibold text-orange-800">Regras de Uso</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <p className="text-gray-600">Horário de funcionamento: 8h às 22h</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <p className="text-gray-600">Máximo 6 horas por reserva</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <p className="text-gray-600">Limpeza obrigatória após o uso</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <p className="text-gray-600">Respeitar o limite de pessoas por área</p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default MapasChurrasqueiras;