import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass, FaPython, FaGitAlt, FaGithub, FaJava, FaNodeJs, FaDatabase, FaFigma, FaBootstrap, FaAngular } from "react-icons/fa"
import { SiMongodb, SiSpring, SiTypescript, SiCsharp } from "react-icons/si"
import './skills.css'

export default function Skills(){
    return(
        <div className='skills section'>
            <div className="skill-list">
                <h2>Minhas habilidades</h2>
                <ul className="two-collumns">
                    <li><FaHtml5 className="icon"/>HTML5</li>
                    <li><FaCss3Alt className="icon"/>CSS3</li>
                    <li><FaSass className="icon"/>Sass</li>
                    <li><FaBootstrap className="icon"/>Bootstrap</li>
                    <li><FaJava className="icon"/>Java</li>
                    <li><SiSpring className="icon"/>Spring</li>
                    <li><FaJsSquare className="icon"/>Javascript</li>
                    <li><FaReact className="icon"/>React.js</li>
                    <li><FaAngular className="icon"/>Angular</li>
                    <li><FaDatabase className="icon"/>MySQL</li>
                    <li><SiMongodb className="icon"/>MongoDB</li>
                    <li><FaGitAlt className="icon"/>Git</li>
                    <li><FaGithub className="icon"/>Github</li>
                </ul>
            </div>
            <div className="skill-list">
                <h2>Habilidades que estou desenvolvendo</h2>
                <ul>
                    <li><FaPython className="icon"/>Python</li>
                    <li className="biggest"><FaNodeJs className="icon"/>Node.js</li>
                    <li><SiTypescript className="icon"/>TypeScript</li>
                    <li><SiCsharp className="icon"/>C#</li>
                    <li><FaFigma className="icon"/>Figma</li>
                </ul>
            </div>
        </div>
    )
}