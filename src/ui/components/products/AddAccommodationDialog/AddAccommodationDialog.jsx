import { useState, useEffect } from "react";
import useHosts from "../../../../hooks/useHosts.js";
import useCategories from "../../../../hooks/useCategories.js";
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
    CircularProgress,
} from "@mui/material";

import "./AddAccommodationDialog.css";

const initialFormData = {
    name: "",
    category: "",
    host: "",
    numRooms: "",
};

const AddAccommodationsDialog = ({ open, onClose, onAdd }) => {
    const [formData, setFormData] = useState(initialFormData);

    const { hosts, loading: hostsLoading } = useHosts();
    const { categories, loading: categoriesLoading } = useCategories();

    useEffect(() => {
        if (!open) {
            setFormData(initialFormData);
        }
    }, [open]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        onAdd(formData);
        setFormData(initialFormData);
        onClose();
    };

    const isSubmitDisabled =
        !formData.name || !formData.category || !formData.host || !formData.numRooms;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            classes={{ paper: "addAccommodationDialog-paper" }}
        >
            <DialogTitle className="addAccommodationDialog-title">
                Add Accommodation
            </DialogTitle>
            <DialogContent>
                <TextField
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{ className: "addAccommodationDialog-inputLabel" }}
                    className="addAccommodationDialog-textField"
                />
                <TextField
                    name="numRooms"
                    type="number"
                    label="Number of rooms"
                    value={formData.numRooms}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{ className: "addAccommodationDialog-inputLabel" }}
                    className="addAccommodationDialog-textField"
                    inputProps={{ min: 1 }}
                />

                <FormControl fullWidth margin="normal" required>
                    <InputLabel className="addAccommodationDialog-inputLabel">
                        Category
                    </InputLabel>
                    {categoriesLoading ? (
                        <CircularProgress
                            size={24}
                            sx={{ color: "#d81b60", display: "block", mx: "auto", my: 2 }}
                        />
                    ) : (
                        <Select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            label="Category"
                            className="addAccommodationDialog-select"
                        >
                            {categories.map((category) => (
                                <MenuItem key={category} value={category}>
                                    {category}
                                </MenuItem>
                            ))}
                        </Select>
                    )}
                </FormControl>

                <FormControl fullWidth margin="normal" required>
                    <InputLabel className="addAccommodationDialog-inputLabel">Host</InputLabel>
                    {hostsLoading ? (
                        <CircularProgress
                            size={24}
                            sx={{ color: "#d81b60", display: "block", mx: "auto", my: 2 }}
                        />
                    ) : (
                        <Select
                            name="host"
                            value={formData.host}
                            onChange={handleChange}
                            label="Host"
                            className="addAccommodationDialog-select"
                        >
                            {hosts.map((host) => (
                                <MenuItem key={host.id} value={host.id}>
                                    {host.name}
                                </MenuItem>
                            ))}
                        </Select>
                    )}
                </FormControl>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    onClick={handleSubmit}
                    disabled={isSubmitDisabled}
                    className="addAccommodationDialog-button"
                    variant="contained"
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddAccommodationsDialog;
