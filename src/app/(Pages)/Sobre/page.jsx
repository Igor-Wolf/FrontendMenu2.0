'use client'

import { Banner } from "@/app/Components/Banner";
import { LabelInfo } from "@/app/Components/LabelInfo";
import { ContainerContato, ContainerSocial, Content, Email, ImageAbout, ImageContainer, SocialMidias, Title } from "./styles";
import { ButtonSocial } from "@/app/Components/ButtonSocial";
import { Icon } from '@iconify/react';
import Link from "next/link";







export default function Sobre() {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex:1 }}>
     
          <Banner></Banner>
      <LabelInfo></LabelInfo>
      <ContainerContato>
        <Title>QUEM SOMOS?</Title>
        <Content>Bem-vindo ao Crime Perfeito, onde cada refeição é uma experiência inesquecível. Nossa história começa com uma paixão inabalável pela culinária e o compromisso de transformar cada prato em uma obra-prima. Há décadas, encantamos paladares com receitas que combinam tradição e criatividade, sempre preparadas com esmero e dedicação.</Content>
        <ImageContainer>

        <ImageAbout bgimg={"https://plus.unsplash.com/premium_photo-1663091178039-58d1a7bd3667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></ImageAbout>
        <Content>No Crime Perfeito, cada ingrediente é escolhido a dedo, e cada detalhe importa. Nossos chefs, verdadeiros artistas, levam à mesa sabores que despertam emoções e criam memórias. Da entrada à sobremesa, cada prato é uma celebração da gastronomia e um convite a desfrutar do melhor da vida.</Content>

        </ImageContainer>
        <ImageContainer>

        <Content>Valorizamos não apenas a qualidade de nossos pratos, mas também a experiência de nossos clientes. Aqui, você encontrará um ambiente acolhedor, onde o atendimento é tão especial quanto o sabor de nossas receitas. Afinal, no Crime Perfeito, nossa missão é que cada visita seja marcada pelo cuidado, pela excelência e, claro, por pratos que dão água na boca.</Content>
        <ImageAbout bgimg={"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></ImageAbout>
        </ImageContainer>
        <Content>Venha descobrir por que o Crime Perfeito é um restaurante de tradição, sabor e elegância. Você merece viver essa experiência.</Content>
        
        
      </ContainerContato>    

    </div>
  );
}
