import {Client} from "./type"

export const clients: Client[] = [
    {
        "id": 0,
        "name": "Matheus",
        "cpf": "011.012.013-14",
        "birthDate": "16/02/1993",
        "balance": 0,
        "statement": null
    },
    {
        "id": 1,
        "name": "Jonatas",
        "cpf": "011.012.013-15",
        "birthDate": "16/02/1994",
        "balance": 1000,
        "statement": [
            {
                "valor": 220,
                "date": "16/07/2021",
                "description": "Boleto internet"
            },
            {
                "valor": 500,
                "date": "16/07/2021",
                "description": "Supermecado"
            },
        ]
    },
    {
        "id": 2,
        "name": "Bruce",
        "cpf": "011.012.013-16",
        "birthDate": "16/02/2000",
        "balance": 5000,
        "statement": [
            {
                "valor": 120,
                "date": "16/07/2021",
                "description": "Boleto internet"
            },
            {
                "valor": 1500,
                "date": "16/07/2021",
                "description": "Supermecado"
            },
            {
                "valor": 150,
                "date": "16/07/2021",
                "description": "Internet"
            },
        ]
    },
    {
        "id": 3,
        "name": "Tobby",
        "cpf": "011.012.013-17",
        "birthDate": "18/05/2010",
        "balance": 3000,
        "statement": [
            {
                "valor": 120,
                "date": "16/07/2021",
                "description": "Boleto internet"
            },
            {
                "valor": 1500,
                "date": "16/07/2021",
                "description": "Supermecado"
            },
            {
                "valor": 150,
                "date": "16/07/2021",
                "description": "Internet"
            },
        ]
    },
]