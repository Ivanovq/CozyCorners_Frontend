import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import EditCountryDialog from "../EditCountryDialog/EditCountryDialog.jsx";
import DeleteCountryDialog from "../DeleteCountryDialog/DeleteCountryDialog.jsx";

import "./CountryCard.css"; // Обавезно да го имаш овој фајл

const CountryCard = ({ country, onEdit, onDelete }) => {
    const [editCountryDialogOpen, setEditCountryDialogOpen] = useState(false);
    const [deleteCountryDialogOpen, setDeleteCountryDialogOpen] = useState(false);

    return (
        <>
            <Card className="country-card">
                <CardContent className="country-card-content">
                    <Typography className="country-name">{country.name}</Typography>
                    <Typography className="country-continent">{country.continent}</Typography>
                </CardContent>
                <CardActions className="country-card-actions">
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon />}
                            className="btn-edit"
                            onClick={() => setEditCountryDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon />}
                            className="btn-delete"
                            onClick={() => setDeleteCountryDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>

            <EditCountryDialog
                open={editCountryDialogOpen}
                onClose={() => setEditCountryDialogOpen(false)}
                country={country}
                onEdit={onEdit}
            />
            <DeleteCountryDialog
                open={deleteCountryDialogOpen}
                onClose={() => setDeleteCountryDialogOpen(false)}
                country={country}
                onDelete={onDelete}
            />
        </>
    );
};

export default CountryCard;
