import React, { useState } from 'react';
import { Button } from '../Button';
import { BtnContainer, ImputSearch, LabelButton, WrapperButtons } from './styles';
import { Icon } from '@iconify/react';

const ButtonsBusca = ({ onButtonClick }) => {

  const [labelName, setLabelName] = useState("")
  
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Atualiza o valor do input conforme o usuário digita
  };

  const handleClickButton = (name) => {
    onButtonClick(name); // Chamando o callback com o nome selecionado
      setLabelName(name);
  };

  return (
    <WrapperButtons>
          
          <BtnContainer>
      <ImputSearch
        type="text"
        value={inputValue}
        onChange={handleInputChange} // Atualiza o estado ao digitar
        placeholder="Digite um prato"
        />
          <Button
        title="Buscar "
        variant="secondary"
        onClick={() => handleClickButton(inputValue)}
        >
        <Icon icon="ic:sharp-search" />
      </Button>
      
          </BtnContainer>
        
      
    </WrapperButtons>
  );
};

export { ButtonsBusca };
