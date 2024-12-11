import styled from "styled-components";


export const BtnContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 530px) {  

    gap: 1rem;
    justify-content: space-around;
    }

`


export const LabelButton = styled.div`
    
    display:flex;
    align-items:flex-start;
    justify-content: flex-start;

    color: white;
    padding: 1rem;
    
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: -1rem;
    
    text-shadow: -1px -1px 3px rgba(0, 0, 0, 0.3), 1px -1px 3px rgba(0, 0, 0, 0.3), -1px 1px 3px rgba(0, 0, 0, 0.3), 1px 1px 3px rgba(0, 0, 0, 0.3), 0 0 6px rgba(0, 0, 0, 0.7); /* Sombra suave adicional */
    @media (max-width: 768px) { 
        
        padding-top:2rem;

    }

`

export const WrapperButtons = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {

    
    flex-wrap: wrap-reverse;
    justify-content: center;
    }

`