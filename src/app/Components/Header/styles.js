import styled from "styled-components";
import '@fontsource/dancing-script'

export const Container = styled.div`

display:flex;
  flex-direction:row;
  width: 100%;
  z-index: 5000;
  position: fixed;
  align-items:center;
  justify-content: space-between;
  top: 0;
  background-color: rgba(0, 0, 0, 1); /* 50% transparente */
  height:60px;
    padding-left: 250px;
    padding-right: 250px;


    @media (max-width: 768px) {

    width:100vw;
    padding: 0;
    justify-content: center;
}

@media (min-width: 769px) and (max-width: 1000px) {

width:100vw;
padding-right: 5rem;
padding-left: 5rem;
justify-content: space-between;

}


`



export const MenuRight = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

     @media (max-width: 768px) {
    display:none;
  } 
`

export const MenuLeft = styled.div`

    display: flex;
    flex-direction: row;

`

export const TitlePage = styled.div`

    font-size: 2.5rem;
    font-weight: 800;
    font-family: 'Dancing Script', cursive;
    color: #FF9900;

    @media (max-width: 768px) {

    font-size:1.8rem;
}

@media (max-width: 1000px) {

font-size:2rem;
}

`

export const Row = styled.div`

    color: white;
    font-size: 1.05rem;

    &:hover {

        color: #9a9a9c
    }

`