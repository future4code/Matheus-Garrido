import {app} from './app'
import { getAllClients } from './endpoints/getAllClients'
import { getClientByCpf } from './endpoints/getClientByCpf'
import { registerClient } from './endpoints/registerClient'

app.get("/clients", getAllClients)
app.get("/clients/:cpf", getClientByCpf)
app.post("/register", registerClient)

//https://codesandbox.io/s/gxgfw
