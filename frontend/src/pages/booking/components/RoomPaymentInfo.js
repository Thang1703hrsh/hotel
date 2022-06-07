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

export default function RoomPaymentInfo(props) {
    const [payment,setPayment] = useState([])
    const [totalValue, setTotalValue] = useState()

    useEffect(() => {   
        instance.get("/api/booking/unpaid", {
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
    function handleClick(val) {
        
    }
    function handleAllClick() {

    }
    return (
        <div>
            {payment.map((val, key) => {
                return (
                    <Grid container sx={{borderBottom: 0, marginTop: 3}}>
                        <Grid item md={1.5}>
                            <CardMedia 
                                component="img"
                                image={val.image}
                                alt="image"
                            />
                        </Grid>
                        <Grid item md={8} sx={{textAlign: 'left', marginTop: 1}}>
                            <Typography variant="h6" sx={{   mmmmarginLeft: 1}}>{val.name}</Typography>
                            <Typography variant="inherit" sx={{marginLeft: 1}}>{val.description}</Typography>
                        </Grid>
                        <Grid item md={2} direction='column' alignSelf='center'>
                            <Typography variant="inherit">From {val.price}$</Typography>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="buttonColor" id={val.id} onClick={() => handleClick(val)}>Proceed now!</Button>
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                )
            })}
        
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="buttonColor" id="proceed-all" onClick={() => handleAllClick()}>
                    Proceed all!
                </Button>
            </ThemeProvider>
        </div>
    )
}