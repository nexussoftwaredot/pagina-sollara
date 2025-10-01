import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../database.js';

const router = express.Router();

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username e senha são obrigatórios' });
  }

  db.get('SELECT * FROM admins WHERE username = ?', [username], (err, admin) => {
    if (err) {
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }

    if (!admin) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    bcrypt.compare(password, admin.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }

      if (!isMatch) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const token = jwt.sign(
        { id: admin.id, username: admin.username },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.json({
        token,
        user: {
          id: admin.id,
          username: admin.username
        }
      });
    });
  });
});

// Verificar token
router.get('/verify', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }

    res.json({ valid: true, user });
  });
});

export default router;