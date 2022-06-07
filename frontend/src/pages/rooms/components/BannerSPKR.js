import Box from '@material-ui/core/Box'
import ImageBanner from '../imagesSPKR/plus-king.jpg'
import { Card, CardMedia, Typography } from '@material-ui/core';


export default function Banner() {
    return (
            <Card>
                <Box sx={{ position: 'relative' , height: 900}}>
                    <CardMedia
                        component="img"
                        image={ImageBanner}
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
                        <Typography variant="h1">Superior Plus King Room</Typography>
                    </Box>
                </Box>
            </Card>

    );
}