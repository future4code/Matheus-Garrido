import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Perfil(props) {

    const [usuario, setUsuario] = useState({})
    console.log(props.newPerfil)

    useEffect(() => {
        const getProfileToChoose = () => {
            axios
            .get(`${props.urlBase}person`)
            .then((res) => {
                setUsuario(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })
        };
        getProfileToChoose();
    }, [props.newPerfil])

    return (
        <div>
            {usuario.photo ?
                <div>
                    <img src={usuario.photo}></img>
                    <h3>{`${usuario.name}, ${usuario.age}`}</h3>
                    <p>{usuario.bio}</p> 
                    {props.idProfile(usuario.id)}
                </div>
            : 
                <p>Carregando perfis próximos a você</p>
            }
            
        </div>
    )
}
