import {Request, Response} from 'express'
import {clients} from '../data'

export const getClientByCpf = (
    req: Request, 
    res: Response
) => {
    let errorCode: number = 400
    try {
        let cpfSearched = req.params.cpf

        if (cpfSearched.length !== 11) {
            errorCode = 404
            throw new Error("Please enter valid params values")
        }

        const cpfFormated: string = `${cpfSearched.substr(0,3)}.${cpfSearched.substr(3,3)}.${cpfSearched.substr(6,3)}-${cpfSearched.substr(9,2)}`

        const clientSearched = clients.find(
            user => user.cpf === cpfFormated
        )

        if (clientSearched) {
            res.status(200).send(
                {
                    name: clientSearched.name,
                    balance: clientSearched.balance
                })
        } else {
            errorCode = 404
            throw new Error("No client was found")
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}