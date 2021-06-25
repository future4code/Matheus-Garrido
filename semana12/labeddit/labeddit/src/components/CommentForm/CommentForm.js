import React, {useContext} from 'react'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'
import useForm from '../../hooks/useForm'
import { GlobalStateContext } from '../../global/GlobalStateContext'

export default function ComentForm(props) {

    const {getPosts} = useContext(GlobalStateContext)

    const { form, onChange, cleanFields } = useForm({
        body: ""
    })

    const onClickCreateComent = (event) => {
        event.preventDefault();
        const body = form;
        const header = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        axios
        .post(`${BASE_URL}/posts/${props.id}/comments`, body, header)
        .then((res) => {
            getPosts()
            props.getData();
            cleanFields(); 
        })
    }
 
    return (
        <div>
            <form onSubmit={onClickCreateComent}>
                <input
                    placeholder="Texto"
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    required
                    pattern={"^.{3,}"}
                    title={"O comentário deve conter ao menos 10 caracteres"}
                />
                <button>Comentar</button>
            </form>
        </div>
    )
}