import React, { useEffect, useState } from 'react';

import { Cards } from '../Cards';
import {Wrapper, BoxCard,ContainerCards, TitleCard}  from "./styles"
import { ButtonsMenu } from '../ButttonsMenu';

import { api } from '@/app/services/api';





const CardsContainer =  () => {
  const database = [
    {
      "_id": "67474ebd16f394bcbc1d7868",
      "name": "Pizza Peperoni",
      "category": "Pizza",
      "description": "Pizza clássica com molho de tomate, mussarela e peperoni.",
      "available": true,
      "price": {
        "small": 25.00,
        "average": 35.00,
        "large": 45.00,
        "unique": null
      },
      "url": "www.exemplo.com/pizza-peperoni",
      "_idreal": 1
    },
    {
      "_id": "98765abcdf16f394bcbc1d7869",
      "name": "X-Burger",
      "category": "Lanche",
      "description": "Hambúrguer artesanal com queijo, alface, tomate e molho especial.",
      "available": true,
      "price": {
        "small": null,
        "average": 18.00,
        "large": null,
        "unique": 18.00
      },
      "url": "www.exemplo.com/x-burger",
      "_idreal": 2
    },
    {
      "_id": "12345abcd16f394bcbc1d7867",
      "name": "Porção de Batata Frita",
      "category": "Porção",
      "description": "Porção de batatas fritas crocantes, servidas com molho barbecue.",
      "available": true,
      "price": {
        "small": null,
        "average": null,
        "large": null,
        "unique": 25.00
      },
      "url": "www.exemplo.com/batata-frita",
      "_idreal": 3
    },
    {
      "_id": "11223abcd16f394bcbc1d7866",
      "name": "Salada Caesar",
      "category": "Salada",
      "description": "Salada com alface americana, croutons, queijo parmesão e molho caesar.",
      "available": true,
      "price": {
        "small": null,
        "average": null,
        "large": null,
        "unique": 30.00
      },
      "url": "www.exemplo.com/salada-caesar",
      "_idreal": 4
    },
    {
      "_id": "45678abcd16f394bcbc1d7865",
      "name": "Coca-Cola Lata",
      "category": "Bebida",
      "description": "Refrigerante Coca-Cola em lata de 350ml.",
      "available": true,
      "price": {
        "small": null,
        "average": null,
        "large": null,
        "unique": 6.00
      },
      "url": "www.exemplo.com/coca-cola-lata",
      "_idreal": 5
    },
    {
      "_id": "35479dbf16f394bcbc1d7866",
      "name": "Pizza Quatro Queijos",
      "category": "Pizza",
      "description": "Pizza com molho de tomate, mussarela, parmesão, gorgonzola e catupiry.",
      "available": true,
      "price": {
        "small": 30.00,
        "average": 40.00,
        "large": 50.00,
        "unique": null
      },
      "url": "www.exemplo.com/pizza-quatro-queijos",
      "_idreal": 6
    },
    {
      "_id": "78910abcd16f394bcbc1d7867",
      "name": "X-Bacon",
      "category": "Lanche",
      "description": "Hambúrguer artesanal com queijo, bacon crocante, alface e tomate.",
      "available": true,
      "price": {
        "small": null,
        "average": 22.00,
        "large": null,
        "unique": 22.00
      },
      "url": "www.exemplo.com/x-bacon",
      "_idreal": 7
    },
    {
      "_id": "22334abcd16f394bcbc1d7867",
      "name": "Porção de Frango à Passarinho",
      "category": "Porção",
      "description": "Porção de frango temperado com alho e ervas, frito até dourar.",
      "available": true,
      "price": {
        "small": null,
        "average": null,
        "large": null,
        "unique": 35.00
      },
      "url": "www.exemplo.com/frango-passarinho",
      "_idreal": 8
    },
    {
      "_id": "66778abcd16f394bcbc1d7868",
      "name": "Salada Tropical",
      "category": "Salada",
      "description": "Salada com alface, frutas tropicais, castanhas e molho de iogurte.",
      "available": true,
      "price": {
        "small": null,
        "average": null,
        "large": null,
        "unique": 28.00
      },
      "url": "www.exemplo.com/salada-tropical",
      "_idreal": 9
    },
    {
      "_id": "87654abcd16f394bcbc1d7867",
      "name": "Suco de Laranja Natural",
      "category": "Bebida",
      "description": "Suco de laranja 100% natural, servido gelado.",
      "available": true,
      "price": {
        "small": null,
        "average": null,
        "large": null,
        "unique": 10.00
      },
      "url": "www.exemplo.com/suco-laranja",
      "_idreal": 10
    },
    {
      "_id": "12398abcd16f394bcbc1d7869",
      "name": "Pizza Margherita",
      "category": "Pizza",
      "description": "Pizza clássica com molho de tomate, mussarela e manjericão fresco.",
      "available": true,
      "price": {
        "small": 28.00,
        "average": 38.00,
        "large": 48.00,
        "unique": null
      },
      "url": "www.exemplo.com/pizza-margherita",
      "_idreal": 11
    },
    {
      "_id": "88990abcd16f394bcbc1d7866",
      "name": "Milkshake de Chocolate",
      "category": "Bebida",
      "description": "Milkshake cremoso de chocolate, servido com chantilly.",
      "available": true,
      "price": {
        "small": null,
        "average": null,
        "large": null,
        "unique": 15.00
      },
      "url": "www.exemplo.com/milkshake-chocolate",
      "_idreal": 12
    }
  ]
  
 
  

  const [cards, setCards] = useState([]);
  const [category, setChosenCategory] = useState("Pizza")

  const req = async () => {
    try {
      const  data   = await api.get('/food'); //retornando todo o banco de dados 
      
      return data.data
    } catch (error) {
      alert('Erro na requisição:', error);
    }
  };

  useEffect(() => {
    
    const fetchData = async () => {

      const data = await req()
      setCards(data || [])
      console.log(data)


    }
    
    fetchData()
    
   ;
  },[])


  // Filtro e slice direto
  const lastEightCards = cards.filter(card => card.category === category);
  
  
    
    const handleClickButton = (btnCategory) => {

        setChosenCategory(btnCategory)

    }

  return (
    <ContainerCards>
      <Wrapper>
        <TitleCard>MENU</TitleCard>
        <ButtonsMenu onButtonClick={handleClickButton} ></ButtonsMenu>
        <BoxCard>
          {lastEightCards.map((card) => (
            <Cards
              key={card._idreal}
              title={card.name || "Sem título"}
              description={card.description || "Sem descrição"}
              price={
                card.price
              }
              id={card._idreal}
              url={card.url}
            />
          ))}
        </BoxCard>
      </Wrapper>
    </ContainerCards>
  );
};

export { CardsContainer };
