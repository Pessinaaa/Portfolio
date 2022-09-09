import CV from "../assets/CV Pedro Pessina.pdf"
import './about.css'

export default function About(){
    return(
        <div className="about section">
            <h2>Sobre mim</h2>
            <p>Sou graduando em Desenvolvimento de Software Multiplataforma e atuo como <span>freelancer em desenvolvimento front-end</span>. Tenho como objetivo sempre adquirir e aprimorar conhecimentos.</p>
            <a download href={CV}>Baixar currículo</a>
        </div>
    )
}