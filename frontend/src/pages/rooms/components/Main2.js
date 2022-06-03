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
                            <Typography style={{fontWeight: "400", color: "#a77b5a"}} variant="h3">SUPERIOR ROOMS</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={{paddingTop: "10px"}} variant="h5">Looking out across magnificent panoramic views of Saigon, this well-appointed 38 sqm room offers the perfect balance of privacy and luxury. Combining classic design elements with modern technological amenities, our Superior rooms at InterContinental Saigon Hotel include an expansive list of services and comforts for a premium travel experience.</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
