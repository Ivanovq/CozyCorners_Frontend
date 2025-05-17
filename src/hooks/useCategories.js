import { useState, useEffect } from "react";
import axios from "axios";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:9091/api/accommodations/accommodation-types")
            .then(response => {
                setCategories(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { categories, loading, error };
};

export default useCategories;
