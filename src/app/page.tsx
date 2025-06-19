'use client'
import { supabase } from '@/lib/supabase'

export default function HomePage() {
  const fetchBooks = async () => {
    const { data, error } = await supabase.from('books').select('*')
    console.log(data, error)
  }

  return (
    <main>
      <h1>読書管理アプリ</h1>
      <button onClick={fetchBooks}>本一覧を取得</button>
    </main>
  )
}
