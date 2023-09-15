import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Toaster />
    </>
  )
}

export default App
