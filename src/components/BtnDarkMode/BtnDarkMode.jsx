import sun from './../../img/icons/sun.svg'
import moon from './../../img/icons/moon.svg'
import './BtnDarkMode.css'
import { useEffect, useRef } from 'react'

import { useLocalStorage } from './../../hooks/useLocalStorage.jsx'

function BtnDarkMode() {
   const [click, setClick] = useLocalStorage('dark', 'light')
   const btnRef = useRef(null)

   useEffect(() => {
      if (click === 'dark') {
         document.body.classList.add('dark')
         btnRef.current.classList.add('dark-mode-btn--active')
      } else {
         document.body.classList.remove('dark')
         btnRef.current.classList.remove('dark-mode-btn--active')
      }
   }, [click])

   function clickDarkMode() {
      setClick((current) => {
         return current === 'light' ? 'dark' : 'light'
      })
   }

   return (
      <button ref={btnRef} className="dark-mode-btn" onClick={clickDarkMode}>
         <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
         <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
      </button>
   )
}

export default BtnDarkMode
