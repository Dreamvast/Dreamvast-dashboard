import axios from 'axios';

export function getUserDetails() {
    return axios.get(`http://localhost:1193/api/auth`, {
    withCredentials: true })
}