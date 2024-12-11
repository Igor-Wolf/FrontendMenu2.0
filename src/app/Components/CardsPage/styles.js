import styled, { css } from 'styled-components';



export const WrapperCard = styled.div`

    
    
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: black;
    border-radius: 1rem;
    padding: 0.5rem;
    gap: 0.5rem;

    @media (max-width: 768px) {
    
    width: 150px;

    margin: 0 -20px    
    
    }



`


export const TitleCard = styled.p`
    
    font-size: 1.2rem;
    font-weight: 500;
    color: black;

    @media (max-width: 768px) {


        font-size: 1rem;
    }
    @media (min-width: 769px) and (max-width: 1200px) {
        font-size: 1rem;}
`

export const DescriptionCard = styled.p`
    
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
    @media (max-width: 768px) {


font-size: 1rem;

}

@media (min-width: 769px) and (max-width: 1200px) {
    font-size: 1rem;}
`

export const PricesCard = styled.div`
    
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
    @media (max-width: 768px) {


font-size: 1rem;
}
@media (min-width: 769px) and (max-width: 1200px) {
    font-size: 1rem;}
`

export const ImageCard = styled.img`

    
    width: 200px;
    height: 200px;
    border-radius: 1rem;
    background-image: url(${(props) => props.bgimg});
    background-size: 200px 200px; /* Largura de 100px e altura de 200px */
    background-position: center;


        font-size: 3rem;


        @media (max-width: 768px) {
            
            width: 200px;
            height:200px;


        }

        

        @media (min-width: 769px) and (max-width: 1200px) {
            min-width: 120px;
            
        }


        @media (min-width: 1200px) {
            min-width: 150px;
            max-width: 150px;

        }
`


export const ExternalWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    flex: 0 1 45%;
    border-radius: 1rem;
    padding: 0.5rem;
    gap: 0.5rem;
    background-color: white;
    min-width:300px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
    width:95vw;
    
    align-items: center;
    justify-content: center;
    flex: none;
    flex-wrap:wrap}


    @media (min-width: 769px) and (max-width: 1200px) {
    width:100vw;
    
    align-items: center;
    justify-content: center;
    flex: none;
    flex-wrap: wrap
    
}


`

export const ExternalWrapper2 = styled.div`

    display: flex;
    flex-direction: row;
    flex: 0 1 45%;
    border-radius: 1rem;
    padding: 0.3rem;
    gap: 1.5rem;
    align-items: center;
    flex-wrap:wrap;
    padding: 1rem;
    justify-content: center;

    

    @media (max-width: 768px) {
    width:100%;
    flex: 1;
    align-items: center;


}
@media (min-width: 769px) and (max-width: 1200px) {
    
    
    
    }



`