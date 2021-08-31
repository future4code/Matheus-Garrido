import {Request, Response} from 'express'
import {clients} from '../data'

export const getAllClients = (
    req: Request, 
    res: Response
) => {
    let errorCode: number = 400
    try {
        let search = req.query.name as string
        if (search) {
            search.toLowerCase()
            const clientSearched = clients.filter(
                user => user.name.toLowerCase().includes(search)
            )

            if (clientSearched.length === 0) {
                errorCode = 404
                throw new Error("No client was found")
            }

            const users = clientSearched.map(user => ({
                id: user.id,
                name: user.name
            }))
            
            res.status(200).send(users)
        }

        const users = clients.map(user => ({
            id: user.id,
            name: user.name
        }))
        res.status(200).send(users)

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}