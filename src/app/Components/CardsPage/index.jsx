import React from 'react';
import { DescriptionCard, TitleCard, WrapperCard, PricesCard, ImageCard, ExternalWrapper, ExternalWrapper2 } from './styles';


const CardsPage = ({ title, description, price, id, url }) => {


  const img = url

  return (
      <ExternalWrapper>
    
      <ExternalWrapper2>
      <ImageCard bgimg={img}></ImageCard>
      <WrapperCard>
        <TitleCard>
          <strong>{title || "Sem título"}</strong>
        </TitleCard>
        {description && (
          <DescriptionCard>
            <strong>Descrição:</strong> {description}
          </DescriptionCard>
        )}
        <PricesCard>
  {price.small && (
    <p>
      <strong>Pequeno:</strong> {price.small.toFixed(2)}
    </p>
  )}
  {price.average && (
    <p>
      <strong>Médio:</strong> {price.average.toFixed(2)}
    </p>
  )}
  {price.large && (
    <p>
      <strong>Grande:</strong> {price.large.toFixed(2)}
    </p>
  )}
  {price.unique && (
    <p>
      <strong>Único:</strong> {price.unique.toFixed(2)}
    </p>
  )}
</PricesCard>

      </WrapperCard>
    </ExternalWrapper2>
    
  </ExternalWrapper>
  );
};

export { CardsPage };
