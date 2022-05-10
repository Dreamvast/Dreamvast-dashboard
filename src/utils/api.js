import axios from 'axios';

export function getUserDetails() {
    return axios.get(process.env.AUTH_URL, {
    withCredentials: true })
}