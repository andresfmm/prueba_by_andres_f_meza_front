
import {
    Routes,
    Route,
  } from "react-router-dom";



import { Index } from '../pages/Index';
import { Crud } from '../pages/Crud';
import { ListaCrud } from '../pages/ListaCrud';
import { NavbarComponent } from '../components/navbars/NavbarComponent';

export const AppRouter = () => {
  return (

   <>
    <NavbarComponent/> 
    <div className="container"> 
        <Routes>
            <Route   path="/" element={<Index />} />
            <Route   path="crud" element={<Crud />} />
            <Route   path="lista-crud" element={<ListaCrud />} />
        </Routes>
    </div>
   </>
  )
}
