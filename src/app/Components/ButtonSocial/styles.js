import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    background: #101212;
    border-radius: 22px;
    position: relative;

    color: #FFFF;
    padding: 2px 12px;
    margin: 0.5rem;
    min-width: 85px;
    width: 300px;
    width: 80%;
    font-size: 1.2rem;
    font-weight: 500;

    @media (max-width: 530px) {  

        min-width: 50px;
        margin: 0.2rem;
        
        
    }
    


    ${({ variant }) => variant !== "primary" && css`
    
    height: 33px;
    background: #101212;
    width: 180px;
    justify-content: space-around;
    align-items: center;
    

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }


    &::after {
        content: '';
        position: absolute;
        border: 1px solid #101212;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
    }
`}


`