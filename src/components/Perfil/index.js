import React from 'react'
import  * as C from "./styles";

export const Perfil = () => {

    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1; // adiciona +1, pois janeiro começa em 0
    const ano = dataAtual.getFullYear();
    var idade = ano-2006;

    if(mes ==='jan' || mes ==='fev' || mes==='mar'){
        idade=idade-1
    }else if(mes==='mar' && dia>'30' ){
          idade = ano-2006
    }

  return (
   <>
      <C.ContainerPerfil>
          <C.icon src={process.env.PUBLIC_URL + 'rosto.jpg'} alt="Minha foto" />
          <C.Nome>Rhuan S. da Silva</C.Nome>
          <C.Espec>Programador</C.Espec>
          <C.Idade> {idade} anos</C.Idade>
          <C.QuebraLinha />
      <C.QuebraLinha/>
      </C.ContainerPerfil>
    </>
  );
};
export default Perfil;