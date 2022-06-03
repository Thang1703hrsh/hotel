import React from 'react'
import Box from '@material-ui/core/Box'
import { Grid, CardMedia, Typography } from '@material-ui/core';
import ImageItem1 from '../images3/Item1.png';
import ImageItem2 from '../images3/Item2.png';
import ImageItem3 from '../images3/Item3.png';
import ImageItem4 from '../images3/Item4.png';
import ImageItem5 from '../images3/Item5.png';
import ImageItem6 from '../images3/Item6.png';
import ImageItem7 from '../images3/Item7.png';
import ImageItem8 from '../images3/Item8.png';

const details = [
    "42-inch satellite LCD television, DVD player, iPod/iPhone docking station, home theater system",
    "Bathrobes, in-room bar, in-room safe, tea/coffee making facilities, hairdryer, iron and ironing board, down feather duvet and pillows",
    "In-room telephone line, fax/printer access at Business Centre.",
    "Laundry, mending and shoeshine services",
    "24 hours in-room dining service with an extensive room service menu"
]

export default class MainContent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            img: ImageItem5
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
                                            onClick={() => this.setImage(ImageItem5)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CardMedia
                                            component="img"
                                            image={ImageItem2}
                                            onClick={() => this.setImage(ImageItem6)}
                                        />
                                    </Grid >
                                    <Grid item xs={12}>
                                        <CardMedia
                                            component="img"
                                            image={ImageItem3}
                                            onClick={() => this.setImage(ImageItem7)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CardMedia
                                            component="img"
                                            image={ImageItem4}
                                            onClick={() => this.setImage(ImageItem8)}
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
