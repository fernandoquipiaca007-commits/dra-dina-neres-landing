import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: SupabaseClient;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.error(
    '[Supabase] Variáveis de ambiente VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY não encontradas. ' +
    'Configure-as no painel da Vercel em Project Settings > Environment Variables.'
  );
  // Cria um cliente com URLs placeholder para não crashar o app
  supabase = createClient('https://placeholder.supabase.co', 'placeholder-key');
}

export { supabase };
