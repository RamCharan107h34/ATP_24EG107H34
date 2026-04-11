import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"
import { pageBackground } from "../styles/common"
import { useAuth } from "../store/authStore"
import { useEffect } from "react"


function RootLayout() {
  let checkAuth = useAuth(state=>state.checkAuth)

  useEffect(()=>{
    checkAuth()
  },[])


  return (
    <div>
        < Header/>
        <div className ="min-h-screen mx-32">
            < Outlet/>
        </div>
        < Footer/>
    </div>
  )
}

export default RootLayout