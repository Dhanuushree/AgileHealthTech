import * as React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Button, IconButton, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Route } from 'react-router-dom';
import UserProfile from '../MainPages/UserProfile';
import AgencyBusinessList from '../MainPages/AgencyBusinessList';
import CompanyProfile from '../MainPages/CompanyProfile';
import CustomerList from '../MainPages/CustomerList';
import MainPage from '../MainPages/MainPage';
import BrokerBusinessList from '../MainPages/BrokerBusinessList';

const drawerWidth = 240
const NavigationBar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
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
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const logout = () => {
        props.history.push('/')
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                 <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
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
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
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

NavigationBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default withRouter(NavigationBar);