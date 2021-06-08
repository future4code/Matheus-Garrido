import {useEffect, useState} from 'react'
import axios from 'axios'

const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-garrido-paiva"

const useRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)

    const getTrips = () => {
        axios
        .get(`${urlBase}${url}`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    };

    useEffect(() => {
        getTrips();
    }, []);

    return data;
}

export default useRequestData;