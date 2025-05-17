import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
    return (
        <Box className="homepage-container">
            <Typography variant="h3" className="homepage-title">
                Welcome to CozyCorners App!
            </Typography>

            <Typography variant="h6" className="homepage-text">
                Find your perfect stay — whether it’s a cozy apartment, a stylish villa, or a unique experience.
                Browse thousands of accommodations tailored just for you. Your ideal rental is just a few clicks away.
            </Typography>

            <Link to="/accommodations">
                <button className="homepage-button">
                    Explore Accommodations
                </button>
            </Link>
        </Box>
    );
};

export default HomePage;
