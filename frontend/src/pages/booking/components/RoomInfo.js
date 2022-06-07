import {CardMedia, Grid, Typography, Button} from '@mui/material'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import data from './mock_data.json';
import Payment from '../Payment';
import { Link } from 'react-router-dom';
import moment from 'moment';

const instance = axios.create({baseURL: 'http://localhost:5000'})
const theme= createTheme({
    palette: {
        buttonColor: {
            main: '#A77B5A',
            contrastText: '#ffffff'
        }
    }
})

export default function RoomInfo(props) {
    const searchItem = props.searchItem;
    var checkIn = props.checkIn;
    var checkOut = props.checkOut;

    //handle format checkIn checkOut
    checkIn = checkIn === undefined ? '' : moment(moment(checkIn, 'DD-MM-YYYY').toDate()).format('YYYY-MM-DD');
    checkOut = checkOut === undefined ? '' : moment(moment(checkOut, 'DD-MM-YYYY').toDate()).format('YYYY-MM-DD');
    console.log(checkIn);
    console.log(checkOut);

    let booking = {
        checkIn: checkIn,
        checkOut: checkOut,
        name: '',
        image: '',
        price: '',
        authenticationId: '',
        roomId: '',
    }
    const [room, setRoom] = useState([]);
    useEffect(() => {
        
        instance.get("/api/rooms/getavailable",
        )
        .then(res => {
            console.log(res);
            console.log("This fucking code is broken");
            setRoom(res.data);
        })
        .catch(error => alert("Cannot load room"))
    }, [])
    // var request = new XMLHttpRequest();
    // request.open("GET", "./mock_data.json", false);
    // request.send(null)
    // var my_JSON_object = JSON.parse(request.responseText);
    // setRoom(my_JSON_object)
    function handleClick(val) {
        console.log(booking.checkIn);
        if(!moment(booking.checkIn).isValid()) {
            alert('Please input check-in');
            return;
        }
        else if(!moment(booking.checkOut).isValid()) {
            alert('Please input check-out');
            return;
        }
        else if(moment(booking.checkOut).diff(moment(booking.checkIn), 'days') <= 0) {
            alert("Please input check-out date after check-in date");
            return;
        }
        booking.roomId = val.id;
        booking.startDate = moment(booking.checkIn);
        booking.endDate = moment(booking.checkOut);
        var userToken = localStorage.getItem("token");
        console.log(booking);
        if(userToken === undefined) {
            alert("Please log in!")
            window.location.href = "/login";
        }
        
        //booking.token = localStorage.getItem("token");
        instance.post("/api/booking", {headers: {
            Authorization: "Bearer " + userToken
        }},
            booking
            /*
            {
                name: string,
                image: string
                price: numeric,
                roomId: string
                startDate: string,
                endDate: string,
            }
            */
        ).then(res => {
            // If success

        }).catch(err => {
            // If error

        })
        localStorage.setItem('booking', JSON.stringify(booking));
        
        //window.location.href= "/payment";
    }
    return (
        <div>
            {room.filter((val) => {
                if(searchItem === "") {
                    return val
                }
                else if(val.name.toLowerCase().includes(searchItem.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <Grid container sx={{borderBottom: 0, marginTop: 3}}>
                        <Grid item md={1.5}>
                            <CardMedia 
                                component="img"
                                image={val.image}
                                alt="image"
                                sx={{width: 142, height: 115}}
                            />
                        </Grid>
                        <Grid item md={8} sx={{textAlign: 'left', marginTop: 1}}>
                            <Typography variant="h6" sx={{marginLeft: 1}}>{val.name}</Typography>
                            <Typography variant="inherit" sx={{marginLeft: 1}}>{val.description}</Typography>
                        </Grid>
                        <Grid item md={2} direction='column' alignSelf='center'>
                            <Typography variant="inherit">From {val.price}$</Typography>
                            <ThemeProvider theme={theme}><Button variant="contained" color="buttonColor" id={val.id} onClick={() => handleClick(val)}>Select room</Button></ThemeProvider>
                        </Grid>
                    </Grid>
                )
            })}
        </div>
    )
}