import React, { useState, useEffect } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from "@mui/material";
import './EditCountryDialog.css';

const EditCountryDialog = ({ open, onClose, country, onEdit }) => {
    const [formData, setFormData] = useState({
        name: country?.name || "",
        continent: country?.continent || "",
    });

    useEffect(() => {
        setFormData({
            name: country?.name || "",
            continent: country?.continent || "",
        });
    }, [country]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        onEdit(country.id, formData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className="dialogTitle">Edit Country</DialogTitle>
            <DialogContent>
                <TextField
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="continent"
                    label="Continent"
                    value={formData.continent}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
            </DialogContent>
            <DialogActions className="dialogActions">
                <Button onClick={onClose} className="buttonCancel">Cancel</Button>
                <Button onClick={handleSubmit} className="buttonEdit">Edit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditCountryDialog;
