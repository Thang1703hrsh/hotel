import Box from '@material-ui/core/Box'
import ImageBanner from '../images/Banner.png'
import { Card, CardMedia, Typography } from '@material-ui/core';

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
                        <Typography variant="h3">SERVICE</Typography>
                        <Typography variant="h1">Facilities & Services</Typography>
                    </Box>
                </Box>
            </Card>

    );
}