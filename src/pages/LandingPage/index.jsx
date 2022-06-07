import { Button } from '@chakra-ui/react'
export function LandingPage() {
    const login = () => window.location.href = 'https://dreamvastapi.up.railway.app/api/auth/discord'
    return (
        <Button variantcolor="blue" onClick={login} >Login</Button>
    )
}