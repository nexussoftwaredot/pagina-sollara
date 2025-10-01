import express from 'express';
import db from '../database.js';
import { authenticateToken, isAdmin } from '../middleware/auth.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Submit contact form
router.post('/contact', (req, res) => {
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

  const id = uuidv4();

  db.run(
    'INSERT INTO form_submissions (id, name, email, phone, message) VALUES (?, ?, ?, ?, ?)',
    [id, name, email, phone, message || null],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Erro ao enviar formulário' });
      }

      res.status(201).json({ 
        message: 'Formulário enviado com sucesso! Entraremos em contato em breve.',
        id: this.lastID
      });
    }
  );
});

// Get all form submissions (admin only)
router.get('/submissions', authenticateToken, isAdmin, (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;

  // Get total count
  db.get('SELECT COUNT(*) as total FROM form_submissions', (err, countResult) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar submissões' });
    }

    // Get submissions with pagination
    db.all(
      'SELECT * FROM form_submissions ORDER BY created_at DESC LIMIT ? OFFSET ?',
      [parseInt(limit), offset],
      (err, submissions) => {
        if (err) {
          return res.status(500).json({ error: 'Erro ao buscar submissões' });
        }

        res.json({
          submissions,
          pagination: {
            page: parseInt(page),
            limit: parseInt(limit),
            total: countResult.total,
            pages: Math.ceil(countResult.total / limit)
          }
        });
      }
    );
  });
});

// Get form submission by ID (admin only)
router.get('/submissions/:id', authenticateToken, isAdmin, (req, res) => {
  const { id } = req.params;

  db.get('SELECT * FROM form_submissions WHERE id = ?', [id], (err, submission) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar submissão' });
    }

    if (!submission) {
      return res.status(404).json({ error: 'Submissão não encontrada' });
    }

    res.json(submission);
  });
});

// Delete form submission (admin only)
router.delete('/submissions/:id', authenticateToken, isAdmin, (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM form_submissions WHERE id = ?', [id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao remover submissão' });
    }

    if (this.changes === 0) {
      return res.status(404).json({ error: 'Submissão não encontrada' });
    }

    res.json({ message: 'Submissão removida com sucesso' });
  });
});

export default router;