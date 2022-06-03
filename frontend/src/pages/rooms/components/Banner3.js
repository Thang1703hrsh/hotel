import Box from '@material-ui/core/Box'
import { Card, CardMedia, Typography } from '@material-ui/core';
import ImageBanner from '../images3/Banner3.png'

export default function Banner() {
    return (
            <Card>
                <Box sx={{ position: 'relative' }}>
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
                        <Typography variant="h3">Rooms</Typography>
                        <Typography variant="h1">Deluxe King Room</Typography>
                    </Box>
                </Box>
            </Card>

    );
}