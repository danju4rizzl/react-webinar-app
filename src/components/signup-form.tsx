'use client'

import { signUp } from '@/lib/firebase'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

import GoogleIcon from '@/assets/google.svg'
import AppleIcon from '@/assets/apple.svg'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username  must be at least 2 characters.'
  }),
  email: z.string().min(2, {
    message: 'Password must be at least 2 characters.'
  }),
  accepted: z
    .boolean()
    .default(false)
    .refine((value) => value !== true, {
      message: 'You must accept the Terms and Conditions.'
    })
})

export default function SignupForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      accepted: false
    }
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const user = await signUp(values.username, values.email)
    console.log(user)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-xl"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Create a username"
                  {...field}
                  className="focus:outline-teal-300 border-teal-100 rounded"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  {...field}
                  className="focus:outline-teal-300 border-teal-100 rounded"
                  type="email"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="accepted"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="space-x-3 items-center flex">
                    <Checkbox
                      checked={field.value}
                      onChange={field.onChange}
                      className="rounded"
                    />
                    <FormLabel>I agree with Terms and Conditions</FormLabel>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-green-300 rounded text-neutral-900 hover:text-neutral-100 hover:bg-green-900 transition-all"
        >
          Sign Up
        </Button>

        <div className="flex justify-center items-center">
          <hr className="flex-1 border-neutral-600" />
          <small className="text-neutral-500 mx-2">or continue with</small>
          <hr className="flex-1 border-neutral-600" />
        </div>

        <div className="flex justify-center items-center space-x-4">
          <Button>
            <img
              src={GoogleIcon}
              alt="Log in with Google"
              className="w-6 h-6 mr-2"
            />
            Google Account
          </Button>
          <Button variant={'secondary'}>
            <img
              src={AppleIcon}
              alt="Log in with Apple"
              className="w-6 h-6  mr-2"
            />
            Apple Account
          </Button>
        </div>
      </form>
    </Form>
  )
}
