import {Google} from '@mui/icons-material';
import { Grid, TextField, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthVistaGeneral } from '../layout/AuthVistaGeneral';

export const RegisterPage = () => {
  return (
    <AuthVistaGeneral titulo='Registro de usuario'>
<form>
           <Grid container>
           {/* en pantallas pequeñas tomar todo el ancho posible */}
              <Grid item xs={ 12} sx= {{ mt:2}} >
                <TextField label='Primer nombre' type='text' placeholder='Primer Nombre' fullWidth />
              </Grid>
              <Grid item xs={ 12} sx= {{ mt:2}} >
                <TextField label='segundo Nombre' type='text' placeholder='Segundo Nombre' fullWidth />
              </Grid>
              <Grid item xs={ 12} sx= {{ mt:2}} >
                <TextField label='Correo' type='email' placeholder='correo@unicesmag.edu.co' fullWidth />
              </Grid>
              <Grid item xs={ 12} sx= {{ mt:2, mt:1}} >
                <TextField label="Contraseña" type='password' placeholder='Contraseña' fullWidth />
              </Grid>

               <Grid container spacing={ 2} sx= {{ mt: 2}} >
                  <Grid item xs={12} >
                    <Button variant='contained' fullWidth > Crear cuenta </Button>
                  </Grid>

                

                  <Grid container direction='row' justifyContent='end'>
                    |<Typography sx={{ mr:1 }}>¿Ya tienes cuenta?</Typography>
                    <Link  color='inherit' to={"/auth/login"}>
                      Ingresar
                    </Link>
                    
                  </Grid>

              </Grid>
           </Grid>
        </form>
    </AuthVistaGeneral>
        

      
  );
};
