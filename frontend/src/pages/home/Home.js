import SimpleSlider from './components/slick';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ServiceRoom from './components/service-grid';
import FeatureRoom from './components/feature-room';
import SocialGallery from './components/social-gallery';


export default function Home(){
    return (
        <div className="container">
          {/* <Header/> */}
          <div className='slider' style={{marginTop: '64px'}} >
            <SimpleSlider />  
          </div>
          <br /><br /><br /><br />
      
          <div className="Description">
            <Box sx={{ width: '100%', maxWidth: "100%", alignItems: "center", backgroundColor: "transparent", }}>
              <Typography variant="h3" gutterBottom component="div" textAlign="center" sx={{textDecoration: 'underline'}} display="inline">
                WELCOME TO HCMUS HOTEL
              </Typography>
              <br/><br/>
              <Typography variant="body1" gutterBottom textAlign="center">
                HCMUS Hotel is the first international hotel in Ho Chi Minh. 
                <br/>As the luxury landmark in the heart of Ho Chi Minh City's buzzing Central Business District. 
                <br/>The centrally-located hotel is the perfect place for business or leisure stay. 
                <br/>Luxurious accommodations are elegantly furnished and equipped with a wide range of high-end amenities. 
                <br/>Hanoi Hotel is renowned for its complete arena of evening entertainments and finest Chinese cuisine in the city. 
                <br/>Your stay with us is guaranteed to be a pleasant and the most memorable one.
                <br/>
              </Typography>
            </Box>
          </div>
    
          <div className="Service">
              <ServiceRoom/>
          </div>
    
          < div className="feature-room">
            <FeatureRoom/>
          </div>
          <div className="Gallery">
            <SocialGallery/>
          </div>
          <div className="footer">
            {/* <Footer/> */}
          </div>
        </div>
      );
}