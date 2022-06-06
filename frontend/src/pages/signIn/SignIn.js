import { Grid, } from '@material-ui/core';
import Controls from "./components/controls/Controls";
import { useForm, Form } from './components/useForm';

import {Link} from '@material-ui/core';

import {Link as PageLink} from 'react-router-dom';

import axios from 'axios';
import * as Cookies from 'js-cookie';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

const instance = axios.create({baseURL: 'http://localhost:5000'})

const initialFValues = {
    id: '',
    password: '',
    isRemember: false
}

const theme = createTheme();

export default function SignIn() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('id' in fieldValues)
            temp.id = fieldValues.id ? "" : "This field is required."
        if ('password' in fieldValues)
            temp.password = fieldValues.password ? "" : "This field is required."
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
          const input = {
            id: values.id,
            password: values.password
          }
          instance.post('/api/users/login',  input , {
            //withCredentials: true,
          })
          .then((response) => {
            if (response.data){
              
              localStorage.setItem("token", response.data.token)
              alert(  "Succesfully signed in as user: " + response.data.Account.id );
              window.location.href = "/"
              //window.location.reload();
            }
          })
          .catch((error) => {
              alert('Email or password is incorrect!')
          });
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                    marginTop: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Grid item xs={3}> <LoginIcon style={{fontSize: "70px", color:"#5A64A7"}} /> </Grid>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Grid container spacing={3} style={{marginTop: '6px'}}>
                        <Grid item xs={12} sm={12}>
                            <Form onSubmit={handleSubmit}>
                                <Controls.Input
                                    label="ID *"
                                    name="id"
                                    value={values.id}
                                    type="input"
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
                                <Controls.Checkbox
                                    name="isRemember"
                                    label="Remember Me"
                                    value={values.isPermanent}
                                    onChange={handleInputChange}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>

                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/signup" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
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