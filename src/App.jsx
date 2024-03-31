import { Outlet } from 'react-router-dom'
import Navbar from './components/cores/Navbar'
import Footer from './components/cores/Footer'

export default function App(){
  return(
    <>
      <Navbar/>
      {<Outlet/>}
      <Footer/>
    </>
  )
}