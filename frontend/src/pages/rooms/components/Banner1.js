import Box from '@material-ui/core/Box'
import ImageBanner1 from '../images1/BannerPage1.png'
import { Card, CardMedia, Typography } from '@material-ui/core';


export default function Banner() {
    return (
            <Card>
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        image={ImageBanner1}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: "30%",
                            left: "5%",
                            width: '100%',
                            color: 'white',
                            padding: '10px',
                            textAlign: 'left'
                        }}
                    >
                        <Typography variant="h3">ROOMS</Typography>
                        <Typography variant="h1">Club Intercontinental Rooms</Typography>
                    </Box>
                </Box>
            </Card>

    );
}