'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { useState, useEffect } from 'react'

const AuthButton = () => {
  const router = useRouter()
  const supabase = createClient()

  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [supabase.auth])

  const handleAuth = async () => {
    if (user) {
      await supabase.auth.signOut()
      router.push('/')
    } else {
      router.push('/login')
    }
  }

  return (
    <button
      onClick={handleAuth}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {user ? 'Logout' : 'Login'}
    </button>
  )
}

export default AuthButton
