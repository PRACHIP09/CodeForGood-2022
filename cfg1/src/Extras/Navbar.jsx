import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Toolbar from "@mui/material/Toolbar";
import { GiHamburgerMenu } from "react-icons/gi";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import logo from "../Images/scientist.png";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
const pages = [
    "Signup",
    "Login",
    "HomePage",
    "AllCourse",
    "DashBoard",
    "BlogPage",
    "Publications",
    "Feedback",
    "ContactUs",
];

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const NavBar = (mode) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const anchor = "left";
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {pages.map((text, index) => (
                    <Link
                        style={{ textDecoration: "none" }}

                    // to={`/${text.toLowerCase().replace(" ", "-")}`}
                    >
                        <ListItem button key={text}>
                            <ListItemText>
                                <span>{text}</span>
                            </ListItemText>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <>
        <Card>
        <ElevationScroll>
            <AppBar position="sticky" color='inherit'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                            // style={{color:'green'}}
                        >
                            {mode.mode == 'dark' ?
                                <img src={logo} alt="logo" width="50" style={{ filter: 'invert(1)' }}></img> :
                                <img src={logo} alt="logo" width="50"></img>
                            }
                        </Typography> */}

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <React.Fragment key={anchor}>
                                <Button
                                    style={{ fontSize: "2rem" }}
                                    size="large"
                                    color="inherit"
                                    onClick={toggleDrawer(anchor, true)}
                                >
                                    <GiHamburgerMenu />
                                </Button>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}
                        >
                            <img src={logo} alt="logo" width="50"></img>
                        </Typography>
                        <Box
                            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                            justifyContent="center"
                            alignContent="center"
                        >
                            {pages.map((page, index) => (
                                <Link to={"/"+page} style={{textDecoration:"none"}}>
                                    <Button
                                        key={page}
                                        style={{ fontSize: "1.2rem" }}
                                        sx={{
                                            my: 2,
                                            //   color: "green",
                                            display: "block",
                                            paddingInline: "15px",
                                        }}
                                    >
                                        {page}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
        </Card>
        </>
    );
};
export default NavBar;
