import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";

import "./DeleteAccommodationDialog.css";

const DeleteAccommodationDialog = ({ open, onClose, accommodation, onDelete }) => {
    const handleSubmit = () => {
        onDelete(accommodation.id);
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            classes={{ paper: "deleteAccommodationDialog-paper" }}
            maxWidth="xs"
            fullWidth
        >
            <DialogTitle className="deleteAccommodationDialog-title">
                Delete Accommodation
            </DialogTitle>
            <DialogContent className="deleteAccommodationDialog-content">
                Are you sure you want to delete accommodation: <b>{accommodation.name}</b>?
            </DialogContent>

            <DialogActions>
                <Button
                    onClick={onClose}
                    className="deleteAccommodationDialog-buttonCancel"
                    variant="outlined"
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    className="deleteAccommodationDialog-buttonDelete"
                    variant="contained"
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteAccommodationDialog;
