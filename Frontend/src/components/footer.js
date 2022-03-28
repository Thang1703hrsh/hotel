import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1
    },
    footerContainer:{
        height:'100%'
    },
    gridContainer:{
        width: '80%',
        position: "relative" , left: "50%", transform: "translateX(-50%)"
    },
    linkItem:{
        height: '3vh',
        padding: '2.5vh 3vw',
    }


}));

const textcolor = "#1A1810";

export default function Footer(){
    const classes = useStyles(); 
    return (
    <Box className={classes.footerContainer} sx={{ width: '100%' , position: "relative" , left: "50%", transform: "translateX(-50%)", }} marginTop='10vh' backgroundColor='#FCFAF0'>
        <Grid className={classes.gridContainer} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={16}>
            <Grid item lg={7} md={9} sm={9} xs={16} >
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Typography variant="h6" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> BKLuxuryHotel </Typography>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> @2021 </Typography>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> Privacy -Terms </Typography>
                </Link>
                   
            </Grid>
            <Grid item lg={3} md={7} sm={7} xs={16}>
                <Link style={{ textDecoration: 'none' }} to="/rooms">
                    <Typography variant="h6" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> ROOM </Typography>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/ClubRoom">
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> Club Room </Typography>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/SuperiorRoom" >
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}>  Superior Room </Typography>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/DeluxeRoom" >
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}>  Deluxe Room </Typography>
                </Link>
            </Grid>
            <Grid item lg={3} md={7} sm={7} xs={16} >
                <Link style={{ textDecoration: 'none' }} to="/services">
                    <Typography variant="h6" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> SERVICES </Typography>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/services">
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> FITNESS FACILITIES </Typography>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/services">
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}>  POOL</Typography>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/services">
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}>  SPA OFFER </Typography>
                </Link>
            </Grid>
            <Grid item lg={3} md={7} sm={7} xs={16}>
                <Link style={{ textDecoration: 'none' }} to="/Booking">
                    <Typography variant="h6" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> BOOKING </Typography>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/signin">
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> SIGN IN </Typography>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/signup">
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}>  SIGN UP</Typography>
                </Link>
            </Grid>
        </Grid>
    </Box>
    
  );
}