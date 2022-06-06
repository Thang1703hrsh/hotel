import { Grid, } from '@material-ui/core';
import Controls from "./components/controls/Controls";
import { useForm, Form } from './components/useForm';
import axios from 'axios';
import moment from 'moment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from '@material-ui/core';



const initialFValues = {
    firstName: '',
    lastName: '',
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
    country: '',
    phoneNumber: '',
    dob: null,
    showPassword: false
}

const theme = createTheme();


export default function SignUp() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = fieldValues.email ? ((/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(String(fieldValues.email).toLowerCase()) ? "" : "Email is invalid") : "This field is required."
        if ('emailConfirm' in fieldValues)
            temp.emailConfirm = fieldValues.emailConfirm ? (fieldValues.emailConfirm === fieldValues.email ? "" : "Emails don't match") : "This field is required."
        if ('password' in fieldValues)
            temp.password = fieldValues.password ? ((/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/).test(fieldValues.password) ? "" : "Please select a password between 8 to 16 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character") : "This field is required."
        if ('passwordConfirm' in fieldValues)
            temp.passwordConfirm = fieldValues.passwordConfirm ? (fieldValues.passwordConfirm === fieldValues.password ? "" : "Passwords don't match") : "This field is required."
        if ('country' in fieldValues)
            temp.country = fieldValues.country ? "" : "This field is required."
        if ('phoneNumber' in fieldValues)
            temp.mobile = temp.phoneNumber = fieldValues.phoneNumber ? ((/^[0-9]\w{0,10}$/).test(fieldValues.phoneNumber) ? "" : "Phone number is not valid.") : "This field is required."
        if ('dob' in fieldValues)
            temp.dob = fieldValues.dob !== null ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);
    
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            axios.post('/api/account', {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                dob: moment(values.dob).format('YYYY-MM-DD'),
                phone: values.phoneNumber,
                country: values.country
            })
            .then((response) => {
                  alert(`Created user with email ${values.email} successfully!`)
            })
            .catch((error) => {
                console.log(error);
                alert('Email already exists!')
            });
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <CssBaseline />
                <Box
                    sx={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Grid item xs={3}> <LoginIcon style={{fontSize: "70px", color:"#5A64A7"}} /> </Grid>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Grid container spacing={10} justify="center" style={{marginTop: '-30px'}}>
                        <Grid item xs={8} sm={8}>
                            <Form onSubmit={handleSubmit} >
                                <Grid container>
                                    <Grid item>
                                        <Controls.Input
                                            label="First Name *"
                                            name="firstName"
                                            value={values.firstName}
                                            type="input"
                                            onChange={handleInputChange}
                                            error={errors.firstName}
                                        />
                                        <Controls.Input
                                            label="Last Name *"
                                            name="lastName"
                                            value={values.lastName}
                                            type="input"
                                            onChange={handleInputChange}
                                            error={errors.lastName}
                                        />
                                        <Controls.Input
                                            label="Email address *"
                                            name="email"
                                            value={values.email}
                                            type="email"
                                            onChange={handleInputChange}
                                            error={errors.email}
                                        />
                                        <Controls.Input
                                            label="Verify email address *"
                                            name="emailConfirm"
                                            value={values.emailConfirm}
                                            type="email"
                                            onChange={handleInputChange}
                                            error={errors.emailConfirm}
                                        />
                                        <Controls.Input
                                            label="Password *"
                                            name="password"
                                            value={values.password}
                                            type="password"
                                            onChange={handleInputChange}
                                            error={errors.password}
                                        />
                                        <Controls.Input
                                            label="Verify password *"
                                            name="passwordConfirm"
                                            value={values.passwordConfirm}
                                            type="password"
                                            onChange={handleInputChange}
                                            error={errors.passwordConfirm}
                                        />
                                        <Controls.Input
                                            label="Country/Region *"
                                            name="country"
                                            value={values.country}
                                            type="input"
                                            onChange={handleInputChange}
                                            error={errors.country}
                                        />
                                        
                                        <Controls.Input
                                            label="Phone Number *"
                                            name="phoneNumber"
                                            value={values.phoneNumber}
                                            type="number"
                                            onChange={handleInputChange}
                                            error={errors.phoneNumber}
                                        />
                                        <Controls.DatePicker
                                            label="Date of birth *"
                                            name="dob"
                                            value={values.dob}
                                            onChange={handleInputChange}
                                            error={errors.dob}
                                        />
                                        
                                        <Button
                                            style={{
                                                maxHeight: "50px",
                                                minWidth: "400px",
                                            }}
                                            type="submit"
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Sign Up Now
                                        </Button>

                                        <Grid item>
                                            <Link href="/signin" variant="body2">
                                                {"You have an account? Sign In"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Form>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>                        
    )
}