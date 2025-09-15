import { signOut, useSession } from '@/lib/auth-client' // import the auth client
import { Button } from './ui/button'

export default function User() {
    const { data: session, isPending, error } = useSession()

    if (isPending) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <div>
            {session ? (
                <div>
                    <p>Hello {session.user.name}</p>
                    <Button onClick={() => void signOut()}>Sign out</Button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
