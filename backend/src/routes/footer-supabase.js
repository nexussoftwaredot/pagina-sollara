import express from 'express';
import { supabase } from '../database-supabase.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get footer content
router.get('/', async (req, res) => {
  try {
    const { data: footer, error } = await supabase
      .from('footer_content')
      .select('*')
      .order('id', { ascending: false })
      .limit(1)
      .single();

    if (error) {
      console.error('Error fetching footer content:', error);
      return res.status(500).json({ error: 'Erro ao buscar conteúdo do footer' });
    }

    if (!footer) {
      return res.status(404).json({ error: 'Conteúdo do footer não encontrado' });
    }

    res.json(footer);
  } catch (error) {
    console.error('Footer GET error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Update footer content
router.put('/', authenticateToken, async (req, res) => {
  const { company_name, tagline, description, creci, cnpj } = req.body;

  if (!company_name || !tagline || !description || !creci || !cnpj) {
    return res.status(400).json({ 
      error: 'Todos os campos são obrigatórios (company_name, tagline, description, creci, cnpj)' 
    });
  }

  try {
    // Verificar se já existe conteúdo
    const { data: existingFooter } = await supabase
      .from('footer_content')
      .select('id')
      .limit(1);

    let result;
    if (existingFooter && existingFooter.length > 0) {
      // Atualizar conteúdo existente
      result = await supabase
        .from('footer_content')
        .update({
          company_name,
          tagline,
          description,
          creci,
          cnpj,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingFooter[0].id)
        .select();
    } else {
      // Criar novo conteúdo
      result = await supabase
        .from('footer_content')
        .insert([
          {
            company_name,
            tagline,
            description,
            creci,
            cnpj
          }
        ])
        .select();
    }

    if (result.error) {
      console.error('Error updating footer content:', result.error);
      return res.status(500).json({ error: 'Erro ao atualizar conteúdo do footer' });
    }

    res.json({ 
      message: 'Conteúdo do footer atualizado com sucesso',
      data: result.data[0]
    });
  } catch (error) {
    console.error('Footer PUT error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router;