import axios from 'axios';

const optionsAnimal = {
    baseURL:
        `https://anime-facts-rest-api.herokuapp.com/`,
};

export const clientInstanceAnimal = axios.create(optionsAnimal);

export const clientAnimal = {
    getTest: () => clientInstanceAnimal.get(`api/v1`),
    getTestError: () => clientInstanceAnimal.get(`api/v10`)
};