import styled from "styled-components";
import '@fontsource/dancing-script'


export const Container = styled.div`

    display: flex;
    width: 100%;
    height: 200px;
    background-color: #d80b0b;
    font-family: 'Dancing Script', cursive;
    font-size: 3rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #0054ff, 0 0 15px #0054ff; /* efeito neon */
    //text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Sombra simples */
    //text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4), 0 0 25px rgba(0, 0, 255, 0.5);
    //text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; /* contorno */

    @media (max-width: 768px) {

        font-size: 2.2rem;

    }
`