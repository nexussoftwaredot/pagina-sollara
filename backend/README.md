# Sollara Garden Backend API

Backend API para o site do empreendimento Sollara Garden, desenvolvido com Node.js, Express e SQLite.

## 🚀 Funcionalidades

- **Autenticação**: Sistema de login para administradores
- **Gerenciamento de Conteúdo**: APIs para gerenciar hero, carousel, footer
- **Upload de Imagens**: Sistema para upload e gerenciamento de imagens
- **Formulários**: API para receber e gerenciar submissões de formulários de contato
- **Banco de Dados**: SQLite para persistência de dados
- **Segurança**: JWT, CORS, Helmet para proteção

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório
2. Navegue até o diretório backend:
   ```bash
   cd backend
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 🔧 Scripts Disponíveis

- `npm start`: Inicia o servidor em produção
- `npm run dev`: Inicia o servidor em modo desenvolvimento com nodemon
- `npm run build`: Comando de build (placeholder)

## 📚 Endpoints da API

### Autenticação
- `POST /api/auth/login` - Login de administrador
- `GET /api/auth/verify` - Verificar token

### Hero Section
- `GET /api/hero` - Buscar conteúdo do hero
- `PUT /api/hero` - Atualizar conteúdo do hero (admin)

### Carousel
- `GET /api/carousel` - Listar imagens do carousel
- `POST /api/carousel` - Adicionar imagem ao carousel (admin)
- `PUT /api/carousel/:id` - Atualizar imagem do carousel (admin)
- `DELETE /api/carousel/:id` - Remover imagem do carousel (admin)

### Footer
- `GET /api/footer` - Buscar conteúdo do footer
- `PUT /api/footer` - Atualizar conteúdo do footer (admin)

### Formulários
- `POST /api/forms/contact` - Enviar formulário de contato
- `GET /api/forms/submissions` - Listar submissões (admin)
- `GET /api/forms/submissions/:id` - Buscar submissão por ID (admin)
- `DELETE /api/forms/submissions/:id` - Remover submissão (admin)

### Upload
- `POST /api/upload/image` - Upload de imagem única (admin)
- `POST /api/upload/images` - Upload de múltiplas imagens (admin)
- `DELETE /api/upload/image/:filename` - Deletar imagem (admin)
- `GET /api/upload/files` - Listar arquivos enviados (admin)

### Utilitários
- `GET /api/health` - Health check

## 🔐 Credenciais Padrão

- **Username**: admin
- **Senha**: admin123

⚠️ **IMPORTANTE**: Altere essas credenciais em produção!

## 🚀 Deploy Gratuito

### Railway
1. Faça push do código para um repositório GitHub
2. Conecte sua conta Railway ao repositório
3. Configure as variáveis de ambiente no Railway
4. Deploy automático!

### Render
1. Faça push do código para um repositório GitHub
2. Crie um novo Web Service no Render
3. Conecte ao repositório
4. Configure as variáveis de ambiente
5. Deploy!

### Heroku
1. Instale o Heroku CLI
2. `heroku create seu-app-name`
3. `git push heroku main`

## 📁 Estrutura do Projeto

```
backend/
├── src/
│   ├── routes/          # Rotas da API
│   ├── middleware/      # Middleware (auth, etc)
│   ├── database.js      # Configuração do banco
│   └── server.js        # Servidor principal
├── uploads/             # Diretório para uploads
├── package.json
├── .env.example
└── README.md
```

## 🔒 Segurança

- Autenticação JWT
- CORS configurado
- Helmet para headers de segurança
- Validação de entrada
- Sanitização de dados

## 📝 Variáveis de Ambiente

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