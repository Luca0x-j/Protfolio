import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Home = () => {
  return (
    <section className='home' id='home'>
        <div class="bg-blue"></div>
        <div className="home-left">
            <p>Hello, I am Lucas Juliano</p>
            <h1>Desenvolvedor Fullstack</h1>
            <h3>"Na programação, o erro é um 
                mestre disfarçado ensinando o caminho certo."</h3>
            <div className="social-icons">
                <a href="https://github.com/Luca0x-j" target='_blank' rel='noreferrer'><FaGithub/></a>
                <a href="#linkedin" target='_blank' rel='noreferrer'><FaLinkedin/></a>
            </div>
        </div>

        <div className="home-right">
            <div className="photo-box">
                <img src="../public/img/perfil.jpg" alt="Foto Perfil" className='imgPerfil'/>
            </div>
            <div className="photo-box2">

            </div>
        </div>
    </section>
  );
}

export default Home