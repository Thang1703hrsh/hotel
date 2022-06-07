import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Typography, Container, Grid, CardMedia, TextField, FormControl, InputLabel, Select, MenuItem, Button} from "@mui/material";
import moment from 'moment';
import Cookies from 'js-cookie';
import {createTheme, ThemeProvider} from '@mui/material/styles';
const instance = axios.create({baseURL: "http://localhost:5000"})
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
    const [payment, setPayment] = useState([]);
    const [room, setRoom] = useState([]);
    const [totalValue, setTotalValue] = useState();
    const [account, setAccount] = useState([]);
    const handleChange = (event) => {
        setRoomNumber(event.target.value);
    }
    useEffect(() => {   
        instance.get("/api/payment", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            if(res.success) {
                setPayment(res.bills)
                setTotalValue(res.totalValue)
            }
            else {
                alert("Unsuccess")
                window.localtion.reload()
            }
        }).catch(err => {
            alert("Unexpected error Occur!")
            window.location.href = "/"
        })
    },[]);

    










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
        <>

        </>
    );
    
}
