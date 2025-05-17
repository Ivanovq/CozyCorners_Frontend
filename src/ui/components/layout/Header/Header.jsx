import React from "react";
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import './Header.css';

const menuItems = [
    { name: "Home", path: "/" },
    { name: "Hosts", path: "/hosts" },
    { name: "Countries", path: "/countries" },
    { name: "Accommodations", path: "/accommodations" }
];

const Header = () => {
    return (
        <Box className="header-box">
            <AppBar position="static" className="header-appbar">
                <Toolbar className="header-toolbar">
                    <Typography variant="h6" component="div" className="header-title">
                        CozyCorners
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }} className="header-menu-box">
                        {menuItems.map((item) => (
                            <Button
                                key={item.name}
                                component={Link}
                                to={item.path}
                                className="menu-button"
                                color="inherit"
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>

                    <Button className="login-button" color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
