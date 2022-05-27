import React, { Component } from 'react'
import '../asset/css/service-grid.scss';

const data = [
    {title:"RESTAURANT",url:"https://www.svgrepo.com/show/58017/restaurant-symbol-of-cutlery-in-a-circle.svg"},
    {title:"LUXURY ROOM",url:"https://cdn-icons-png.flaticon.com/512/5498/5498342.png"},
    {title:"CALL",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVCTVQat2XGAVTqqNAPThr4t0l_9wDlaM_A&usqp=CAU"},
    {title:"CREDIT CARD",url:"http://cdn.onlinewebfonts.com/svg/img_473975.png"},
    {title:"FREE WIFI",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WiFi_Logo.svg/1280px-WiFi_Logo.svg.png"},
    {title:"TRAVEL",url:"https://svgsilh.com/svg/23789.svg"},
]



export default class ServiceRoom extends Component {
    render() {
        return (
            <div className="explore__container">
                <h1>
                    Explore WanderOn
                </h1>
            <div className="explore__container--inner">
             {data.map((item,index) =>{return(
                    <div key={index} className="explore__container--inner-card">
                        <img src={item.url} alt="item"/>
                        <h2>{item.title}</h2>
                    </div>
                )})}
                </div>
               
            </div>
        )
    }
}

// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
// import { Typography } from '@mui/material';
// import WifiIcon from '@mui/icons-material/Wifi';
// import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
// import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import RestaurantIcon from '@mui/icons-material/Restaurant';

// const textcolor = "#1A1810";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function ServiceRoom() {
//   return (
//     <Box  sx={{ width: '90%' , position: "relative" , left: "50%", transform: "translateX(-50%)", }}>
//         <Typography variant="h4" component="div" textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> - Service</Typography>
//         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} color={textcolor} >
//             <Grid  item sm={12} md={6} lg={4}>
//                 <Item>
//                     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                         <Grid item xs={3}> <BedOutlinedIcon style={{fontSize: "70px", color: "#1A1810"}}/> </Grid>
//                         <Grid item xs={9}>
//                             <Typography  color= {textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} style={{fontWeight: 'bold'}} >Luxury Room</Typography>
//                             <Typography variant="body1" gutterBottom textAlign="left" color={textcolor} >
//                                 Even the all-powerful pointing has no control about the blind 
//                                 test it is an almos unorthographic
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                 </Item>
//             </Grid>
//             <Grid item sm={12} md={6} lg={4}>
//                 <Item>
//                     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                         <Grid item xs={3}> <WifiIcon style={{fontSize: "70px" , color: "#1A1810"}} /> </Grid>
//                         <Grid item xs={9}>
//                             <Typography variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} color={textcolor} style={{fontWeight: 'bold'}}>Fast & Free Wifi</Typography>
//                             <Typography variant="body1" gutterBottom textAlign="left" color={textcolor}>
//                                 Even the all-powerful pointing has no control about the blind 
//                                 test it is an almos unorthographic
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                 </Item>
            
//             </Grid>
//             <Grid item sm={12} md={6} lg={4}>
//                 <Item>
//                     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                         <Grid item xs={3}> <PhoneInTalkIcon style={{fontSize: "70px", color: "#1A1810"}}/> </Grid>
//                         <Grid item xs={9}>
//                             <Typography variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} color={textcolor} style={{fontWeight: 'bold'}}>Call us 24/7</Typography>
//                             <Typography variant="body1" gutterBottom textAlign="left" color={textcolor}>
//                                 Even the all-powerful pointing has no control about the blind 
//                                 test it is an almos unorthographic
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                 </Item>
//             </Grid>
//             <Grid item sm={12} md={6} lg={4}>
//             <Item>
//                     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                         <Grid item xs={3}> <DirectionsBusOutlinedIcon style={{fontSize: "70px", color: "#1A1810"}}/> </Grid>
//                         <Grid item xs={9}>
//                             <Typography variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} color={textcolor} style={{fontWeight: 'bold'}}>Travel Accomodation</Typography>
//                             <Typography variant="body1" gutterBottom textAlign="left" color={textcolor}>
//                                 Even the all-powerful pointing has no control about the blind 
//                                 test it is an almos unorthographic
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                 </Item>
//             </Grid>
//             <Grid item sm={12} md={6} lg={4}>
//             <Item>
//                     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                         <Grid item xs={3}> <CreditCardIcon style={{fontSize: "70px", color: "#1A1810"}}/> </Grid>
//                         <Grid item xs={9}>
//                             <Typography variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} color={textcolor} style={{fontWeight: 'bold'}}>Accept Credit Card</Typography>
//                             <Typography variant="body1" gutterBottom textAlign="left" color={textcolor}>
//                                 Even the all-powerful pointing has no control about the blind 
//                                 test it is an almos unorthographic
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                 </Item>
//             </Grid>
//             <Grid item sm={12} md={6} lg={4}>
//             <Item>
//                     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                         <Grid item xs={3}> <RestaurantIcon style={{fontSize: "70px", color: "#1A1810"}}/> </Grid>
//                         <Grid item xs={9}>
//                             <Typography variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} color={textcolor} style={{fontWeight: 'bold'}}>Restaurant</Typography>
//                             <Typography variant="body1" gutterBottom textAlign="left" color={textcolor}>
//                                 Even the all-powerful pointing has no control about the blind 
//                                 test it is an almos unorthographic
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                 </Item>
//             </Grid>
//         </Grid>
//     </Box>
//   );
// }