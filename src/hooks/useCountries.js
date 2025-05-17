import {useCallback, useEffect, useState} from "react";
import hostRepository from "../repository/hostRepository.js";
import accommodationRepository from "../repository/accommodationRepository.js";
import countryRepository from "../repository/countryRepository.js";

const initialState ={
    "countries":[],
    "loading":true,
};
const useCountries = () =>{

    const [ state,setState]=useState(initialState);
    const fetchCountries= useCallback(()=>{
         countryRepository.findAll().then((response)=>{
            setState({
                "countries":response.data,
                "loading":false,
            });
        })
            .catch((error)=>console.log(error));
    },[]);
    const onAdd = useCallback((data) => {
        countryRepository
            .add(data)
            .then(() => {
                console.log("Successfully added a new host.");
                fetchCountries();
            })
            .catch((error) => console.log(error));
    }, [fetchCountries()]);

    const onEdit = useCallback((id, data) => {
        countryRepository
            .edit(id, data)
            .then(() => {
                console.log(`Successfully edited the accommodation with ID ${id}.`);
                fetchCountries();
            })
            .catch((error) => console.log(error));
    }, [fetchCountries()]);
    useEffect(() => {
        fetchCountries();  // <-- Оваа ја повикуваш овде!
    }, [fetchCountries]);
    const onDelete = useCallback((id) => {
        countryRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted the product with ID ${id}.`);
                fetchCountries();
            })
            .catch((error) => console.log(error));
    }, [fetchCountries]);

    return {...state,onAdd,onEdit,onDelete}
};
export default useCountries;