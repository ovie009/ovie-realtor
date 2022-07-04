import axios from 'axios';

export const baseUrl =  'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '3eaff5cffamsh4ba388021f1a09fp1e51a6jsn32bda4a29cf0',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
}