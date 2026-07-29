-- Script SQL para criar a tabela de inscritos no Supabase
-- Cole e execute no Editor SQL do seu projeto no Supabase (https://htinilgvvzrazwazgojt.supabase.co)

CREATE TABLE IF NOT EXISTS public.subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  whatsapp TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Ativar Row Level Security (RLS)
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Permitir inserção pública (para captação na landing page)
CREATE POLICY "Allow public insert" ON public.subscribers
  FOR INSERT WITH CHECK (true);

-- Permitir leitura pública (opcional para testes)
CREATE POLICY "Allow public read" ON public.subscribers
  FOR SELECT USING (true);
