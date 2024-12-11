import React from 'react'
import { Container, MenuItem, Icon, TextMenu} from './styles'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

const  MobileHeader = () => {
  return (
      <Container>
          <Link href={'/'}>
          <MenuItem>
              
              <Icon>
                  
              <i className='bi bi-house-door'></i>

              </Icon>
              
             
              <TextMenu>INICIO</TextMenu>
              
              
              
              
          </MenuItem> 
          </Link>

          <Link href={'/Busca'}>
          <MenuItem>
              
              <Icon>
                  
                      
                      <i className="bi bi-search"></i>

              </Icon>
              
             
              <TextMenu>BUSCA</TextMenu>
              
              
              
              
          </MenuItem> 
          </Link>

          <Link href={'/Sobre'}>
          <MenuItem>
              
              <Icon>
                  
              <i className="bi bi-person"></i>

              </Icon>
              
             
              <TextMenu>SOBRE</TextMenu>
              
              
              
              
          </MenuItem> 
          </Link>

          <Link href={'/Contato'}>
          <MenuItem>
              
              <Icon>
                  
              <i className="bi bi-chat-left-dots"></i>

              </Icon>
              
             
              <TextMenu>CONTATO</TextMenu>
              
              
              
              
          </MenuItem> 
          </Link>
                   
          
    </Container>
  )
}

export {MobileHeader}