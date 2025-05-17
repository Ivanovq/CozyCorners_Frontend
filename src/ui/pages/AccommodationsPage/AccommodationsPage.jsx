import React, { useState } from "react";
import useAccommodations from "../../../hooks/useAccommodations.js";
import {
    Box,
    Button,
    CircularProgress,
    Typography,
    Paper,
} from "@mui/material";
import AccommodationGrid from "../../components/products/AccommodationGrid/AccommodationGrid.jsx";
import AddAccommodationDialog from "../../components/products/AddAccommodationDialog/AddAccommodationDialog.jsx";

import "./AccommodationsPage.css";

const AccommodationsPage = () => {
    const { accommodations, loading, onAdd, onEdit, onDelete } = useAccommodations();
    const [addDialogOpen, setAddDialogOpen] = useState(false);

    return (
        <Box className="accommodations-page">
            <Paper elevation={4} className="accommodations-paper">
                <Typography variant="h4" className="accommodations-title" gutterBottom>
                    Accommodations
                </Typography>

                <Box className="accommodations-header">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setAddDialogOpen(true)}
                        className="add-accommodation-button"
                    >
                        Add Accommodation
                    </Button>
                </Box>

                {loading ? (
                    <Box className="loading-container">
                        <CircularProgress color="secondary" />
                    </Box>
                ) : (
                    <AccommodationGrid
                        accommodations={accommodations}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                )}
            </Paper>

            <AddAccommodationDialog
                open={addDialogOpen}
                onClose={() => setAddDialogOpen(false)}
                onAdd={onAdd}
                onEdit={onEdit}
            />
        </Box>
    );
};

export default AccommodationsPage;
