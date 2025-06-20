'use client'

import { useRouter } from 'next/navigation'

export const useNavigate = () => {
  const router = useRouter()
  
  return {
    navigate: (path: string) => {
      router.push(path)
    },
    replace: (path: string) => {
      router.replace(path)
    },
    back: () => {
      router.back()
    },
    forward: () => {
      router.forward()
    }
  }
}