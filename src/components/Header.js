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
            <Image src="https://cdn-icons.flaticon.com/png/512/4889/premium/4889279.png?token=exp=1650234018~hmac=1e5ee519fcff00c0590abd60ece41c9c" alt=""/>
        </Container>
      )
    }
}

export default Header;