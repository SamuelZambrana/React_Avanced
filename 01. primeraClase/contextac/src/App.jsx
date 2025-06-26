
import './App.css'
import AcStateComponent from './components/AcStateComponent'
import GlobalState from './core/context/GlobalState'

function App() {

  return (
    <GlobalState>
      <h1>Aire acondicionado</h1>
      <hr />
      <AcStateComponent />
    </GlobalState>
  )
}

export default App
