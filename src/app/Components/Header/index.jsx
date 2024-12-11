"use cleent"
import React from 'react'
import { Container, Image, ImageContainer, MenuLeft, MenuRight, Row, TitlePage } from './styles'
import Link from 'next/link'

const Header = () => {
  return (
    
    <Container>
      
      <MenuLeft>
        
        <Link href={"/"}>
        
          <TitlePage>Crime Perfeito</TitlePage>
        </Link>
        
        
      </MenuLeft>


      <MenuRight>

        <li>
          <Link href={"/"}>
          
            <Row>Inicio</Row>
          </Link>  

        </li>
        <li>
          <Link href={"/Busca"}>
          
            <Row>Busca</Row>
          </Link>  

        </li>
        <li>
          <Link href={"/Sobre"}>
          
            <Row>Sobre</Row>
          </Link>  

        </li>
        <li>
          <Link href={"/Contato"}>
          
            <Row>Contato</Row>
          </Link>  

        </li>


      </MenuRight>
      
    </Container>
  )
}

export { Header }