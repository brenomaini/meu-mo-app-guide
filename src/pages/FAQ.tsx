import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O que fazer em caso de vazamento de gás?",
      answer: "Feche imediatamente o registro de gás na saída do ponto de alimentação do aparelho. Mantenha o ambiente ventilado, abrindo as janelas e portas. Não utilize nenhum equipamento elétrico ou acione qualquer interruptor. Caso persista, acione o Corpo de Bombeiros."
    },
    {
      question: "Posso furar qualquer parede?",
      answer: "Não. É terminantemente proibido fazer furos, rasgos ou modificações em paredes de concreto estrutural. Antes de fazer furações em paredes, consulte os desenhos das instalações e os projetos para evitar danos às instalações embutidas."
    },
    {
      question: "Como funciona a coleta de lixo?",
      answer: "O lixo doméstico deve ser cuidadosamente ensacado. Os resíduos devem ser colocados nos cestos específicos no logradouro até duas horas antes do horário de coleta. É proibido o acúmulo de resíduos em vias públicas fora do dia e horário da coleta municipal."
    },
    {
      question: "Posso fechar a minha varanda com vidro?",
      answer: "O envidraçamento da varanda só é permitido após aprovação em assembleia de condôminos, para manter a uniformidade visual do edifício. Consulte a administração para mais informações sobre o processo."
    },
    {
      question: "O que fazer se o disjuntor geral desarmar?",
      answer: "Primeiro, verifique se há algum aparelho com problema de isolamento ou sobrecarga. Desligue todos os disjuntores e religue um por um para identificar a causa. Se o problema persistir, chame um profissional habilitado."
    },
    {
      question: "Pequenas fissuras e deformações são normais na construção?",
      answer: "Sim, pequenas deformações ou fissuras na estrutura e paredes são consideradas variações admissíveis, decorrentes da acomodação do edifício e variações de temperatura, desde que dentro dos limites das normas da ABNT."
    },
    {
      question: "Diferenças de tonalidade em pedras e revestimentos são consideradas defeitos?",
      answer: "Não, diferenças de textura e cor em pedras naturais e revestimentos cerâmicos são variações normais e não são consideradas defeitos, não exigindo reparos ou trocas."
    }
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
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
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