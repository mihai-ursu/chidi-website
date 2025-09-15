import { signIn } from '@/lib/auth-client'
import { Button } from './ui/button'

export default function LogIn() {
    const handleLogin = () => {
        void signIn.social({
            provider: 'github',
            callbackURL: 'http://localhost:4321/welcome',
            errorCallbackURL: 'http://localhost:4321/error',
            newUserCallbackURL: 'http://localhost:4321/welcome',
        })
    }

    return (
        <div>
            <Button onClick={handleLogin}>Log In</Button>
        </div>
    )
}
