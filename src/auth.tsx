// This file will be used as an interface to communicates with new

import { User } from 'firebase/auth'
import * as React from 'react'

export interface AuthContext {
  isAuthenticated: boolean
  setUser: (userData: User | null) => void
  user: User | null
}

const AuthContext = React.createContext<AuthContext | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null)
  const isAuthenticated = !!user

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
