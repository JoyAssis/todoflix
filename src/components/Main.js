import React, { Component } from 'react';
import styled from 'styled-components';
//import Slider from "react-slick";

const Container = styled.div`
background-color: black;
color: white;
width: 100vw;
display: flex;
justify-content: flex-start;
`
const Image = styled.img`
width: 25vw;
border-radius: 10px;
border: none;
margin: 90px;
`
const Destaque = styled.div`
 border: solid
 justify-content: space-evenly;
 width: 45vw;
 margin-top: 90px;
 margin-left: -50px;
`
const Title = styled.h1`
width: 80vw;
`
const Content = styled.p`
`
const Fav = styled.img`

`


class Main extends Component {
  render() {
    return (
      <Container>      
         <Image src='https://www.staynerd.com/wp-content/uploads/2021/07/words-bubble-soda-pop-netflix.jpg' alt=""/>  
        <Destaque>
         <Fav src="https://lh3.googleusercontent.com/F3pk2DzTgfd9DW7eamIZu9zyyXrSDfQO0IH0OfA9EXAB3kUwXhJNDlscGZOfHWYsfco_sPH-e9iT7my-98MzWdJRTK_cds8FmZVo9kBH_yMN6gKbD6rbG5xloFWzsl2rq6CoSLMEhMmUKgQpghxHSdbu47UMjhA_yT4S-Y9M_81W0F9iuXAlkajWrMzUkkEe0xNyyVK7nsdlwm5jW78xgJz_CCkTWC-pBi0d_w61Q5Jm7IQuxKaH-VZIn0jKQq-jtzwNHuBwlsCCPhecDIOGFat3mcjhLXmxVdg0cJns8fQjhlcp0YhwLHwrEgEHtblCtlleihH534402H9dq_82afQeC3asZdpgx6AzOs902xf8Q0xFXIF99jojF8T9Yr8wbkIjlKveoyFyAmvBDt09n86HllOB3HWcdHbMzdmZvSGKJ3tBwH6gnlFA1JvwaTpQgoSKEsNw_CBThdX38DXxzjG-vIupLu5T-sy_9xaYD2GijBpUwVSWmBelfksBKEwq8qdo_qG21qXRvc0ptOLKZmurqTUJSNVf209RnVGQSE8Vc_XRSD4IWAWRRKyL4CVnm9AAv91wcjfRCnF1ycLRM8V1PvOECQ_nxsoIuUOBRoUz9hxBasT2cCCRH1kMasy5hTB6WOZvpgpqTe2MuyApcxx8WoR6Fb70zHQPrOQ1icSQxO4lYFtQfyfBj7UseBWk7Z4ZVUI64oIVs2qaRyZQD2TIHGg9NVI_YZDjnpsBt4Yoon3ogxmcPTUdzJSkC6BGMxTS-1a5ZVm_bIBmSqg1UZyTdsbnKKDUxncNyp0yfkFTtn8aCujAUPfUUHKxjg=w21-h22-no?authuser=0"/>
         <p>Visto recentemente</p>                  
         <Title>Words Bubble Up Like Soda Pop</Title>
         <Content>After meeting one bright, sunny day, a shy boy who expresses himself through haiku and a bubbly but self-conscious girl share a brief, magical summer together.</Content>
         <h2>6,8/10</h2>        
        </Destaque>

      
      </Container>
    )
  }
}

export default Main;