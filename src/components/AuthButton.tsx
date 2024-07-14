import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

const AuthButton = () => {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const router = useRouter()

  const handleAuth = async () => {
    if (user) {
      await supabaseClient.auth.signOut()
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
