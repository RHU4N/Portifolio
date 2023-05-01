import React from 'react'
import  * as C from "./styles";

export const Educacao = () => {

  return (
   <>
      <C.ContainerEdu>
        <C.Titulo>Educação</C.Titulo>
        <C.QuebraLinha/>
         <C.ListUl>
            <C.list>PEI EE Prof° Eulália Malta -2016-2020</C.list>
            <C.list>Evolutime Taboão -2019-2021</C.list>
            <C.list>Etec de Cotia - 2021 - 2023 - cursando</C.list>
            <C.list>Fundação Bradesco</C.list>
         </C.ListUl>
         <C.QuebraLinha/>
      </C.ContainerEdu>
    </>
  );
};
export default Educacao;