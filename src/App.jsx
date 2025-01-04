import './App.css'
import Header from "./app/Header"
import Sidebar from './app/Sidebar'
import { MainContent } from './components/main-content/MainContent'

function App() {

  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className='flex-1 h-screen' >
          <Header />
          <MainContent />
        </div>
      </div>

    </>
  )
}

export default App
