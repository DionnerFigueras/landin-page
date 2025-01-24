import RedesSOciales from "./RedesSociales";
import { faFacebook, faTwitter, faInstagram, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer: React.FC = () => {
  return (
  <div className="bg-color-primario mt-8 flex flex-col items-center gap-3 p-5">
    
    <div className="flex items-center gap-3">
        <RedesSOciales 
        icono={faFacebook}
        ruta={'https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F'}
        />  
        <RedesSOciales 
        icono={faTwitter}
        ruta={'https://x.com/'}
        />  
        <RedesSOciales 
        icono={faInstagram}
        ruta={'https://www.instagram.com/'}
        />  
        <RedesSOciales 
        icono={faTwitch}
        ruta={'https://www.twitch.tv/'}
        />  
        <RedesSOciales 
        icono={faYoutube}
        ruta={'https://www.youtube.com/'}
        />  
    </div>
    <div className="">
        <ul className="flex justify-between items-center text-white text-lg font-semibold gap-8">
            <li><a href="#"></a>Productos</li>
            <li><a href="#"></a>Servicios</li>
            <li><a href="#"></a>Planes</li>
            <li><a href="#"></a>Sobre Nosotros</li>
        </ul>
    </div>
    <p className="text-white text-xl font-bold text-center md:text-start">Todos los derechos reservalos para Bienestar Digital</p>
  </div>
);
};

export default Footer;
