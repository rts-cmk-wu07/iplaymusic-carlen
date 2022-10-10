import axios from "axios";
import { useState, useEffect, useContext } from "react";
import TokenContext from "../context/TokenContext";

export default function useFetch(url){
    const [data, setData] = useState({});
    const [error, setError] = useState(null)

    const {tokenData, setTokenData} = useContext(TokenContext)
    const { token } = tokenData

    useEffect(() => {
        if(!token) return;
        if(!url) return;
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        
})
        .then((response) => {
            if(response.status >= 200 && response.status <300) {
                setData(response.data)
            }
         else {
            setError(response.status);
        }
    });
    }, [token, url, setTokenData]);

    return {data, error};
}