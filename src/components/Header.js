import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from "react-modal";
import ReactStars from "react-rating";
import {Link} from 'react-router-dom';

import Seta from "./Imagens/Group 3.png"
import Icon from "./Imagens/Group 32.png"

const Container = styled.div`
background-color: black;
display: flex;
align-items: center;
justify-content: space-evenly;
height: 7vh;
`
const Title = styled.h1`
color: red;
font: Bebas Neue;
font-size: 33px; 

 @media (max-width: 480px) {
  display: none;
 }
`
const Image = styled.img`
width: 2vw;
margin-left: -80px;
 :hover {
   cursor:pointer;
 }

 @media (max-width: 480px) {
   width: 1rem;
   height: 1rem;
 }
`
const ImageSeta = styled.img`
width: 2vw;
margin-left: -80px;
 :hover {
   cursor:pointer;
 }

 @media (max-width: 480px) {
   width: 1rem;
   height: 1rem;
 }
`

const Btn = styled.button`
background-color: red;
height: 5vh;
width: 9.5vw;
border: none;
border-radius: 6px;
color: white; 
text-align: center;
margin-right: -40px;
cursor: pointer;
 &:hover {
  border: solid;
 }
 
 @media (max-width: 480px) {
  display: none;
 }
`
const Busca = styled.input`
background-color: #2C2C2C;
height: 5vh;
width: 20vw;
border: none;
border-radius: 6px;
color: white;

 @media (max-width: 480px){
   font-size: 0.5rem;
   height: 1.1rem;
   margin-right: 5rem;
 }
`
const Option = styled.p`
color: white;
  cursor: pointer;
    &:hover {
      color: #9d0208;
   }
`
const Cat = styled.button`
display: flex;
align-items: center;
background: transparent;
border: none;
color: white;
padding-left: 1rem;
:hover {
  cursor: pointer;
}
@media (max-width: 480px) {
  font-size: 0.8rem;
  padding-left: 0.3rem;
  margin-top: 0.2rem;
}
`
const Catmenu = styled.div`
background-color: #252422;
color: white;
position: absolute;
font-size: 0.9rem;
list-style: none;
padding: 1rem;
padding-top: 0;
display: flex;
flex-direction: column;
  li {
    margin-top: 0.5rem;
  }
  :hover {
    cursor: pointer;
  }
`
const ModalBox = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column
font-size: 0.9rem;
top: 0;
background-color: black;
 h1{
   color: white;
 }

`
const Form = styled.div`
display: flex;
flex-direction: column;
height: 25rem;
`
const Label = styled.label`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  color: white;
`

const Namearea = styled.textarea`
  height: 2rem;
  width: 23rem;
  color: white;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  resize: none;
  border: transparent;
  border-radius: 0.2rem;
  background-color: #2c2c2c;
`;

const Desciptionarea = styled.textarea`
  height: 4.5rem;
  width: 23rem;
  color: white;
  margin-top: 0.3rem;
  margin-bottom: 0.6rem;
  resize: none;
  border: transparent;
  border-radius: 0.2rem;
  background-color: #2c2c2c;
`;

const Status = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

class Header extends Component {
   state = {
     stateModal: false,
     listCat: false
    };

    openModal = () => {
     this.setState({ stateModal: true });
    };

   closeModal = () => {
     this.setState({ stateModal: false });
    };


    handleList = () => {
      this.setState({ listCat: !this.state.listCat})
    }
   
  


    render(){
      return(
        <Container>
            <Title>TODOFLIX</Title>
             <Option><Link to="/">Inicio</Link></Option>           
            <div>
              <Cat onClick={this.handleList}>Categorias <span>▼</span></Cat>
              {this.state.listCat && (
                <Catmenu>           
                <Link to="/Todos">Todos</Link>
                <p>Já Vistos</p>
                <p>Adicionados</p>
                <p>Favoritos</p>
               </Catmenu> 
              )}
              
            </div>

            <Btn onClick={this.openModal}>Adicionar fimes</Btn>
            
            <Modal isOpen={this.state.stateModal}>
              <ModalBox>
               <button onClick={this.closeModal}>X</button>
               <h1>Adicionar Filme</h1>
                <Form>
                 <Label>Nome</Label>
                 <Namearea type="text" name="name"/>
                 <Label>Descrição</Label>
                 <Desciptionarea type="text" name="decription" />
                 <Label>Status</Label>
                 <input type="radio" name="status" value="assistido" />
                 <Status>Já assisti</Status>
                 <input type="radio" name="status" value="nao-assistido" />
                 <Status>Ainda não assisti</Status>  
                 <Label>Nota</Label>
                 <ReactStars count={5} size={35} activeColor="#ffd700" />                 
                </Form>
                <p>Imagem de capa</p>
                <img src="" />
                <button>Selecionar imagem</button>                    

              </ModalBox>
            </Modal>
            <Busca type="text" name="lupa" placeholder="Pesquisar" />
            <Image src={Icon} alt=""/>
            <ImageSeta src={Seta} alt="seta"/>
        </Container>
      )
    }

  }

export default Header;