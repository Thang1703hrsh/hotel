import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Typography, Container, Grid, CardMedia, TextField, FormControl, InputLabel, Select, MenuItem, Button} from "@mui/material";
import moment from 'moment';
import Cookies from 'js-cookie';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme= createTheme({
    palette: {
        buttonColor: {
            main: '#A77B5A',
            contrastText: '#ffffff'
        }
    }
})

export default function Payment(props) {
    const storage = localStorage.getItem('booking');
    const [booking, setBooking] = useState(JSON.parse(storage));
    const [roomNumber, setRoomNumber] = useState('');
    const [room, setRoom] = useState([]);
    const [account, setAccount] = useState([]);
    const handleChange = (event) => {
        setRoomNumber(event.target.value);
    }
    useEffect(() => {   
        axios.get("/api/room/name/" + booking.name)
        .then(res => {
            setRoom(res.data);
        })
        .catch(err => {
            console.log(err);
            alert("Cannot load room information");
        })
    },[]);

    useEffect(() => {
        axios.get("/api/account/" + Cookies.get('id'))
        .then(res => {
            setAccount(res.data);
        })
        .catch(err => {
            alert('Cannot load information account');
        })
    }, []);
    const handleSubmit = () => {
        axios.post(`/api/booking/`, {
            accountId: account.id,  
            roomNumber: parseInt(roomNumber, 10),
            checkIn: booking.checkIn,
            checkOut: booking.checkOut,
        })
        .then(response => {
            console.log(response);
            alert("Booking Compeleted!");
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
            alert("error");
        })
    };

    return (
        <Container sx={{marginTop: 2}} style={{marginTop: '70px'}}>
            <Typography variant="h5">Payment</Typography>
            <Grid container sx={{backgroundColor: "#FCEBD7",marginTop: 5}}>
                <Grid item md={2}>
                    <CardMedia 
                        component="img"
                        image={booking.image}
                        alt="image"
                        height={170}
                    />
                </Grid>

                <Grid item md={8} sx={{textAlign:'left', marginLeft: 2}}>
                    <Typography variant="h6">{booking.name}</Typography>
                    <Typography variant="h6">{moment(booking.checkIn).format('DD-MM-YYYY')} to {moment(booking.checkOut).format('DD-MM-YYYY')} | {moment(booking.checkOut).diff(moment(booking.checkIn), 'days')} nights</Typography>
                    <Typography variant="h5" justifyItems="end">Total Price For Stay:  {booking.price * moment(booking.checkOut).diff(moment(booking.checkIn), 'days')}$</Typography>
                    <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
                        <InputLabel id="demo-simple-select-label">Choose Room Number</InputLabel>
                        <Select
                        id="chooseRoomNumber"
                        value={roomNumber}
                        label="Choose Room Number"
                        onChange={handleChange}
                        >
                            {/* <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem> */}
                        {room && room.map((val, key) => {
                            return(
                                <MenuItem value={val.number}>{val.number}</MenuItem>
                            )
                        })}

                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container sx={{marginTop: 5}}>
                <Grid item md={6} sx={{textAlign:'left'}}>
                    <Typography variant="h5">Guest Information</Typography>
                    <Grid item sx={{backgroundColor: "#FCEBD7",marginTop: 2}}>
                        <Typography variant="caption" marginLeft={2} marginTop={2}>First Name</Typography>
                        <Typography variant="h6" marginLeft={2}>{account.firstName}</Typography>
                        <Typography variant="caption" marginLeft={2} marginTop={5}>Last Name</Typography>
                        <Typography variant="h6" marginLeft={2}>{account.lastName}</Typography>
                        <Typography variant="caption" marginLeft={2} marginTop={5}>Email</Typography>
                        <Typography variant="h6" marginLeft={2}>{account.email}</Typography>
                        <Typography variant="caption" marginLeft={2} marginTop={2}>Date of Birth</Typography>
                        <Typography variant="h6" marginLeft={2}>{moment(account.dob).format('DD-MM-YYYY')}</Typography>
                        <Typography variant="caption" marginLeft={2} marginTop={2}>Phone</Typography>
                        <Typography variant="h6" marginLeft={2}>{account.phone}</Typography>
                        <Typography variant="caption" marginLeft={2} marginTop={2}>Country/Region</Typography>
                        <Typography variant="h6" marginLeft={2}>{account.country}</Typography>
                    </Grid>
                </Grid>
                <Grid item md={2}></Grid>
                <Grid item md={4} sx={{textAlign:"left"}}>
                    <Typography variant="h5">Terms and Condition</Typography>
                    <Grid item  sx={{backgroundColor: "#FCEBD7",marginTop: 2, marginBottom: 2}}>
                        <Typography variant="inherit">I certify that I have read and accept the Terms of Use and Privacy Statement and I have read
                        and understand the Rate Description and Rate Rules for my reservation.<br /> <br /> I am at least 18 years of age and at least
                        one guest in my party will meet the minimum check-in age requirement for the hotel upon arrival.<br /> <br />
                        Minimum Check-in Age: 18
                        </Typography>
                    </Grid>
                    <ThemeProvider theme={theme}><Button variant="contained" color="buttonColor" onClick={() => handleSubmit()}>Submit</Button></ThemeProvider>
                </Grid>
            </Grid>
        </Container>
    );
}