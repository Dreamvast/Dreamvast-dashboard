import React from 'react';
import { getUserDetails } from "../../utils/api"
import { useNavigate } from 'react-router-dom'
export function MenuPage() {
    const [user, setUser] = React.useState(null)
    const navigate = useNavigate()
    React.useEffect(() => {
        getUserDetails()
        .then(({data}) => {
            setUser(data)
            console.log(data)
        }).catch((err) => {
            navigate('/')
        })
    }, [])
    return (
        <h1>MenuPage</h1>
    )
}