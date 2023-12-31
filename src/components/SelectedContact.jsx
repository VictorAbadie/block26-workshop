import { useState, useEffect } from "react";

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"

export default function SelectedContact({selectedContactId}) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact(){
        try {
            const response = await fetch (`${API_URL}/${selectedContactId}`);
            const result = await response.json();
            setContact(result);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    if(selectedContactId) {
        fetchContact();
    } else {
        setContact(null)
    }
 }, [selectedContactId]); }
