import { FaGithub } from 'react-icons/fa'
import './footer.css'

export default function Footer(){
    return (
        <div className="footer">
            <p>Todos os direitos reservados &copy; Pedro Pessina</p>
            <a href="https://github.com/Pessinaaa" target="_blank"><FaGithub /></a>
        </div>
    )
}