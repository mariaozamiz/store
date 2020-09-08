const getDataFromApi = () => {
    return fetch(
        'https://beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json'
    )
        .then((response) => response.json())
        .then((data) => {
            return data.cart.items;
        })
        .catch((err) => {
            console.error('Se ha producido un error:', err);
        });
};

export default getDataFromApi;
