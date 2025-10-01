import express from 'express';
import db from '../database.js';
import { authenticateToken, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Get hero content
router.get('/', (req, res) => {
  db.get('SELECT * FROM hero_content ORDER BY id DESC LIMIT 1', (err, hero) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar conteúdo do hero' });
    }

    if (!hero) {
      return res.status(404).json({ error: 'Conteúdo do hero não encontrado' });
    }

    res.json(hero);
  });
});

// Update hero content
router.put('/', authenticateToken, isAdmin, (req, res) => {
  const { title, subtitle, description, video_url, video_type, background_image } = req.body;

  if (!title || !subtitle || !description) {
    return res.status(400).json({ error: 'Título, subtítulo e descrição são obrigatórios' });
  }

  db.run(
    `INSERT OR REPLACE INTO hero_content 
     (id, title, subtitle, description, video_url, video_type, background_image, updated_at) 
     VALUES (1, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
    [title, subtitle, description, video_url || null, video_type || 'youtube', background_image || null],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Erro ao atualizar conteúdo do hero' });
      }

      res.json({ 
        message: 'Conteúdo do hero atualizado com sucesso',
        id: this.lastID 
      });
    }
  );
});

export default router;