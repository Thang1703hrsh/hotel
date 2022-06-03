import { Grid, Typography, Box, Card, Divider, CardMedia } from "@material-ui/core"
import avatar from "../images/avatar.png"

export default function GuestReview() {
    return (
        <Grid container direction="row" justifyContent="center">
            <Grid item xs={12}>
                <Box sx={{
                    marginY: "5%",
                    bgcolor: "#f8f8f8",
                }}>
                    <Grid container direction="column" spacing={4}>
                        <Grid item xs={12} sm={4} md={4} lg={3}>
                            <Typography variant="h4">Guest Reviews</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} justifyContent="flex-start">
                            <Box sx={{
                                marginX: "10%",
                            }}>
                                <Card>
                                    <Grid container direction="column">
                                        <Grid item xs={12}>
                                            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                                                <Grid item xs={1}>
                                                    <CardMedia component="img"
                                                        alt="Offer"
                                                        image={avatar}
                                                        title="Offer"></CardMedia>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="h5" style={{
                                                        color: "#a77b5a",
                                                    }}>Mr. Thanh</Typography>
                                                </Grid>
                                                <Grid item xs={5}><Typography variant="h5" style={{
                                                    color: "#a77b5a",
                                                }}>20/10/2021</Typography></Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Grid container direction="row" justifyContent="center">
                                                <Grid item xs={10}>
                                                    <Typography variant="body2" align="left">“I have been staying at your hotel for a total of 78 days on and off since late July in your Club rooms.  I want to commend you and all of your staff on making my stays so good.  Your team have looked after me very well indeed.  I spend a great deal of time staying in hotels right around the world as my job means I travel very frequently.  I have to say that my experience at the InterContinental Hotel is always fantastic.”</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}