'use client'

import Txt from '@/ui/common/Txt'
import Button from '@/ui/common/Button'
import { useNavigate } from '@/hooks/navigate'
import { FaBookOpen } from 'react-icons/fa6'
import { color } from '@/types/color'

const Top = () => {
  const { navigate } = useNavigate()

  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center gap-2">
              <Txt fontSize="title" color="black" textAlign="center">読書管理アプリ</Txt>
              <FaBookOpen color={color.black} size={80} />
            </div>

            <div className="flex flex-col gap-4 mt-10">   
                <Button text="新規登録" mode="secondary" onClick={() => navigate('/entry/signup')} />
                <Button text="ログイン" mode="primary" onClick={() => navigate('/entry/signin')} />
            </div>
        </div>
    </>
  )
}

export default Top