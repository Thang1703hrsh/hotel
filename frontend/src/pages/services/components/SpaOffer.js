import { CardMedia, Typography } from "@material-ui/core";
import { Grid, Box, Card } from "@material-ui/core";
import Button from '@mui/material/Button';
import Offer1 from "../images/Offer1.png"
import Offer2 from "../images/Offer2.png"
import Offer3 from "../images/Offer3.png"

const Offers = {
    o1: {
        title: "DETOX RETREAT",
        caption: "Allow a garden of tropical fruit and herbs stimulate all the detoxification the body requires.",
        image: Offer1
    },
    o2: {
        title: "LONGEVITY RETREAT",
        caption: "Breathe life into the body and soul with a revitalizing combination of scrub, facials and wraps made of the most nurturing ingredients.",
        image: Offer2
    },
    o3: {
        title: "REJUVENATION BODY WRAP",
        caption: "Indulge the pure relaxation from our oasis of refreshment at Spa InterContinental, with the dedication to ensure our guests' physical and mental health, our Rejuvenation body wrap offers the ultimate experience in body treatments.",
        image: Offer3
    }
}

function OfferCard({ Offer }) {
    return (
        <Card>
            <Grid container direction="column" spacing={2} justifyContent="space-between">
                <Grid item xs={12} style={{padding: "5%"}}>
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

export default function SpaOffer() {
    return (
        <Grid container direction="row" justifyContent="center">
            <Grid item xs={12}>
                <Box sx={{
                    marginY: "10%",
                    bgcolor: "#f8f8f8",
                }}>
                    <Grid container direction="column" spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant="h4">SPA OFFER</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2} direction="row" justifyContent="space-around" alignItems="flex-start">
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
