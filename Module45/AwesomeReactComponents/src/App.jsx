import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './compontnts/Header'
import { DNA } from 'react-loader-spinner'


function App() {
  const navigation = useNavigation();

  const location = useLocation();


  return (
    <>
      <Header></Header>

      {/* UseLocation Hook From React Router DOM */}
      <p>PathName : {location.pathname}</p>
      {/* <p>State : {location.state}</p>
      <p>Key : {location.key}</p> */}

      {/* UseNavigation Hook From React Router DOM */}
      {navigation.state === "loading" ?
        <div className='flex justify-center'>
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div> : <Outlet></Outlet>}

    </>
  )
}

export default App
