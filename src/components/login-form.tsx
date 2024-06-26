import { login } from '@/lib/firebase'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, LoginFormType } from '@/lib/types'
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

export default function LoginForm() {
  // 1. Define your form.
  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      userEmail: '',
      userPassword: '',
      rememberUser: false
    }
  })

  const { control, handleSubmit, watch, setValue, formState, reset } = form

  const { userEmail, userPassword, rememberUser } = watch()

  const toggleRemember = () => setValue('rememberUser', !rememberUser)

  // 2. Define a submit handler.
  async function onSubmit({
    userEmail,
    userPassword,
    rememberUser
  }: LoginFormType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    // const user = await login(values.username, values.password)
    console.log('values', [userEmail, userPassword, rememberUser])
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-xl">
        <FormField
          control={control}
          name="userEmail"
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
          control={control}
          name="userPassword"
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
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="rememberUser"
            render={() => (
              <FormItem>
                <FormControl>
                  <div className="space-x-3 items-center flex">
                    <Checkbox
                      checked={rememberUser}
                      onClick={toggleRemember}
                      className="rounded"
                      id="rememberCheckbox"
                      disabled={!userEmail.length || !userPassword.length}
                    />
                    <FormLabel
                      htmlFor="rememberCheckbox"
                      className="cursor-pointer"
                    >
                      Remember me
                    </FormLabel>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <a href="#">Forgot Password?</a>
        </div>

        <FancyButton
          title="Log in"
          className="w-full"
          isDisable={
            !userEmail.length || !userPassword.length || formState.isSubmitting
          }
          isSubmit
        />
      </form>
    </Form>
  )
}
