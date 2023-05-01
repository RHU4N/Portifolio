import React from 'react'
import  * as C from "./styles";
import ContatoItem from '../ContatoItem';


const Contato = () => {
  return (
    <C.ContainerCont>
      <C.QuebraLinha/>
      <C.ContainerRow>
      <ContatoItem 
        icon={`${process.env.PUBLIC_URL}/img/placeholder.png`}
        alt='MapaPin'
        text='SP-BR'
        link=''/>
      </C.ContainerRow>
      <C.ContainerRow>
      <ContatoItem 
        icon={`${process.env.PUBLIC_URL}/img/mail.png`}
        alt='Email'
        text='Rhuan3003@gmail.com'
        link=''/>
      </C.ContainerRow>
      <C.ContainerRow>
      <ContatoItem 
        icon={`${process.env.PUBLIC_URL}/img/linkedin.png`}
        alt='Linkedin'
        text='LINKEDIN.COM/IN/RHU4N'
        link='https://www.linkedin.com/in/rhu4n/'/>
      </C.ContainerRow>
      <C.ContainerRow>
      <ContatoItem 
        icon={`${process.env.PUBLIC_URL}/img/github.png`}
        alt='Githubh'
        text='GITHUB.COM/RHU4N'
        link='https://GITHUB.COM/RHU4N'/>
      </C.ContainerRow>
      <C.QuebraLinha/>
    </C.ContainerCont>
  )
}

export default Contato