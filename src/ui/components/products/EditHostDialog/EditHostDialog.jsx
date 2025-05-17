import React, { useState, useEffect } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";

import useCountries from "../../../../hooks/useCountries.js";
import './EditHostDialog.css';

const EditHostDialog = ({ open, onClose, host, onEdit }) => {
    const [formData, setFormData] = useState({
        name: host?.name || "",
        surname: host?.surname || "",
        country: host?.country || "",
    });

    const { countries, loading } = useCountries();

    useEffect(() => {
        setFormData({
            name: host?.name || "",
            surname: host?.surname || "",
            country: host?.country || "",
        });
    }, [host]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        onEdit(host.id, formData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className="dialogTitle">Edit Host</DialogTitle>
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
                    name="surname"
                    label="Surname"
                    value={formData.surname}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Country</InputLabel>
                    <Select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        label="Country"
                    >
                        {countries.map((country) => (
                            <MenuItem key={country.id} value={country.id}>{country.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions className="dialogActions">
                <Button onClick={onClose} className="buttonCancel">Cancel</Button>
                <Button onClick={handleSubmit} className="buttonEdit">Edit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditHostDialog;
