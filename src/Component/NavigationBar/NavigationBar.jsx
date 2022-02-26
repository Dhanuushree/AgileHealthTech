import * as React from 'react';
import { withRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Button, ListItem, ListItemText, Modal, TextField } from '@mui/material';
import { Link, Route } from 'react-router-dom';
import UserProfile from '../MainPages/UserProfile';
import AgencyBusinessList from '../MainPages/AgencyBusinessList';
import CompanyProfile from '../MainPages/CompanyProfile';
import CustomerList from '../MainPages/CustomerList';
import MainPage from '../MainPages/MainPage';
import BrokerBusinessList from '../MainPages/BrokerBusinessList';
import * as yup from "yup";
import { useFormik } from 'formik';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,


};
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
const drawerWidth = 200
const NavigationBar = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => { setOpen(false) };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            handleClose()
        },
    });
    const logout = () => {
        formik.values.email = ''
        formik.values.password = ''
        console.log(props);
        props.history.push('/')
    }
    const username = formik.values.email
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Typography variant="h6" noWrap component="div">
                        {username === '' ?
                            <Button
                                variant="contained"
                                sx={{ mr: "1vw" }}
                                color="success"
                                onClick={handleOpen}>
                                Login User
                            </Button>
                            : <Button
                                variant="contained"
                                sx={{ mr: "1vw" }}
                                color="success"
                                onClick={logout}>
                                Log Out
                            </Button>}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />

                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <Button color="primary" variant="contained" type="submit">
                            Submit
                        </Button>
                    </form>
                </Box>

            </Modal>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }} >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <Divider />
                    <List  >
                        <ListItem as={Link} to='/userprofile'  >
                            <ListItemText primary={"User Profile Page"} />
                        </ListItem>
                        <ListItem as={Link} to='/companyprofile' >
                            <ListItemText primary={"Company Profile Page"} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem as={Link} to='/customerlist' >
                            <ListItemText primary={"Customer list page"} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem as={Link} to='/brokerbusinesslist' >
                            <ListItemText primary={"Broker Business page"} />
                        </ListItem>
                        <ListItem as={Link} to='/agencybusinesslist' >
                            <ListItemText primary={"Agency Business page"} />
                        </ListItem>
                    </List>
                    <Divider />
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, m: "7ch" }}>
                <Toolbar />
                <Route exact path="/userprofile" component={UserProfile} />
                <Route exact path="/brokerbusinesslist" component={BrokerBusinessList} />
                <Route exact path="/agencybusinesslist" component={AgencyBusinessList} />
                <Route exact path="/companyprofile" component={CompanyProfile} />
                <Route exact path="/customerlist" component={CustomerList} />
                <Route exact path="/" component={MainPage} />
            </Box>
        </Box>
    );
}

export default withRouter(NavigationBar);