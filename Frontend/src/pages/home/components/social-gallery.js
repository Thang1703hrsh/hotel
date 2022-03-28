import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';


const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1
    },
    imgList:{
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        height: '120vh',
        minHeight: '100px'
    },
    imgItem:{
        width: '70%',
        paddingBottom: '20px',
        alignItems: 'center'
    }


}));

const textcolor = "#1A1810";


export default function SocialGallery() {
    const classes = useStyles(); 
    return (
    <Box  sx={{ width: '90%' , position: "relative" , left: "50%", transform: "translateX(-50%)", }}>
        <Typography variant="h4" component="div" textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> - Social gallery</Typography>
        <ImageList sx={{ width: '70%' }} cols={3} rowHeight={250} className={classes.imgList} >
        {itemData.map((item) => (
            <ImageListItem key={item.img} className={classes.imgItem}>
            <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                width='1000px'
            />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
    
  );
}

const itemData = [
  {
    img: 'https://cdn.getlocalmeasure.com/photos/IF-18223514065047288_640x640.jpg',
    title: 'anh1',
  },
  {
    img: 'https://cdn.getlocalmeasure.com/photos/IF-17858699266918007_640x640.jpg',
    title: 'Burger',
  },
  {
    img: 'https://cdn.getlocalmeasure.com/photos/IF-17980041223343257_640x640.jpg',
    title: 'Camera',
  },
  {
    img: 'https://cdn.getlocalmeasure.com/photos/IF-17880561434202743_640x640.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://cdn.getlocalmeasure.com/photos/IF-18082997371171065_640x640.jpg',
    title: 'Hats',
  },
  {
    img: 'https://images.pexels.com/photos/257834/pexels-photo-257834.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Honey',
  },
  {
    img: 'https://cdn.getlocalmeasure.com/photos/IF-17872231561389239_640x640.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://images.pexels.com/photos/162766/table-dessert-coffee-on-the-table-162766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Fern',
  },
  {
    img: 'https://cdn.getlocalmeasure.com/photos/IG-1761442506590861825_209738981_320x320.jpg',
    title: 'Mushrooms',
  },
 
];
