import { Grid } from "@mui/material";
import CountryCard from "../CountryCard/CountryCard.jsx";
import "./CountryGrid.css";  // вклучи го CSS фајлот

const CountryGrid = ({ countries, onEdit, onDelete }) => {
    return (
        <Grid container spacing={3} justifyContent="center" className="country-grid-container">
            {countries.map((country) => (
                <Grid item key={country.id} xs={12} sm={6} md={4} lg={3} className="country-grid-item">
                    <CountryCard country={country} onEdit={onEdit} onDelete={onDelete} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CountryGrid;
