import styled from "styled-components";

export const ContainerContato = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    width: 100%;
    height: 100vh;
    
    
    
    background-color: orange;
`

export const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
    color:white;
    text-align: center;
    margin-top: 1rem;
    
    text-shadow: -1px -1px 3px rgba(0, 0, 0, 0.3), 1px -1px 3px rgba(0, 0, 0, 0.3), -1px 1px 3px rgba(0, 0, 0, 0.3), 1px 1px 3px rgba(0, 0, 0, 0.3), 0 0 6px rgba(0, 0, 0, 0.7); /* Sombra suave adicional */


    @media (max-width: 768px) {

    width:100%;
    }
`

    export const Content = styled.div`

    font-size: 1.2rem;
    font-weight: 500;
    color: black;
    padding: 2rem;
    text-align: justify;
    font-style: italic;
    
    @media (max-width: 768px) {

        padding: 1rem;
    font-size: 1rem;

}
`
export const ContainerSocial = styled.div`
`

export const SocialMidias = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;


    }
`

export const Email = styled.div`

`