import React, { Component } from 'react';
import styled from 'styled-components';

import Heart from "./Imagens/heart.png"
import Thumb from "./Imagens/thumb.png"

const Container = styled.div`
background-color: black;
color: white;
display: flex;
justify-content: flex-start;
`
const Image = styled.img`
width: 25vw;
border-radius: 10px;
border: none;
margin: 90px;

@media (max-width: 480px){
  width: 25vw;
  height: 15vh;
  margin: 12vh;
}
`
const Destaque = styled.div` 
 justify-content: space-evenly;
 width: 45vw;
 margin-top: 90px;
 margin-left: -50px;

  @media (max-width: 480px){
   width: 55vw;
   display: flex;
   flex-direction: column;
   align-items: start;
   padding: 0.2rem;
   margin-top: 2em; 
   overflow: hidden;
   h2{ 
    font-size: 0.8em;
    padding: 1em;
    position: absolute;
    bottom: 45vh;
    right: 6vw;
   }
  }
`
const Title = styled.h1`
@media (max-width: 480px){
  font-size: 1em;
  margin-top: -0.2em;
`
const Visto = styled.p`
@media (max-width: 480px){
 font-size: 0.8em;
 margin-top: -0.1em;
} 
`
const Content = styled.p`
@media (max-width: 480px){
  width: 55vw;
  height: 20vh;
  font-size: 0.8em;
  margin-top: -0.3em;
`
const Fav = styled.img`
 :hover{
     cursor: pointer;
 }
  @media (max-width: 480px;){ 
   margin-right: 11%;
  }
`


class Main extends Component {
  render() {
    return (
      <Container>               
         <Image src='https://www.staynerd.com/wp-content/uploads/2021/07/words-bubble-soda-pop-netflix.jpg' alt=""/>  
        <Destaque>
         <Fav src={Heart}/>
         <Visto>Visto recentemente</Visto>                  
         <Title>Words Bubble Up Like Soda Pop</Title>
         <Content>After meeting one bright, sunny day, a shy boy who expresses himself through haiku and a bubbly but self-conscious girl share a brief, magical summer together.</Content>
         <h2>6,8/10 <img src={Thumb}/></h2>        
        </Destaque>

      
      </Container>
    )
  }
}

export default Main;