import { createClient, type SupabaseClient } from "@supabase/supabase-js"

let client: SupabaseClient | null = null

function createNoopSupabaseClient(): SupabaseClient {
  const baseQuery = {
    select: async () => ({ data: [], error: null }),
    insert: async () => ({ data: null, error: null }),
    order: () => baseQuery,
    single: async () => ({ data: null, error: null }),
  }

  const channel = {
    on: () => channel,
    subscribe: async () => ({ status: "ok" }),
  }

  return {
    from: () => baseQuery,
    channel: () => channel,
    removeChannel: () => undefined,
  } as unknown as SupabaseClient
}

export function getSupabaseClient(): SupabaseClient {
  if (client) return client

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    console.warn("Supabase environment variables are not set. Using a no-op client for build-time rendering.")
    client = createNoopSupabaseClient()
    return client
  }

  client = createClient(url, anonKey)
  return client
}

export const supabase = getSupabaseClient()
