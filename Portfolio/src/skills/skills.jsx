import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass, FaPython, FaGitAlt, FaGithub, FaJava, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa"
import './skills.css'

export default function Skills(){
    return(
        <div className='skills'>
            <div className="skill-list">
                <h2>Minhas habilidades</h2>
                <ul>
                    <li><FaHtml5 className="icon"/>HTML5</li>
                    <li><FaCss3Alt className="icon"/>CSS3</li>
                    <li><FaReact className="icon"/>React.js</li>
                    <li><FaSass className="icon"/>Sass</li>
                    <li><FaPython className="icon"/>Python</li>
                    <li><FaGitAlt className="icon"/>Git</li>
                    <li><FaGithub className="icon"/>Github</li>
                </ul>
            </div>
            <div className="skill-list">
                <h2>Habilidades que estou desenvolvendo</h2>
                <ul>
                    <li><FaJava className="icon"/>Java</li>
                    <li><FaJsSquare className="icon"/>Javascript</li>
                    <li className="biggest"><FaNodeJs className="icon"/>Node.js</li>
                    <li><FaDatabase className="icon"/>MySQL</li>
                    <li><FaFigma className="icon"/>Figma</li>
                </ul>
            </div>
        </div>
    )
}