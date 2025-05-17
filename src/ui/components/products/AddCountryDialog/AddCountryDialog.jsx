import { useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";

import "./AddCountryDialog.css";

const initialFormData = {
    name: "",
    continent: "",
};

const AddCountryDialog = ({ open, onClose, onAdd }) => {
    const [formData, setFormData] = useState(initialFormData);

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
            classes={{ paper: "addCountryDialog-paper" }}
            maxWidth="xs"
            fullWidth
        >
            <DialogTitle className="addCountryDialog-title">Add Country</DialogTitle>
            <DialogContent className="addCountryDialog-content">
                <TextField
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    className="addCountryDialog-textField"
                />
                <TextField
                    name="continent"
                    label="Continent"
                    value={formData.continent}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    className="addCountryDialog-textField"
                />
            </DialogContent>

            <DialogActions className="addCountryDialog-actions">
                <Button
                    onClick={onClose}
                    className="addCountryDialog-buttonCancel"
                    variant="outlined"
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    className="addCountryDialog-buttonAdd"
                    variant="contained"
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddCountryDialog;
