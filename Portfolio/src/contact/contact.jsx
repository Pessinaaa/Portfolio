import { FaLinkedinIn, FaAt } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

export default function Contato(){
    return (
        <div className='contact section'>
            <h2>Entre em contato</h2>
            <div className='contact-buttons'>
                <a href="https://www.linkedin.com/in/pedro-pessina/" target="_blank"><FaLinkedinIn /></a>
                <a href="mailto: pedro.pessina99+work@gmail.com" target="_blank"><FaAt /></a>
                <a href="https://wa.me/5511989697450" target="_blank"><IoLogoWhatsapp /></a>
            </div>
            <form>
                <label htmlFor="nome">Nome</label>
                <input type="text"/>
                <label htmlFor="email">E-mail</label>
                <input type="email"/>
                <label htmlFor="assunto">Assunto</label>
                <select name="assunto" id="assunto">
                    <option value="default" selected disabled hidden>Escolha um assunto</option>
                    <option value="contato">Contato</option>
                    <option value="critica">Crítica</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="sugestao">Sugestão</option>
                </select>
                <label htmlFor="mensagem">Mensagem</label>
                <input type="text" placeholder='Escreva o conteúdo do email'/>
                <input type="submit" />
            </form>
        </div>
    )
}