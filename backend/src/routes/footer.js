import express from 'express';
import db from '../database.js';
import { authenticateToken, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Get footer content
router.get('/', (req, res) => {
  db.get('SELECT * FROM footer_content ORDER BY id DESC LIMIT 1', (err, footer) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar conteúdo do footer' });
    }

    if (!footer) {
      return res.status(404).json({ error: 'Conteúdo do footer não encontrado' });
    }

    res.json(footer);
  });
});

// Update footer content
router.put('/', authenticateToken, isAdmin, (req, res) => {
  const { company_name, tagline, description, creci, cnpj } = req.body;

  if (!company_name || !tagline || !description || !creci || !cnpj) {
    return res.status(400).json({ 
      error: 'Todos os campos são obrigatórios (company_name, tagline, description, creci, cnpj)' 
    });
  }

  db.run(
    `INSERT OR REPLACE INTO footer_content 
     (id, company_name, tagline, description, creci, cnpj, updated_at) 
     VALUES (1, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
    [company_name, tagline, description, creci, cnpj],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Erro ao atualizar conteúdo do footer' });
      }

      res.json({ 
        message: 'Conteúdo do footer atualizado com sucesso',
        id: this.lastID 
      });
    }
  );
});

export default router;