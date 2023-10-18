import React from 'react'
import {AppBar, Toolbar, Button} from '@mui/material';
import CartWidget from '../CardWidget/CartWidget';
import './NavBar.css'
import { Link } from 'react-router-dom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const NavBar = () => {
  return (
   <AppBar>
        <Toolbar className='toolbarContainer'>

           

                    <div className='logoContainer'>
                        <Link to='/' className='logo'> 
                        <AutoStoriesIcon fontSize='large'></AutoStoriesIcon>
                        
                         </Link>
                    </div>

                <nav className='navBarContainer'>

                    <div className='navContainer'>

                    <div className='menuContainer'>
                        <Link to='/' className='inicioButton'>
                        <Button className='buttonBar' color='secondary'>
                            Inicio
                        </Button>
                        </Link>
                    </div>
 

                    <div className='menuContainerContainer'>

                        <Link to='products/ciencia' className='cienciaButton'>
                        <Button className='buttonBar' color='secondary'>
                            Ciencia
                        </Button>
                        </Link>
                    </div>
    

                    <div className='menuContainer'>

                    <Link to='products/cienciaFiccion' className='cienciaFiccionButton'>

                        <Button className='buttonBar' color='secondary'>
                            Ciencia Ficcion
                        </Button>

                    </Link>

                    </div>

                    <div className='menuContainer'>

                    <Link to='products/fantasia' className='fantasiaButton'>
                        <Button className='buttonBar' color='secondary'>
                            Fantasia
                        </Button>
                    </Link>
                        
                    </div>

                    </div>

                   
                    

                </nav>

                    <div className='cardWifget'>
                        <CartWidget />
                    </div>

            

        </Toolbar>
   </AppBar>
  )
}

export default NavBar