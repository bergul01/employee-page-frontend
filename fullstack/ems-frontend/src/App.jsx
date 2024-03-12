
import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import { ListEmployeeComponent } from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {


  return (
    <>
    
    <BrowserRouter>                   {/* react-router-dom kütüphanesi tarafından geldi */}
      <HeaderComponent/>
        <Routes>
                                      {/* // http://localhost:3000   bu root istek geldiğinde ana sayfa olan ListEmployeeComponent açılıcak*/ }     
            <Route path='/'element = {<ListEmployeeComponent/>}></Route>
                                      {/* // http://localhost:3000/employees bu root istek geldiğinde employee gözükücek */}
            <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
            {/* // http://localhost:3000/add-employee bu root istek EmployeeComponent sayfası görünücek */}
            <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>
            {/* // http://localhost:3000/edit-employee/1 */}
            <Route path='/edit-employee/:id' element = {<EmployeeComponent/>}></Route>

        </Routes>  
      <FooterComponent/>
      </BrowserRouter>        
    </>
  )
}

export default App
