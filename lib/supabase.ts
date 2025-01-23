import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://bneuiubsauqherqrvepu.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuZXVpdWJzYXVxaGVycXJ2ZXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NDI4MDYsImV4cCI6MjA1MzExODgwNn0.xGy9eqLZtxkEmGKDHZ7M08cilnIlDBH8mzjkj7zkCwk"

export const supabase = createClient(supabaseUrl, supabaseKey)

