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
                            <Typography style={{fontWeight: "400", color: "#a77b5a"}} variant="h3">DELUXE KING ROOM</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={{paddingTop: "10px"}} variant="h5">Ideal for both business and leisure travellers, timeless luxury and functional amenities unite, all with a stunning view of the city. Take advantage of the 24-hour in-room dining service, laundry service and personal business centre, which includes an in-room telephone line and exclusive access to the fax and printer in the Business Centre at InterContinental Saigon Hotel.</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
