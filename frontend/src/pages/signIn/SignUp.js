import { Grid, } from '@material-ui/core';
import Controls from "./components/controls/Controls";
import { useForm, Form } from './components/useForm';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from '@material-ui/core';

const instance = axios.create({baseURL: 'http://localhost:5000'})

const initialFValues = {
    id: '',
    password: '',
    passwordConfirm: '',
    country: '',
    cmnd: '',
    showPassword: false
}

const theme = createTheme();


export default function SignUp() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ('Id' in fieldValues)
            temp.id = fieldValues.id ? "" : "Id is invalid."

        if ('password' in fieldValues)
            temp.password = fieldValues.password ? ((/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/).test(fieldValues.password) ? "" : "Please select a password between 8 to 16 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character") : "This field is required."
        if ('passwordConfirm' in fieldValues)
            temp.passwordConfirm = fieldValues.passwordConfirm ? (fieldValues.passwordConfirm === fieldValues.password ? "" : "Passwords don't match") : "This field is required."

        if ('country' in fieldValues)
            temp.country = fieldValues.country ? "" : "This field is required."

        if ('CMND' in fieldValues)
            temp.cmnd = fieldValues.cmnd ? "": "This field is required."

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
    } = useForm(initialFValues, true, validate);
    
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            instance.post('/api/users/', {
                id: values.id,
                password: values.password,
                cmnd: values.cmnd,
                country: values.country
            })
            .then((response) => {
                  alert(`Created user with id ${values.id} successfully!`)
            })
            .catch((error) => {
                console.log(error);
                alert('id already exists!')
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
                                            label="ID *"
                                            name="id"
                                            value={values.id}
                                            type="id"
                                            onChange={handleInputChange}
                                            error={errors.id}
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

                                        <Controls.Select_
                                            label="Country/Region *"
                                            name="country"
                                            onChange={handleInputChange}
                                            error={errors.country}
                                        />

                                        <Controls.Input
                                            label="CMND *"
                                            name="cmnd"
                                            value={values.cmnd}
                                            type="number"
                                            onChange={handleInputChange}
                                            error={errors.cmnd}
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