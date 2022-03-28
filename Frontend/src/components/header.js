// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";
import {
  Link
} from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Cookies from 'js-cookie';


// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

import ApartmentIcon from '@mui/icons-material/Apartment';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

// REACT APP IMPORTS


// authentication
var isAdmin = Cookies.get('isAdmin');
var isLogin = Cookies.get('id');
if(isLogin){
  isLogin = true;
}
else{
  isLogin = false;
}

if(isAdmin==="0"){
  isAdmin = false;
}
if(isAdmin==="1"){
  isAdmin = true;
}



// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1 ,
    color: '#1A1810',
    textAlign: 'left',
    textDecoration: 'none',
    "&:hover": {
      color: '#A77B5A'
    }
  },
  buttonMenu:
  {
      padding: '0 2vw',
      "&:hover": {
        color: '#A77B5A'
      }
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleSignOut = () => {
    Cookies.remove('id');
    Cookies.remove('isAdmin');
    alert("Signed Out Completed!");
    window.location.reload();
  }
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
    
          <AppBar>
            <Toolbar style={{backgroundColor: '#FCFAF0'}}>
             
                <Typography component={Link} to={"/"}
                  variant="h5"
                  
                  className={classes.title}
                >
                      BKLuxury<span style={{color:'#A77B5A'}}>Hotel</span>
                </Typography>
              
              {isMobile ? (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                  >
                    
                      <MenuItem component={Link} to={"/"}
                        onClick={() => setAnchor(null)}
                        
                      >
                        <ListItemIcon>
                          <HomeIcon fontSize='large'/>
                        </ListItemIcon>
                        <Typography variant="h6"> Home</Typography>
                      </MenuItem> 
                    
                    
                      <MenuItem component={Link} to={'/rooms'}
                        onClick={() => setAnchor(null)}
                      >
                        <ListItemIcon>
                          <ApartmentIcon fontSize='large'/>
                        </ListItemIcon>
                        <Typography variant="h6"> Rooms </Typography>
                      </MenuItem>
                    
                  
                      <MenuItem component={Link} to={'/services'}
                        onClick={() => setAnchor(null)}
                        
                        
                      >
                        <ListItemIcon>
                          <RoomServiceIcon fontSize='large'/>
                        </ListItemIcon>
                        <Typography variant="h6"> Service</Typography>
                      </MenuItem>
                    
                      { isLogin ?
                        <MenuItem
                          onClick={() => setAnchor(null)}
                          onClick={() => handleSignOut()}
                        >
                          <ListItemIcon>
                            <LockOpenIcon fontSize="large"/>
                          </ListItemIcon>
                          <Typography variant="h6"> Sign out </Typography>
                        </MenuItem> 

                      :  
                        <MenuItem component={Link} to={'/signin'}
                            onClick={() => setAnchor(null)}
                          >
                            <ListItemIcon>
                              <LockOpenIcon fontSize="large"/>
                            </ListItemIcon>
                            <Typography variant="h6"> Sign in </Typography>
                          </MenuItem> }
                      
                    
                    
                    <MenuItem component={Link} to={'/booking'}
                      onClick={() => setAnchor(null)}
                       
                      
                    >
                      <ListItemIcon>
                        <BookmarkAddedIcon fontSize="large"/>
                      </ListItemIcon>
                      <Typography variant="h6"> Booking </Typography>
                    </MenuItem>
                    
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "4rem" }}>
                 
                    <Button className={classes.buttonMenu}
                      variant="text"
                      component={Link} to={'/'}
                      
                      color="default"
                    >
                      Home
                    </Button>
                
                  
                    <Button className={classes.buttonMenu}
                      variant="text"
                      component={Link} to={'/rooms'}
                      
                      color="default"
                    >
                      
                      Rooms
                    </Button>
                 
                  
                    <Button className={classes.buttonMenu}
                      variant="text"
                      component={Link} to={'/services'}
                      
                      color="default"
                    >
                      
                      Services
                    </Button>

                    {isAdmin && <Button className={classes.buttonMenu}
                      variant="text"
                      component={Link} to={'/adminAccount'}
                      color="default"
                    >
                      Manage Accounts
                    </Button>}

                    {isAdmin && <Button className={classes.buttonMenu}
                      variant="text"
                      component={Link} to={'/adminRoom'}
                      color="default"
                    >
                      Manage Rooms
                    </Button>}
                  
                    {isAdmin? <Button className={classes.buttonMenu}
                      variant="text"
                      component={Link} to={'/adminBooking'}
                      color="default"
                    >
                      Manage Booking
                    </Button>
                    : <Button className={classes.buttonMenu}
                    variant="text"
                    component={Link} to={'/booking'}
                    
                    color="default"
                  >
                    Booking
                  </Button>
                  }

                  {isLogin && <Button className={classes.buttonMenu}
                      variant="text"
                      component={Link} to={'/account'}
                      color="default"
                    >
                      My Account
                    </Button>
                  }
                  
                  
                    {isLogin ?
                    <Button className={classes.buttonMenu}
                    variant="text"
                    onClick={() => handleSignOut()}
                    color="default"
                    >
                      Sign Out
                    </Button>

                    :  <Button className={classes.buttonMenu}
                      variant="text"
                      component={Link} to={'/signin'}
                      color="default"
                    >
                      
                      Sign in
                    </Button>}
                 
                  
                      
                 
                </div>
              )}
            </Toolbar>
          </AppBar>
        
        
      </HideOnScroll>
    </div>
  );
};

export default Header;
