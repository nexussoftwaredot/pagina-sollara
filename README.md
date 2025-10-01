# Sollara Garden - Site do Empreendimento

Site completo para o empreendimento Sollara Garden Barra Mansa, com painel administrativo e backend funcional.

## 🏗️ Arquitetura do Projeto

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express + SQLite
- **Deploy**: Configurado para Railway, Render e Heroku (gratuito)

## 🚀 Funcionalidades

### Frontend
- ✅ Site responsivo e moderno
- ✅ Painel administrativo com autenticação
- ✅ Gerenciamento de conteúdo (hero, carousel, footer)
- ✅ Upload de imagens
- ✅ Formulário de contato
- ✅ Visualização de leads

### Backend
- ✅ API REST completa
- ✅ Autenticação JWT
- ✅ Banco de dados SQLite
- ✅ Upload de arquivos
- ✅ CORS configurado
- ✅ Middleware de segurança

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## 🛠️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <seu-repositorio>
cd sollara-garden
```

### 2. Instale as dependências
```bash
npm run install:all
```

### 3. Configure as variáveis de ambiente

**Frontend** (`.env`):
```env
VITE_API_URL=http://localhost:3001/api
```

**Backend** (`backend/.env`):
```env
PORT=3001
NODE_ENV=production
JWT_SECRET=sua-chave-secreta-aqui
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=5242880
```

### 4. Execute o projeto

**Desenvolvimento completo (backend + frontend):**
```bash
npm run dev:full
```

**Apenas frontend:**
```bash
npm run dev
```

**Apenas backend:**
```bash
npm run dev:backend
```

## 🔐 Acesso ao Painel Admin

- **URL**: `http://localhost:5173/admin`
- **Usuário**: `admin`
- **Senha**: `admin123`

⚠️ **IMPORTANTE**: Altere essas credenciais em produção!

## 📚 Endpoints da API

### Autenticação
- `POST /api/auth/login` - Login
- `GET /api/auth/verify` - Verificar token

### Conteúdo
- `GET /api/hero` - Buscar hero
- `PUT /api/hero` - Atualizar hero
- `GET /api/carousel` - Listar imagens
- `POST /api/carousel` - Adicionar imagem
- `PUT /api/carousel/:id` - Atualizar imagem
- `DELETE /api/carousel/:id` - Remover imagem
- `GET /api/footer` - Buscar footer
- `PUT /api/footer` - Atualizar footer

### Formulários
- `POST /api/forms/contact` - Enviar formulário
- `GET /api/forms/submissions` - Listar leads
- `DELETE /api/forms/submissions/:id` - Remover lead

### Upload
- `POST /api/upload/image` - Upload de imagem
- `POST /api/upload/images` - Upload múltiplo
- `DELETE /api/upload/image/:filename` - Deletar arquivo

### Utilitários
- `GET /api/health` - Health check

## 🚀 Deploy Gratuito

### Configuração Recomendada: Netlify + Render
- **Frontend**: [Netlify](https://netlify.com) (gratuito)
- **Backend**: [Render](https://render.com) (gratuito)
- **Banco de Dados**: SQLite persistente no Render

📖 **Guia Completo**: Veja [DEPLOY-NETLIFY-RENDER.md](./DEPLOY-NETLIFY-RENDER.md)

### Deploy Rápido:

#### Backend (Render):
1. Faça push para GitHub
2. Conecte no [Render](https://render.com)
3. Crie Web Service apontando para pasta `backend`
4. Configure variáveis de ambiente
5. Deploy automático!

#### Frontend (Netlify):
1. Conecte o mesmo repositório no [Netlify](https://netlify.com)
2. Configure build command: `npm run build`
3. Configure variável: `VITE_API_URL=https://seu-backend.onrender.com/api`
4. Deploy automático!

## 📁 Estrutura do Projeto

```
sollara-garden/
├── src/                    # Frontend React
│   ├── components/         # Componentes
│   ├── contexts/          # Contextos (Auth, Admin)
│   ├── services/          # API Service
│   ├── types/             # Tipos TypeScript
│   └── pages/             # Páginas
├── backend/               # Backend Node.js
│   ├── src/
│   │   ├── routes/        # Rotas da API
│   │   ├── middleware/    # Middleware
│   │   ├── database.js    # Configuração DB
│   │   └── server.js      # Servidor
│   ├── uploads/           # Arquivos enviados
│   └── package.json
├── public/                # Assets públicos
└── package.json           # Frontend
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Frontend em desenvolvimento
- `npm run dev:backend` - Backend em desenvolvimento
- `npm run dev:full` - Frontend + Backend
- `npm run build` - Build para produção
- `npm run install:all` - Instalar todas as dependências

## 🛡️ Segurança

- Autenticação JWT
- CORS configurado
- Helmet para headers de segurança
- Validação de entrada
- Sanitização de dados

## 📝 Variáveis de Ambiente

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3001/api
```

### Backend (backend/.env)
```env
PORT=3001
NODE_ENV=production
JWT_SECRET=sua-chave-secreta-aqui
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=5242880
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 🆘 Suporte

Se encontrar algum problema:

1. Verifique se todas as dependências estão instaladas
2. Confirme se as variáveis de ambiente estão configuradas
3. Verifique se as portas 3001 (backend) e 5173 (frontend) estão livres
4. Consulte os logs do console para erros específicos

---

**Desenvolvido para Sollara Garden Barra Mansa, por Jonathan Dantas Nunes** 🏡
