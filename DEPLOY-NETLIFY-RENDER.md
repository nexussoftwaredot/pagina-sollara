# 🚀 Deploy: Netlify (Frontend) + Render (Backend) + SQLite

Este guia mostra como fazer o deploy completo do projeto Sollara Garden usando:
- **Frontend**: Netlify (gratuito)
- **Backend**: Render (gratuito)
- **Banco de Dados**: SQLite (persistente no Render)

## 📋 Pré-requisitos

1. Conta no [Netlify](https://netlify.com) (gratuita)
2. Conta no [Render](https://render.com) (gratuita)
3. Conta no [GitHub](https://github.com) (gratuita)
4. Git configurado

## 🖥️ Passo 1: Deploy do Backend no Render

### 1.1 Preparar Repositório GitHub
```bash
# No terminal, no diretório do projeto
cd /workspace
git init
git add .
git commit -m "Initial commit - Sollara Garden"
git branch -M main

# Conectar ao GitHub (substitua por seu repositório)
git remote add origin https://github.com/SEU_USUARIO/sollara-garden.git
git push -u origin main
```

### 1.2 Criar Serviço no Render
1. Acesse [render.com](https://render.com)
2. Faça login com GitHub
3. Clique em "New +" > "Web Service"
4. Conecte seu repositório GitHub

### 1.3 Configurar o Serviço
- **Name**: `sollara-garden-backend`
- **Environment**: `Node`
- **Region**: `Oregon (US West)` ou `Frankfurt (EU Central)`
- **Branch**: `main`
- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### 1.4 Configurar Variáveis de Ambiente
No painel do Render, vá em "Environment" e adicione:

```env
NODE_ENV=production
JWT_SECRET=sollara-garden-super-secret-key-2024-change-this
PORT=10000
MAX_FILE_SIZE=5242880
FRONTEND_URL=https://sollara-garden.netlify.app
```

### 1.5 Deploy
1. Clique em "Create Web Service"
2. Aguarde o build (pode levar 5-10 minutos na primeira vez)
3. Anote a URL gerada (algo como: `https://sollara-garden-backend.onrender.com`)

## 🌐 Passo 2: Deploy do Frontend no Netlify

### 2.1 Conectar Repositório
1. Acesse [netlify.com](https://netlify.com)
2. Faça login
3. Clique em "New site from Git"
4. Conecte seu repositório GitHub

### 2.2 Configurar Build Settings
- **Base directory**: `/` (raiz do projeto)
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### 2.3 Configurar Variáveis de Ambiente
No painel do Netlify, vá em "Site settings" > "Environment variables" e adicione:

```env
VITE_API_URL=https://sollara-garden-backend.onrender.com/api
```

(Substitua pela URL do seu backend no Render)

### 2.4 Deploy
1. Clique em "Deploy site"
2. Aguarde o build (2-3 minutos)
3. Anote a URL gerada (algo como: `https://sollara-garden.netlify.app`)

## 🔧 Passo 3: Configurações Finais

### 3.1 Atualizar CORS do Backend
No Render, vá em "Environment" e atualize:
```env
FRONTEND_URL=https://sua-url-do-netlify.netlify.app
```

### 3.2 Reiniciar Backend
No Render, vá em "Manual Deploy" > "Deploy latest commit"

## 🧪 Passo 4: Testar o Deploy

### 4.1 Testar Backend
```bash
curl https://sollara-garden-backend.onrender.com/api/health
```
Deve retornar:
```json
{
  "status": "OK",
  "message": "Sollara Garden API está funcionando!",
  "timestamp": "2025-01-17T..."
}
```

### 4.2 Testar Frontend
1. Acesse sua URL do Netlify
2. Navegue pelo site
3. Teste o formulário de contato

### 4.3 Testar Admin
1. Vá para `/admin`
2. Faça login com:
   - **Usuário**: `admin`
   - **Senha**: `admin123`
3. Teste todas as funcionalidades:
   - [ ] Editar conteúdo do hero
   - [ ] Gerenciar galeria
   - [ ] Editar rodapé
   - [ ] Ver leads

## 📊 Monitoramento

### Render (Backend)
- **Logs**: Vá em "Logs" para ver logs em tempo real
- **Métricas**: Monitore CPU e memória
- **Health Check**: O Render verifica automaticamente `/api/health`

### Netlify (Frontend)
- **Deploy Logs**: Veja logs de build
- **Analytics**: Monitore visitantes (precisa ativar)
- **Forms**: Se usar Netlify Forms

## 🔒 Segurança em Produção

### 1. Alterar Credenciais do Admin
```bash
# No Render, acesse os logs e execute no terminal do serviço:
# (Ou use o SQL Editor se disponível)
```

### 2. Configurar Domínio Personalizado
**Netlify:**
1. Vá em "Domain settings"
2. Clique em "Add custom domain"
3. Configure seu domínio

**Render:**
1. Vá em "Settings" > "Custom Domains"
2. Adicione seu domínio
3. Configure DNS

## 🚨 Solução de Problemas

### Backend não inicia no Render
- Verifique se `NODE_ENV=production`
- Confirme que o `PORT=10000`
- Verifique os logs de build

### CORS Error
- Confirme que `FRONTEND_URL` está correto
- Verifique se a URL do Netlify está exata

### Frontend não carrega
- Verifique se `VITE_API_URL` está correto
- Confirme que o backend está rodando

### SQLite não persiste
- O Render mantém o volume persistente
- Dados são salvos entre deploys
- Se perder dados, pode ser necessário recriar o serviço

## 📱 URLs Finais

Após o deploy, você terá:
- **Site**: `https://sollara-garden.netlify.app`
- **Admin**: `https://sollara-garden.netlify.app/admin`
- **API**: `https://sollara-garden-backend.onrender.com/api`

## 🎉 Deploy Concluído!

**Credenciais padrão:**
- Usuário: `admin`
- Senha: `admin123`

⚠️ **IMPORTANTE**: Altere essas credenciais em produção!

### Próximos Passos:
1. Teste todas as funcionalidades
2. Configure domínio personalizado
3. Configure backup do banco de dados
4. Monitore performance
5. Configure SSL/HTTPS (já vem configurado)

---

**Seu projeto está online e funcionando com dados persistentes!** 🚀