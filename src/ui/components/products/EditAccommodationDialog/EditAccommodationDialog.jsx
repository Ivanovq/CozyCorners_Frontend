import React, { useState, useEffect } from "react";
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
    TextField,
} from "@mui/material";
import useCategories from "../../../../hooks/useCategories.js";
import useHosts from "../../../../hooks/useHosts.js";

import "./EditAccommodationDialog.css";

const EditAccommodationDialog = ({ open, onClose, accommodation, onEdit }) => {
    const [formData, setFormData] = useState({
        name: accommodation?.name || "",
        category: accommodation?.category || "",
        host: accommodation?.host || "",
        numRooms: accommodation?.numRooms || "",
    });

    const { categories, loading: categoriesLoading } = useCategories();
    const { hosts, loading: hostsLoading } = useHosts();

    // Обновување на formData кога accommodation се менува
    useEffect(() => {
        if (accommodation) {
            setFormData({
                name: accommodation.name,
                category: accommodation.category,
                host: accommodation.host,
                numRooms: accommodation.numRooms,
            });
        }
    }, [accommodation]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        onEdit(accommodation.id, formData);
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            classes={{ paper: "editAccommodationDialog-paper" }}
        >
            <DialogTitle className="editAccommodationDialog-title">
                Edit Accommodation
            </DialogTitle>
            <DialogContent>
                <TextField
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ className: "editAccommodationDialog-inputLabel" }}
                    className="editAccommodationDialog-textField"
                />
                <TextField
                    name="numRooms"
                    type="number"
                    label="Number of rooms"
                    value={formData.numRooms}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ className: "editAccommodationDialog-inputLabel" }}
                    className="editAccommodationDialog-textField"
                    inputProps={{ min: 1 }}
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel className="editAccommodationDialog-inputLabel">
                        Category
                    </InputLabel>
                    <Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        label="Category"
                        className="editAccommodationDialog-select"
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel className="editAccommodationDialog-inputLabel">Host</InputLabel>
                    <Select
                        name="host"
                        value={formData.host}
                        onChange={handleChange}
                        label="Host"
                        className="editAccommodationDialog-select"
                    >
                        {hosts.map((host) => (
                            <MenuItem key={host.id} value={host.id}>
                                {host.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    onClick={handleSubmit}
                    className="editAccommodationDialog-button"
                    variant="contained"
                >
                    Edit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditAccommodationDialog;
