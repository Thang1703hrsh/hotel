import React from 'react'
import { Typography } from "@material-ui/core";
import { Grid, Box } from "@material-ui/core";
import BedIcon from '@mui/icons-material/Bed';


export default function Main() {
    return (
        <Grid container direction="row" justifyContent="center">
            <Grid item xs={12}>
                <Box sx={{
                    margin: "5% 8% 0% 8%",
                    marginTop: "5%",
                    padding: "40px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
                }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <BedIcon style={{fontSize: "2rem", color: "#a77b5a"}} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={{fontWeight: "500", color: "#a77b5a"}} variant="h3">CLUB INTERCONTINENTAL ROOMS</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={{paddingTop: "10px"}} variant="h5">Club InterContinental rooms at InterContinental Saigon Hotel offer exclusive space to relax, along with stunning views of Saigon cosmopolitan. You'll also enjoy benefits like complimentary pressing service, complimentary Wi-Fi and local calls. These premium rooms include daily breakfasts at Club InterContinental Lounge or Market 39 restaurant, afternoon tea as well as signature cocktails at our exclusive Club InterContinental Lounge.</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
