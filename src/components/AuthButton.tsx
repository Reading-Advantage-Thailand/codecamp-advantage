import { useRouter } from 'next/router'
import { createClient } from '@/utils/supabase/client'

const AuthButton = () => {
  const router = useRouter()
  const supabase = createClient()

  const handleAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
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
      {/* We'll determine the button text when rendering */}
      Login/Logout
    </button>
  )
}

export default AuthButton
