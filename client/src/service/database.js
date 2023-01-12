import { DB_ADDRESS, DB_HEADERS } from "../service/constants";

export const addToCartWithDB = async (prodId) => {
    const response = await fetch(DB_ADDRESS + '/?action=add', {
        method: 'post',
        body: JSON.stringify({ "id": prodId }),
        headers: DB_HEADERS
    });
    const answer = await response.json();
    return answer
};

export const deleteFromCartWithDB = async (prodId) => {
    const response = await fetch(DB_ADDRESS + '/?action=del', {
        method: 'post',
        body: JSON.stringify({ "id": prodId }),
        headers: DB_HEADERS
    });
    const answer = await response.json();
    return answer
};

export const removeFromCartWithDB = async (prodId) => {
    const response = await fetch(DB_ADDRESS + '/?action=rmv', {
        method: 'post',
        body: JSON.stringify({ "id": prodId }),
        headers: DB_HEADERS
    });
    const answer = await response.json();
    return answer
};

export const clearCartWithDB = async () => {
    const response = await fetch(DB_ADDRESS + '/?action=clr');
    const answer = await response.json();
    return answer
};

export const initProductsData = async () => {
    const data = await fetch(DB_ADDRESS + '/?action=all', {
        headers: DB_HEADERS
    });
    const json = await data.json();
    return json
};

export const initCartData = async () => {
    const data = await fetch(DB_ADDRESS + '/?action=crt', {
        headers: DB_HEADERS
    });
    const json = await data.json();
    return json
};