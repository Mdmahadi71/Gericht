import './App.css'
import {createBrowserRouter,createRoutesFromElements ,RouterProvider,Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'
import BarrsPage from './Pages/BarrsPage'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
   <Route element={<Layout/>} >
      <Route path='/' element={<Home/>}></Route>
      <Route path='/barrs' element={<BarrsPage/>}></Route>
   </Route>
  ))
  

  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    </>
  )
}

export default App
