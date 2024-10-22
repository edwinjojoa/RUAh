import {Google} from '@mui/icons-material';
import { Grid, TextField, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthVistaGeneral } from '../layout/AuthVistaGeneral';

export const LoginPage = () => {
  return (
    <AuthVistaGeneral titulo='Login'>
      
<form>
           <Grid container>
           {/* en pantallas pequeñas tomar todo el ancho posible */}
              <Grid item xs={ 12} sx= {{ mt:2}} >
                <TextField label='Correo' type='email' placeholder='correo@unicesmag.edu.co' fullWidth />
              </Grid>

              <Grid item xs={ 12} sx= {{ mt:2, mt:1}} >
                <TextField label="Contraseña" type='password' placeholder='Contraseña' fullWidth />
              </Grid>

               <Grid container spacing={ 2} sx= {{ mt: 2}} >
                  <Grid item xs={8} sm={ 6 } >
                    <Button variant='contained' fullWidth > Login </Button>
                  </Grid>

                  <Grid item xs={8} sm={ 6 } >
                    <Button variant='contained' fullWidth >
                      <Google/>
                      <Typography sx={{ ml:1}}>Gooble</Typography>  
                    </Button>
                  </Grid>
                    
                  <Grid container direction='row' justifyContent='end'>
                    <Link  color='inherit' to={"/auth/register"}>
                      Crear una cuenta
                    </Link>
                    
                  </Grid>
                    
              </Grid>
           </Grid>

        </form>
    </AuthVistaGeneral>
        

      
  );
};
