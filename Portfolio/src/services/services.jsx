import { FaCheck } from "react-icons/fa"
import './services.css'

export default function Services(){
    return(
        <div className='services section'>
            <h2>Serviços</h2>
            <div>
                <h3>Desenvolvimento Front-end</h3>
                <ul className='services-list'>
                    <li><i><FaCheck className="icon" /></i>Desenvolvimento de páginas web:</li>
                    <li>
                        <ul className='site-list'>
                            <li>- Landing page;</li>
                            <li>- One page;</li>
                            <li>- Institucional;</li>
                            <li>- Dinâmica.</li>
                        </ul>
                    </li>
                    <li><i><FaCheck className="icon" /></i>Desenvolvimento de sites baseados em padrões de navegação.</li>
                    <li><i><FaCheck className="icon" /></i>Adaptação das páginas para diferentes tamanhos de tela &#40;responsividade&#41;.</li>
                    <li><i><FaCheck className="icon" /></i>Melhorias em sites já existentes.</li>
                </ul>
            </div>
        </div>
    )
}