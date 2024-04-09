import { z } from 'zod'
import { SLIDER_DATA } from './constance'

// types.ts

/**
 * SignupSchema defines the validation schema for the signup form.
 * It includes fields for username, email, and a boolean to indicate
 * acceptance of terms and conditions.
 */
export const SignupSchema = z.object({
  userEmail: z
    .string()
    .min(2, {
      message: 'Email must be at least 2 characters.'
    })
    .email({ message: 'Email address is not valid' }),
  userPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .refine(
      (value) => value.match(/[a-z]/),
      'Password must contain at least one lowercase letter'
    )
    .refine(
      (value) => value.match(/[A-Z]/),
      'Password must contain at least one uppercase letter'
    )
    .refine(
      (value) => value.match(/\d/),
      'Password must contain at least one number'
    )
    .refine(
      (value) => value.match(/[!@#$%^&*(),.?":{}|<>]/),
      'Password must contain at least one special character'
    ),
  userAgreed: z
    .boolean()
    .refine((value) => value, 'You must agree to the terms and conditions')
})

/**
 * LoginSchema defines the validation schema for the login form.
 * It includes fields for username and password.
 */
export const LoginSchema = z.object({
  userEmail: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  userPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters long'),
  rememberUser: z.boolean().optional()
})

/**
 * SignupFormType is the inferred type from the SignupSchema.
 * It represents the shape of the signup form data.
 */
export type SignupFormType = z.infer<typeof SignupSchema>

/**
 * LoginFormType is the inferred type from the LoginSchema.
 * It represents the shape of the login form data.
 */
export type LoginFormType = z.infer<typeof LoginSchema>

/**
 * SliderData represents the structure of data for a slider component.
 * It includes a title, description, and the source URL of the image.
 */

export type ImageSliderData = typeof SLIDER_DATA
