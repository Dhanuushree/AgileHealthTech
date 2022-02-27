import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Grid, TextField } from '@mui/material';
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
            .min(8, 'Password should be of minimum 8')
            .max(20, 'should not exceed 20 characters')
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
        props.history.push('/navigationbar/mainpage')

    }
    return (
        <>
            <Grid container >
                <Grid item xs={1} sm={3} md={4}  lg={4.5}>
                </Grid>
                <Grid item  xs={10} sm={6} md={4}  lg={3} sx={{ mt: '24vh' }}>

                    <Box sx={{
                        boxShadow: 20, bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                        color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800', '& .MuiTextField-root': { m: "2vh" },
                    }}
                    >
                        <form onSubmit={formik.handleSubmit}>
                            <Card variant="outlined" sx={2}>
                                <CardContent>

                                    <Typography gutterBottom sx={1}>
                                        <TextField
                                            label="Email"
                                            size="medium"
                                            sx={{ width: "90%" }}
                                            id="email"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                        />

                                    </Typography>
                                    <Typography xs={1} color="text.secondary">
                                        <TextField
                                            label="Password"
                                            id="password"
                                            size="medium"
                                            sx={{ width: "90%" }}
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
                                        sx={{ml:'30%'}}
                                        color="success"
                                        type="submit"
                                    >
                                        Log In
                                    </Button>
                                </CardContent>
                            </Card>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={1} sm={3} md={4}  lg={4}>
                </Grid>
            </Grid>
        </>
    );
}

export default withRouter(LoginPage);