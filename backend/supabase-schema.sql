-- Schema para Supabase - Sollara Garden
-- Execute este SQL no SQL Editor do Supabase

-- Tabela para administradores
CREATE TABLE IF NOT EXISTS admins (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela para conteúdo do hero
CREATE TABLE IF NOT EXISTS hero_content (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  description TEXT NOT NULL,
  video_url TEXT,
  video_type TEXT DEFAULT 'youtube',
  background_image TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela para imagens do carousel
CREATE TABLE IF NOT EXISTS carousel_images (
  id TEXT PRIMARY KEY,
  url TEXT NOT NULL,
  alt TEXT NOT NULL,
  title TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela para conteúdo do footer
CREATE TABLE IF NOT EXISTS footer_content (
  id SERIAL PRIMARY KEY,
  company_name TEXT NOT NULL,
  tagline TEXT NOT NULL,
  description TEXT NOT NULL,
  creci TEXT NOT NULL,
  cnpj TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela para submissões de formulário
CREATE TABLE IF NOT EXISTS form_submissions (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at ON form_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_carousel_images_created_at ON carousel_images(created_at);

-- Habilitar Row Level Security (RLS)
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE carousel_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE footer_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Políticas RLS - Permitir leitura pública para conteúdo do site
CREATE POLICY "Public read access for hero_content" ON hero_content FOR SELECT USING (true);
CREATE POLICY "Public read access for carousel_images" ON carousel_images FOR SELECT USING (true);
CREATE POLICY "Public read access for footer_content" ON footer_content FOR SELECT USING (true);

-- Políticas RLS - Permitir inserção pública para formulários
CREATE POLICY "Public insert access for form_submissions" ON form_submissions FOR INSERT WITH CHECK (true);

-- Políticas RLS - Acesso administrativo (você precisará configurar autenticação adequada)
-- Por enquanto, vamos permitir acesso total para desenvolvimento
CREATE POLICY "Admin full access for admins" ON admins FOR ALL USING (true);
CREATE POLICY "Admin full access for hero_content" ON hero_content FOR ALL USING (true);
CREATE POLICY "Admin full access for carousel_images" ON carousel_images FOR ALL USING (true);
CREATE POLICY "Admin full access for footer_content" ON footer_content FOR ALL USING (true);
CREATE POLICY "Admin full access for form_submissions" ON form_submissions FOR ALL USING (true);

-- Comentários das tabelas
COMMENT ON TABLE admins IS 'Administradores do sistema';
COMMENT ON TABLE hero_content IS 'Conteúdo da seção principal do site';
COMMENT ON TABLE carousel_images IS 'Imagens da galeria/carousel';
COMMENT ON TABLE footer_content IS 'Conteúdo do rodapé';
COMMENT ON TABLE form_submissions IS 'Submissões do formulário de contato';