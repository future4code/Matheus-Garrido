import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Conversas(props) {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        const getMatches = () => {
            axios
            .get(`${props.urlBase}matches`)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                console.log(err)
            })
        };
        getMatches();
    }, [setMatches])

    return (
        <div>
            {matches.map((usuarios) => {
                return (
                    <div key={usuarios.id}>
                        <img src={usuarios.photo}></img>
                        <p>{usuarios.name}</p>
                    </div>
                )
            })}
        </div>
    )
}