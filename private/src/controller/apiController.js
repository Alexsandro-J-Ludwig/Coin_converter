import {getAPIRated, getAPIValue} from "../service/apiService.js";

export async function getCoin(req, res) {
    try {
        const { coinTarget, coinBaseValue } = req.query;

        if(!coinTarget && !coinBaseValue){
            return res.status(400).send("Missing data")
        }

        const response = await getAPIValue(coinTarget, coinBaseValue);

        return res.json(response.data)

    } catch (error) {
        console.error(error)
        res.json("Error ocorred in external conversor API")
    };
};

export async function getRated(req, res) {
    try {
        const response = await getAPIRated();

        return res.json(response.data);

    } catch (error) {
        console.error(error);
        res.json("An error occurred while requesting exchange rates from the external API");
    };
};

