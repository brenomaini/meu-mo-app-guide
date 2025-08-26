import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "Como usar o aplicativo do condomínio?",
      answer: (
        <div>
          <p>Para aprender a usar todas as funcionalidades do aplicativo do condomínio, como agendamento de mudanças, reserva de espaços e muito mais, consulte o guia completo.</p>
          <p className="mt-2">
            <Link to="/manual-app" className="text-blue-500 hover:underline">
              Clique aqui para acessar o Manual de Utilização do App.
            </Link>
          </p>
        </div>
      )
    },
    {
      question: "Como solicitar a ligação de luz, água e gás?",
      answer: (
        <div>
          <p>As informações detalhadas sobre como solicitar a ligação de luz, água e gás estão disponíveis no Guia do Morador do Morador.</p>
          <p className="mt-2">
            <Link to="/manual" className="text-blue-500 hover:underline">
              Clique aqui para ver o passo a passo na seção 'Primeiros Passos no seu novo lar'.
            </Link>
          </p>
        </div>
      )
    },
    {
      question: "Posso fechar a minha varanda com vidro?",
      answer: (
        <div>
          <p>Sim, o fechamento da sacada é permitido, mas deve ser feito exclusivamente com cortina de vidro, seguindo os padrões do condomínio para manter a uniformidade visual. As especificações são:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Material:</strong> LAMINADO CHROME - Referência INC8MM (4.4.1) MARCA GUARDIAN</li>
            <li><strong>Estrutura Metálica:</strong> Alumínio BRANCO</li>
            <li><strong>Abertura:</strong> Para a parede interna</li>
            <li><strong>Paginação (Torres 1 e 2):</strong> 6 folhas (três quartos) e 5 folhas (dois quartos) de vidro.</li>
            <li><strong>Paginação (Torres 3 a 9):</strong> 7 folhas.</li>
          </ul>
          <p className="mt-2">Empresas de vidro que já conhecem as diretrizes: ESTRUTURAL VIDROS e TEMPERVIDROS.</p>
          <p className="mt-2">
            <Link to="/manual" className="text-blue-500 hover:underline">
              Para mais detalhes, consulte a seção de Diretrizes e Recomendações no Guia do Morador.
            </Link>
          </p>
        </div>
      )
    },
    {
      question: "Quais são os padrões para instalação de telas e películas de proteção?",
      answer: (
        <div>
          <p>Sim, existem padrões que devem ser seguidos:</p>
          <p className="mt-4 font-semibold">Telas de Proteção:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Cor:</strong> Cinza</li>
            <li><strong>Forma:</strong> Geométrica de losango</li>
          </ul>
          <p className="mt-2">Empresas homologadas: Só Telas (61 99664-0480), Redes e Telas Confiáveis (98360-1497), ProLife (98631-8763).</p>
          <p className="mt-4 font-semibold">Película de Proteção:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Janelas e varanda:</strong> Transparente (térmica)</li>
            <li><strong>Banheiros:</strong> Cinza claro (sem transparência)</li>
          </ul>
          <p className="mt-2 text-red-600 font-semibold">Atenção: Caso deseje contratar outra empresa para as telas de proteção, solicite que a mesma entre em contato com o condomínio. Instalações fora das diretrizes poderão acarretar prejuízos futuros.</p>
          <p className="mt-2">
            <Link to="/manual" className="text-blue-500 hover:underline">
              Consulte a seção de Diretrizes e Recomendações no Guia do Morador para mais informações.
            </Link>
          </p>
        </div>
      )
    },
    {
      question: "O que fazer se o disjuntor geral desarmar?",
      answer: (
        <div>
          <p>Primeiro, verifique se há algum aparelho com problema de isolamento ou sobrecarga. Desligue todos os disjuntores e religue um por um para identificar a causa. Se o problema persistir, chame um profissional habilitado.</p>
          <p className="mt-4 font-semibold">Especificações dos Disjuntores:</p>
          <p className="font-medium mt-2">Torres 1 e 2:</p>
          <ul className="list-disc pl-5">
            <li>Apartamentos 3 quartos: Trifásico | Disjuntor de 50 A</li>
            <li>Apartamentos 2 quartos: Bifásico | Disjuntor de 50 A</li>
          </ul>
          <p className="font-medium mt-2">Torres 3 a 9:</p>
          <ul className="list-disc pl-5">
            <li>Apartamento 3 quartos: bifásico de 50 amperes</li>
            <li>Apartamento 2 quartos: bifásico de 50 amperes</li>
            <li>Coberturas: trifásico de 50 amperes</li>
          </ul>
        </div>
      )
    },
    {
      question: "Posso furar qualquer parede?",
      answer: (
        <div>
          <p>Não. É terminantemente proibido fazer furos, rasgos ou modificações em paredes de concreto estrutural. Antes de furar, consulte os projetos do seu novo lar e as diretrizes para reformas para evitar danos às instalações embutidas e à estrutura do prédio.</p>
          <p className="mt-2">
            <Link to="/manual" className="text-blue-500 hover:underline">
              Veja mais detalhes na seção de Diretrizes para Reformas no Guia do Morador.
            </Link>
          </p>
        </div>
      )
    },
    {
      question: "O que fazer em caso de vazamento de gás?",
      answer: "Feche imediatamente o registro de gás, abra todas as janelas e portas para ventilar o ambiente, não acione interruptores ou aparelhos elétricos e entre em contato com a assistência técnica. Comunique imediatamente o subsíndico e a administração. Se o cheiro for muito forte, saia do local e acione o Corpo de Bombeiros."
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Dúvidas Frequentes</h1>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-card-hover">
                  <span className="text-text-primary font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="text-text-secondary leading-relaxed">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;