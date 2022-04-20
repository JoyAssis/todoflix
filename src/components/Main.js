import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";

const Container = styled.div`
background-color: black;
color: white;
width: 100%;
display: flex;
justify-content: flex-start;
`
const Image = styled.img`
width: 25%;
border-radius: 10px;
border: none;
margin: 90px;
`
const Destaque = styled.div`
 border: solid
 justify-content: space-evenly;
 width: 45%;
 margin-top: 90px;
 margin-left: -50px;
`
const Title = styled.h1`
width: 50%;
`
const Content = styled.p`
`

class Main extends Component {
  render() {
    return (
      <Container>
         <Image src='https://www.staynerd.com/wp-content/uploads/2021/07/words-bubble-soda-pop-netflix.jpg' alt=""/>  
        <Destaque>
                  
         <Title>Words Bubble Up Like Soda Pop</Title>
         <Content>After meeting one bright, sunny day, a shy boy who expresses himself through haiku and a bubbly but self-conscious girl share a brief, magical summer together.</Content>
         <h2>6,8/10</h2>
        </Destaque>

      
      </Container>
    )
  }
}

export default Main;