import React, { useState } from 'react';

import { Cards } from '../Cards';
import { Wrapper, BoxCard, ContainerCards, TitleCard } from "./styles";

import { api } from '@/app/services/api';
import { ButtonsBusca } from '../ButttonsBusca';

const CardsContainerBusca = () => {
  const [cards, setCards] = useState([]); // Armazena os cards retornados do backend
  const [name, setChosenName] = useState(""); // Armazena o nome escolhido, útil para exibição futura

  // Função para realizar a requisição ao backend
  const req = async (searchName) => {
    try {
      const encodedQuery = encodeURIComponent(searchName) // encoda para realizar a passagem de palavras compostas para o endpoint
      const response = await api.get(`/food/name/${encodedQuery}`);
      return response.data;
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro na requisição:", error);
      return [];
    }
  };

  // Função executada ao clicar no botão
  const handleClickButton = async (btnName) => {
    setChosenName(btnName); // Atualiza o estado do nome escolhido

    try {
      const data = await req(btnName); // Chama a API com o valor do botão clicado
      setCards(data || []); // Atualiza os cards com os dados retornados
      console.log(data); // Log para depuração
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  return (
    <ContainerCards>
      <Wrapper>
        <TitleCard>BUSCAR</TitleCard>
        {/* Componente de botões para realizar buscas */}
        <ButtonsBusca onButtonClick={handleClickButton} />
        <BoxCard>
          {/* Renderiza os cards retornados da API */}
          {cards.map((card) => (
            <Cards
              key={card._idreal}
              title={card.name || "Sem título"}
              description={card.description || "Sem descrição"}
              price={card.price}
              id={card._idreal}
              url={card.url}
            />
          ))}
        </BoxCard>
      </Wrapper>
    </ContainerCards>
  );
};

export { CardsContainerBusca };
