import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = join(__dirname, '..', 'database.sqlite');

console.log('🔄 Reinicializando banco de dados...');

// Remove o banco existente
const fs = require('fs');
try {
  if (fs.existsSync(dbPath)) {
    fs.unlinkSync(dbPath);
    console.log('🗑️ Banco anterior removido');
  }
} catch (err) {
  console.error('Erro ao remover banco anterior:', err);
}

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar com o banco de dados:', err.message);
    process.exit(1);
  } else {
    console.log('✅ Conectado ao banco de dados SQLite');
    initializeDatabase();
  }
});

function initializeDatabase() {
  // Tabela para administradores
  db.run(`
    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Tabela para conteúdo do hero
  db.run(`
    CREATE TABLE IF NOT EXISTS hero_content (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      subtitle TEXT NOT NULL,
      description TEXT NOT NULL,
      video_url TEXT,
      video_type TEXT DEFAULT 'youtube',
      background_image TEXT,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Tabela para imagens do carousel
  db.run(`
    CREATE TABLE IF NOT EXISTS carousel_images (
      id TEXT PRIMARY KEY,
      url TEXT NOT NULL,
      alt TEXT NOT NULL,
      title TEXT,
      description TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Tabela para conteúdo do footer
  db.run(`
    CREATE TABLE IF NOT EXISTS footer_content (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      company_name TEXT NOT NULL,
      tagline TEXT NOT NULL,
      description TEXT NOT NULL,
      creci TEXT NOT NULL,
      cnpj TEXT NOT NULL,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Tabela para submissões de formulário
  db.run(`
    CREATE TABLE IF NOT EXISTS form_submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Aguardar um pouco para as tabelas serem criadas
  setTimeout(() => {
    insertDefaultData();
  }, 1000);
}

function insertDefaultData() {
  console.log('🔧 Inserindo dados padrão...');
  
  // Inserir admin padrão
  const hashedPassword = bcrypt.hashSync('admin123', 10);
  db.run('INSERT INTO admins (username, password) VALUES (?, ?)', ['admin', hashedPassword], (err) => {
    if (err) {
      console.error('Erro ao criar admin:', err);
    } else {
      console.log('✅ Admin padrão criado: username: admin, senha: admin123');
    }
  });

  // Inserir conteúdo padrão do hero
  db.run(`
    INSERT INTO hero_content (title, subtitle, description, video_url, video_type, background_image) 
    VALUES (?, ?, ?, ?, ?, ?)
  `, [
    'SOLLARA GARDEN',
    'BARRA MANSA',
    'NOVIDADE NA REGIÃO SUL FLUMINENSE',
    'https://youtube.com/shorts/5yVlGgId68A?si=OtBBLC3zousFbFgs',
    'youtube',
    ''
  ], (err) => {
    if (err) {
      console.error('Erro ao criar hero content:', err);
    } else {
      console.log('✅ Conteúdo padrão do hero criado');
    }
  });

  // Inserir imagens padrão do carousel
  const defaultImages = [
    ['1', '/lovable-uploads/076d0f9c-cbe0-478a-a8e0-82a18c4be423.png', 'Vista aérea do condomínio Sollara Garden com área de lazer completa', 'Vista Aérea', 'Condomínio com área de lazer completa'],
    ['2', '/lovable-uploads/daec1aa2-95fd-4ad7-ad79-83d3e641f7f2.png', 'Fachadas modernas das casas do Sollara Garden', 'Fachadas Modernas', 'Design contemporâneo e elegante'],
    ['3', '/lovable-uploads/40772c9a-33d3-43d2-bc8a-b4cd636f28ae.png', 'Portaria moderna e elegante do condomínio Sollara Garden', 'Portaria Elegante', 'Entrada com segurança e sofisticação'],
    ['4', '/lovable-uploads/d912767b-33c2-4fda-bc3a-e1a7d4c736f8.png', 'Área esportiva com quadra poliesportiva e piscina', 'Área Esportiva', 'Quadras e piscina para toda família'],
    ['5', '/lovable-uploads/6f379a2e-244d-4691-8766-fc92f3f7e0ad.png', 'Casas modernas com design contemporâneo e garagem', 'Residências Modernas', 'Casas com garagem e acabamento premium']
  ];

  defaultImages.forEach((image, index) => {
    db.run('INSERT INTO carousel_images (id, url, alt, title, description) VALUES (?, ?, ?, ?, ?)', image, (err) => {
      if (err) {
        console.error(`Erro ao inserir imagem ${index + 1}:`, err);
      } else {
        console.log(`✅ Imagem ${index + 1} inserida`);
      }
    });
  });

  // Inserir conteúdo padrão do footer
  db.run(`
    INSERT INTO footer_content (company_name, tagline, description, creci, cnpj) 
    VALUES (?, ?, ?, ?, ?)
  `, [
    'SOLLARA GARDEN BARRA MANSA',
    'Grupo Salha Empreendimentos',
    'Transformando sonhos em realidade há mais de 30 anos na região do Vale do Paraíba',
    '00000-J',
    '00.000.000/0001-00'
  ], (err) => {
    if (err) {
      console.error('Erro ao criar footer content:', err);
    } else {
      console.log('✅ Conteúdo padrão do footer criado');
    }
  });

  console.log('🎉 Banco de dados reinicializado com sucesso!');
  
  // Fechar conexão
  db.close((err) => {
    if (err) {
      console.error('Erro ao fechar banco:', err);
    } else {
      console.log('✅ Conexão fechada');
      process.exit(0);
    }
  });
}