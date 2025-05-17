import React, { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
    Divider,
} from '@mui/material';
import { useNavigate } from 'react-router';
import EditAccommodationDialog from '../EditAccommodationDialog/EditAccommodationDialog.jsx';
import DeleteAccommodationDialog from '../DeleteAccommodationDialog/DeleteAccommodationDialog.jsx';

import './AccommodationCard.css';  // Вклучи го CSS фајлот

const AccommodationCard = ({ accommodation, onEdit, onDelete }) => {
    const [editAccommodationDialogOpen, setEditAccommodationDialogOpen] = useState(false);
    const [deleteAccommodationDialogOpen, setDeleteAccommodationDialogOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <Card className="accommodation-card">
                <CardContent className="accommodation-card-content">
                    <Typography variant="h6" gutterBottom color="primary" className="accommodation-name">
                        {accommodation.name}
                    </Typography>
                    <Divider className="accommodation-divider" />
                    <Typography variant="body2" color="text.secondary" className="accommodation-info">
                        Number of rooms: <strong>{accommodation.numRooms}</strong>
                    </Typography>
                </CardContent>
                <CardActions className="accommodation-card-actions">
                    {/* Ако ти треба "Info" копче, откоментирај го следниот дел */}
                    {/*
                    <Button
                        size="small"
                        color="info"
                        startIcon={<InfoIcon />}
                        onClick={() => navigate(`/accommodation/${accommodation.id}`)}
                    >
                        Info
                    </Button>
                    */}
                    <Box className="accommodation-buttons">
                        <Button
                            size="small"
                            color="warning"
                            variant="outlined"
                            startIcon={<EditIcon />}
                            className="accommodation-edit-button"
                            onClick={() => setEditAccommodationDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            className="accommodation-delete-button"
                            onClick={() => setDeleteAccommodationDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>

            <EditAccommodationDialog
                open={editAccommodationDialogOpen}
                onClose={() => setEditAccommodationDialogOpen(false)}
                accommodation={accommodation}
                onEdit={onEdit}
            />

            <DeleteAccommodationDialog
                open={deleteAccommodationDialogOpen}
                onClose={() => setDeleteAccommodationDialogOpen(false)}
                accommodation={accommodation}
                onDelete={onDelete}
            />
        </>
    );
};

export default AccommodationCard;
