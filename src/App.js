import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route, Outlet ,
} from "react-router-dom";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Contactus from './Components/Contactus';
import Feedback from './Components/Feedback';
import SimpleForm from './Extras/Chatbot';
import Navbar from './Extras/Navbar.jsx'
import { Button, Card } from '@mui/material';
// import CustomizedDialogs from './chatty';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { Paper } from '@mui/material';
import Draggable from 'react-draggable';
import HomePage from './Components/HomePage';
import Publications from './Components/Publications';
import AllCourse from './Components/AllCourse';
import Dashboard from './Components/Dashboard';
import BlogPage from './Components/BlogPage';
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        height: '5vh',
        borderRadius: 1,
        p: 3,
      }}
      fullWidth
    >
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

  const chatTheme = {
    background: 'green',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
        <Router>
          <div className="App">
            <Routes>
              <Route path="/homepage" element={<><Navbar/><HomePage/></>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route index element={<><Navbar/><HomePage/></>}/>
              <Route path="/contactus" element={<><Navbar/><Contactus /></>} />
              <Route path="/feedback" element={<><Navbar/><Feedback /></>} />
              <Route path="/publications" element={<><Navbar/><Publications/></>} />
              <Route path="/allcourse" element={<><Navbar/><AllCourse/></>} />
              <Route path="/dashboard" element={<><Navbar/><Dashboard/></>} />
              <Route path="/blogpage" element={<><Navbar/><BlogPage/></>} />
            </Routes>
          </div>
          </Router>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

{/*<Card style={{borderRadius:"none"}}>
        <Button  onClick={handleClickOpen}>
          <img width='50' src='https://cdn-icons.flaticon.com/png/512/1734/premium/1734162.png?token=exp=1646899187~hmac=cd2c93da2c0b67670f14d0941c4a5ecb' alt='robot'></img>
        </Button>
        </Card>
        <BootstrapDialog
          onClose={handleClose}
          open={open}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Welcome to Chatty ;)
          </DialogTitle>
          {/* <chatT theme={chatTheme}> 
          <SimpleForm />
        </BootstrapDialog> */}