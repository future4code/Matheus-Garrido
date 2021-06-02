import React from 'react'
import axios from 'axios'

export default function Match(props) {

    const choosePerson = (match) => {
        const header = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = {
            id: props.id,
            choice: match
        }
        axios
        .post(`${props.urlBase}choose-person`, body, header)
        .then(() => {
            props.atualizaPerfil()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <button onClick={() => choosePerson(false)}>❌</button>
            <button onClick={() => choosePerson(true)}>🧡</button>
        </div>
    )
}