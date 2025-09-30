import express from 'express';
import { supabase } from '../database-supabase.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get hero content
router.get('/', async (req, res) => {
  try {
    const { data: hero, error } = await supabase
      .from('hero_content')
      .select('*')
      .order('id', { ascending: false })
      .limit(1)
      .single();

    if (error) {
      console.error('Error fetching hero content:', error);
      return res.status(500).json({ error: 'Erro ao buscar conteúdo do hero' });
    }

    if (!hero) {
      return res.status(404).json({ error: 'Conteúdo do hero não encontrado' });
    }

    // Converter snake_case para camelCase
    res.json({
      id: hero.id,
      title: hero.title,
      subtitle: hero.subtitle,
      description: hero.description,
      video_url: hero.video_url,
      video_type: hero.video_type,
      background_image: hero.background_image,
      updated_at: hero.updated_at
    });
  } catch (error) {
    console.error('Hero GET error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Update hero content
router.put('/', authenticateToken, async (req, res) => {
  const { title, subtitle, description, video_url, video_type, background_image } = req.body;

  if (!title || !subtitle || !description) {
    return res.status(400).json({ error: 'Título, subtítulo e descrição são obrigatórios' });
  }

  try {
    // Verificar se já existe conteúdo
    const { data: existingHero } = await supabase
      .from('hero_content')
      .select('id')
      .limit(1);

    let result;
    if (existingHero && existingHero.length > 0) {
      // Atualizar conteúdo existente
      result = await supabase
        .from('hero_content')
        .update({
          title,
          subtitle,
          description,
          video_url: video_url || null,
          video_type: video_type || 'youtube',
          background_image: background_image || null,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingHero[0].id)
        .select();
    } else {
      // Criar novo conteúdo
      result = await supabase
        .from('hero_content')
        .insert([
          {
            title,
            subtitle,
            description,
            video_url: video_url || null,
            video_type: video_type || 'youtube',
            background_image: background_image || null
          }
        ])
        .select();
    }

    if (result.error) {
      console.error('Error updating hero content:', result.error);
      return res.status(500).json({ error: 'Erro ao atualizar conteúdo do hero' });
    }

    res.json({ 
      message: 'Conteúdo do hero atualizado com sucesso',
      data: result.data[0]
    });
  } catch (error) {
    console.error('Hero PUT error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router;