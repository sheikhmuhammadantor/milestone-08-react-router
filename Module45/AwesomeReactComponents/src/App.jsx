import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './compontnts/Header'
import PageTitle from './utility/PageTitle'

function App() {

  return (
    <>
      <Header></Header>
      {/* <PageTitle title={"App"}></PageTitle> */}
      <Outlet></Outlet>
    </>
  )
}

export default App
