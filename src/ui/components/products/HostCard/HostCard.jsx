import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import React, { useState } from "react";
import EditHostDialog from "../EditHostDialog/EditHostDialog.jsx";
import DeleteHostDialog from "../DeleteHostDialog/DeleteHostDialog.jsx";

import './HostCard.css';  // Вклучи го CSS фајлот

const HostCard = ({ host, onEdit, onDelete }) => {
    const [editHostDialogOpen, setEditHostDialogOpen] = useState(false);
    const [deleteHostDialogOpen, setDeleteHostDialogOpen] = useState(false);

    return (
        <>
            <Card className="host-card">
                <CardContent className="host-card-content">
                    <Typography variant="h6" className="host-name">
                        {host.name} {host.surname}
                    </Typography>
                </CardContent>
                <CardActions className="host-card-actions">
                    <Box className="host-card-buttons">
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon />}
                            className="host-edit-button"
                            onClick={() => setEditHostDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon />}
                            className="host-delete-button"
                            onClick={() => setDeleteHostDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>

            <EditHostDialog
                open={editHostDialogOpen}
                onClose={() => setEditHostDialogOpen(false)}
                host={host}
                onEdit={onEdit}
            />
            <DeleteHostDialog
                open={deleteHostDialogOpen}
                onClose={() => setDeleteHostDialogOpen(false)}
                host={host}
                onDelete={onDelete}
            />
        </>
    );
};

export default HostCard;
