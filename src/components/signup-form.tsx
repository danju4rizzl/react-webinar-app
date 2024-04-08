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
import { useState } from 'react'

import { useToast } from './ui/use-toast'

export default function SignupForm() {
  const [acceptTerms, setAcceptTerms] = useState(false)
  const { toast } = useToast()

  // 1. Define your form.
  const form = useForm<SignupFormType>({
    resolver: zodResolver(SignupSchema)
  })

  // 2. Define a submit handler.
  async function onSubmit({ userEmail, userPassword }: SignupFormType) {
    const { reset } = form
    const data = await signUp(userEmail, userPassword)

    toast({
      title: 'Signup Success',
      description: 'You have successfully signed up'
    })
    reset()
    console.log(data)
  }

  const { watch, formState } = form
  const { userEmail, userPassword } = watch()
  const isSubmitDisabled =
    !userPassword ||
    userPassword.length < 6 ||
    !userEmail ||
    formState.isSubmitting

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-xl"
      >
        <FormField
          control={form.control}
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
          control={form.control}
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

        <div className="flex items-center justify-between">
          <div className="space-x-3 items-center flex">
            <Checkbox
              checked={acceptTerms}
              onClick={() => setAcceptTerms((prev) => !prev)}
              className="rounded"
              id="acceptedCheckbox"
              disabled={isSubmitDisabled}
            />
            <FormLabel htmlFor="acceptedCheckbox">
              I agree with Terms and Conditions
            </FormLabel>
          </div>
        </div>

        <FancyButton
          title="Sign Up"
          className="w-full"
          isSubmit
          isDisable={!acceptTerms || isSubmitDisabled}
        />
      </form>
    </Form>
  )
}
