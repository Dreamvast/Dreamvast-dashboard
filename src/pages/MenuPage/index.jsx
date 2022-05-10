import React from 'react';
import { getUserDetails } from "../../utils/api"
export function MenuPage({ history }) {
    const [user, setUser] = React.useState(null)
    React.useEffect(() => {
        getUserDetails()
        .then(({data}) => {
            setUser(data)
            console.log(data)
        }).catch((err) => {
            history.push('/')
        })
    }, [history])
    return (
        <h1>MenuPage</h1>
    )
}