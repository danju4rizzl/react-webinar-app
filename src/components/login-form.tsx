'use client'

import { login } from '@/lib/firebase'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, LoginFormType } from '@/lib/types'
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
import FancyButton from './ui/fancy-button'
import { Link } from '@tanstack/react-router'

export default function LoginForm() {
  // 1. Define your form.
  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: '',
      password: '',
      remember: false
    }
  })

  // 2. Define a submit handler.
  async function onSubmit(values: LoginFormType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const user = await login(values.username, values.password)
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
              <FormControl>
                <Input
                  placeholder="Enter your username"
                  {...field}
                  className="focus:outline-teal-300 border-teal-100 rounded"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter your  password"
                  {...field}
                  className="focus:outline-teal-300 border-teal-100 rounded"
                  type="password"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="space-x-3 items-center flex">
                    <Checkbox
                      checked={field.value}
                      onChange={field.onChange}
                      className="rounded"
                    />
                    <FormLabel>Remember me</FormLabel>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormItem>
            <FormControl>
              <a href="/">Forgot Password?</a>
            </FormControl>
          </FormItem>
        </div>

        <FancyButton title="Log in" className="w-full" isSubmit />

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

        <div className="flex justify-center space-x-1">
          <p>Don’t have an account?</p>
          <Link to="/signup" className="text-teal-300">
            SignUp
          </Link>
        </div>
      </form>
    </Form>
  )
}
