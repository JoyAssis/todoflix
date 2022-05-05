import React from "react";
import Carousel from "nuka-carousel"
import styled from "styled-components";

//imagens
import Shrek from "./Imagens/sherek.png"
import Horas from "./Imagens/horas.png"
import Sonho from "./Imagens/sonho.png"
import Voltar from "./Imagens/voltar.png"
import Spider from "./Imagens/spider.png"
import Heart from "./Imagens/heart.png"
import Thumb from "./Imagens/thumb.png"

const Container = styled.div`
color: white;
background-color: black;
margin-top:-20px;
`
const Poster = styled.img`
width: 20vw;
`
const FavIcon = styled.img`
width: 1.5vw;
height: 3vh;
margin: 0.2%;
margin-left: 14%;
position: absolute;
top: 2%;
right: %;
 :hover{
     cursor: pointer;
 }
`
const carouseConfig ={

}

export default class App extends React.Component{
    state ={
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
                poster:Sonho
            }
        ]
    }


 render() {
    return (
      <Container>
        <h2> Destaques </h2>        
        <Carousel slidesToShow="4" >            
            {this.state.filmes.map((item)=>
            <div>
                <FavIcon src={Heart}/>                
                <Poster src={item.poster} />
                <h1>{item.title} <img src={Thumb}/></h1>
                <p>{item.resume}</p>
            </div>
            )}

        </Carousel>
      </Container>
    );
  }
}