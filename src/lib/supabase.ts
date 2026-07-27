import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * Supabase project credentials. The anon key is safe to ship in client code:
 * it only grants what row-level security policies allow (each user can read
 * and write their own row, nothing else).
 *
 * Filled in once the Supabase project exists; until then the app runs in
 * local-only mode and the account UI explains sync isn't available yet.
 */
const SUPABASE_URL = 'https://mynzvwydxmjahqelqbuv.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_NdDmtfOmGAFFprXl0nGonQ_AEkQE_P-'

export const supabase: SupabaseClient | null = SUPABASE_URL.startsWith('https://')
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null
