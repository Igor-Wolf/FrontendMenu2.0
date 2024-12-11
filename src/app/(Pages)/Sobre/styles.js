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
    padding-top:1rem;
    padding-bottom:1rem;
    text-align: justify;
    font-style: italic;
    flex:1;

    @media (max-width: 768px) {

        padding: 1rem;
    font-size: 1rem;

}
`

export const ImageAbout = styled.img`

    
    width:40%;
    height: 250px;
    border-radius: 1rem;
    background-image: url(${(props) => props.bgimg});
    background-size: cover; /* Largura de 100px e altura de 200px */
    background-position: center;
    margin: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;


    


        font-size: 3rem;


        @media (max-width: 768px) {
            
            width: 300px;
            height:150px;


        }

        

        @media (min-width: 769px) and (max-width: 1200px) {
            min-width: 120px;
            
        }


        @media (min-width: 1200px) {
            min-width: 150px;
            

        }

        `
export const ImageContainer = styled.div`
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px) {
            
            flex-direction: column;


        }


        
        
        
        `

