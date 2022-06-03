import { CardMedia, Typography } from "@material-ui/core";
import { Grid, Box, Card } from "@material-ui/core";
import Button from '@mui/material/Button';
import Offer1 from "../images/offer1.png"
import Offer2 from "../images/offer2.png"
import Offer3 from "../images/offer3.png"


const Offers = {
    o1: {
        title: "IHG X HERTZ",
        caption: "Make your next getaway more rewarding.",
        image: Offer1
    },
    o2: {
        title: "STAY 1 NIGHT. GET 5K.",
        caption: "Just for you!",
        image: Offer2
    },
    o3: {
        title: "2021 FAST TRACK TO IHG® REWARDS PLATINUM ELITE",
        caption: "Members earn Platinum Elite status in just 5 nights.",
        image: Offer3
    }
}

function OfferCard({ Offer }) {
    return (
        <Card>
            <Grid container direction="column" spacing={2} justifyContent="space-between">
                <Grid item xs={12}>
                    <Typography variant="h5">{Offer.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2">{Offer.caption}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <CardMedia
                        component="img"
                        alt="Offer"
                        image={Offer.image}
                        title="Offer"
                    />
                </Grid>
            </Grid>
        </Card>
    )
}


export default function RoomOffer() {
    return (
        <Grid container direction="row" justifyContent="center">
            <Grid item xs={12}>
                <Box sx={{
                    marginY: "10%",
                    bgcolor: "#f8f8f8",
                }}>
                    <Grid container direction="column" spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant="h4">ROOM OFFER</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2} direction="row" justifyContent="space-around" alignItems="flex-end">
                                <Grid item xs={10} sm={5} lg={3}>
                                    <OfferCard Offer={Offers.o1} />
                                </Grid>
                                <Grid item xs={10} sm={5} lg={3}>
                                    <OfferCard Offer={Offers.o2} />
                                </Grid>
                                <Grid item xs={10} sm={5} lg={3}>
                                    <OfferCard Offer={Offers.o3} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" style={{
                                color : "#a77b5a",
                                borderColor: "#a77b5a",
                            }}>VIEW ALL</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
