import { Request, Response } from "express"
import { countries } from "../data"
import { country } from "../types"

export const getCountryById = (
    req: Request,
    res: Response
): void => {
    const countryFiltered: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )

    if (countryFiltered) {
        res.status(200).send(countryFiltered)
    } else {
        res.status(404).send("Not found")
    }
}