# CareerPilot 🎓
### Student Success Platform for B.Tech & Graduate Students in India

CareerPilot is a **single-file** educational web app that helps students manage studies, find jobs, access notes, and track academic performance — all in one place with no installation needed.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 Login / Signup | Supabase auth with localStorage fallback |
| 🤖 AI Study Planner | Groq AI (`llama-3.3-70b`) personalised study routines |
| ✅ Task Manager | Topic tracking with YouTube video ticking, priorities |
| 📚 Books Library | 10 departments + AIML, Amazon affiliate links |
| 📄 PDF Notes | Free + premium notes, user uploads, UPI payment |
| 🔍 Live Job Search | Real-time jobs via JSearch RapidAPI (LinkedIn, Indeed, Naukri) |
| 💼 Curated Jobs | Hand-picked govt & private job listings |
| 🔔 Govt Job Alerts | Email subscription for vacancy notifications |
| 📊 Performance Dashboard | Study stats, streaks, subject-wise charts |
| ⏱ Floating Timer | Daily study time tracker |
| ⚙️ Settings | API keys, premium upgrade, affiliate info, connection status |

---

## 📱 Fully Responsive — All Devices

| Device | Layout |
|---|---|
| Phone (≤767px) | Bottom navigation bar, single-column, large tap targets |
| Tablet (768–1023px) | Icon-only sidebar (68px), stacked grids |
| Laptop (1024–1279px) | Full sidebar (220px), standard layout |
| Desktop (≥1280px) | Full sidebar (220px), maximum spacing |

---

## 🛠 Tech Stack

- **Frontend:** React 18 (Babel standalone) + Tailwind CSS — zero build step
- **Database & Auth:** Supabase (PostgreSQL + Storage)
- **Email Alerts:** Web3Forms (admin notified on every signup)
- **AI Engine:** Groq API (`llama-3.3-70b-versatile`)
- **Job Search:** JSearch RapidAPI (LinkedIn, Indeed, Naukri, Glassdoor)
- **Payments:** UPI direct (`7324897718@ptsbi`)
- **Affiliate:** Amazon Associates India (tag: `1000673-21`)

---

## ⚙️ Configuration

Open `careerpilot.html` in any text editor. At the top (~line 97) you will find:

```javascript
const SUPABASE_URL      = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_YOUR_KEY';
const WEB3FORMS_KEY     = 'YOUR_WEB3FORMS_KEY';
const ADMIN_EMAIL       = 'your@email.com';
const OWNER_UPI         = 'yourname@upi';
```

---

## 🗄 Supabase Setup

Run in Supabase → SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID NOT NULL PRIMARY KEY,
  name TEXT, email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS notes_uploads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT, subject TEXT, exam TEXT, description TEXT,
  type TEXT, price INTEGER DEFAULT 0,
  file_url TEXT, uploader_name TEXT, uploader_email TEXT,
  status TEXT DEFAULT 'pending', created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE user_profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE notes_uploads DISABLE ROW LEVEL SECURITY;
```

**Also required:**
1. Authentication → Providers → Email → Turn OFF **"Confirm email"**
2. Storage → Create bucket named `notes` → set to **Public**

---

## 🔑 API Keys

| Service | Where to Get | Free Tier |
|---|---|---|
| Supabase | [supabase.com](https://supabase.com) | 500 MB DB, 1 GB Storage |
| Web3Forms | [web3forms.com](https://web3forms.com) | 250 emails/month |
| Groq AI | [console.groq.com](https://console.groq.com) | Free, no credit card |
| RapidAPI (JSearch) | [rapidapi.com → JSearch](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) | 200 req/month |
| Amazon Associates | [affiliate-program.amazon.in](https://affiliate-program.amazon.in) | Commission on sales |

> Groq and RapidAPI keys are entered by users inside the app (Settings page). They are never hardcoded.

---

## 📚 Book Departments

CSE · IT · **AIML** · ECE · EE · ME · Civil · Science · Arts · Commerce

AIML books include: Deep Learning (Goodfellow), Hands-On ML (Géron), Pattern Recognition (Bishop), Reinforcement Learning (Sutton), NLP with Transformers, Computer Vision (Szeliski), and more.

---

## 💰 Monetisation

- **Amazon Affiliate** — Every "Buy on Amazon" click uses tag `1000673-21`. Earn 2–8% commission automatically.
- **Premium Subscriptions** — ₹299/month via Razorpay.
- **Paid Notes** — Students pay UPI directly. 70% revenue to the note creator.

---

## 🚀 Deployment

**GitHub Pages (free, recommended):**
1. Create a GitHub repository
2. Upload `careerpilot.html`
3. Settings → Pages → Source: main branch → `/` (root) → Save
4. Live at `https://yourusername.github.io/repo-name/careerpilot.html`

**Render (free static site):**
1. Push to GitHub
2. New → **Static Site** (not Web Service!) on [render.com](https://render.com)
3. Connect repo, Publish Directory: leave blank or type `/`
4. Deploy

---

## 📁 Files

| File | Purpose |
|---|---|
| `careerpilot.html` | The entire app — edit this file only |
| `README.md` | This file — project overview and setup guide |
| `folder-structure.md` | Detailed code map of every component inside `careerpilot.html` |

---

## 🔍 Troubleshooting

| Issue | Fix |
|---|---|
| Supabase not connecting | Hard refresh (Ctrl+Shift+R), check browser console for `✅ Supabase ready` |
| No admin email on signup | Confirm Web3Forms account email at `ajay.smartxalgo@gmail.com` |
| Groq AI not working | Add/update key in Settings → Groq API Key card |
| Jobs not loading | Add RapidAPI key in Settings → RapidAPI Key card or in Job Finder banner |
| Data not in Supabase table | Check RLS is disabled; check email confirmation is off |

---

*Built for Indian B.Tech & graduate students · Last updated March 2026*
