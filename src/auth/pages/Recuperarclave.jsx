import {Google} from '@mui/icons-material';
import { Grid, TextField, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthVistaGeneral } from '../layout/AuthVistaGeneral';

export const Recuperarclave = () => {
  return (
    <AuthVistaGeneral titulo='Recuperar Contraseña'>
      <form>
                <Grid container>
                {/* en pantallas pequeñas tomar todo el ancho posible */}
                    <Grid item xs={ 12} sx= {{ mt:2}} >
                      <TextField label='Correo electrónico' type='email' placeholder='correo@unicesmag.edu.co' fullWidth />
                    </Grid>
                      <Grid container spacing={ 2} sx= {{ mt: 1}} >
                        <Grid item xs={12} sm={ 12 } >
                          <div className="button-container">
                            <button type="submit">
                                <span>Recuperar Contraseña</span>
                            </button>
                          </div>
                        </Grid>
                          
                        <Grid container direction='row' justifyContent='end'>
                          <Link  color='inherit' to={"/auth/login"}>
                          Iniciar sesión
                          </Link>
                        </Grid>
                        
                          
                    </Grid>
                </Grid>

              </form>
    </AuthVistaGeneral>
        

      
  );
};
