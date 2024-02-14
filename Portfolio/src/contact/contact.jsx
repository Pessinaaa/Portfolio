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
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" required/>
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" required/>
                </div>
                <div>
                    <label htmlFor="assunto">Assunto</label>
                    <select name="assunto" id="assunto" required>
                        <option value="default" selected disabled hidden>Escolha um assunto</option>
                        <option value="contato">Contato</option>
                        <option value="critica">Crítica</option>
                        <option value="orcamento">Orçamento</option>
                        <option value="sugestao">Sugestão</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea type="text" placeholder='Escreva o conteúdo do email' cols='0' rows='5' required/>
                </div>
                <input type="submit" className='submit-form'/>
            </form>
        </div>
    )
}