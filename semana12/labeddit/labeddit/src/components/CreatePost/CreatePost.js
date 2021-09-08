import React, { useContext } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import useForm from '../../hooks/useForm'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { InputsContainer, StyledGrid } from './styled'

export default function CreatePost() {

    const { getPosts } = useContext(GlobalStateContext)

    const { form, onChange, cleanFields } = useForm({
        title: "",
        body: ""
    })

    const onClickCreatePost = (event) => {
        event.preventDefault();
        const body = form;
        const header = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        axios
            .post(`${BASE_URL}/posts`, body, header)
            .then((res) => {
                cleanFields();
                getPosts()
            })
    }

    return (
        <StyledGrid item xs={15} alignItems="center" justify="center">
            <Paper>
                <InputsContainer>
                    <form onSubmit={onClickCreatePost}>
                        <TextField
                            label="Título"
                            name={"title"}
                            value={form.title}
                            onChange={onChange}
                            required
                            inputProps={{ pattern: "^.{5,}" }}
                            title={"O título deve conter ao menos 5 caracteres"}
                            variant="outlined"
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label="Texto"
                            name={"body"}
                            value={form.body}
                            onChange={onChange}
                            required
                            multiline
                            rows={6}
                            inputProps={{ pattern: "^.{10,}" }}
                            title={"O post deve conter ao menos 10 caracteres"}
                            variant="outlined"
                            fullWidth
                            margin="dense"
                        />
                        <Button type={"submit"} variant="contained" color="secondary">Publicar</Button>
                    </form>
                </InputsContainer>
            </Paper>
        </StyledGrid>
    )
}