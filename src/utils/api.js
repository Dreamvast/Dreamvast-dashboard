import axios from 'axios';

export function getUserDetails() {
    return axios.get(`https://dreamvastapi.up.railway.app/api/auth`, { withCredentials: true })
}

export function getGuilds() {
    return axios.get(`https://dreamvastapi.up.railway.app/api/discord/guilds`, { withCredentials: true })
}