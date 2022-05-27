// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Cookies from 'js-cookie';


// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

import ApartmentIcon from '@mui/icons-material/Apartment';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import VillaIcon from '@mui/icons-material/Villa';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

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
  phoneButton: {
    color: '#FCFAF0',
    marginRight: '3rem',
    fontFamily: 'Arial',
    fontSize: 16,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#FCFAF0'
  },
  title: {
    flexGrow: 1 ,
    color: '#FCFAF0',
    textAlign: 'left',
    fontFamily: 'Chilanka',
    textDecoration: 'none',
    "&:hover": {
      color: '#A77B5A'
    }
  },
  appBarTransparent:{
    backgroundColor: '#0f1e4d',
  },
  icon: {
    marginLeft : '6rem',
    color: 'white',
  },
  notchedOutline: {
    borderWidth: "2px",
    borderColor: "white !important",
    color: '#FCFAF0',
  }
}));

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
          <AppBar position = "fixed" className= {classes.appBarTransparent}>
            <Toolbar>
                <ListItemIcon className={classes.icon}>
                    <VillaIcon fontSize='large'/>
                </ListItemIcon>
                <Typography component={Link} to={"/"} variant="h4" className={classes.title}>
                    Hotel
                </Typography>

                <div style={{ marginRight: "25rem" }}>
                  <Button className={classes.phoneButton}>
                    <ListItemIcon className={classes.icon}>
                      <PhoneInTalkIcon/>
                    </ListItemIcon>
                    +84 986930777
                  </Button>

                </div>

              
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
                        <Typography variant="h5"> Home</Typography>
                      </MenuItem> 
                    
                    
                      <MenuItem component={Link} to={'/rooms'}
                        onClick={() => setAnchor(null)}
                      >
                        <ListItemIcon>
                          <ApartmentIcon fontSize='large'/>
                        </ListItemIcon>
                        <Typography variant="h5"> Rooms </Typography>
                      </MenuItem>
                    
                  
                      <MenuItem component={Link} to={'/services'}
                        onClick={() => setAnchor(null)}
                        
                        
                      >
                        <ListItemIcon>
                          <RoomServiceIcon fontSize='large'/>
                        </ListItemIcon>
                        <Typography variant="h5"> Service</Typography>
                      </MenuItem>
                    
                      { isLogin ?
                        <MenuItem
                          onClick={() => setAnchor(null)}
                          onClick={() => handleSignOut()}
                        >
                          <ListItemIcon>
                            <LockOpenIcon fontSize="large"/>
                          </ListItemIcon>
                          <Typography variant="h5"> Sign out </Typography>
                        </MenuItem> 

                      :  
                        <MenuItem component={Link} to={'/signin'}
                            onClick={() => setAnchor(null)}
                          >
                            <ListItemIcon>
                              <LockOpenIcon fontSize="large"/>
                            </ListItemIcon>
                            <Typography variant="h5"> Sign in </Typography>
                          </MenuItem> }
                      
                    
                    
                    <MenuItem component={Link} to={'/booking'}
                      onClick={() => setAnchor(null)}
                       
                      
                    >
                      <ListItemIcon>
                        <BookmarkAddedIcon fontSize="large"/>
                      </ListItemIcon>
                      <Typography variant="h5"> Booking </Typography>
                    </MenuItem>
                    
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "6rem" }}>
                 
                    <Button
                      className={classes.phoneButton}
                      component={Link} to={'/'}
                    >
                      Home
                    </Button>

                    <Button
                      className={classes.phoneButton}
                      component={Link} to={'/rooms'}
                    >
                      Rooms
                    </Button>

                    <Button
                      component={Link} to={'/services'}
                      className={classes.phoneButton}
                    >
                      Services
                    </Button>

                    {isAdmin && <Button
                      className={classes.phoneButton}
                      component={Link} to={'/adminAccount'}
                    >
                      Manage Accounts
                    </Button>}

                    {isAdmin && <Button
                      className={classes.phoneButton}
                      component={Link} to={'/adminRoom'}
                    >
                      Manage Rooms
                    </Button>}
                  
                    {isAdmin? <Button 
                      className={classes.phoneButton}
                      component={Link} to={'/adminBooking'}
                    >
                      Manage Booking
                    </Button>
                    : <Button
                    className={classes.phoneButton}
                    component={Link} to={'/booking'}
                  >
                    Booking
                  </Button>
                  }

                  {isLogin && <Button
                      className={classes.phoneButton}
                      component={Link} to={'/account'}
                    >
                      My Account
                    </Button>
                  }
                  
                  
                    {isLogin ?
                    <Button
                    className={classes.notchedOutline}
                    variant="outlined"
                    onClick={() => handleSignOut()}
                    size = "large"
                    >
                      Sign Out
                    </Button>

                    :  <Button 
                      className={classes.notchedOutline}
                      variant="outlined"
                      component={Link} to={'/signin'}
                      size = "large"
                    >
                      
                      Sign in
                    </Button>}
                 
                  
                      
                 
                </div>
              )}
            </Toolbar>
          </AppBar>
        
        
    </div>
  );
};

export default Header;
