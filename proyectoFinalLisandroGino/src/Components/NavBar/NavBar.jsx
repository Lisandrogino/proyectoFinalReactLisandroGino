import React from 'react'
import {AppBar, Toolbar, Button} from '@mui/material';
import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css'

const NavBar = () => {
  return (
   <AppBar>
        <Toolbar className='toolbarContainer'>

           

                    <div className='logoContainer'>
                        <h1 className='logo'>Librería</h1>
                    </div>

                <nav className='navBarContainer'>

                  
                    

                    <div className='menuContainerContainer'>
                    <div className='menuContainer'>
                        <Button className='buttonBar' color='secondary'>
                            Ciencia
                        </Button>
                    </div>

                    <div className='menuContainer'>
                        <Button className='buttonBar' color='secondary'>
                            Ciencia Ficcion
                        </Button>
                    </div>

                    <div className='menuContainer'>
                        <Button className='buttonBar' color='secondary'>
                            Fantasia
                        </Button>
                    </div>

                    </div>
                    

                </nav>

                    <div className='cardWifget'>
                        <CardWidget />
                    </div>

            

        </Toolbar>
   </AppBar>
  )
}

export default NavBar