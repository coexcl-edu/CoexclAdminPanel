import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeTab from '../Tabs/HomeTab';
import StudentTab from '../Tabs/StudentTab';
import { AppContext } from '../../context/AppContext';
import LoginIcon from '@mui/icons-material/Login';
import LoginTab from '../Tabs/LoginTab';
import LiveClassesTab from '../Tabs/LiveClassesTab';
import PersonPinTwoToneIcon from '@mui/icons-material/PersonPinTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import CampaignTwoToneIcon from '@mui/icons-material/CampaignTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import NotificationTab from '../Tabs/NotificationTab';
import Avatar from '@mui/material/Avatar';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MainDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {selectedTab , SetselectedTab , isHomeTabVisible , setIsHomeTabVisible ,isStudentTabVisible, setIsStudentTabVisible,isLoginTabVisible,setIsLoginTabVisible ,logedInDetails ,setLogedIngDetails ,setIsLogedIn,isLogedIn ,isLiveClassesTabVisible,setIsLiveClassesTabVisible ,isNotificationTabVisible,setIsNotificationTabVisible ,notificationList,setNotificationList} = React.useContext(AppContext);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const tabName = ['Home', 'Student', 'Notice-Board', 'Live-Classes'];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleListItemClick = (event, index ) => {
    setSelectedIndex(index);
    const selected = event.currentTarget.dataset.tabname;
    SetselectedTab(selected);
    changeSelectedTabDisplay(selected);
  };

  const setSelectedTab = (event) =>{
    setSelectedIndex(selectedTab);
    const selected = event.currentTarget.dataset.tabname;
    SetselectedTab(selected);
    changeSelectedTabDisplay(selected);
  }
  const changeSelectedTabDisplay = (name) => {
    console.log("coming here ");
    if(name === "Home"){
      setIsHomeTabVisible(true);
      setIsStudentTabVisible(false);
      setIsLoginTabVisible(false);
      setIsLiveClassesTabVisible(false);
      setIsNotificationTabVisible(false);
    }else if(name === "Login"){
      setIsStudentTabVisible(false);
      setIsHomeTabVisible(false);
      setIsLoginTabVisible(true);
      setIsLiveClassesTabVisible(false);
      setIsNotificationTabVisible(false);
    }else if(name === "Live-Classes"){
      setIsStudentTabVisible(false);
      setIsHomeTabVisible(false);
      setIsLoginTabVisible(false);
      setIsLiveClassesTabVisible(true);
      setIsNotificationTabVisible(false);
    }else if(name ==="Student"){
      setIsStudentTabVisible(true);
      setIsHomeTabVisible(false);
      setIsLoginTabVisible(false);
      setIsLiveClassesTabVisible(false);
      setIsNotificationTabVisible(false);
    }else if(name==="Notice-Board"){
      setIsStudentTabVisible(false);
      setIsHomeTabVisible(false);
      setIsLoginTabVisible(false);
      setIsLiveClassesTabVisible(false);
      setIsNotificationTabVisible(true);
    }
    else{
      setIsStudentTabVisible(false);
      setIsHomeTabVisible(false);
      setIsLoginTabVisible(false);
      setIsLiveClassesTabVisible(false);
      setIsNotificationTabVisible(false);

    }
  }
  const dynamicDisplayStyle = ()=>{
    if(isHomeTabVisible){
      return {display:'block'}
    }else{
      return {display:'none'}
    }
  }
  const dynamicDisplayStyleForStudent = ()=>{
    if(isStudentTabVisible){
      return {'display':'block'}
    }else{
      return {'display':'none'}
    }
  }
  const dynamicDisplayStyleForLogin = ()=>{
    if(isLoginTabVisible){
      return {'display':'block'}
    }else{
      return {'display':'none'}
    }
  }

  const dynamicDisplayStyleForLiveClasses = ()=>{

    if(isLiveClassesTabVisible){
      return {'display':'block'}
    }else{
      return {'display':'none'}
    }
  }
  const dynamicDisplayStyleForNotification = ()=>{

    if(isNotificationTabVisible){
      return {'display':'block'}
    }else{
      return {'display':'none'}
    }
  }



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="Remy Sharp" src="https://firebasestorage.googleapis.com/v0/b/coexclapi.appspot.com/o/coexcl_mini.png?alt=media&token=2884f21a-35b6-455c-ae5e-e901a6432eb6"  align='center' />
          <Typography variant="h6" noWrap component="div" marginLeft={2}>
            Coexcl Admin 
          </Typography>
          {/* <div><Button style={{backgroundColor:'white',marginTop:'0px',marginLeft:'900px'}}>Login Buttone : </Button></div> */}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {tabName.map((text, index) => (
            <ListItemButton 
            selected={selectedIndex === tabName.indexOf(text)}
              onClick={(event) => handleListItemClick(event, tabName.indexOf(text))}
            data-tabname={text}
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index===0?<HomeTwoToneIcon/>:index === 1 ? <PersonPinTwoToneIcon/>: index===2?<CampaignTwoToneIcon/>:<LiveTvTwoToneIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          {['Login'].map((text, index) => (
            <ListItemButton
              onClick={setSelectedTab} data-tabname={text}
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <LoginIcon /> : <LoginIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <HomeTab dispLayValue ={dynamicDisplayStyle}></HomeTab>
        <StudentTab dispLayValue ={dynamicDisplayStyleForStudent} ></StudentTab>
        <LoginTab dispLayValue ={dynamicDisplayStyleForLogin}></LoginTab>
        <LiveClassesTab dispLayValue={dynamicDisplayStyleForLiveClasses}></LiveClassesTab>
        <NotificationTab dispLayValue={dynamicDisplayStyleForNotification}></NotificationTab>
      </Box>
    </Box>
  );
}
