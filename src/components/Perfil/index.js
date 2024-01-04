import React from 'react'
import  * as C from "./styles";

export const Perfil = () => {

  var dataNascimento = "2006-03-30";

  function calcularIdade(dataNascimento) {
    var hoje = new Date();
    var dataNasc = new Date(dataNascimento);

    var idade = hoje.getFullYear() - dataNasc.getFullYear();

    // Verificar se o aniversário já ocorreu este ano
    if (hoje.getMonth() < dataNasc.getMonth() || (hoje.getMonth() === dataNasc.getMonth() && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }

    return idade;
}
var idade = calcularIdade(dataNascimento);

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