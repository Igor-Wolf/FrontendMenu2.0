import { AdverstisingLeft, AdverstisingRight, ExternalContainerStyle, Main } from "./styles"



const ExternalContainer = ({ children }) => {
    return (
    <ExternalContainerStyle>
        <AdverstisingLeft></AdverstisingLeft>
        <Main>{children}</Main>
        <AdverstisingRight></AdverstisingRight>



        </ExternalContainerStyle>
    )
}



export { ExternalContainer }