import React, { useState } from 'react';
import { Button } from '../Button';
import { BtnContainer, LabelButton, WrapperButtons } from './styles';
import { Icon } from '@iconify/react';

const ButtonsMenu = ({ onButtonClick }) => {

    const [labelCategory, setLabelCategory] = useState("Pizza")

  const handleClickButton = (category) => {
    onButtonClick(category); // Chamando o callback com a categoria selecionada
      setLabelCategory(category);
  };

  return (
    <WrapperButtons>
          <LabelButton>{ labelCategory }</LabelButton>
          <BtnContainer>
          <Button
        title="Pizza"
        variant="secondary"
        onClick={() => handleClickButton('Pizza')}
      >
        <Icon icon="fluent:food-pizza-20-regular" />
      </Button>
      <Button
        title="Lanche"
        variant="secondary"
        onClick={() => handleClickButton('Lanche')}
      >
        <Icon icon="emojione-monotone:hamburger" />
      </Button>
      <Button
        title="Salada"
        variant="secondary"
        onClick={() => handleClickButton('Salada')}
      >
        <Icon icon="fluent:bowl-salad-20-regular" />
      </Button>
      <Button
        title="Porção"
        variant="secondary"
        onClick={() => handleClickButton('Porção')}
      >
        <Icon icon="circum:fries" />
      </Button>
      <Button
        title="Bebida"
        variant="secondary"
        onClick={() => handleClickButton('Bebida')}
      >
        <Icon icon="carbon:drink-02" />
      </Button>
            </BtnContainer>
      
    </WrapperButtons>
  );
};

export { ButtonsMenu };
