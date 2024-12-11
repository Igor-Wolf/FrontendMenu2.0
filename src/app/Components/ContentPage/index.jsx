


import { CardsPage } from "../CardsPage"
import { LabelInfo } from "../LabelInfo"
import { Container } from "./styles"

const ContentPage = ({ card }) => {

    


    return (





      
        <Container>
            <LabelInfo></LabelInfo>
            { <CardsPage
              key={card._idreal}
              title={card.name || "Sem título"}
              description={card.description || "Sem descrição"}
              price={
                card.price || {}
              }
              id={card._idreal}
              url={card.url}
            /> }
            
            
            
            


        </Container>

    )
  }
  
  export { ContentPage }