import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import { Typography } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RestaurantIcon from '@mui/icons-material/Restaurant';


const textcolor = "#1A1810";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function ServiceRoom() {
  return (
    <Box  sx={{ width: '90%' , position: "relative" , left: "50%", transform: "translateX(-50%)", }}>
        <Typography variant="h4" component="div" textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> - Service</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} color={textcolor} >
            <Grid  item sm={12} md={6} lg={4}>
                <Item>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}> <BedOutlinedIcon style={{fontSize: "70px", color: "#1A1810"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography  color= {textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} style={{fontWeight: 'bold'}} >Luxury Room</Typography>
                            <Typography variant="body1" gutterBottom textAlign="left" color={textcolor} >
                                Even the all-powerful pointing has no control about the blind 
                                test it is an almos unorthographic
                            </Typography>
                        </Grid>
                    </Grid>
                </Item>
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
                <Item>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}> <WifiIcon style={{fontSize: "70px" , color: "#1A1810"}} /> </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} color={textcolor} style={{fontWeight: 'bold'}}>Fast & Free Wifi</Typography>
                            <Typography variant="body1" gutterBottom textAlign="left" color={textcolor}>
                                Even the all-powerful pointing has no control about the blind 
                                test it is an almos unorthographic
                            </Typography>
                        </Grid>
                    </Grid>
                </Item>
            
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
                <Item>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}> <PhoneInTalkIcon style={{fontSize: "70px", color: "#1A1810"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} color={textcolor} style={{fontWeight: 'bold'}}>Call us 24/7</Typography>
                            <Typography variant="body1" gutterBottom textAlign="left" color={textcolor}>
                                Even the all-powerful pointing has no control about the blind 
                                test it is an almos unorthographic
                            </Typography>
                        </Grid>
                    </Grid>
                </Item>
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
            <Item>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}> <DirectionsBusOutlinedIcon style={{fontSize: "70px", color: "#1A1810"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} color={textcolor} style={{fontWeight: 'bold'}}>Travel Accomodation</Typography>
                            <Typography variant="body1" gutterBottom textAlign="left" color={textcolor}>
                                Even the all-powerful pointing has no control about the blind 
                                test it is an almos unorthographic
                            </Typography>
                        </Grid>
                    </Grid>
                </Item>
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
            <Item>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}> <CreditCardIcon style={{fontSize: "70px", color: "#1A1810"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} color={textcolor} style={{fontWeight: 'bold'}}>Accept Credit Card</Typography>
                            <Typography variant="body1" gutterBottom textAlign="left" color={textcolor}>
                                Even the all-powerful pointing has no control about the blind 
                                test it is an almos unorthographic
                            </Typography>
                        </Grid>
                    </Grid>
                </Item>
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
            <Item>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}> <RestaurantIcon style={{fontSize: "70px", color: "#1A1810"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} color={textcolor} style={{fontWeight: 'bold'}}>Restaurant</Typography>
                            <Typography variant="body1" gutterBottom textAlign="left" color={textcolor}>
                                Even the all-powerful pointing has no control about the blind 
                                test it is an almos unorthographic
                            </Typography>
                        </Grid>
                    </Grid>
                </Item>
            </Grid>
        </Grid>
    </Box>
  );
}