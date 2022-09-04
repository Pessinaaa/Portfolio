import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfilePic from "../assets/Profile.jpeg"
import './home.css'

export default function Home() {
  return (
    <div className="home">
      <div className="profile">
        <img src={ProfilePic}></img>
      </div>
      <h1>Pedro Pessina</h1>
      <div className="social">
        <a href="https://github.com/Pessinaaa" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/pedro-pessina/" target="_blank"><FaLinkedin /></a>
      </div>
      <p>lorem ipsum</p>
    </div>
  )
}