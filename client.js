import axios from 'axios';

const optionsAnimes = {
    baseURL:
        `https://anime-facts-rest-api.herokuapp.com/`,
};

export const clientInstanceAnimes = axios.create(optionsAnimes);

export const clientAnimes = {
    getTest: () => clientInstanceAnimes.get(`api/v1`),
    getTestError: () => clientInstanceAnimes.get(`api/v10`)
};