import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import '../asset/css/service-grid.scss';


const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1
    },
    imgList:{
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        height: '80vh',
        minHeight: '60px'
    },
    imgItem:{
        width: '70%',
        paddingBottom: '20px',
        alignItems: 'center'
    }
}));

export default function SocialGallery() {
    const classes = useStyles(); 
    return (
      <Box  sx={{ width: '90%' , position: "relative" , left: "50%", transform: "translateX(-50%)", }}>
          <div className="explore__container">
            <h1>
              Social Gallery
            </h1>
          </div>
          <ImageList sx={{ width: '100%' }} cols={4} rowHeight={300} className={classes.imgList} >
          {itemData.map((item) => (
              <ImageListItem key={item.img} className={classes.imgItem}>
              <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  width='800px'
              />
              <h2>{item.title}</h2>
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
    
  );
}

const itemData = [
  {img: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/92/2019/11/20090318/0919-AJS-NOI-Hotel-des-Arts-SGN-0859-Web-1-1500x690.jpg',title: 'Rooftop',},
  {img: 'https://media.foody.vn/res/g17/166215/prof/s/foody-mobile-t1-jpg-327-635772123456947698.jpg',title: 'Des Arts',},
  {img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/03/83/01/grand-restaurant-asgardstrand.jpg',title: 'Restaurant',},
  {img: 'https://shop.arborday.org/images/_hero/hero-coffee-hotel.jpg',title: 'Coffee',},
  {img: 'https://www.hotelonach.com/wp-content/uploads/2018/11/web-4677.jpg',title: 'Massages',},
  {img: 'https://hospitalityinsights.ehl.edu/hubfs/darwin%20hotel.jpeg',title: 'Hotel',},
  {img: 'https://www.meininger-hotels.com/fileadmin/images/services-d634b08.jpg',title: 'Food',},
  {img: 'https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_webp/https://www.fcvalet.com/wp-content/uploads/2019/02/House-Car-2.jpg',title: 'Car',},
];
