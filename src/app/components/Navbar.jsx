import { AppBar, IconButton, Toolbar } from '@mui/material';
import {MenuOutlined} from  '@mui/icons-material'
export const Navbar = ( {menuLateral=240}) => {
  return (
    // posion fija siempre
    <AppBar position="fixed"
    sx={{
        width: { sm: `calc(100% - ${ menuLateral }px)`},
        ml:{sm: `${menuLateral}px`}
    }}
    >
       <Toolbar>
        <IconButton
        color='inherit'
        edge='start'
        sx={{mr: 2, display: {sm:'none'}}}
        >
            <MenuOutlined></MenuOutlined>
        </IconButton>
       </Toolbar> 
    </AppBar>
  )
}
