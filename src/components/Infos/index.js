import React from 'react'
import Perfil from '../Perfil';
import Contato from '../Contato';
import Header from '../Header';
import Github from '../Github';
import Educacao from '../Educacao';
import * as C from './styles';
import Tech from '../Tecnologia';

const Infos = () => {
  return (
    <>
     <C.cntColun>
          <C.cntRow>
           <C.cntColun>
            <Perfil />
            <Contato />
            <Educacao />
            <Tech />
            </C.cntColun>           
            <C.cntColun>
            <Header />
            <Github/> 
            </C.cntColun>
      </C.cntRow>               
     </C.cntColun>
      
    </>
  )
}

export default Infos