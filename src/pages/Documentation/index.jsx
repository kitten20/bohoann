import { useServerStore } from "../../store";

import MainCard from "../../components/MainCard";
import AccordionComponent from "../../components/AccordionComponent";

import module from './style.module.scss'

function Documentation() {
  const {serverData} = useServerStore()

  const items = serverData[0]?.documentation

  return (
    <>
      <MainCard headText="документация">
        <p className={module.para}>Тут собрана вся необходимая документация по разделам.</p>
        <AccordionComponent {...{ items }} />
      </MainCard>
    </>
  );
}

export default Documentation;
