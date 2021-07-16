import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"


enum USER_TYPE {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: USER_TYPE,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: USER_TYPE.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: USER_TYPE.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: USER_TYPE.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: USER_TYPE.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: USER_TYPE.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: USER_TYPE.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

//Exercício 1
//a. O método HTTP utilizado para buscar usuários deve ser o get
//b. A entidade manipulada é o usuário

app.get("/users", (req: Request, res:Response) => {

  const result = users.map(users => ({
        id: users.id,
        name: users.name
  }))
    res.status(200).send(result)
})

//Exercício 2

app.get('/users', (req: Request, res: Response) => {
  let codeError: number = 400
  try {
    const type: string = req.query.type as string
    const foundUsers: User[] | undefined = users.filter((user) => user.type === type)
    if(!foundUsers) {
      codeError = 404
      throw new Error('User not found')
    }
    res.status(200).send(foundUsers)
  } catch (error) {
    res.status(codeError).send({message: error.message})
  }
})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});