import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import module from "./style.module.scss";

function AccordionComponent({ items = [], className = "" }) {
  return (
    <Accordion allowZeroExpanded className={module.accordion + " " + className}>
      {items.map((i, index) => (
        <AccordionItem key={index} className={module.accordion__item}>
          <AccordionItemHeading>
            <AccordionItemButton className={module.accordion__head}>
              {i.headText}
              <span>+</span>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={module.accordion__body}>
            {i.bodyText}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionComponent;
