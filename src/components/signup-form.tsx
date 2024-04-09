import { signUp } from '@/lib/firebase'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupSchema, SignupFormType } from '@/lib/types'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import FancyButton from './ui/fancy-button'

import { useToast } from './ui/use-toast'

export default function SignupForm() {
  const { toast } = useToast()

  // 1. Define your form.
  const form = useForm<SignupFormType>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      userEmail: '',
      userPassword: '',
      userAgreed: false
    }
  })

  const { control, watch, formState, reset, setValue, handleSubmit } = form

  const { userEmail, userPassword, userAgreed } = watch()

  const toggleAgreed = () => setValue('userAgreed', !userAgreed)

  async function onSubmit({ userEmail, userPassword }: SignupFormType) {
    const data = await signUp(userEmail, userPassword)
    if (data.email) {
      toast({
        title: 'Signup Successful',
        description: 'You have successfully signed up'
      })
      reset()
    } else {
      toast({
        title: 'Signup Error',
        description: 'something happened, email account  already exist'
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-xl">
        <FormField
          control={control}
          name="userEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a your email address"
                  className="focus:outline-teal-300 border-teal-100 rounded"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="userPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a new password"
                  {...field}
                  className="focus:outline-teal-300 border-teal-100 rounded"
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="userAgreed"
          render={() => (
            <FormItem>
              <FormControl>
                <div className="space-x-3 items-center flex">
                  <Checkbox
                    checked={userAgreed}
                    onClick={toggleAgreed}
                    className="rounded"
                    id="acceptedCheckbox"
                    disabled={!userEmail || !userPassword}
                  />
                  <FormLabel htmlFor="acceptedCheckbox">
                    I agree with Terms and Conditions
                  </FormLabel>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <FancyButton
          title="Sign Up"
          className="w-full"
          isSubmit
          isDisable={
            !userEmail || !userPassword || !userAgreed || formState.isSubmitting
          }
        />
      </form>
    </Form>
  )
}
