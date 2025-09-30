import jwt from 'jsonwebtoken';
import db from '../database.js';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token de acesso necessário' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = user;
    next();
  });
};

export const isAdmin = async (req, res, next) => {
  try {
    const { id } = req.user;
    
    db.get('SELECT * FROM admins WHERE id = ?', [id], (err, admin) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao verificar permissões' });
      }
      
      if (!admin) {
        return res.status(403).json({ error: 'Acesso negado' });
      }
      
      req.admin = admin;
      next();
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};