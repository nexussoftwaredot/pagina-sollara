import express from 'express';
import db from '../database.js';
import { authenticateToken, isAdmin } from '../middleware/auth.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Get all carousel images
router.get('/', (req, res) => {
  db.all('SELECT * FROM carousel_images ORDER BY created_at DESC', (err, images) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar imagens do carousel' });
    }

    res.json(images);
  });
});

// Add new carousel image
router.post('/', authenticateToken, isAdmin, (req, res) => {
  const { url, alt, title, description } = req.body;

  if (!url || !alt) {
    return res.status(400).json({ error: 'URL e alt são obrigatórios' });
  }

  const id = uuidv4();

  db.run(
    'INSERT INTO carousel_images (id, url, alt, title, description) VALUES (?, ?, ?, ?, ?)',
    [id, url, alt, title || null, description || null],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Erro ao adicionar imagem ao carousel' });
      }

      res.status(201).json({ 
        message: 'Imagem adicionada ao carousel com sucesso',
        id: this.lastID,
        image: { id, url, alt, title, description }
      });
    }
  );
});

// Update carousel image
router.put('/:id', authenticateToken, isAdmin, (req, res) => {
  const { id } = req.params;
  const { url, alt, title, description } = req.body;

  if (!url || !alt) {
    return res.status(400).json({ error: 'URL e alt são obrigatórios' });
  }

  db.run(
    'UPDATE carousel_images SET url = ?, alt = ?, title = ?, description = ? WHERE id = ?',
    [url, alt, title || null, description || null, id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Erro ao atualizar imagem do carousel' });
      }

      if (this.changes === 0) {
        return res.status(404).json({ error: 'Imagem não encontrada' });
      }

      res.json({ 
        message: 'Imagem do carousel atualizada com sucesso',
        image: { id, url, alt, title, description }
      });
    }
  );
});

// Delete carousel image
router.delete('/:id', authenticateToken, isAdmin, (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM carousel_images WHERE id = ?', [id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao remover imagem do carousel' });
    }

    if (this.changes === 0) {
      return res.status(404).json({ error: 'Imagem não encontrada' });
    }

    res.json({ message: 'Imagem removida do carousel com sucesso' });
  });
});

export default router;