import express from 'express';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bcrypt from 'bcryptjs';
import fs from 'fs';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = join(__dirname, '..', '..', 'database.sqlite');

// Endpoint para resetar o banco de dados (usar apenas em desenvolvimento/emergência)
router.post('/reset-database', (req, res) => {
  try {
    console.log('🔄 Resetando banco de dados via API...');
    
    // Remove o banco existente
    if (fs.existsSync(dbPath)) {
      fs.unlinkSync(dbPath);
      console.log('🗑️ Banco anterior removido');
    }

    // Aguardar um pouco e recriar o banco
    setTimeout(() => {
      import('../database.js').then(() => {
        console.log('✅ Banco de dados recriado com sucesso!');
        res.json({ 
          message: 'Banco de dados resetado com sucesso!',
          timestamp: new Date().toISOString()
        });
      }).catch(err => {
        console.error('❌ Erro ao recriar banco:', err);
        res.status(500).json({ error: 'Erro ao resetar banco de dados' });
      });
    }, 1000);

  } catch (error) {
    console.error('❌ Erro no reset do banco:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


export default router;