'use client';
import { api } from '@/app/services/api';
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import { Banner } from "@/app/Components/Banner";
import { ContentPage } from '@/app/Components/ContentPage';

export default function Pratos() {
  const params = useParams();

  // Valida o ID vindo dos parâmetros
  const itemIndex = params?.id ? parseInt(params.id) : null;


  const [cards, setCards] = useState([]);
  

  const req = async () => {
    try {
      const  data   = await api.get(`/food/${itemIndex}`);
      console.log('Dados recebidos:', data);
      return data.data
    } catch (error) {
      console.log('Erro na requisição:', error);
    }
  };

  useEffect(() => {
    
    const fetchData = async () => {

      const data = await req()
      setCards(data || [])
      


    }
    
    fetchData()
    
   ;
  }, [])
  


  return (
    <div>
      <Banner />
      <ContentPage card={cards}></ContentPage>
    </div>
  );
}
