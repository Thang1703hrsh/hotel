import React from 'react'
import Box from '@material-ui/core/Box'
import { Grid, CardMedia, Typography } from '@material-ui/core';
import ImageItem1 from '../images1/Item1.png';
import ImageItem2 from '../images1/Item2.png';
import ImageItem3 from '../images1/Item3.png';
import ImageItem4 from '../images1/Item4.png';
import ImageItem5 from '../images1/Item5.png';
import ImageItem6 from '../images1/Item6.png';

const details = [
    "Private registration for check-in and check-out",
    "Daily breakfast from 6:00 am to 10:30 am at Club InterContinental Lounge or Market 39",
    "Afternoon tea from 2:00pm to 5:00 pm at Club InterContinental Lounge",
    "Evening drinks from 5:30 pm to 7:30 pm with a great selection of canapés, beverages and our special win of the month at Club InterContinental Lounge",
    "Free use of internet in your room and at Club InterContinental Lounge for a maximum of four devices during the stay",
    "Free use of the iPad whenever you are at Club InterContinental Lounge",
    "25% discount on all laundry services",
    "Two hours usage of the Club InterContinental boardroom for up to 8 people during your stay (subject to availability)"
]

export default class MainContent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            img: ImageItem4
        }
        this.setImage = this.setImage.bind(this)
    }

    setImage(image) {
        this.setState({
            img: image
        })

    }
    
    render(){
        return (
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={12}>
                    <Box sx={{
                        margin: "5% 8% 0% 8%",
                        padding: "40px",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
                    }}>
                        <Grid container spacing={2} >
                            <Grid item xs={3} sm={3} md={2} lg={2} >
                                <Grid container direction="column" spacing={2} justifyContent="space-between">
                                    <Grid item xs={12}>
                                        <CardMedia
                                            component="img"
                                            image={ImageItem1}
                                            onClick={() => this.setImage(ImageItem4)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CardMedia
                                            component="img"
                                            image={ImageItem2}
                                            onClick={() => this.setImage(ImageItem5)}
                                        />
                                    </Grid >
                                    <Grid item xs={12}>
                                        <CardMedia
                                            component="img"
                                            image={ImageItem3}
                                            onClick={() => this.setImage(ImageItem6)}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={9} sm={9} md={6} lg={6}>
                                <CardMedia
                                    component="img"
                                    image={this.state.img}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Typography style={{borderBottom: "1px solid #a77b5a", paddingBottom: "2%"}} variant="h5">Amenities as listed below: </Typography>
                                <Typography style={{textAlign: "left", fontSize: "1rem"}} variant="h6">
                                    {details.map(e =>{
                                        return(
                                            <div>
                                                <ul>
                                                    <li>{e}</li>
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </Typography>
                            </Grid>

                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}
