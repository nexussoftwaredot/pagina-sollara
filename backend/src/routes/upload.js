import express from 'express';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { authenticateToken, isAdmin } from '../middleware/auth.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = join(__dirname, '..', '..', 'uploads');
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const fileFilter = (req, file, cb) => {
  // Allow only image files
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Apenas arquivos de imagem são permitidos'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024, // 5MB default
  },
  fileFilter: fileFilter
});

// Upload single image
router.post('/image', authenticateToken, isAdmin, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Nenhuma imagem foi enviada' });
  }

  const fileUrl = `/uploads/${req.file.filename}`;
  
  res.json({
    message: 'Imagem enviada com sucesso',
    filename: req.file.filename,
    url: fileUrl,
    size: req.file.size,
    mimetype: req.file.mimetype
  });
});

// Upload multiple images
router.post('/images', authenticateToken, isAdmin, upload.array('images', 10), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'Nenhuma imagem foi enviada' });
  }

  const uploadedFiles = req.files.map(file => ({
    filename: file.filename,
    url: `/uploads/${file.filename}`,
    size: file.size,
    mimetype: file.mimetype
  }));

  res.json({
    message: `${uploadedFiles.length} imagem(ns) enviada(s) com sucesso`,
    files: uploadedFiles
  });
});

// Delete uploaded image
router.delete('/image/:filename', authenticateToken, isAdmin, (req, res) => {
  const { filename } = req.params;
  const fs = require('fs');
  const path = require('path');
  
  const filePath = join(__dirname, '..', '..', 'uploads', filename);
  
  fs.unlink(filePath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.status(404).json({ error: 'Arquivo não encontrado' });
      }
      return res.status(500).json({ error: 'Erro ao deletar arquivo' });
    }
    
    res.json({ message: 'Arquivo deletado com sucesso' });
  });
});

// Get list of uploaded files
router.get('/files', authenticateToken, isAdmin, (req, res) => {
  const fs = require('fs');
  const path = require('path');
  const uploadsDir = join(__dirname, '..', '..', 'uploads');
  
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao listar arquivos' });
    }
    
    const fileList = files.map(filename => {
      const filePath = join(uploadsDir, filename);
      const stats = fs.statSync(filePath);
      
      return {
        filename,
        url: `/uploads/${filename}`,
        size: stats.size,
        created: stats.birthtime
      };
    });
    
    res.json({ files: fileList });
  });
});

export default router;