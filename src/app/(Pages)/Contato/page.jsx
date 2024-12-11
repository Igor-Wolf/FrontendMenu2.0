'use client'

import { Banner } from "@/app/Components/Banner";
import { LabelInfo } from "@/app/Components/LabelInfo";
import { ContainerContato, ContainerSocial, Content, Email, SocialMidias, Title } from "./styles";
import { ButtonSocial } from "@/app/Components/ButtonSocial";
import { Icon } from '@iconify/react';
import Link from "next/link";







export default function Contato() {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex:1 }}>
     
          <Banner></Banner>
      <LabelInfo></LabelInfo>
      <ContainerContato>
        <Title>CONTATE-NOS</Title>
        <Content>Entre em contato conosco através de nossas redes sociais e fique por dentro de tudo! Siga-nos para acompanhar as promoções imperdíveis, descobrir os melhores preços e ser o primeiro a conhecer as novidades do nosso restaurante. Não perca nenhuma atualização e faça parte da nossa comunidade online!</Content>
        <ContainerSocial>
          <SocialMidias>
            <Link href={'https://www.instagram.com/igorreisbarbosa/'}>
        <ButtonSocial
          title="Instagram"
          variant="secondary"
          >
          <Icon icon="hugeicons:instagram" />
          </ButtonSocial>
            </Link>
          
            <Link href={"https://www.linkedin.com/in/igor-reis-barbosa-4412901b4/"}>
          <ButtonSocial
          title="LinkedIn"
          variant="secondary"
          
          >
          <Icon icon="circum:linkedin" />
        </ButtonSocial>
          </Link>
            <Link href={"https://github.com/Igor-Wolf"}>
            <ButtonSocial
          title="GitHub"
          variant="secondary"
          
          >
          <Icon icon="pajamas:github" />
        </ButtonSocial>
          </Link>

          </SocialMidias>

        </ContainerSocial>
        
      </ContainerContato>    

    </div>
  );
}
