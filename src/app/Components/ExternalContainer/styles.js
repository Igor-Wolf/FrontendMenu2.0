import styled, { css } from 'styled-components';

export const ExternalContainerStyle = styled.div`
  display: flex;
  flex:1;
  flex-direction: row;
  background-color: green;
  width: 100vw;
  
  margin-top: 55px;
  
`


export const AdverstisingRight = styled.div`

    display: flex;
    flex-direction: column;
    width: 200px;
    flex-grow:1;
    background-color: wheat;

    @media (max-width: 768px) {

display:none;
}
`

export const AdverstisingLeft = styled.div`

    display: flex;
    flex-direction: column;
    flex-grow:1;
    width: 200px;
    
    background-color: wheat;



    @media (max-width: 768px) {

    display:none;
}
`

export const Main = styled.div`
   background-color: yellow;
   display: flex;
   
   
    flex-direction: column;
    max-width: 1200px;
    overflow: hidden; //muito importante para o swiper não dar overflow na tela e transbordar



    @media (max-width: 768px) {

    width:100vw;
    }

    @media (min-width: 769px) and (max-width:1200){

    min-width: 100%;
}
@media (min-width: 1201) {

min-width:1200px;
width: 1200px;
}
`
