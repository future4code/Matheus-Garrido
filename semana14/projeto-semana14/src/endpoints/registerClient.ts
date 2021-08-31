import {Request, Response} from 'express'
import {clients} from '../data'
import { Client } from '../type'

export const registerClient = (
    req: Request, 
    res: Response
) => {
    let errorCode: number = 400
    try {
        const { name, cpf, birthDate } = req.body

        const [day, month, year] = birthDate.split("/")
        const now: Date = new Date()
        const birth: Date = new Date(`${year}-${month}-${day}`)
        const diff: number = Math.abs(birth.getTime() - now.getTime())
        const diffYears: number = Math.floor(diff / (1000*60*60*24*365))
        
        if (!name || !cpf || !birthDate ) {
            errorCode = 422
            throw new Error("Please enter valid values in the body")
        }

        if (typeof name !== "string") {
            throw new Error("Invalid name")
        }

        if (typeof cpf !== "string") {
            throw new Error("Invalid cpf")
        } 

        if (typeof birthDate !== "string") {
            throw new Error("Invalid birthDate")
        } else if (typeof birthDate === "string") {
            if (diffYears < 18) {
                throw new Error("Client under 18 years old")
            }
        }
        
        clients.forEach(user => {
            if (user.cpf === cpf) {
                throw new Error("Client already registered")
            }
        })
        
        const newClient: Client = {
            id: clients.length,
            name,
            cpf,
            birthDate,
            balance: 0,
            statement: null
        }

        clients.push(newClient)

        res.status(201).send({ message: "Client created successefully" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}