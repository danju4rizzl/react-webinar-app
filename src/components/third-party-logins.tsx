import { loginWithGoogle } from '@/lib/firebase'
import { Button } from '@/components/ui/button'

import GoogleIcon from '@/assets/google.svg'
import AppleIcon from '@/assets/apple.svg'

import { toast } from '@/components/ui/use-toast'
import { Separator } from './ui/separator'

const ThirdPartyLogins = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <Button
        onClick={() => loginWithGoogle()}
        className="hover:bg-neutral-800"
      >
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
