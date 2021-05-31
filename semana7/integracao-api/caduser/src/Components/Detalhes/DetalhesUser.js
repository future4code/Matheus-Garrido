import axios from 'axios'
import React from 'react'

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"

export default class DetalhesUser extends React.Component {


    state = {
        nome: "",
        email: "",
        statusDelete: "no"
    }

    moreInfo = () => {
        const header = {
            headers: {
                Authorization: "matheus-garrido-paiva"
            }
        }

        axios
            .get(`${url}${this.props.idUserMoreInfos}`, header)
            .then((res) => {
                this.setState({ nome: res.data.name })
                this.setState({ email: res.data.email })
            })

    }

    componentDidMount() {
        this.moreInfo()
    }

    excluirUsuario = (idUser) => {
        const header = {
            headers: {
                Authorization: "matheus-garrido-paiva"
            }
        }

        if (window.confirm('Tem certeza que deseja deletar este usuário?')) {
            axios
                .delete(`${url}${idUser}`, header)
                .then((res) => {
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        this.setState({ statusDelete: "yes" })
    }

    render() {

        if (this.state.statusDelete === "no") {
            return (
                <div>
                    <h3>Detalhes do Usuário:</h3>
                    <div>
                        <p><strong>Usuário: </strong>{this.state.nome}</p>
                        <p><strong>E-mail: </strong>{this.state.email}</p>
                    </div>
                    <button onClick={() => this.excluirUsuario(this.props.idUserMoreInfos)}>Deletar Usuário</button>
                    <button onClick={() => this.props.getInfosUsuarios()}>Voltar</button>
                </div>
            )
        } else if (this.state.statusDelete === "yes") {
            return (
                <div>
                    <h3>⚠️ Usuário deletado ⚠️</h3>
                    <button onClick={() => this.props.getInfosUsuarios()}>Voltar</button>
                </div>
            )
        }





    }
}