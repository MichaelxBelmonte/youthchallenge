# Startup Youth Challenge | YouthLink

Ecosistema educativo decentralizzato che connette, ispira e guida i giovani di 12-22 anni attraverso il **Startup Youth Challenge** powered by Randstad.

## 🚀 Descrizione del Progetto

Il **Startup Youth Challenge** è il programma flagship 2025-26 di YouthLink che mira a:

- Reclutare **fino a 10 scuole superiori** (≤ 30 km da Milano)
- Formare **6-10 team misti di studenti** (4-6 alunni per team)
- Fornire **tutor YouthLink** e **mentor Randstad** dedicati
- Erogare **€500 di grant per team** (budget per max 10 team)

### 🎯 Track Verticali
1. **AI & Automation**
2. **Sustainability** 
3. **Food Innovation**
4. **Finance Empowerment**
5. **Healthcare & Wellbeing**

### 📋 Deliverable Finali (Maggio 2026)
- MVP funzionante
- Pitch deck professionale  
- Video demo di 2 minuti
- SDG impact sheet

## 🛠 Stack Tecnologico

- **Framework**: Next.js 14 (App Router) con TypeScript
- **Styling**: TailwindCSS, PostCSS, Autoprefixer
- **Database & Auth**: Supabase (PostgreSQL + Auth + Storage)
- **UI Components**: Lucide React, Headless UI
- **Testing**: Vitest + React Testing Library
- **Deployment**: Vercel

## 📁 Struttura del Progetto

\`\`\`
startup-youth-challenge/
├─ app/                      # Next.js App Router
│  ├─ layout.tsx            # HTML shell + metadata
│  ├─ globals.css           # Stili globali
│  ├─ page.tsx              # Landing page
│  ├─ (auth)/               # Route di autenticazione
│  │   └─ login/page.tsx    # Pagina login admin
│  ├─ (dashboard)/          # Area protetta
│  │   ├─ layout.tsx        # Layout dashboard
│  │   ├─ page.tsx          # Dashboard principale
│  │   └─ admin/page.tsx    # Pannello admin
│  └─ api/                  # API routes
├─ components/              # Componenti riutilizzabili
│  ├─ Hero.tsx              # Sezione hero
│  ├─ FeatureCard.tsx       # Card delle feature
│  ├─ Timeline.tsx          # Timeline roadmap
│  ├─ Accordion.tsx         # FAQ accordion
│  └─ Contact.tsx           # Sezione contatti
├─ lib/                     # Utilities e configurazioni
│  ├─ supabaseClient.ts     # Client Supabase
│  └─ roadmap.ts            # Dati roadmap
├─ hooks/                   # Custom React hooks
│  └─ useAuth.ts            # Hook autenticazione
├─ data/                    # Dati statici
│  └─ roadmap.json          # Timeline del programma
├─ middleware.ts            # Protezione route RBAC
├─ public/                  # Asset statici
│  ├─ images/               # Loghi e immagini
│  └─ docs/                 # Documenti PDF
└─ supabase-schema.sql      # Schema database
\`\`\`

## ⚙️ Setup e Installazione

### 1. Prerequisiti
- Node.js 18+ 
- npm/yarn/pnpm
- Account Supabase

### 2. Clona il Repository
\`\`\`bash
git clone https://github.com/MichaelxBelmonte/youthchallenge.git
cd youthchallenge
\`\`\`

### 3. Installa le Dipendenze
\`\`\`bash
npm install
# oppure
pnpm install
\`\`\`

### 4. Configura Supabase

1. Crea un nuovo progetto su [Supabase](https://supabase.com)
2. Copia le credenziali dal dashboard
3. Crea il file \`.env.local\` dalla copia di \`env.example\`:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
\`\`\`

4. Esegui lo schema SQL nel SQL Editor di Supabase:
   - Copia il contenuto di \`supabase-schema.sql\`
   - Incollalo nel SQL Editor di Supabase
   - Esegui lo script

### 5. Crea gli Admin Users

1. Nel dashboard Supabase, vai su **Authentication > Users**
2. Crea 5 utenti admin con email e password:
   - \`admin1@youthlink.it\`
   - \`admin2@youthlink.it\`
   - \`admin3@youthlink.it\`
   - \`admin4@youthlink.it\`
   - \`admin5@youthlink.it\`

3. Dopo aver creato gli utenti, copia i loro UUID e aggiornali nel file SQL:
\`\`\`sql
INSERT INTO profiles (id, email, role) VALUES
  ('uuid-reale-1', 'admin1@youthlink.it', 'admin'),
  ('uuid-reale-2', 'admin2@youthlink.it', 'admin'),
  ('uuid-reale-3', 'admin3@youthlink.it', 'admin'),
  ('uuid-reale-4', 'admin4@youthlink.it', 'admin'),
  ('uuid-reale-5', 'admin5@youthlink.it', 'admin');
\`\`\`

## 🚀 Comandi Disponibili

\`\`\`bash
# Sviluppo
npm run dev          # Avvia il server di sviluppo

# Build e produzione  
npm run build        # Build per produzione
npm run start        # Avvia il server di produzione

# Code quality
npm run lint         # Esegue ESLint
npm run format       # Formatta il codice con Prettier

# Testing
npm run test         # Esegue i test con Vitest
npm run test:ui      # Interfaccia UI per i test
\`\`\`

## 🔐 Sistema di Autenticazione

### Ruoli Utente
- **Guest**: Visitatori anonimi (solo landing page)
- **Team**: Studenti e team (dashboard team)
- **Admin**: Amministratori (accesso completo)

### Protezione delle Route
- **Middleware**: Protegge automaticamente le route \`/dashboard/*\`
- **RLS**: Row Level Security su Supabase per sicurezza a livello database
- **Hook useAuth**: Gestisce lo stato di autenticazione lato client

### Accesso Admin
Solo i 5 utenti admin configurati possono accedere al dashboard:
1. Vai su \`/login\`
2. Inserisci email e password admin
3. Verrai reindirizzato al dashboard se autorizzato

## 🎨 Design System

### Palette Colori
- **Background**: \`#111111\` → \`#2b2b2b\` (dark-950 → dark-900)
- **Primary**: \`#0066ff\` (Randstad Blue)
- **Text**: White per titoli, \`#d1d1d1\` per testo secondario

### Componenti UI
- **Container**: \`mx-auto max-w-[1280px] px-6\`
- **Cards**: Rounded con hover effects e scale 105%
- **Buttons**: Primary e secondary con focus rings
- **Animations**: Fade-in e scale per micro-interazioni

## 📱 Features Implementate

### Landing Page
- ✅ Hero con loghi YouthLink e Randstad
- ✅ Feature cards (Skills, Mentor, Stage) con hover effects
- ✅ Timeline animata della roadmap (9 milestone)
- ✅ Accordion FAQ (6 domande)
- ✅ Contact boxes per scuole e startup tutor
- ✅ Design responsive e accessibile

### Sistema Auth
- ✅ Login page per admin
- ✅ Middleware di protezione route
- ✅ Hook useAuth per gestione stato
- ✅ Pagina unauthorized per accessi negati
- ✅ Row Level Security su database

### Database Schema
- ✅ Tabella \`profiles\` (utenti e ruoli)
- ✅ Tabella \`teams\` (team studenti)
- ✅ Tabella \`milestones\` (progressi team)
- ✅ Tabella \`settings\` (configurazioni dinamiche)
- ✅ Policies RLS per sicurezza

## 🚀 Deployment su Vercel

### 1. Connetti il Repository
1. Vai su [Vercel](https://vercel.com)
2. Importa il repository GitHub
3. Configura le variabili d'ambiente

### 2. Variabili d'Ambiente
Aggiungi in Vercel Settings > Environment Variables:
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
\`\`\`

### 3. Deploy
- Vercel deployerà automaticamente ad ogni push su \`main\`
- Build command: \`npm run build\`
- Output directory: \`.next\`

## 🧪 Testing

### Setup Testing
\`\`\`bash
npm run test        # Esegue tutti i test
npm run test:ui     # Interfaccia grafica per i test
\`\`\`

### Struttura Test
\`\`\`
tests/
├─ Hero.test.tsx           # Test componente Hero
├─ FeatureCard.test.tsx    # Test feature cards
└─ auth.test.tsx           # Test autenticazione
\`\`\`

## 📋 TODO / Prossimi Sviluppi

### Dashboard Team (In sviluppo)
- [ ] Progress bar (Alpha, Beta, Demo)
- [ ] Task board integrato
- [ ] File bucket per documenti
- [ ] Chat realtime con tutor/mentor

### Dashboard Admin (In sviluppo)  
- [ ] Tabella teams con KPI
- [ ] CRUD utenti
- [ ] Gestione settings (teamLimit, schoolLimit)
- [ ] Analytics e reportistica

### Features Avanzate
- [ ] Notifiche realtime
- [ ] Sistema di file upload
- [ ] Chat integrata
- [ ] Calendario eventi
- [ ] Sistema di valutazione

## 🤝 Contribuire

1. Fork del repository
2. Crea un branch feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit delle modifiche (\`git commit -m 'Add AmazingFeature'\`)
4. Push del branch (\`git push origin feature/AmazingFeature\`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è proprietario di **YouthLink** e **Randstad**. Tutti i diritti riservati.

## 📞 Contatti

- **YouthLink Team**: info@youthlink.it
- **Scuole**: schools@youthlink.it  
- **Startup Tutor**: tutors@youthlink.it
- **Repository**: https://github.com/MichaelxBelmonte/youthchallenge

---

**Powered by Randstad** | **Made with ❤️ by YouthLink Team** 