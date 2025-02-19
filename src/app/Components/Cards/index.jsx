import React from 'react';
import { DescriptionCard, TitleCard, WrapperCard, PricesCard, ImageCard, ExternalWrapper, ExternalWrapper2 } from './styles';
import Link from 'next/link';

const Cards = ({ title, description, price, id, url }) => {


  const img = url

  return (
      <ExternalWrapper>
    <Link href={`/Pratos/${id}`}>

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
      <strong>Pequeno:</strong> R$ {price.small.toFixed(2)}
    </p>
  )}
  {price.average && (
    <p>
      <strong>Médio:</strong> R$ {price.average.toFixed(2)}
    </p>
  )}
  {price.large && (
    <p>
      <strong>Grande:</strong> R$ {price.large.toFixed(2)}
    </p>
  )}
  {price.unique && (
    <p>
      <strong>Único:</strong> R$ {price.unique.toFixed(2)}
    </p>
  )}
</PricesCard>

      </WrapperCard>
    </ExternalWrapper2>
    </Link>
  </ExternalWrapper>
  );
};

export { Cards };
