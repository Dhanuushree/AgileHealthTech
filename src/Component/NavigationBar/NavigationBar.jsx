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
import { Button, ListItem, ListItemText } from '@mui/material';
import { Link, Route } from 'react-router-dom';
import UserProfile from '../MainPages/UserProfile';
import AgencyBusinessList from '../MainPages/AgencyBusinessList';
import CompanyProfile from '../MainPages/CompanyProfile';
import CustomerList from '../MainPages/CustomerList';
import MainPage from '../MainPages/MainPage';
import BrokerBusinessList from '../MainPages/BrokerBusinessList';

const drawerWidth = 200
const NavigationBar = (props) => {
    const logout = () => {
        props.history.push('/')
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Typography variant="h6" noWrap component="div">

                        <Button
                            variant="contained"
                            sx={{ mr: "1vw" }}
                            color="success"
                            onClick={logout}>
                            Log Out
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
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
                        <ListItem as={Link} to='/navigationbar/userprofile'  >
                            <ListItemText primary={"User Profile Page"} />
                        </ListItem>
                        <ListItem as={Link} to='/navigationbar/companyprofile' >
                            <ListItemText primary={"Company Profile Page"} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem as={Link} to='/navigationbar/customerlist' >
                            <ListItemText primary={"Customer list page"} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem as={Link} to='/navigationbar/brokerbusinesslist' >
                            <ListItemText primary={"Broker Business page"} />
                        </ListItem>
                        <ListItem as={Link} to='/navigationbar/agencybusinesslist' >
                            <ListItemText primary={"Agency Business page"} />
                        </ListItem>
                    </List>
                    <Divider />
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, m: "7ch" }}>
                <Toolbar />
                <Route path="/navigationbar/userprofile" component={UserProfile} />
                <Route path="/navigationbar/brokerbusinesslist" component={BrokerBusinessList} />
                <Route path="/navigationbar/agencybusinesslist" component={AgencyBusinessList} />
                <Route path="/navigationbar/companyprofile" component={CompanyProfile} />
                <Route path="/navigationbar/customerlist" component={CustomerList} />
                <Route path="/navigationbar/mainpage" component={MainPage} />
            </Box>
        </Box>
    );
}

export default withRouter(NavigationBar);