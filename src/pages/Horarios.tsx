import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Horarios = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Horários do Condomínio</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10">
            <h3 className="text-lg font-semibold text-primary mb-2">Funcionamento da Administração</h3>
            <p className="text-text-secondary">Segunda a sexta-feira: 8h às 18h</p>
            <p className="text-text-secondary">Sábado: 8h às 12h</p>
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Comunicações fora desse horário:</strong> Entre em contato com a portaria
              </p>
              <p className="text-blue-700 text-sm mt-1">
                Ramal: <strong>200</strong> ou aperte a tecla <strong>"Portaria"</strong>
              </p>
              <Link 
                to="/ramais" 
                className="text-blue-600 hover:text-blue-800 text-sm underline inline-block mt-2"
              >
                Ver todos os ramais úteis →
              </Link>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Obras</h3>
            <p className="text-text-secondary">Segunda a sexta-feira: 08h às 12h | 13h às 17h</p>
            <p className="text-text-secondary">Sábado: 09h às 12h | 13h às 16h</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Mudanças (Agendamento pelo APP)</h3>
            <p className="text-text-secondary">Segunda a sexta-feira: 13h às 17h</p>
            <p className="text-text-secondary">Sábado: 09h às 12h | 13h às 16h</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Entrega de Material de Construção</h3>
            <p className="text-text-secondary">Segunda a sexta-feira: 08h às 12h</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Aluguel de Salões de Festa e Churrasqueiras</h3>
            <p className="text-text-secondary">10h às 02h (Desligar o som às 22h)</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Academia</h3>
            <p className="text-text-secondary">05h às 23h</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Sauna</h3>
            <p className="text-text-secondary">07h às 22h</p>
            <ul className="list-disc pl-5 mt-2 text-text-secondary">
              <li>Segundas, quartas: exclusivo para a coletividade feminina (salvo situações específicas)</li>
              <li>Terças e Quintas: exclusivo para a coletividade masculina (salvo situações específicas)</li>
              <li>Sextas, Sábados e Domingos: utilização para a coletividade</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Piscinas</h3>
            <p className="text-text-secondary font-semibold">Fechadas para limpeza às segundas-feiras.</p>
            <p className="text-text-secondary mt-2">Terça a Domingo:</p>
            <ul className="list-disc pl-5 mt-1 text-text-secondary">
              <li>Piscina com raias (quando liberada para uso): 05h às 22h</li>
              <li>Demais piscinas: 08h às 22h</li>
            </ul>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Horarios;