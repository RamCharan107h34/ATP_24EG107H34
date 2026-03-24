import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Userlist from './components/Userlist'


function App(){

  return (
    <div>
      <Navbar />
      <div className='m-16 min-h-screen'>
        <Userlist/>
      </div>
      <Footer/>
    </div>
  )
}

export default App