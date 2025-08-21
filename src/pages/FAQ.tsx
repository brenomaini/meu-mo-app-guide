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
      answer: "Feche imediatamente o registro de gás, abra as janelas para ventilar o ambiente, não acenda luzes nem use equipamentos elétricos, e entre em contato com a administração do condomínio ou a Supergasbras."
    },
    {
      question: "Posso furar qualquer parede para instalar um armário?",
      answer: "Não. É terminantemente proibido fazer furos, rasgos ou modificações em paredes de concreto estrutural. Para instalações em paredes de alvenaria, consulte sempre a administração antes de qualquer intervenção."
    },
    {
      question: "Como funciona a coleta de lixo?",
      answer: "A coleta de lixo comum é realizada às segundas, quartas e sextas-feiras. O lixo reciclável é coletado às terças e quintas-feiras. Deposite o lixo nos locais apropriados conforme orientação da administração."
    },
    {
      question: "A garantia do meu apartamento cobre problemas por falta de manutenção?",
      answer: "Não. A garantia do apartamento não cobre problemas causados por falta de manutenção adequada. É importante seguir todas as orientações de manutenção preventiva descritas no manual."
    },
    {
      question: "Posso fechar minha varanda com vidro?",
      answer: "O fechamento de varanda com vidro só é permitido após aprovação em assembleia de condôminos, para manter a uniformidade visual do edifício. Consulte a administração para mais informações sobre o processo."
    },
    {
      question: "O que fazer se o disjuntor geral desarmar?",
      answer: "Primeiro, identifique se há algum equipamento com defeito ou sobrecarga na rede elétrica. Desligue todos os aparelhos, religue o disjuntor e ligue os equipamentos um por vez. Se o problema persistir, consulte um eletricista."
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