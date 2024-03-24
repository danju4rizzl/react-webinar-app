import { z } from 'zod'

export const SignupSchema = z.object({
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

export const LoginSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  password: z.string().min(2, {
    message: 'Password must be at least 2 characters.'
  }),
  remember: z.boolean().default(false).optional()
})

export type LoginFormType = z.infer<typeof LoginSchema>

export type SignupFormType = z.infer<typeof SignupSchema>
