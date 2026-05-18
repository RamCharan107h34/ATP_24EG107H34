import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Userlist from './components/Userlist'


function App(){

  // return App component with Navbar, Userlist and Footer components
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