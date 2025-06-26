import axios from "axios";

export const getAPIValue = (
    coinTarget, coinBaseValue) => 
        axios.get(
            `https://v6.exchangerate-api.com/v6/${process.env.KEY}/pair/BRL/${coinTarget}/${coinBaseValue}`
        )

export const getAPIRated = (
    () => axios.get(
        `https://v6.exchangerate-api.com/v6/${process.env.KEY}/latest/BRL`
    )
)