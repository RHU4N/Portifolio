import React from 'react'
import  * as C from "./styles";


export const Tech = () => {

  return (
   <>
      <C.ContainerTech>
        <C.Titulo>Tecnologias</C.Titulo>
         <C.QuebraLinha/>
         <C.ColRow>
         <C.Badge>
    <C.Image src="./img/html.png" />
    <C.Text>HTML5</C.Text>
  </C.Badge>
  <C.Badge>
    <C.Image src="./img/css-3.png" />
    <C.Text>CSS3</C.Text>
  </C.Badge>
  <C.Badge>
    <C.Image src="./img/js.png" />
    <C.Text>JS</C.Text>
  </C.Badge>
  <C.Badge>
    <C.Image src="./img/c-sharp.png" />
    <C.Text>C#</C.Text>
  </C.Badge>
  <C.Badge>
    <C.Image src="./img/php.png" />
    <C.Text>PHP</C.Text>
  </C.Badge>
  <C.Badge>
    <C.Image src="./img/mysql.png" />
    <C.Text>MySQL</C.Text>
  </C.Badge>
  <C.Badge>
    <C.Image src="./img/android.png" />
    <C.Text>Android</C.Text>
  </C.Badge>
  <C.Badge>
    <C.Image src="./img/git.png" />
    <C.Text>GIT</C.Text>
  </C.Badge>
  <C.Badge>
    <C.Image src="./img/python.png" />
    <C.Text>Python</C.Text>
  </C.Badge>
  </C.ColRow>
  <C.QuebraLinha/>
      </C.ContainerTech>
    </>
  );
};
export default Tech;