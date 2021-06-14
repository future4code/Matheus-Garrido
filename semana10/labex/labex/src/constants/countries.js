import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Countries(props) {

    const [allCountries, setAllCountries] = useState([])

    const listCountries = () => {
        axios
          .get("https://restcountries.eu/rest/v2/")
          .then((res) => {
            setAllCountries(res.data)
          })
          .catch(() => {
            alert("Aconteceu algum problema, tente novamente!")
          })
    };

    useEffect(() => {
        listCountries();
    }, []);

    const list = allCountries && allCountries.map((countrie) => {
        return (
            <option key={countrie.name} value={countrie.name}>{countrie.name}</option>
        )
    })

    return (
        <select
            defaultValue 
            name={props.name} 
            onChange={props.onChange}
        >
            {list}
        </select>
    )
}