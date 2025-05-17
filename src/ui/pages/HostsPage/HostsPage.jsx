import { Box, Button, CircularProgress } from "@mui/material";
import useHosts from "../../../hooks/useHosts.js";
import HostGrid from "../../components/products/HostGrid/HostGrid.jsx";
import { useState } from "react";
import AddHostDialog from "../../components/products/AddHostDialog/AddHostDialog.jsx";
import './HostsPage.css';  // Важно: повикај го CSS фајлот

const HostPage = () => {
    const { hosts, loading, onAdd, onEdit, onDelete } = useHosts();
    const [AddHostDialogOpen, setAddHostDialogOpen] = useState(false);

    return (
        <>
            <Box>
                {loading && (
                    <Box className="loading-box">
                        <CircularProgress />
                    </Box>
                )}
                {!loading && (
                    <>
                        <Box className="button-container">
                            <Button
                                variant="contained"
                                className="add-host-button"
                                onClick={() => setAddHostDialogOpen(true)}
                            >
                                Add Host
                            </Button>
                        </Box>

                        <HostGrid hosts={hosts} onEdit={onEdit} onDelete={onDelete} />
                    </>
                )}
            </Box>

            <AddHostDialog
                open={AddHostDialogOpen}
                onClose={() => setAddHostDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default HostPage;
