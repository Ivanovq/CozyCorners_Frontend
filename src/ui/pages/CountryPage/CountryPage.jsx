import { Box, Button, CircularProgress } from "@mui/material";

import useCountries from "../../../hooks/useCountries.js";
import CountryGrid from "../../components/products/CountryGrid/CountryGrid.jsx";
import AddCountryDialog from "../../components/products/AddCountryDialog/AddCountryDialog.jsx";
import { useState } from "react";
import './CountryPage.css';

const CountryPage = () => {
    const { countries, loading, onAdd, onEdit, onDelete } = useCountries();
    const [AddCountryDialogOpen, setAddCountryDialogOpen] = useState(false);

    return (
        <Box className="country-page-root">
            {loading && (
                <Box className="loading-spinner">
                    <CircularProgress />
                </Box>
            )}
            {!loading && (
                <>
                    <Box className="country-header">
                        <Button
                            variant="contained"
                            className="add-country-button"
                            onClick={() => setAddCountryDialogOpen(true)}
                        >
                            Add Country
                        </Button>
                    </Box>

                    <CountryGrid
                        countries={countries}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </>
            )}

            <AddCountryDialog
                open={AddCountryDialogOpen}
                onClose={() => setAddCountryDialogOpen(false)}
                onAdd={onAdd}
            />
        </Box>
    );
};

export default CountryPage;
