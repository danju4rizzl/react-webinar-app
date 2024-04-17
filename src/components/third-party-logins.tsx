import { loginWithGoogle } from '@/lib/firebase'
import { Button } from '@/components/ui/button'

import GoogleIcon from '@/assets/google.svg'
import AppleIcon from '@/assets/apple.svg'

import { toast } from '@/components/ui/use-toast'
import { Separator } from './ui/separator'
import { useAuth } from '@/auth'
import { flushSync } from 'react-dom'
import { useNavigate } from '@tanstack/react-router'

const ThirdPartyLogins = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleGoogleProvider = async () => {
    const userFromGoogle = await loginWithGoogle()

    if (userFromGoogle) {
      flushSync(() => {
        auth.setUser(userFromGoogle)
      })
      navigate({ to: '/app' })
    }
  }

  return (
    <div className="flex justify-center items-center space-x-4">
      <Button onClick={handleGoogleProvider} className="hover:bg-neutral-800">
        <img
          src={GoogleIcon}
          alt="Log in with Google"
          className="w-6 h-6 mr-2"
        />
        Google Account
      </Button>
      <Separator orientation="vertical" />

      <Button
        onClick={() =>
          toast({
            title: 'Coming Soon',
            description: `We currently do not support login with Apple, but we're working one it.`,
            duration: 5000
          })
        }
        className="hover:bg-neutral-800"
      >
        <img
          src={AppleIcon}
          alt="Log in with Apple"
          className="w-6 h-6  mr-2"
        />
        Apple Account
      </Button>
    </div>
  )
}

export default ThirdPartyLogins
