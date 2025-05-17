import { Grid } from "@mui/material";
import AccommodationCard from "../AccommodationCard/AccommodationCard.jsx";
import  "./AccommodationGrid.css";

const AccommodationGrid = ({ accommodations, onEdit, onDelete }) => {
    return (
        <Grid container spacing={3} className="gridContainer">
            {accommodations.map((accommodation) => (
                <Grid item key={accommodation.id} xs={12} sm={6} md={4} lg={3}>
                    <AccommodationCard
                        accommodation={accommodation}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default AccommodationGrid;
