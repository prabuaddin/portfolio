import { Outlet } from 'react-router-dom'
import Navbar from './components/cores/Navbar'

export default function App(){
  return(
    <>
      <Navbar/>
      {<Outlet/>}
    </>
  )
}