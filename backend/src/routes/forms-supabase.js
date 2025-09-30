import express from 'express';
import { supabase } from '../database-supabase.js';
import { authenticateToken } from '../middleware/auth.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Submit contact form
router.post('/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ 
      error: 'Nome, email e telefone são obrigatórios' 
    });
  }

  // Validar formato do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Formato de email inválido' });
  }

  try {
    const id = uuidv4();

    const { data, error } = await supabase
      .from('form_submissions')
      .insert([
        {
          id,
          name,
          email,
          phone,
          message: message || null
        }
      ])
      .select();

    if (error) {
      console.error('Error submitting form:', error);
      return res.status(500).json({ error: 'Erro ao enviar formulário' });
    }

    res.status(201).json({ 
      message: 'Formulário enviado com sucesso! Entraremos em contato em breve.',
      data: data[0]
    });
  } catch (error) {
    console.error('Forms POST error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Get all form submissions (admin only)
router.get('/submissions', authenticateToken, async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;

  try {
    // Get total count
    const { count, error: countError } = await supabase
      .from('form_submissions')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('Error counting submissions:', countError);
      return res.status(500).json({ error: 'Erro ao buscar submissões' });
    }

    // Get submissions with pagination
    const { data: submissions, error } = await supabase
      .from('form_submissions')
      .select('*')
      .order('created_at', { ascending: false })
      .range(offset, offset + parseInt(limit) - 1);

    if (error) {
      console.error('Error fetching submissions:', error);
      return res.status(500).json({ error: 'Erro ao buscar submissões' });
    }

    res.json({
      submissions: submissions || [],
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: count || 0,
        pages: Math.ceil((count || 0) / limit)
      }
    });
  } catch (error) {
    console.error('Forms GET error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Get form submission by ID (admin only)
router.get('/submissions/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const { data: submission, error } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching submission:', error);
      return res.status(500).json({ error: 'Erro ao buscar submissão' });
    }

    if (!submission) {
      return res.status(404).json({ error: 'Submissão não encontrada' });
    }

    res.json(submission);
  } catch (error) {
    console.error('Forms GET by ID error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Delete form submission (admin only)
router.delete('/submissions/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .delete()
      .eq('id', id)
      .select();

    if (error) {
      console.error('Error deleting submission:', error);
      return res.status(500).json({ error: 'Erro ao remover submissão' });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ error: 'Submissão não encontrada' });
    }

    res.json({ message: 'Submissão removida com sucesso' });
  } catch (error) {
    console.error('Forms DELETE error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router;