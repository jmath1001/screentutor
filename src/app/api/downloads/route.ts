import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: NextRequest) {
  const { platform } = await req.json()
  const userAgent = req.headers.get('user-agent') || ''
  const referrer = req.headers.get('referer') || ''

  const { error } = await supabase.from('downloads').insert({
    platform,
    user_agent: userAgent,
    referrer,
    created_at: new Date().toISOString(),
  })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}

export async function GET() {
  const { count, error } = await supabase
    .from('downloads')
    .select('*', { count: 'exact', head: true })

  if (error) return NextResponse.json({ count: 0 })
  return NextResponse.json({ count })
}