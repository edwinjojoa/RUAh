import {Navigate,Routes, Route} from 'react-router-dom';
import { LoginPage, Recuperarclave} from '../pages';

// rutas del login 
export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage/>  }/>
        <Route path="recuperarclave" element={ <Recuperarclave/>  }/>
        <Route path="/*" element={ <Navigate to="/auth/login" />  } />

    </Routes>
  )
}

