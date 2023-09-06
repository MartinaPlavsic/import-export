
import './App.css'
import { VelikiNaslov } from './components/VelikiNaslov'
import { SrednjiNaslov } from './components/SrednjiNaslov'
import { MaliNaslov } from './components/MaliNaslov'



function App() {
  

  return (
    <>
      {VelikiNaslov()}
      {SrednjiNaslov()}
      {MaliNaslov()}
    </>
  )
}

export default App
