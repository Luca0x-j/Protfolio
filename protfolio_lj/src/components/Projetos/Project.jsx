import React from 'react'
import './Project.css'
import { 
  SiJavascript, SiReact, SiAngular, SiExpress, SiBootstrap, 
  SiGit, SiMysql, SiFigma, SiHtml5, SiCss3, SiPostgresql, 
  SiTailwindcss
} from 'react-icons/si';

function Project() {

  return (
    <article className='projetos-box' id='projetos'>
      <div className="box">
        <h2 className="titulo">Projetos</h2>
        <p className="frase">Explorando meu conhecimento através de <span className="blue-frase">Projetos</span></p>
      </div>
      <div className="box-projetos">

        {/* Projeto 1 */}
        <aside className="box-inform">
          <img src="../public/img/" alt="" className="img-projeto" />
          <div className="divTitulo">
            <h3 className='name-projeto'>Manipulção de API</h3>
            <div className="tec">
              <SiReact title='React' className='react'/>
              <SiCss3 title="Css3" className='css'/>
            </div>
          </div>
          <p className="descricao">Aplicação que consome a API do GitHub para buscar e exibir informações de usuários, repositórios e estatísticas em tempo real.</p>

          <div className="divImage">
            <button className="deploy"><a href="https://api-github-eight-henna.vercel.app/" target="_blank">Deploy</a></button>
            <button className="github"><a href="https://github.com/Luca0x-j/api-github" target="_blank">Github</a></button>
          </div>
        </aside>

        {/* Projeto 2 */}
        <aside className="box-inform">
          <img src="../public/img/" alt="" className="img-projeto" />
          <div className="divTitulo">
            <h3 className='name-projeto'>Landing Page</h3>
            <div className="tec">
              <SiHtml5 title='Html5' className='html'/>
              <SiCss3 title="CSS" className='css'/>
              <SiJavascript title="Javascript" className='javascript'/>
            </div>
          </div>
          <p className="descricao">Página moderna e responsiva para divulgar pratos e serviços culinários, destacando sabores, fotos e contato do chef ou restaurante.</p>

          <div className="divImage">
            <button className="deploy"><a href="https://landings-pages-cozinha.vercel.app/" target="_blank">Deploy</a></button>
            <button className="github"><a href="https://github.com/Luca0x-j/landings-pages-cozinha" target="_blank">Github</a></button>
          </div>
        </aside>

        {/* Projeto 3 */}
        <aside className="box-inform">
          <img src="https://fredericolopes.com/wp-content/uploads/2017/11/web-design-1.png" alt="" className="img-projeto" />
          <div className="divTitulo">
            <h3 className='name-projeto'>Gereciador de Contas</h3>
            <div className="tec">
              <SiReact title='React' className='react'/>
              <SiExpress title="Express" className='express'/>
              <SiMysql title="MySQL" className='mysql'/>
            </div>
          </div>
          <p className="descricao">Sistema que permite criar, visualizar, atualizar e excluir contas de usuários com armazenamento e controle de dados em tempo real.</p>

          <div className="divImage">
            <button className="deploy"><a href="https://crud-contass.vercel.app/" target="_blank">Deploy</a></button>
            <button className="github"><a href="https://github.com/Luca0x-j/crud-contas" target="_blank">Github</a></button>
          </div>
        </aside>

        {/* Projeto 4 */}
        <aside className="box-inform">
          <img src="" alt="" className="img-projeto" />
          <div className="divTitulo">
            <h3 className='name-projeto'>Hollow Knight Page</h3>
            <div className="tec">
              <SiReact title='React' className='react'/>
              <SiJavascript title="Javascript" className='javascript'/>
              <SiTailwindcss title="Tailwindcss" className='tailwind'/>
            </div>
          </div>
          <p className="descricao">Site pessoal para apresentar meus projetos, habilidades e experiências de forma profissional e interativa.</p>

          <div className="divImage">
            <button className="deploy"><a href="https://hollow-knight1-jade.vercel.app/" target="_blank">Deploy</a></button>
            <button className="github"><a href="https://github.com/Luca0x-j/hollow-knight" target="_blank">Github</a></button>
          </div>
        </aside>
      </div>
    </article>
  )
}

export default Project