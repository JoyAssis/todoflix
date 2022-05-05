import React from 'react'
import styled from 'styled-components'

import Shrek from "./Imagens/sherek.png"
import Horas from "./Imagens/horas.png"
import Sonho from "./Imagens/sonho.png"
import Voltar from "./Imagens/voltar.png"
import Spider from "./Imagens/spider.png"

const Container = styled.div`
background-color: black;
color: white;
min-height: 100vh;
width: 100%;

 h1{
     margin: 0;
     padding-left: 2rem;
 }
`
const BoxMovie = styled.div`
width: 20%;
display: flex;
flex-flow: column wrap;
justify-content: center;
padding-left: 5rem;
`

export default class Movies extends React.Component{
  state = {
    filmes:[
        {
            id:1,
            title:"Shrek",
            resume:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
            poster: Shrek
        },
        {
            id:2,
            title:"Hoje Eu Quero Voltar Sozinho",
            resume:"Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
            poster: Voltar
        },
        {
            id:3,
            title:"Spider-man",
            resume:"Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
            poster: Spider
        },
        {
            id:4,
            title:"Que Horas Ela Volta",
            resume:"Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
            poster: Horas
        },
        {
            id:5,
            title:"Um Sonho De Liberdade",
            resume:"Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
            poster: Sonho
        }
    ]
  }


render(){
    return(
        <Container>
            <h1>Todos</h1>
           {this.state.filmes.map(item=>(
               <BoxMovie>
                   <img src={item.poster} />
                   <h2>{item.title}</h2>
                   <p>{item.resume}</p>
               </BoxMovie>
           ))}
        </Container>
    )
}
}