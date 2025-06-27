import './App.css'
import { Provider } from 'react-redux'
import store from './core/redux/store/store'
import UsersComponent from './components/UsersComponent/UsersComponent'

function App() {

  return (
    <Provider store={store}>
      <UsersComponent />
    </Provider>
  )
}

export default App
