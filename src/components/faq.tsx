import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { FAQ_DATA } from '@/lib/constance'

const Faq = () => {
  const faqs = FAQ_DATA

  return (
    <Accordion
      type="single"
      className=" max-w-lg"
      defaultValue={faqs[0].question}
    >
      {faqs.map((faq) => (
        <AccordionItem value={faq.question} className="p-5" key={faq.question}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent className="mt-1 ">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
export default Faq
