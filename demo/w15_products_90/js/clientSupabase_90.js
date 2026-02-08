import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.29.0/dist/supabase-js.min.js';

const SUPABASE_URL = 'https://svqlehbiijfgqvrgqplx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ZhDpMmKSAEtmjBOyDtLXfg_rihLcXo-';

export const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);