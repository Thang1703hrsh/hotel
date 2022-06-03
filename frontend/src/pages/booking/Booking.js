import {Container} from '@mui/material';
import React from 'react';
import RoomInfo from './components/RoomInfo';
import { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {Grid, TextField} from '@mui/material';

export default function Booking(){
    // const [value, setValue] = React.useState('1');
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    const [valueCheckIn, setValueCheckIn] = React.useState('');
    const [valueCheckOut, setValueCheckOut] = React.useState('');
    const [searchItem, setSearchItem] = useState('');

    return (
        <Container sx={{marginTop: 2}} style={{marginTop: '64px'}}>
            <Grid sx={{backgroundColor: '#FCEBD7'}}>
            <Grid container >
                <Grid item md={3} sx={{margin: 2}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Check-in"
                        value={valueCheckIn}
                        onChange={(newValue) => {
                            setValueCheckIn(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} sx={{backgroundColor: "#FCFAF0"}}/>}

                    />
                    </LocalizationProvider>
                </Grid>
                <Grid item md={3} sx={{margin: 2}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Check-out"   
                        value={valueCheckOut}
                        onChange={(newValue) => {
                            setValueCheckOut(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} sx={{backgroundColor: "#FCFAF0"}}/>}
                    />
                    </LocalizationProvider>
                </Grid>
                {/* Submit name */}
                <Grid item md={3} sx={{margin: 2}}>
                    <TextField
                    id="standard-search"
                    label="Search room..."
                    type="search"
                    variant="outlined"
                    onChange={event =>{setSearchItem(event.target.value)}}
                    sx={{backgroundColor: "#FCFAF0"}}
                    />
                </Grid>
            </Grid>
            </Grid>

            {/* Room Info */}
            <RoomInfo searchItem={searchItem} checkIn={valueCheckIn} checkOut={valueCheckOut}/>
        </Container>
    );
}