import React from 'react'
import * as C from './styles';

const ContatoItem = ({icon,text,link,alt}) => {
  return (
    <>
       <C.ImgContato src={icon} alt={alt} />
       <C.ContatoText><C.ContatoLink href={link}>{text}</C.ContatoLink></C.ContatoText>
    </>
  )
}

export default ContatoItem