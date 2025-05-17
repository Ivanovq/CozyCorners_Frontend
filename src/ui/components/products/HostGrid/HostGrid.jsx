import {Grid} from "@mui/material";
import AccommodationCard from "../AccommodationCard/AccommodationCard.jsx";
import HostCard from "../HostCard/HostCard.jsx";
import "./HostGrid.css"
const HostGrid = ({hosts, onEdit, onDelete}) => {
    return (
        <Grid container spacing={2} className="hostGridContainer">
            {hosts.map((host) => (
                <Grid item key={host.id} className="hostGridItem">
                    <HostCard host={host} onEdit={onEdit} onDelete={onDelete} />
                </Grid>
            ))}
        </Grid>
    );
};

export default HostGrid;
