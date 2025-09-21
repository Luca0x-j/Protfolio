import React from 'react';
import "./Tec.css";
import { 
  SiJavascript, SiReact, SiAngular, SiExpress, SiBootstrap, 
  SiGit, SiMysql, SiFigma, SiHtml5, SiCss3, SiPostgresql 
} from 'react-icons/si';

const Tec = () => {
  return (
    <div className="tech-stack">
      <SiJavascript title="JavaScript" />
      <SiReact title="React" />
      <SiAngular title="Angular" />
      <SiExpress title="Express" />
      <SiBootstrap title="Bootstrap" />
      <SiGit title="Git" />
      <span className="text-icon">SQL</span>
      <SiMysql title="MySQL" />
      <SiFigma title="Figma" />
      <SiHtml5 title="HTML5" />
      <SiCss3 title="CSS3" />
    </div>
  )
}

export default Tec