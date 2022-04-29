import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from "react-modal";

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
margin-left: -50px; 
`
const Image = styled.img`
width: 2vw;
margin-right: -70px
`
const Btn = styled.button`
background-color: red;
height: 5vh;
width: 9.5vw;
border: none;
border-radius: 6px;
color: white; 
text-align: center;
margin-right: -80px;
cursor: pointer;
&:hover {
  border: solid;
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
margin-right: -200px
margin-left: 200px;
`
const Option = styled.p`
color: white;
margin-left: 0px;

  cursor: pointer;
  &:hover {
    color: #9d0208;
   }
`
const Cat = styled.p`
 width: 18vw;
 margin-top: 162px;
 margin-left: 0px;
 color: white;
 cursor: pointer;
  &:hover {
    color: #9d0208;
   }
`
const Catmenu = styled.div`
background-color: black;
 width: 18vw;
 margin-left: 10px;
 position: relative;
 color: white;
 cursor: pointer;
`



class Header extends Component {
   state = {
     stateModal: false
    };

    openModal = () => {
     this.setState({ stateModal: true });
    };

   closeModal = () => {
     this.setState({ stateModal: false });
    };
   
  


    render(){
      return(
        <Container>
            <Title>TODOFLIX</Title>
             <Option>Inicio</Option>           
            <div>
              <Cat>Categorias <span>▼</span></Cat>
              <Catmenu>           
               <p>Todos</p>
               <p>Já Vistos</p>
               <p>Adicionados</p>
               <p>Favoritos</p>
              </Catmenu> 
            </div>

            <Btn onClick={this.openModal}>Adicionar fimes</Btn>
            <Modal isOpen={this.state.stateModal}>
              <button onClick={this.closeModal}>X</button>
              <h1>Adicionar Filme</h1>
              <div>
               <h3>Nome</h3>
               <input type="text" />
               <h3>Descrição</h3>
               <input type="text" />
               <h3>Status</h3>
               <input type="radio" />
               <label>Já assisti</label>
               <input type="radio" />
               <label>Ainda não assisti</label>  
               <h3>Nota</h3>
               <p>Imagem de capa</p>
               <img src="https://photos.google.com/album/AF1QipMXnjhGWeIInaCYqdubxc2ELntxfPH7p2_s1wM/photo/AF1QipNC7jv0nstcmdYjbDr1zv8usGqIB8IgzhldEYM" />
               <button>Selecionar imagem</button>            

              </div>
            </Modal>
            <Busca type="text" 
            placeholder='Pesquisar'/>
            <Image src="https://lh3.googleusercontent.com/YLaoMcW1Z8AHnEjsrlSGIMdEy545ZBERpVsl1k6Eywkmu2Qzem3_GxkZ86iiN7z6qfuqosiu-I8BuAF_4CBia2fRcHJOvMo70hrX4Zg2NGood6E3QXLIJFQbDW4L1-tH9ki9f19fLjyGqV1kt0EHoL80nj3tupxTi5XdKIEtb00NcJLExMZtueQzJxcvvr5YAi2cgbHGV2dmI-axvmfmzoTAubcwo1nDxvYm8KAuabqLpVXqeV6D9fi6HwDYtV9vk82i7l1jv80I16o2wETujHQ2KfvsBtt0x5a3exBn56IPAQgsIKMH3-nOVw1kDynl-Amt4u5Xfsshrwx64cZIoJg-trodKB04kvUAc1dX0tabgSOdDqI38KwSjgT5_ZnHesJspGfDogW3LhipZ_wow7mh6eeoDB-SoMrDd9_lN9OTwun8nj2oATrPqIDl3evAdajqtIECMxzRk2hMwzj9gdtWlWXoqYwtIN1tGPC5cppocxlIrs1fuskaeETu33OKYW4bICj_mwnqEu0KSibSRgOH1hj0dgQY16T3oGEE6xAy9pPqxpeurZgqFoNncgVUtjaetBYVZdr9xnwmZcI1_i8H0RJw-OoW9o1J7YEAINR7GRFyAVaX2YRjXdIITDAX3ogxe-yG37fPri8SMOx-2cpgWs-v3cBEhtKAUJSu-t6R_9LXcZm94xzt_KKT9ijdIKZO6NuFc0qKdKQZNGHjPjKScK2brsFrogf1fU9plY6TOJ9LzFWYMj2Yl56iOPRr9nLBfI5HEaI0O4z6HF-KP44MlsDErrgcXdyf19qDunC0codhUi4-UxesQw-TKQ=s32-no?authuser=0" alt=""/>
            <Image src="https://lh3.googleusercontent.com/PduDXbWAH81KoYSAYSRQXRa0uBWKIK3BRPZ6dp6Vg0RmxVlvNsAwBPXz2WIDQT1_ubIi22Woss5KNjUf_TuDJwCPVaJcUIPMSa1Gydfov4SZr10RvguhXMPlSXDgbU5SkqUA82nKDBAjWP0SHvzzZ1xTJpxRbszIDAsrK3prL4laF1MoqTKMi-0RhFZSxfVYLeIcAM8yPCGHgZYGRsr5OZiouX6zz0kVk01eGkkct3G7AMYRBfg_WPWPJru_t5t7rgeOyAPvW41ZxhWPnNVtU59hfbsXNieL7X8Wf3fByopORmOvg6ggwMFPeLp2amL34qGymsWKuaTZsMBHnV9iKYEM-47T_4ZiKxgFaP7jVcOosXEpm-87qGRCrpZd_rpte17Igxnej3Szp_iUWJl1dGZyBvRBPxj9hZSO1cEY4Nhvjr2vT5XvgXiR3xCIQ_ewp5F5YsBhN87w6RxJi8S1PMqp-pLXpfNwtwFUye3h0kL7Gg_38spHrIKKCpE8iSJ7RqMamK4fVJjLpyDlzb6G2dhI3QRWjq-UTbxmT-5YWTtp8uFWL2RrbZI-4AwG2Kp6hUBPKgoIBSxVnkWF6vhB80ATO33tEqcbAthlcj4UV4vSC3jZd7UCN9xnbqPwrWpjv6zTQiMJfiLptPp3CZpTCQywPWwnxHwHCyezVSLKMCPqIVKJ3CAjbwJpsHyvDwNDOvo_LWdcyDraJVuaFi6zty6hsP1uQk8m0MEICQQkQS0LOQzc3z5ynni3t2VzDpm3C823fyI9whvQve_uG1ge1wqgU12RZrEAdF9N7nMrvH_dlqsUxyTdoOpMi_iE4g=s48-no?authuser=0" alt="seta"/>
        </Container>
      )
    }

  }

export default Header;