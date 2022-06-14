import {CardMedia, Grid, Typography, Button} from '@mui/material'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';


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
            if(res.data.success) {
                setPayment(res.data.bills)
                setTotalValue(res.data.totalValue)
            }
            else {
                alert("Unsuccess")
                //window.localtion.reload()
            }
        }).catch(err => {
            alert("Unexpected error Occur!")
            //window.location.href = "/"
        })
    },[]);


    //setTotalValue(totalValue === undefined ? "" : totalValue)
    function handleClick(val) {
        instance.post("/api/booking/payment", {
            id: val.id
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            alert("Thanks for using service, the email was sent to confirm!")
            window.location.reload()
        }).catch(err => {
            alert("Unexpected error Occur!")
        })
        
    }
    function handleAllClick() {
        instance.post("/api/booking/payment/all", {
            id: '*'
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            alert("Thanks for using service, the email was sent to confirm!")
            window.location.reload()
        }).catch(err => {
            alert("Unexpected error Occur!")
        })
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
                Proceed all<em>{totalValue === undefined ? "" : "   " + totalValue}</em>$
            </Button>
        </ThemeProvider>
    </div>
    )
}