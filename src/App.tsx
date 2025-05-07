import banner from '../src/assets/banner.jpg'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SecondaryButton } from './components/SecondaryButton'

function App() {
  return (
    <>
      <Navbar />
      <div className="banner">
        <div className="banner-content">
          <div className='banner-container banner-text-container'>
            <h1>UXFor</h1>
            <p>É a maior comunidade de UX de Fortaleza - CE. Movimento independente para promover o conhecimento e estudos sobre a Experiência do Usuário (UX)</p>
          </div>
          <div className="banner-container banner-image-container">
            <img src={banner} className="banner-image" alt="Banner" />  
          </div>
        </div>
        <div className="social-media-buttons">
          <SecondaryButton text="WhatsApp" onClick={() => window.open('', '_blank')} />
          <SecondaryButton text="Telegram" onClick={() => window.open('', '_blank')} />
          <SecondaryButton text="YouTube" onClick={() => window.open('', '_blank')} />
          <SecondaryButton text="Instagram" onClick={() => window.open('', '_blank')} />
          <SecondaryButton text="LinkedIn" onClick={() => window.open('', '_blank')} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
