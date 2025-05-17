import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from "@mui/material";

const DeleteCountryDialog = ({open, onClose, country, onDelete}) => {

    const handleSubmit = () => {
        onDelete(country.id);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} className="delete-dialog">
            <DialogTitle className="delete-dialog-title">Delete Country</DialogTitle>
            <DialogContent className="delete-dialog-content">
                Are you sure, you want to delete Country: <strong>{country.name}</strong>?
            </DialogContent>

            <DialogActions className="delete-dialog-actions">
                <Button onClick={onClose} className="btn-cancel">Cancel</Button>
                <Button onClick={handleSubmit} className="btn-delete" color="error" variant="contained">Delete</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteCountryDialog;
