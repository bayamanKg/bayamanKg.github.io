import Project from '../components/Project/Project'
import img1 from '../img/projects/01.jpg'
import img2 from '../img/projects/02.jpg'
import img3 from '../img/projects/03.jpg'
import img4 from '../img/projects/04.jpg'
import img5 from '../img/projects/05.jpg'
import img6 from '../img/projects/06.jpg'

const card = [
   {
      title: 'Gaming streaming portal',
      img: img1,
   },
   {
      title: '  Sevice',
      img: img2,
   },
   {
      title: 'Video Portal',
      img: img3,
   },
   {
      title: 'Dating App',
      img: img4,
   },
   {
      title: 'Landing',
      img: img5,
   },
   {
      title: 'Gaming comminuty',
      img: img6,
   },
]

function Projects() {
   return (
      <main className="section">
         <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
               {card.map((item) => (
                  <Project key={item.title} title={item.title} url={item.img} />
               ))}
            </ul>
         </div>
      </main>
   )
}

export default Projects
