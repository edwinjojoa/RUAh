import { Box, Toolbar } from "@mui/material"
import { Navbar, SideBar } from "../components"

//configuracion de interfaces que siempre se van a mostrar en todas las pagina del sistema 
//cualquier pagina va erredar el navbar o el sidebar y todo lo de mas 
const menuLateral= 240
export const NoahLayout = ({ children }) => {
  return (
    <Box sx={{display: 'flex'}}>
        {/* navbar menuLateral */}
        <Navbar menuLateral={menuLateral} />
        {/* sidebar */}
        <SideBar menuLateral={menuLateral} />
        <Box 
            component={'main'}
            sx={{ flexGrow: 1, p:3}}>

        {/* Toolbar */}
        <Toolbar/>
        { children }

        </Box>

       
    </Box>
  )
}
