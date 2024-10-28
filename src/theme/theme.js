import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';
// configuracion del tema en general 
export const theme =createTheme({
    palette:{
        primary:{
            main: '#0e4c9f'
        },
        secondary: {
             main: '#543884'
        },
        error:{
            main: red.A400
        }
        
    }
})