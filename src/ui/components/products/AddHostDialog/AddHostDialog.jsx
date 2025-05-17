import { useState } from "react";
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
import useCountries from "../../../../hooks/useCountries.js";

import "./AddHostDialog.css";

const initialFormData = {
    name: "",
    surname: "",
    country: "",
};

const AddHostDialog = ({ open, onClose, onAdd }) => {
    const [formData, setFormData] = useState(initialFormData);
    const { countries, loading } = useCountries();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        onAdd(formData);
        setFormData(initialFormData);
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            classes={{ paper: "addHostDialog-paper" }}
            maxWidth="xs"
            fullWidth
        >
            <DialogTitle className="addHostDialog-title">Add Host</DialogTitle>
            <DialogContent className="addHostDialog-content">
                <TextField
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    className="addHostDialog-textField"
                />
                <TextField
                    name="surname"
                    label="Surname"
                    value={formData.surname}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    className="addHostDialog-textField"
                />

                <FormControl fullWidth margin="normal" className="addHostDialog-formControl">
                    <InputLabel>Country</InputLabel>
                    <Select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        label="Country"
                    >
                        {countries.map((country) => (
                            <MenuItem key={country.id} value={country.id}>
                                {country.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>

            <DialogActions className="addHostDialog-actions">
                <Button
                    onClick={onClose}
                    className="addHostDialog-buttonCancel"
                    variant="outlined"
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    className="addHostDialog-buttonAdd"
                    variant="contained"
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddHostDialog;
