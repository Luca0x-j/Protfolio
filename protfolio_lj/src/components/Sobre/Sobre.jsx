import React from 'react'
import './Sobre.css'

function Sobre() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../public/pdf/curriculo_dev.pdf"; // caminho dentro da pasta public
    link.download = "Curriculo-Lucas.pdf"; // nome do arquivo ao baixar
    link.click();
  };


  return (
    <section className="sobre" id="sobre">

            <div className="box">
              <img className="img-sobre" src="../public/img/background-code.jpg" alt="Tecnologia" />
            </div>

            <div className="texts">
                <h2>Sobre Min</h2>
                <p>
                  Meu nome é Lucas Juliano, atualmente tenho 19anos e sou estudande de Análise e Desenvovimento de Sistemas Estou buscando a minha primeira oportunidade na area de desenvolvimento. Tenho grande interesse em tecnologia, quanto mais eu entro profundamente na area me deixa cada vez mais apaxionado e surpresso comm as tecnologias criadas pelos desenvolvedores, tenho um grande foco especialmente em Desenvolvedor FullStack mas também procuro me conectar e aprender dobre diferentes áreas do setor.
                </p>
                <ul className='tecnologias'>
                    <li className="html">Html</li>
                    <li className="css">Css</li>
                    <li className="react">React</li>
                    <li className="javascript">Javascript</li>
                    <li className="node">Node</li>
                    <li className="angular">Angular</li>
                    <li className="git">Git</li>
                </ul>
                <button onClick={handleDownload}> Baixar CV</button>
            </div>

    </section>
  )
}

export default Sobre;