import React from 'react'
import * as C from './styles';

const Header = () => {
  return (
    <C.ContainerProj>
     <C.ContainerRow> 
        <C.ProjText><C.ProjLink $primary href={`${process.env.PUBLIC_URL}/Currículo-Rhuan.pdf`} download="Currículo-Rhuan.pdf">Meu Curriculo</C.ProjLink></C.ProjText> 
      </C.ContainerRow>
      <C.QuebraLinha/>
      <C.ContainerRow>
        <C.ProjText><C.ProjLink href='https://github.com/RHU4N'>Meus Projetos:</C.ProjLink></C.ProjText>
      </C.ContainerRow>
    </C.ContainerProj>
  )
}

export default Header