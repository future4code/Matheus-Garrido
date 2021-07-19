type BankStatement = {
        valor: number ,
        date: string,
        description: string
}

export type Client = {
    id: number,
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    statement: BankStatement[] | null
}