import { getAPIRated, getAPIValue } from "../service/apiService.js";

export async function getCoin(req, res) {
    try {
        const { coinTarget, coinBaseValue } = req.query;

        if (!coinTarget || !coinBaseValue) {
            return res.status(400).send("Missing required parameters: coinTarget and/or coinBaseValue");
        }

        const response = await getAPIValue(coinTarget, coinBaseValue);

        return res.json(response);

    } catch (err) {
        console.error("Error in getCoin:", err.message);
        res.status(500).send("An error occurred while fetching conversion data");
    }
};

export async function getRated(req, res) {
    try {
        const response = await getAPIRated();

        return res.json(response);

    } catch (err) {
        console.error("Error in getRated:", err.message);
        res.status(500).send("An error occurred while fetching exchange rates");
    }
};

