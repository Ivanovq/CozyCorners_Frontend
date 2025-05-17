import {useCallback, useEffect, useState} from "react";
import hostRepository from "../repository/hostRepository.js";
import accommodationRepository from "../repository/accommodationRepository.js";

const initialState ={
    "hosts":[],
    "loading":true,
};
const useHosts = () =>{

    const [ state,setState]=useState(initialState);
    const fetchHosts= useCallback(()=>{
        hostRepository.findAll().then((response)=>{
            setState({
                "hosts":response.data,
                "loading":false,
            });
        })
            .catch((error)=>console.log(error));
    },[]);
    const onAdd = useCallback((data) => {
        hostRepository
            .add(data)
            .then(() => {
                console.log("Successfully added a new host.");
                fetchHosts();
            })
            .catch((error) => console.log(error));
    }, [fetchHosts]);

    useEffect(() => {
        fetchHosts();  // <-- Оваа ја повикуваш овде!
    }, [fetchHosts]);

    const onEdit = useCallback((id, data) => {
        hostRepository
            .edit(data, id)
            .then(() => {
                console.log(`Successfully edited the host with ID ${id}.`);
                fetchHosts();
            })
            .catch((error) => console.log(error));
    }, [fetchHosts]);

    const onDelete = useCallback((id) => {
        hostRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted the host with ID ${id}.`);
                fetchHosts();
            })
            .catch((error) => console.log(error));
    }, [fetchHosts]);

    return {...state,onAdd,onEdit,onDelete}
};
export default useHosts;