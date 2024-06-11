const SUPABASE_URL = 'https://ophlhndtmgrbqpyaatag.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waGxobmR0bWdyYnFweWFhdGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzNDcsImV4cCI6MTk5MjAzNTM0N30.ZuXrcaVq24uc7FVKJ-pHR3ViZ5-FwPRtUMziGxayW7Y';

export const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);