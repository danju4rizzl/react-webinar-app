import { z } from 'zod'
import { SLIDER_DATA } from './constance'

// types.ts

/**
 * SignupSchema defines the validation schema for the signup form.
 * It includes fields for username, email, and a boolean to indicate
 * acceptance of terms and conditions.
 */
export const SignupSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  email: z.string().min(2, {
    message: 'Email must be at least 2 characters.'
  }),
  accepted: z
    .boolean()
    .default(false)
    .refine((value) => value !== true, {
      message: 'You must accept the Terms and Conditions.'
    })
})

/**
 * LoginSchema defines the validation schema for the login form.
 * It includes fields for username and password.
 */
export const LoginSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  password: z.string().min(2, {
    message: 'Password must be at least 2 characters.'
  }),
  remember: z.boolean().default(false).optional()
})

/**
 * LoginFormType is the inferred type from the LoginSchema.
 * It represents the shape of the login form data.
 */
export type LoginFormType = z.infer<typeof LoginSchema>

/**
 * SignupFormType is the inferred type from the SignupSchema.
 * It represents the shape of the signup form data.
 */
export type SignupFormType = z.infer<typeof SignupSchema>

/**
 * SliderData represents the structure of data for a slider component.
 * It includes a title, description, and the source URL of the image.
 */

export type ImageSliderData = typeof SLIDER_DATA
