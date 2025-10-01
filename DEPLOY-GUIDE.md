# 🚀 Guia Completo de Deploy - Sollara Garden

Este guia mostra como fazer o deploy completo do projeto com banco de dados persistente usando:
- **Frontend**: Netlify
- **Backend**: Railway ou Render
- **Banco de Dados**: Supabase (PostgreSQL gratuito)

## 📋 Pré-requisitos

1. Conta no [Supabase](https://supabase.com) (gratuita)
2. Conta no [Netlify](https://netlify.com) (gratuita)
3. Conta no [Railway](https://railway.app) ou [Render](https://render.com) (gratuita)
4. Git configurado

## 🗄️ Passo 1: Configurar Supabase

### 1.1 Criar Projeto no Supabase
1. Acesse [supabase.com](https://supabase.com)
2. Clique em "Start your project"
3. Crie uma nova conta ou faça login
4. Clique em "New Project"
5. Escolha uma organização
6. Nome do projeto: `sollara-garden`
7. Senha do banco: crie uma senha forte
8. Região: escolha a mais próxima do Brasil (South America)
9. Clique em "Create new project"

### 1.2 Configurar Banco de Dados
1. No painel do Supabase, vá em "SQL Editor"
2. Clique em "New Query"
3. Copie e cole o conteúdo do arquivo `backend/supabase-schema.sql`
4. Clique em "Run" para executar o SQL

### 1.3 Obter Credenciais
1. No painel do Supabase, vá em "Settings" > "API"
2. Copie:
   - **Project URL** (algo como: `https://xxxxx.supabase.co`)
   - **anon public** key (chave pública)

## 🖥️ Passo 2: Deploy do Backend

### Opção A: Railway (Recomendado)

#### 2.1 Preparar Repositório
```bash
# No terminal, no diretório do projeto
cd /workspace
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

#### 2.2 Conectar ao Railway
1. Acesse [railway.app](https://railway.app)
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione "Deploy from GitHub repo"
5. Conecte seu repositório

#### 2.3 Configurar Variáveis de Ambiente
No painel do Railway, vá em "Variables" e adicione:

```env
NODE_ENV=production
JWT_SECRET=sua-chave-secreta-super-forte-aqui
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-chave-anon-do-supabase
FRONTEND_URL=https://sollara-garden.netlify.app
PORT=3001
MAX_FILE_SIZE=5242880
```

#### 2.4 Configurar Deploy
1. Railway detectará automaticamente que é um projeto Node.js
2. Certifique-se que o "Root Directory" está como `backend`
3. O "Build Command" deve ser: `npm install`
4. O "Start Command" deve ser: `npm start`

### Opção B: Render

#### 2.1 Conectar ao Render
1. Acesse [render.com](https://render.com)
2. Faça login com GitHub
3. Clique em "New +" > "Web Service"
4. Conecte seu repositório

#### 2.2 Configurar Serviço
- **Name**: `sollara-garden-backend`
- **Environment**: `Node`
- **Build Command**: `cd backend && npm install`
- **Start Command**: `cd backend && npm start`

#### 2.3 Configurar Variáveis
Adicione as mesmas variáveis do Railway.

## 🌐 Passo 3: Deploy do Frontend no Netlify

### 3.1 Configurar Build
1. Acesse [netlify.com](https://netlify.com)
2. Faça login
3. Clique em "New site from Git"
4. Conecte seu repositório GitHub

### 3.2 Configurar Build Settings
- **Base directory**: `/` (raiz do projeto)
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### 3.3 Configurar Variáveis de Ambiente
No painel do Netlify, vá em "Site settings" > "Environment variables" e adicione:

```env
VITE_API_URL=https://seu-backend.railway.app/api
```

(Substitua pela URL do seu backend deployado)

### 3.4 Configurar Redirecionamentos
Crie um arquivo `public/_redirects`:

```
/*    /index.html   200
```

## 🔧 Passo 4: Configurações Finais

### 4.1 Atualizar CORS do Backend
No Railway/Render, adicione a variável:
```env
FRONTEND_URL=https://seu-site.netlify.app
```

### 4.2 Configurar Domínio Personalizado (Opcional)
No Netlify:
1. Vá em "Domain settings"
2. Clique em "Add custom domain"
3. Configure seu domínio

## 🧪 Passo 5: Testar o Deploy

### 5.1 Testar Backend
```bash
curl https://seu-backend.railway.app/api/health
```

### 5.2 Testar Frontend
1. Acesse sua URL do Netlify
2. Vá em `/admin`
3. Faça login com:
   - Usuário: `admin`
   - Senha: `admin123`

### 5.3 Testar Funcionalidades
- [ ] Login no admin
- [ ] Editar conteúdo do hero
- [ ] Adicionar imagens ao carousel
- [ ] Enviar formulário de contato
- [ ] Ver leads no admin

## 📊 Monitoramento

### Railway/Render
- Monitore logs em tempo real
- Configure alertas de erro
- Monitore uso de recursos

### Supabase
- Monitore queries no "Logs" > "Database"
- Acompanhe uso de storage
- Configure backups automáticos

### Netlify
- Monitore deploys
- Configure webhooks
- Monitore performance

## 🔒 Segurança em Produção

### 1. Alterar Credenciais
```bash
# No Supabase, execute:
UPDATE admins SET password = '$2b$10$nova_senha_hashada' WHERE username = 'admin';
```

### 2. Configurar JWT Secret Forte
Use um gerador de senhas para criar um JWT_SECRET forte.

### 3. Configurar CORS Apropriadamente
Certifique-se que apenas seu domínio está permitido.

## 🚨 Solução de Problemas

### Backend não conecta ao Supabase
- Verifique se as variáveis SUPABASE_URL e SUPABASE_ANON_KEY estão corretas
- Teste a conexão no Supabase Dashboard

### CORS Error
- Verifique se FRONTEND_URL está configurado corretamente
- Confirme que o domínio do Netlify está na lista de CORS

### Build Failed no Netlify
- Verifique se todas as dependências estão no package.json
- Confirme que o build command está correto

### 404 no Admin
- Verifique se o arquivo _redirects foi criado
- Confirme que as rotas estão configuradas corretamente

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do Railway/Render
2. Consulte a documentação do Supabase
3. Verifique as variáveis de ambiente
4. Teste localmente primeiro

---

## 🎉 Deploy Concluído!

Seu projeto estará disponível em:
- **Site**: `https://seu-site.netlify.app`
- **Admin**: `https://seu-site.netlify.app/admin`
- **API**: `https://seu-backend.railway.app/api`

**Credenciais padrão:**
- Usuário: `admin`
- Senha: `admin123`

⚠️ **IMPORTANTE**: Altere essas credenciais em produção!