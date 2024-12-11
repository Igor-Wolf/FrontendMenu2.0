import React from 'react'

import { ButtonContainer} from './styles.js'
const ButtonSocial = ({title, variant="primary", onClick, children }) => {
  return (
      <ButtonContainer variant={variant} onClick={onClick}> 
          {title}
          {children }

    </ButtonContainer >
  )
}

export { ButtonSocial }