import Header from "../Header/Header.jsx";
import React from 'react';
import { Box } from "@mui/material";
import { Outlet } from "react-router";
import './Layout.css';

const Layout = () => {
    return (
        <Box className="layout-root">
            <Header />
            <Box className="layout-content">
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
