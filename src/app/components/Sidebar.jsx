import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

//menu vertical de todos los diseños 
export const SideBar = ( {menuLateral}) => {
  return (
    <Box 

    component='nav'
    sx={{width: {sm: menuLateral}, flexShrink:{sm:0 }}}
    >
        <Drawer
         variant="permanent"
         open
         sx={{display: {sx: 'block'},
          '& .MuiDrrawer-paper':{ boxSizing: 'border-box', whidth: menuLateral}
        }}
        >
        </Drawer>
        <Toolbar>
          <Typography variant="h6" noWrap component='div'>
            Edwin Jojoa
          </Typography>
          <Divider/>
        </Toolbar>
        <List>
          {
          [ 'Enero','Marzo','Abril','Mayo','Junio','Lulio'].map (text =>(
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <TurnedInNot/>
                </ListItemIcon>
              <Grid container>
                 <ListItemText primary={text}/>
                 <ListItemText secondary={'Anim mollit in ullamco culpa qui do aliqua.'}/>
              </Grid>
              </ListItemButton>
            </ListItem>
          ))
          }

        </List>
    </Box>
  )
}
