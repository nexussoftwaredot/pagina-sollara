import sqlite3 from 'sqlite3';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = join(__dirname, '..', 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar com o banco de dados:', err.message);
  } else {
    console.log('✅ Conectado ao banco de dados SQLite');
    initDatabase();
  }
});

// Exportar uma Promise que resolve quando o banco estiver inicializado
export const dbReady = new Promise((resolve, reject) => {
  let initialized = false;
  
  const checkInitialization = () => {
    if (initialized) {
      resolve(db);
      return;
    }
    
    // Verificar se as tabelas foram criadas
    db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='admins'", (err, row) => {
      if (err) {
        console.error('❌ Erro ao verificar tabelas:', err);
        reject(err);
        return;
      }
      
      if (row) {
        initialized = true;
        console.log('✅ Banco de dados totalmente inicializado');
        resolve(db);
      } else {
        // Aguardar mais um pouco e tentar novamente
        setTimeout(checkInitialization, 500);
      }
    });
  };
  
  // Começar a verificação após um delay
  setTimeout(checkInitialization, 500);
});

function initDatabase() {
  console.log('🔧 Iniciando criação das tabelas...');
  
  // Usar serialize para garantir que as tabelas sejam criadas em sequência
  db.serialize(() => {
    // Tabela para administradores
    db.run(`
      CREATE TABLE IF NOT EXISTS admins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('❌ Erro ao criar tabela admins:', err);
      } else {
        console.log('✅ Tabela admins criada');
      }
    });

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
    `, (err) => {
      if (err) {
        console.error('❌ Erro ao criar tabela hero_content:', err);
      } else {
        console.log('✅ Tabela hero_content criada');
      }
    });

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
    `, (err) => {
      if (err) {
        console.error('❌ Erro ao criar tabela carousel_images:', err);
      } else {
        console.log('✅ Tabela carousel_images criada');
      }
    });

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
    `, (err) => {
      if (err) {
        console.error('❌ Erro ao criar tabela footer_content:', err);
      } else {
        console.log('✅ Tabela footer_content criada');
      }
    });

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
    `, (err) => {
      if (err) {
        console.error('❌ Erro ao criar tabela form_submissions:', err);
      } else {
        console.log('✅ Tabela form_submissions criada');
      }
    });

    // Aguardar um pouco e inserir dados padrão
    setTimeout(() => {
      insertDefaultData();
    }, 1000);
  });
}

function insertDefaultData() {
  console.log('🔧 Iniciando inserção de dados padrão...');
  
  // Função para inserir admin padrão
  const insertAdmin = () => {
    db.get('SELECT COUNT(*) as count FROM admins', (err, row) => {
      if (err) {
        console.error('❌ Erro ao verificar admins:', err);
        return;
      }
      
      if (row.count === 0) {
        console.log('👤 Criando admin padrão...');
        
        try {
          // Hash da senha
          const hashedPassword = bcrypt.hashSync('admin123', 10);
          
          db.run('INSERT INTO admins (username, password) VALUES (?, ?)', ['admin', hashedPassword], (err) => {
            if (err) {
              console.error('❌ Erro ao criar admin:', err);
            } else {
              console.log('✅ Admin padrão criado: username: admin, senha: admin123');
            }
          });
        } catch (error) {
          console.error('❌ Erro ao hash da senha:', error);
        }
      } else {
        console.log('✅ Admin já existe');
      }
    });
  };

  // Função para inserir conteúdo do hero
  const insertHero = () => {
    db.get('SELECT COUNT(*) as count FROM hero_content', (err, row) => {
      if (err) {
        console.error('❌ Erro ao verificar hero_content:', err);
        return;
      }
      
      if (row.count === 0) {
        console.log('📝 Criando conteúdo padrão do hero...');
        db.run(`
          INSERT INTO hero_content (title, subtitle, description, video_url, video_type, background_image) 
          VALUES (?, ?, ?, ?, ?, ?)
        `, [
          'SOLLARA GARDEN',
          'BARRA MANSA',
          'NOVIDADE NA REGIÃO SUL FLUMINENSE',
          'https://youtube.com/shorts/5yVlGgId68A?si=OtBBLC3zFbFgs',
          'youtube',
          ''
        ], (err) => {
          if (err) {
            console.error('❌ Erro ao criar hero content:', err);
          } else {
            console.log('✅ Conteúdo padrão do hero criado');
          }
        });
      } else {
        console.log('✅ Hero content já existe');
      }
    });
  };

  // Função para inserir imagens do carousel
  const insertCarousel = () => {
    db.get('SELECT COUNT(*) as count FROM carousel_images', (err, row) => {
      if (err) {
        console.error('❌ Erro ao verificar carousel_images:', err);
        return;
      }
      
      if (row.count === 0) {
        console.log('🖼️ Criando imagens padrão do carousel...');
        const defaultImages = [
          ['1', '/lovable-uploads/076d0f9c-cbe0-478a-a8e0-82a18c4be423.png', 'Vista aérea do condomínio Sollara Garden com área de lazer completa', 'Vista Aérea', 'Condomínio com área de lazer completa'],
          ['2', '/lovable-uploads/daec1aa2-95fd-4ad7-ad79-83d3e641f7f2.png', 'Fachadas modernas das casas do Sollara Garden', 'Fachadas Modernas', 'Design contemporâneo e elegante'],
          ['3', '/lovable-uploads/40772c9a-33d3-43d2-bc8a-b4cd636f28ae.png', 'Portaria moderna e elegante do condomínio Sollara Garden', 'Portaria Elegante', 'Entrada com segurança e sofisticação'],
          ['4', '/lovable-uploads/d912767b-33c2-4fda-bc3a-e1a7d4c736f8.png', 'Área esportiva com quadra poliesportiva e piscina', 'Área Esportiva', 'Quadras e piscina para toda família'],
          ['5', '/lovable-uploads/6f379a2e-244d-4691-8766-fc92f3f7e0ad.png', 'Casas modernas com design contemporâneo e garagem', 'Residências Modernas', 'Casas com garagem e acabamento premium']
        ];

        let insertedCount = 0;
        defaultImages.forEach((image, index) => {
          db.run('INSERT INTO carousel_images (id, url, alt, title, description) VALUES (?, ?, ?, ?, ?)', image, (err) => {
            if (err) {
              console.error(`❌ Erro ao inserir imagem ${index + 1}:`, err);
            } else {
              insertedCount++;
              if (insertedCount === defaultImages.length) {
                console.log('✅ Imagens padrão do carousel criadas');
              }
            }
          });
        });
      } else {
        console.log('✅ Carousel images já existem');
      }
    });
  };

  // Função para inserir conteúdo do footer
  const insertFooter = () => {
    db.get('SELECT COUNT(*) as count FROM footer_content', (err, row) => {
      if (err) {
        console.error('❌ Erro ao verificar footer_content:', err);
        return;
      }
      
      if (row.count === 0) {
        console.log('📄 Criando conteúdo padrão do footer...');
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
            console.error('❌ Erro ao criar footer content:', err);
          } else {
            console.log('✅ Conteúdo padrão do footer criado');
          }
        });
      } else {
        console.log('✅ Footer content já existe');
      }
    });
  };

  // Executar todas as inserções
  insertAdmin();
  insertHero();
  insertCarousel();
  insertFooter();
  
  console.log('🎉 Inicialização do banco de dados concluída!');
}

export default db;