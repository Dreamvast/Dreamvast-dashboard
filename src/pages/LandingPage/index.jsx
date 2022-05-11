import { Button } from '@chakra-ui/react'
export function LandingPage() {
    const login = () => window.location.href = 'http://localhost:1193/api/auth/discord'
    return (
        <Button variantcolor="blue" onClick={login} >Login</Button>
    )
}