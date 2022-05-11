import React from 'react';
import { getUserDetails } from "../../utils/api"
import { useNavigate } from 'react-router-dom'
export function DashboardPage() {
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const navigate = useNavigate()
    React.useEffect(() => {
        getUserDetails()
        .then(({data}) => {
            setUser(data)
            console.log(data)
            setLoading(false)
        }).catch((err) => {
            navigate('/')
            setLoading(false)
        })
    }, [navigate])
    return !loading && (
        <div>
            <h1>DashboardPage</h1>
        </div>
    )
}