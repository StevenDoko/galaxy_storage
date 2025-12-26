import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://ajibakkrxavmyzyolbbw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqaWJha2tyeGF2bXl6eW9sYmJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3Mzk2ODMsImV4cCI6MjA4MjMxNTY4M30.-A-wkQZtRTl8qNiWe2yyWkKt6WbtYYtYTA_KWlhEtQw";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
