import { Container, ImageBanner } from "./styles"

import { Swiper, SwiperSlide} from 'swiper/react'
import { EffectFade } from 'swiper'

const Banner = () => {


    const data = [
        {id: '1', image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id: '2', image: 'https://plus.unsplash.com/premium_photo-1668618295237-f1d8666812c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id: '3', image: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id: '4', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
    ]



    //dentro do SwiperSlide pode ser qualquer elemento não apenas imagens, pode ser varios cards de div sendo passados, possuir botões dentro dentre outro

    return (
      
        <Container>

            <Swiper
                
                slidesPerView={1}
                effect="fade"
                pagination={{ clickable: true }}
                navigation
                loop={true}                
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {data.map((item) => (
                

                <SwiperSlide key={item.id}>
                        
                        <ImageBanner
                            src={item.image}
                        alt="slider">
                        </ImageBanner>
                </SwiperSlide>


                ))}
                
            </Swiper>

        </Container>

    )
  }
  
  export { Banner }