import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Button from '@restart/ui/esm/Button';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../../ManageOrders/ManageOrders';
import ManageProducts from '../../ManageProducts/ManageProducts';
import AddProducts from '../../AddProducts/AddProducts';
import Comment from '../../../Pages/Comment/Comment';
import useAuth from './../../../hooks/useAuth';
import MyOrder from '../../MyOrder/MyOrder';
import Pay from '../../Pay/Pay';


const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const {admin, logout} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/home"><Button style={{marginBottom: 10, marginTop:10, width: '100%', border: 'none', padding:'10px', backgroundColor:'black', color:'white', fontSize:'20px', fontWeight:'700', textTransform:'uppercase'}} color="inherit">Home</Button></Link><br/>
      <Link to={`${url}`}><Button style={{marginBottom: 10, marginTop:10, width: '100%', border: 'none', padding:'10px', backgroundColor:'black', color:'white', fontSize:'18px', fontWeight:'700', textTransform:'uppercase'}} color="inherit">Dashboard</Button></Link><br/>

      {!admin && <Box>
        <Link to={`${url}/myOrder`}><Button style={{marginBottom: 10, marginTop:10, width: '100%', border: 'none', padding:'10px', backgroundColor:'black', color:'white', fontSize:'20px', fontWeight:'700', textTransform:'uppercase'}} color="inherit">My Order</Button></Link><br/>
      <Link to={`${url}/comment`}><Button style={{marginBottom: 10, marginTop:10, width: '100%', border: 'none', padding:'10px', backgroundColor:'black', color:'white', fontSize:'20px', fontWeight:'700', textTransform:'uppercase'}} color="inherit">Comment</Button></Link><br/>
      <Link to={`${url}/pay`}><Button style={{marginBottom: 10, marginTop:10, width: '100%', border: 'none', padding:'10px', backgroundColor:'black', color:'white', fontSize:'20px', fontWeight:'700', textTransform:'uppercase'}} color="inherit">Pay</Button></Link><br/>
        </Box>}

      {admin && <Box>
          <Link to={`${url}/manageOrder`}><Button style={{marginBottom: 10, marginTop:10, width: '100%', border: 'none', padding:'10px', backgroundColor:'black', color:'white', fontSize:'20px', fontWeight:'700', textTransform:'uppercase'}}color="inherit">Manage Order</Button></Link><br/>
          <Link to={`${url}/manageProduct`}><Button style={{marginBottom: 10, marginTop:10, width: '100%', border: 'none', padding:'10px', backgroundColor:'black', color:'white', fontSize:'20px', fontWeight:'700', textTransform:'uppercase'}} color="inherit">Manage Products</Button></Link><br/>
          <Link to={`${url}/makeAdmin`}><Button style={{marginBottom: 10, marginTop:10, width: '100%', border: 'none', padding:'10px', backgroundColor:'black', color:'white', fontSize:'20px', fontWeight:'700', textTransform:'uppercase'}} color="inherit">Make Addmin</Button></Link><br/>
          <Link to={`${url}/addProducts`}><Button style={{marginBottom: 10, marginTop:10, width: '100%', border: 'none', padding:'10px', backgroundColor:'black', color:'white', fontSize:'20px', fontWeight:'700', textTransform:'uppercase'}} color="inherit">Add Products</Button></Link>
      </Box>}
      <Button onClick={logout} style={{marginBottom: 10, marginTop:10, width: '100%', border: 'none', padding:'10px', backgroundColor:'black', color:'white', fontSize:'20px', fontWeight:'700', textTransform:'uppercase'}} color="inherit">Logout</Button>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
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
          <Typography variant="h6" noWrap component="div">
            Dashboard
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
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/manageOrder`}>
         <ManageOrders></ManageOrders>
        </Route>
        <Route path={`${path}/manageProduct`}>
         <ManageProducts></ManageProducts>
        </Route>
        <Route path={`${path}/addProducts`}>
         <AddProducts></AddProducts>
        </Route>
        <Route path={`${path}/myOrder`}>
         <MyOrder></MyOrder>
        </Route>
        <Route path={`${path}/comment`}>
         <Comment></Comment>
        </Route>
        <Route path={`${path}/pay`}>
         <Pay></Pay>
        </Route>
      </Switch>
      
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
