import React from 'react'
import './Project.css'
import { 
  SiJavascript, SiReact, SiAngular, SiExpress, SiBootstrap, 
  SiGit, SiMysql, SiFigma, SiHtml5, SiCss3, SiPostgresql 
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
          <img src="" alt="" className="img-projeto" />
          <div className="divTitulo">
            <h3 className='name-projeto'>Projeto 1</h3>
            <div className="tec">
              <SiReact title='React' className='react'/>
              <SiBootstrap title="Bootstrap" className='bootstrap'/>
            </div>
          </div>
          <p className="descricao">Descrição do projeto kfjjgis dgkodsgjg pe gkepkg kgka kgkkoeg kagpg akepg kajjahfhdhfgha8ehaef aijfhafaheif hag faoa hfiafhah fhaighaigi aghgia.</p>

          <div className="divImage">
            <button className="deploy">Deploy</button>
            <button className="github">Github</button>
          </div>
        </aside>

        {/* Projeto 2 */}
        <aside className="box-inform">
          <img src="https://fredericolopes.com/wp-content/uploads/2017/11/web-design-1.png" alt="" className="img-projeto" />
          <div className="divTitulo">
            <h3 className='name-projeto'>Projeto 2</h3>
            <div className="tec">
              <SiReact title='React' className='react'/>
              <SiBootstrap title="Bootstrap" className='bootstrap'/>
            </div>
          </div>
          <p className="descricao">Descrição do projeto kfjjgis dgkodsgjg pe gkepkg kgka kgkkoeg kagpg akepg kajjahfhdhfgha8ehaef aijfhafaheif hag faoa hfiafhah fhaighaigi aghgia.</p>

          <div className="divImage">
            <button className="deploy">Deploy</button>
            <button className="github">Github</button>
          </div>
        </aside>

        {/* Projeto 3 */}
        <aside className="box-inform">
          <img src="https://fredericolopes.com/wp-content/uploads/2017/11/web-design-1.png" alt="" className="img-projeto" />
          <div className="divTitulo">
            <h3 className='name-projeto'>Projeto 3</h3>
            <div className="tec">
              <SiReact title='React' className='react'/>
              <SiBootstrap title="Bootstrap" className='bootstrap'/>
            </div>
          </div>
          <p className="descricao">Descrição do projeto kfjjgis dgkodsgjg pe gkepkg kgka kgkkoeg kagpg akepg kajjahfhdhfgha8ehaef aijfhafaheif hag faoa hfiafhah fhaighaigi aghgia.</p>

          <div className="divImage">
            <button className="deploy">Deploy</button>
            <button className="github">Github</button>
          </div>
        </aside>

        {/* Projeto 4 */}
        <aside className="box-inform">
          <img src="" alt="" className="img-projeto" />
          <div className="divTitulo">
            <h3 className='name-projeto'>Projeto 4</h3>
            <div className="tec">
              <SiReact title='React' className='react'/>
              <SiBootstrap title="Bootstrap" className='bootstrap'/>
            </div>
          </div>
          <p className="descricao">Descrição do projeto kfjjgis dgkodsgjg pe gkepkg kgka kgkkoeg kagpg akepg kajjahfhdhfgha8ehaef aijfhafaheif hag faoa hfiafhah fhaighaigi aghgia.</p>

          <div className="divImage">
            <button className="deploy">Deploy</button>
            <button className="github">Github</button>
          </div>
        </aside>
      </div>
    </article>
  )
}

export default Project