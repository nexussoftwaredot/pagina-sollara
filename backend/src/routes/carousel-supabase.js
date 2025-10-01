import express from 'express';
import { supabase } from '../database-supabase.js';
import { authenticateToken } from '../middleware/auth.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Get all carousel images
router.get('/', async (req, res) => {
  try {
    const { data: images, error } = await supabase
      .from('carousel_images')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching carousel images:', error);
      return res.status(500).json({ error: 'Erro ao buscar imagens do carousel' });
    }

    res.json(images || []);
  } catch (error) {
    console.error('Carousel GET error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Add new carousel image
router.post('/', authenticateToken, async (req, res) => {
  const { url, alt, title, description } = req.body;

  if (!url || !alt) {
    return res.status(400).json({ error: 'URL e alt são obrigatórios' });
  }

  try {
    const id = uuidv4();

    const { data, error } = await supabase
      .from('carousel_images')
      .insert([
        {
          id,
          url,
          alt,
          title: title || null,
          description: description || null
        }
      ])
      .select();

    if (error) {
      console.error('Error adding carousel image:', error);
      return res.status(500).json({ error: 'Erro ao adicionar imagem ao carousel' });
    }

    res.status(201).json({ 
      message: 'Imagem adicionada ao carousel com sucesso',
      image: data[0]
    });
  } catch (error) {
    console.error('Carousel POST error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Update carousel image
router.put('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { url, alt, title, description } = req.body;

  if (!url || !alt) {
    return res.status(400).json({ error: 'URL e alt são obrigatórios' });
  }

  try {
    const { data, error } = await supabase
      .from('carousel_images')
      .update({
        url,
        alt,
        title: title || null,
        description: description || null
      })
      .eq('id', id)
      .select();

    if (error) {
      console.error('Error updating carousel image:', error);
      return res.status(500).json({ error: 'Erro ao atualizar imagem do carousel' });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ error: 'Imagem não encontrada' });
    }

    res.json({ 
      message: 'Imagem do carousel atualizada com sucesso',
      image: data[0]
    });
  } catch (error) {
    console.error('Carousel PUT error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Delete carousel image
router.delete('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('carousel_images')
      .delete()
      .eq('id', id)
      .select();

    if (error) {
      console.error('Error deleting carousel image:', error);
      return res.status(500).json({ error: 'Erro ao remover imagem do carousel' });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ error: 'Imagem não encontrada' });
    }

    res.json({ message: 'Imagem removida do carousel com sucesso' });
  } catch (error) {
    console.error('Carousel DELETE error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router;