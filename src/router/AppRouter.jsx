import {Route, Routes} from "react-router-dom";
import {AuthRoutes} from "../auth/routes/AuthRoutes";
import { FullLayoutRoutes } from "../app/pages/full-layout-page/routes/fullLayoutRoutes";


export const AppRouter = () => {
  return (
    
    <Routes>
        {/* Ruta de login y registro  */}
        <Route path="/auth/*" element={<AuthRoutes/>} />
        {/* Rutas de la app o personas con autenticacion  */}
        <Route path="/*" element={<FullLayoutRoutes/>} />
    </Routes>
  )
}
