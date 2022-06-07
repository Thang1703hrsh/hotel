import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Typography, Container, Grid, CardMedia, TextField, FormControl, InputLabel, Select, MenuItem, Button} from "@mui/material";
import moment from 'moment';
import Cookies from 'js-cookie';
import RoomPaymentInfo from "./components/RoomPaymentInfo";
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

    return (
        <>
        <Container sx={{marginTop: 2}} style={{marginTop: '64px'}}>
            

            {/* Room Info */}
            <RoomPaymentInfo />
        </Container>
        </>
    );
    
}
