import { useState } from 'react'
import { flushSync } from 'react-dom'
import { useNavigate } from '@tanstack/react-router'
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
import { useAuth } from '@/auth'

export default function SignupForm() {
  const { toast } = useToast()
  const [showPassword, setShowPassword] = useState(false)

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

  const auth = useAuth()
  const navigate = useNavigate()

  async function onSubmit({ userEmail, userPassword }: SignupFormType) {
    const data = await signUp(userEmail, userPassword)
    if (data) {
      // using the flushSync function to update the user's authentication information with the data provided. The flushSync function ensures that the update is synchronous, meaning that it is processed immediately without waiting for other tasks to finish.
      flushSync(() => {
        auth.setUser(data)
      })

      toast({
        title: 'Signup Successful',
        description: 'You have successfully signed up'
      })
      reset()
      navigate({ to: '/app' })
    } else {
      toast({
        title: 'Signup Error',
        description: 'Sorry, email account already exist',
        variant: 'destructive',
        duration: 3000
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-xl">
        {/* Email field */}
        <FormField
          control={control}
          name="userEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="emailInput">Email Address</FormLabel>
              <FormControl>
                <Input
                  id="emailInput"
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

        {/* Password field */}
        <FormField
          control={control}
          name="userPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="passwordInput">New Password</FormLabel>
              <FormControl>
                <div className="space-y-3">
                  <Input
                    id="passwordInput"
                    placeholder="Enter a new password"
                    {...field}
                    className="focus:outline-teal-300 border-teal-100 rounded"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <div className="flex items-center mx-1 space-x-3">
                    <Checkbox
                      checked={showPassword}
                      onClick={() => setShowPassword(!showPassword)}
                      className="rounded"
                      id="showPassword"
                    />
                    <FormLabel htmlFor="showPassword">Show password</FormLabel>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Password field */}
        <FancyButton
          title="Sign Up"
          className="w-full"
          isSubmit
          isDisable={
            !userEmail || !userPassword || !userAgreed || formState.isSubmitting
          }
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
                    onClick={() => setValue('userAgreed', !userAgreed)}
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
      </form>
    </Form>
  )
}
