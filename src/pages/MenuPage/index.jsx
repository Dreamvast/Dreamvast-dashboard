import React from 'react';
import { getUserDetails, getGuilds } from "../../utils/api"
import { useNavigate } from 'react-router-dom'
import { MenuComponent } from '../../components'
export function MenuPage() {
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [ guilds, setGuilds ] = React.useState([])
    const navigate = useNavigate()
    React.useEffect(() => {
        getUserDetails()
        .then(({data}) => {
            setUser(data)
            console.log(data)
            setLoading(false)
            return getGuilds()
        }).then(({ data }) => {
            console.log(data)
            setGuilds(data)
        }).catch((err) => {
            console.log(err)
            navigate('/')
            setLoading(false)
        })
    }, [navigate])
    return !loading && (
        <div>
            <h1>MenuPage</h1>
            <MenuComponent guilds={ guilds }/>
        </div>
    )
}