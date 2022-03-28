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
          
          <div className="Description">
            <Box sx={{ width: '100%', maxWidth: "100%", alignItems: "center", backgroundColor: "#FCFAF0", }}>
              <Typography variant="h3" gutterBottom component="div" textAlign="center" >
                BK LUXURY HOTEL
              </Typography>
              <Typography variant="body1" gutterBottom textAlign="center">
                As the luxury landmark in the heart of Ho Chi Minh City's buzzing Central Business District, InterContinental Saigon Hotel & Residences presents the most iconic historical destinations like Notre Dame Cathedral, Saigon Opera House with just a few steps away. Here we celebrate Saigon's multicultural roots, giving leisure and business travellers a look at the French colonial buildings set alongside sleek, modern skyscrapers, all interspersed with vibrant Vietnamese culture.
                <br/>
                Recognised as Vietnam's Leading Hotel in 2020, InterContinental Saigon Hotel & Residences has been proven to be the stylish choice for international business leaders and discerning travellers who value classic elegance with a contemporary spirit.
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