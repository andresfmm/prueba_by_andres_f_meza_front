
import {
    Routes,
    Route,
  } from "react-router-dom";



import { Index } from '../pages/Index';
import { CrearUsuario } from '../pages/CrearUsuario';
import { ListaUsuarios } from '../pages/ListaUsuarios';
import { NavbarComponent } from '../components/navbars/NavbarComponent';

export const AppRouter = () => {
  return (

   <>
    <NavbarComponent/> 
    <div className="container d-flex"> 
        <Routes>
            <Route   path="/" element={<Index />} />
            <Route   path="crear-usuario" element={<CrearUsuario />} />
            <Route   path="lista-crud" element={<ListaUsuarios />} />
        </Routes>
    </div>
   </>
  )
}
