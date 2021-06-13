import {useEffect, useState} from 'react'
import axios from 'axios'
import {BASE_URL} from '../constants/url'

const urlBase = BASE_URL;

const useRequestData = (initialState, url, headerParam, didMount) => {

    const [data, setData] = useState(initialState)

    const getTrips = () => {

        const header = {
            headers: headerParam
        }

        axios
        .get(`${urlBase}${url}`, header)
        .then((res) => {
            setData(res.data)
        })
        .catch(() => {
            alert("Algo deu errado, tente novamente!")
        })
    };

    useEffect(() => {
        getTrips();
    }, didMount ? [data] : []);

    return data;
}

export default useRequestData;