import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { withRouter } from 'react-router-dom';


function LoginPage(props) {
    const validationSchema = yup.object({
        email: yup
            .string('Enter your Email')
            .email('Enter a valid Email')
            .required('Email is required'),
        password: yup
            .string('Enter your Password')
            .min(8, 'Password should be of minimum 8 characters length')
            .max(20, 'Password too long, should not exceed 20 characters')
            .required('Password is required'),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            login();
        },
    });
    const login = () => {

        console.log(props);
        props.history.push('/navigationbar')

    }
    return (
        <>
            <Box sx={{
                maxWidth: "26vw", ml: "35vw", mr: "35vw", mt: "15vh", maxHeight: "45vh", boxShadow: 15, bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800', '& .MuiTextField-root': { m: "2vh" },
            }}>
                <form onSubmit={formik.handleSubmit}>
                    <Card variant="outlined">
                        <CardContent>

                            <Typography gutterBottom sx={{ ml: "1vw", mr: "3vm" }}>
                                <TextField
                                    label="UserName"
                                    size="small"
                                    sx={{ width: "20vw" }}
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />

                            </Typography>
                            <Typography sx={{ ml: "1vw" }} color="text.secondary">
                                <TextField
                                    label="PassWord"
                                    id="password"
                                    size="small"
                                    sx={{ width: "20vw" }}
                                    name="password"
                                    type="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />

                            </Typography>
                            <Button
                                variant="contained"
                                sx={{ ml: "9vw", mr: "3vm" }}
                                color="success"
                                type="submit"
                            >
                                Log In
                            </Button>
                        </CardContent>
                    </Card>
                </form>
            </Box>
        </>
    );
}

export default withRouter(LoginPage);