import { Grid, Typography } from "@mui/material"

// codigo para estandarizar las diseños de la interfaces 
export const AuthVistaGeneral = ( {children, titulo=''}) => {
  return (
    <Grid container
      spacing={0} // espacio entre los iconos 
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>
       {/* diseño de caja blanca  */}
      <Grid item
        className='box-shadow'
        xs={3} // tamaño de pantalla
        sx={{ 
            width: { sm:450}, //tamaño de interface blanca
            backgroundColor: 'white',
            padding: 3,
            borderRadius: 2 }}
      >
        <Typography variant='h5' sx={{ mb: 1 }}>{ titulo }</Typography>
            {/* desestructuran los hijos del login y el registro */}
            {children}
      </Grid>
      </Grid>
  )
}
