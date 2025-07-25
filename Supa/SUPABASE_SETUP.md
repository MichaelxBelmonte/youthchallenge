# 🔧 Guida Setup Supabase - Startup Youth Challenge

Questa guida ti aiuterà a configurare correttamente Supabase e risolvere i problemi di creazione utenti.

## 📋 Prerequisiti

1. Account Supabase attivo
2. Progetto Supabase creato
3. Credenziali copiate in `.env.local`

## 🚀 Procedura Step-by-Step

### Step 1: Verifica Configurazione Base

1. Vai al **SQL Editor** in Supabase
2. Esegui lo script `supabase-debug.sql` per verificare lo stato attuale
3. Controlla che tutte le tabelle siano state create correttamente

### Step 2: Crea il Database Schema

1. Nel **SQL Editor**, esegui **tutto** il contenuto di `supabase-schema.sql`
2. Se ricevi errori, procedi con lo Step 3

### Step 3: Risolvi Problemi di Creazione Utenti

Se hai l'errore "Database error creating new user":

1. Esegui lo script `supabase-fix.sql` nel **SQL Editor**
2. Questo script:
   - Disabilita temporaneamente RLS
   - Ricrea la funzione trigger in modo più robusto
   - Riabilita RLS con policies corrette

### Step 4: Crea gli Utenti Admin

**IMPORTANTE**: Segui questi passi nell'ordine esatto per evitare l'errore foreign key constraint.

#### Passo 4.1: Crea Utenti in Supabase Auth

1. Vai su **Authentication > Users** nel dashboard Supabase
2. Clicca **"Add user"** 
3. Crea 5 utenti uno alla volta:
   - Email: `admin1@youthlink.it`, Password: (sicura)
   - Email: `admin2@youthlink.it`, Password: (sicura)  
   - Email: `admin3@youthlink.it`, Password: (sicura)
   - Email: `admin4@youthlink.it`, Password: (sicura)
   - Email: `admin5@youthlink.it`, Password: (sicura)
4. **Non spuntare** "Auto Confirm User" se vuoi che confermino l'email
5. Clicca **"Create user"** per ognuno

#### Passo 4.2: Ottieni gli UUID Reali

1. Nel **SQL Editor**, esegui lo script `supabase-create-admins.sql`
2. Esegui il **STEP 1** per vedere gli UUID generati:
\`\`\`sql
SELECT id, email, created_at 
FROM auth.users 
WHERE email IN (
  'admin1@youthlink.it',
  'admin2@youthlink.it', 
  'admin3@youthlink.it',
  'admin4@youthlink.it',
  'admin5@youthlink.it'
)
ORDER BY email;
\`\`\`

#### Passo 4.3: Inserisci i Profili Admin

1. Copia gli UUID dalla query sopra
2. Sostituiscili nel comando INSERT:
\`\`\`sql
INSERT INTO profiles (id, email, role) VALUES
  ('uuid-reale-da-auth-users-1', 'admin1@youthlink.it', 'admin'),
  ('uuid-reale-da-auth-users-2', 'admin2@youthlink.it', 'admin'),
  ('uuid-reale-da-auth-users-3', 'admin3@youthlink.it', 'admin'),
  ('uuid-reale-da-auth-users-4', 'admin4@youthlink.it', 'admin'),
  ('uuid-reale-da-auth-users-5', 'admin5@youthlink.it', 'admin')
ON CONFLICT (id) DO UPDATE SET role = EXCLUDED.role;
\`\`\`
3. Esegui il comando INSERT nel SQL Editor

### Step 5: Verifica Setup

1. Esegui questa query per verificare gli admin:
\`\`\`sql
SELECT id, email, role, created_at 
FROM profiles 
WHERE role = 'admin';
\`\`\`

2. Dovresti vedere 5 utenti admin

### Step 6: Testa l'Autenticazione

1. Avvia il server locale: `npm run dev`
2. Vai su `http://localhost:3000/login`
3. Prova a loggarti con uno degli admin
4. Dovresti essere reindirizzato al dashboard

## 🚨 Risoluzione Problemi Comuni

### Errore: "Database error creating new user"

**Causa**: Policies RLS troppo restrittive o trigger mal configurato

**Soluzione**:
1. Esegui `supabase-fix.sql`
2. Verifica che RLS sia configurato correttamente
3. Ricrea gli utenti se necessario

### Errore: "User not found" al login

**Causa**: Profilo non creato nella tabella `profiles`

**Soluzione**:
1. Verifica che l'utente esista in `auth.users`
2. Inserisci manualmente il profilo in `profiles`
3. Assicurati che `role = 'admin'`

### Errore: "Unauthorized" dopo login

**Causa**: Ruolo non impostato correttamente

**Soluzione**:
\`\`\`sql
UPDATE profiles 
SET role = 'admin' 
WHERE email IN (
  'admin1@youthlink.it',
  'admin2@youthlink.it',
  'admin3@youthlink.it',
  'admin4@youthlink.it',
  'admin5@youthlink.it'
);
\`\`\`

### Errore: Policies RLS

**Causa**: Policies troppo restrittive

**Soluzione**:
\`\`\`sql
-- Temporaneamente disabilita RLS per test
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- Testa la creazione utenti
-- Poi riabilita RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
\`\`\`

## 🔍 Query Utili per Debug

### Verifica utenti auth
\`\`\`sql
SELECT id, email, created_at, email_confirmed_at 
FROM auth.users 
ORDER BY created_at DESC;
\`\`\`

### Verifica profili
\`\`\`sql
SELECT p.id, p.email, p.role, u.email_confirmed_at
FROM profiles p
LEFT JOIN auth.users u ON p.id = u.id
ORDER BY p.created_at DESC;
\`\`\`

### Verifica policies
\`\`\`sql
SELECT * FROM pg_policies WHERE tablename = 'profiles';
\`\`\`

### Test inserimento manuale
\`\`\`sql
INSERT INTO profiles (id, email, role) 
VALUES (gen_random_uuid(), 'test@example.com', 'guest');
\`\`\`

## 📞 Supporto

Se continui ad avere problemi:

1. Controlla i **Logs** in Supabase Dashboard
2. Verifica le **Environment Variables** in `.env.local`
3. Assicurati che il progetto Supabase sia attivo
4. Controlla la **quota** del tuo piano Supabase

## ✅ Checklist Finale

- [ ] Database schema creato senza errori
- [ ] 5 utenti admin creati in `auth.users`
- [ ] 5 profili admin creati in `profiles` con `role = 'admin'`
- [ ] RLS abilitato e policies configurate
- [ ] Trigger funzionante per nuovi utenti
- [ ] Login funzionante su `/login`
- [ ] Redirect al dashboard dopo login
- [ ] Middleware che protegge le route `/dashboard/*`

Una volta completata questa checklist, il sistema di autenticazione dovrebbe funzionare perfettamente! 