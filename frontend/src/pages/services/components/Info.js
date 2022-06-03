import React from 'react'
import { Grid, Box, Typography, CardMedia } from "@material-ui/core";
import Bed from '../images/Bed.png'
import Wifi from '../images/Wifi.png'
import Restaurant from '../images/Restaurant.png'
import Travel from '../images/Travel.png'
import Card from '../images/Card.png'
import Phone from '../images/Phone.png'

const Contents = [
    {
        name: "Luxury Rooms",
        image: Bed,
        content: "Designed with frequent travelers in mind, the standard beds found in most Fairmont hotel rooms provide therapeutic core support, reinforced gel memory foam, cooling technology and a plush pillowtop."
    },
    {
        name: "Fast & Free Wifi",
        image: Wifi,
        content: "Whether you needed for entertainment, conferencing, business, social media, fitness or gaming, we ensure our’s WiFi network always satisfies your needs."
    },
    {
        name: "Restaurant",
        image: Restaurant,
        content: "Providing food and drink services to guests in hotels and restaurants, showing attentiveness, and understanding of their needs and expectations. For a memorable meal the quality of the service is something that guests often remember as much as the food and drink served."
    },
    {
        name: "Travel Accomodation",
        image: Travel,
        content: "The biggest expenses you’ll have when traveling are accommodation, food, and transportation. Our’s hotel offer the comfort and convenience that some travelers seek. So, if you decide to stay in our’s hotel, we will make you travel more fanstatic."
    },
    {
        name: "Accept Credit Card",
        image: Card,
        content: "Hotel also offer payment by credit card. which can make your payment conveniently. And in case you and your family want to stay longer, extend the trip, you can pay for this price easier than traditional payment."
    },
    {
        name: "Call Us 24/7",
        image: Phone,
        content: "You can contact with us anytime by hotline: 0123456789 for your needs."
    }
]

function ContentCard({ Opt }) {
    return (
        <Grid item xs={8}>
            <Grid container direction="column" spacing={2} justifyContent="space-between" style={{padding:"30px 0px 30px 0px", borderTop:"1px solid #a77b5a"}}>
                <Grid container direction="row" >
                    <Grid container direction="row" xs={5} lg={5} style={{textAlign:"right",padding:"1%"}}>
                        <Grid item lg={11} xs={10}></Grid>
                        <Grid item lg={1} xs={2} style={{paddingTop:"5px"}}><CardMedia component="img" image={Opt.image} /> </Grid>
                    </Grid>
                    <Grid item xs={7} lg={5} style={{textAlign:"left", paddingTop:"15px"}}>
                        <Typography variant="h4">{Opt.name}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2">{Opt.content}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default function Info() {
    return (
        <Grid container direction="row" justifyContent="center">
            <Grid item xs={12}>
                <Box sx={{bgcolor: "#f8f8f8"}}>
                    <Grid container direction="column" spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant="h4">HOTEL SERVICES</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2} direction="row" justifyContent="space-around" alignItems="flex-start">
                                {
                                    Contents.map(e => {
                                        return (
                                            <ContentCard Opt={e} />
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
