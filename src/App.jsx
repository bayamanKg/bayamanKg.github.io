import './css/reset.css'
import './css/main.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import { Route, Routes } from 'react-router-dom'

function App() {
   return (
      <>
         <Navbar />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>

         <Footer />
      </>
   )
}

export default App
