import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
background-color: black;
display: flex;
align-items: center;
justify-content: space-evenly;
height: 7vh;
width: 100vw;
`
const Title = styled.h1`
color: red;
font: Bebas Neue;
font-size: 33px;
margin-left: -310px; 
`
const Image = styled.img`
width: 2vw;
margin-right: -305px
`
const Btn = styled.button`
background-color: red;
height: 5vh;
width: 9.5vw;
border: none;
border-radius: 6px;
color: white; 
text-align: center;
margin-right: -300px;
margin-left: 100px;
cursor: pointer;
&:hover {
  background-color: #9d0208;
}
}
`
const Busca = styled.input`
background-color: #2C2C2C;
height: 5vh;
width: 20vw;
border: none;
border-radius: 6px;
color: white; 
margin-right: -320px
`
const Option = styled.nav`
color: white;
margin-left: -300px;
margin-left: -350px;
 ul{
   list-style: none;
 }
 li{
    display: inline;
    margin: 0 0 0 15px;
 }
 li {
  cursor: pointer;
  &:hover {
    color: #9d0208;
  }
  }
 }
`





class Header extends Component {
    render(){
      return(
        <Container>
            <Title>TODOFLIX</Title>
            <Option>
             <ul>
                 <li>Inicio</li>
                 <li>Categorias</li>
             </ul>
            </Option>

            <Btn>Adicionar fimes</Btn>
            <Busca type="text" 
            placeholder='Pesquisar'/>
            <Image src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt=""/>
            <Image src="" alt="seta"/>
        </Container>
      )
    }
}

export default Header;