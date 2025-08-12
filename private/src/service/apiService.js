export const getAPIValue = async (coinTarget, coinBaseValue) => {
    const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.KEY}/pair/BRL/${coinTarget}/${coinBaseValue}`
    );
    return response.json();
};

export const getAPIRated = async () => {
    const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.KEY}/latest/BRL`
    );
    return response.json();
};