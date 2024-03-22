import BtnDarkMode from '../BtnDarkMode/BtnDarkMode'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
   return (
      <nav className="nav">
         <div className="container">
            <div className="nav-row">
               <a href="/" className="logo">
                  <strong>Freelancer</strong> portfolio
               </a>

               <BtnDarkMode />
               <ul className="nav-list">
                  <li className="nav-list__item">
                     <NavLink to="/" className="nav-list__link nav-list__link--active">
                        Home
                     </NavLink>
                  </li>
                  <li className="nav-list__item">
                     <NavLink to="/projects" className="nav-list__link">
                        Projects
                     </NavLink>
                  </li>
                  <li className="nav-list__item">
                     <NavLink to="/contacts" className="nav-list__link">
                        Contacts
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
