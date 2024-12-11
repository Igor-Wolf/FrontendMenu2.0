import styled, { css } from 'styled-components';


export const ContainerCards = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    flex: 1;
    height:100%;

`

export const TitleCard = styled.p`

    font-size: 2rem;
    font-weight: 600;
    color:white;
    text-align: center;
    
    text-shadow: -1px -1px 3px rgba(0, 0, 0, 0.3), 1px -1px 3px rgba(0, 0, 0, 0.3), -1px 1px 3px rgba(0, 0, 0, 0.3), 1px 1px 3px rgba(0, 0, 0, 0.3), 0 0 6px rgba(0, 0, 0, 0.7); /* Sombra suave adicional */


    @media (max-width: 768px) {

    width:100%;
    }

`
export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;


    @media (max-width: 768px) {

    width:100%;
    }

`

export const BoxCard = styled.div`


    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 768px) {

        width:100%;
    }
`