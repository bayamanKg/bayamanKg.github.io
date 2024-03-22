
function Project({ url, title }) {
   return (
      <li className="project">
         <a href="./project-page.html">
            <img src={url} alt="Project img" className="project__img" />
            <h3 className="project__title">{title}</h3>
         </a>
      </li>
   )
}

export default Project
