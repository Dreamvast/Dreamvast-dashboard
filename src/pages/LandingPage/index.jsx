import { Button } from '@chakra-ui/react'
export function LandingPage() {
    const login = () => window.location.href = process.env.LOGIN_URL
    return (
        <Button variantColor="blue" onClick={login} >Login</Button>
    )
}