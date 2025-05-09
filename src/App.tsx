import banner from '../src/assets/banner.jpg'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SecondaryButton } from './components/SecondaryButton'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.compat.css"
import { css, Global } from '@emotion/react'
import { Element } from 'react-scroll'

function App() {
  const fadeInUp = css`
    @keyframes fadeInUp {
      0% {
        transform: translate3d(0, 30%, 0);
      }
      100% {
        translateZ(0)
      }
    }
  `;

  return (
    <>
      <Navbar />
      <div className="banner">
        <Global styles={fadeInUp} />
        <div className="banner-content">
          <ScrollAnimation animateIn="fadeInUp" duration={1.2} style={{opacity:1}} className='banner-container banner-text-container'>
            <h1>UXFor</h1>
            <p>É a maior comunidade de UX de Fortaleza - CE. Movimento independente para promover o conhecimento e estudos sobre a Experiência do Usuário (UX)</p>
          </ScrollAnimation>
          <div className="banner-container banner-image-container">
            <img src={banner} className="banner-image" alt="Banner" />  
          </div>
        </div>
        <Element name="nosSiga">
          <p style={{width: '100%', textAlign: 'center'}} id="nosSiga">Nos Siga:</p>
        </Element>
        <div className="social-media-buttons">
          <SecondaryButton text="WhatsApp" onClick={() => window.open('https://chat.whatsapp.com/CbuGGYGIdxUD0F9bHr6wB7', '_blank')} />
          <SecondaryButton text="Telegram" onClick={() => window.open('https://t.me/joinchat/Ed3KJ3qhxW1lZDFh', '_blank')} />
          <SecondaryButton text="YouTube" onClick={() => window.open('http://www.youtube.com/@uxfor9309', '_blank')} />
          <SecondaryButton text="Instagram" onClick={() => window.open('https://www.instagram.com/uxfor.br/', '_blank')} />
          <SecondaryButton text="LinkedIn" onClick={() => window.open('https://www.linkedin.com/groups/9897026?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BB4aU8ypySCqgZeYgDq2VoA%3D%3D', '_blank')} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
