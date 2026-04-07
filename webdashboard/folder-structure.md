# CareerPilot – Code Structure
### Inside `careerpilot.html` (single-file app)

---

## 📁 File Overview

```
webdashboard/
├── careerpilot.html        ← Main app (entire codebase lives here)
├── README.md               ← Project overview, setup guide, deployment
└── folder-structure.md     ← This file
```

---

## 🧱 Inside careerpilot.html

The file is structured in sections separated by comments (`// ─── SECTION ───`):

```
careerpilot.html
│
├── <head>
│   ├── Meta / title
│   ├── CDN Scripts
│   │   ├── React 18 (development UMD)
│   │   ├── ReactDOM 18 (development UMD)
│   │   ├── Babel Standalone (JSX transpiler)
│   │   ├── Tailwind CSS CDN
│   │   └── Supabase JS v2 (UMD build)
│   └── <style>
│       ├── CSS Reset
│       ├── Gradient utilities (.grad, .grad2)
│       ├── Glass / Card styles (.glass, .card)
│       ├── Button styles (.btn-primary, .btn-ghost)
│       ├── Input / Select styles
│       ├── Badge styles (.badge-*)
│       ├── Navigation (.nav-item)
│       ├── Floating timer (.float-timer)
│       ├── Task item (.task-item)
│       ├── Book / Job card styles
│       ├── Progress bar
│       ├── Tab buttons
│       └── Animations (fadeIn, pulse)
│
└── <script type="text/babel">   ← All React code starts here
    │
    ├── CONFIG CONSTANTS (~line 68)
    │   ├── SUPABASE_URL
    │   ├── SUPABASE_ANON_KEY
    │   ├── WEB3FORMS_KEY
    │   ├── ADMIN_EMAIL
    │   └── OWNER_UPI
    │
    ├── INIT SUPABASE
    │   └── createClient() with error handling → window.supabase
    │
    ├── HELPER FUNCTIONS
    │   ├── ls(key, fallback)        — localStorage get
    │   ├── ss(key, val)             — localStorage set
    │   ├── notifyAdmin(name,email)  — Web3Forms email alert
    │   └── groqCall(apiKey, prompt) — Groq AI API call
    │
    ├── STATIC DATA
    │   ├── BOOKS[]        — Book listings per department with Amazon affiliate URLs
    │   ├── JOBS[]         — Curated static job listings
    │   └── NOTES[]        — Free + premium PDF notes metadata
    │
    ├── ─── COMPONENTS (React functions) ───────────────────────
    │
    ├── AuthPage
    │   ├── Login / Signup tabs
    │   ├── Supabase auth.signUp() + auth.signInWithPassword()
    │   ├── Saves to user_profiles table
    │   ├── Calls notifyAdmin() on signup
    │   └── localStorage fallback when Supabase not configured
    │
    ├── OnboardingProfile
    │   └── Collects: department, year, target exam → saves to profile state
    │
    ├── ApiKeySetup
    │   └── First-run Groq API key entry screen
    │
    ├── Dashboard
    │   ├── Welcome banner + streak counter
    │   ├── Today's tasks summary
    │   ├── Study hours card
    │   ├── Quick links to all sections
    │   └── Govt job alerts panel
    │
    ├── StudyRoutine
    │   ├── Manual study plan builder
    │   └── AI plan generator (calls groqCall())
    │
    ├── TaskManager
    │   ├── Add tasks with subject, priority, YouTube link
    │   ├── Tick off tasks / YouTube videos
    │   └── Filter by subject / priority
    │
    ├── BooksLibrary
    │   ├── Filter by department (CSE, IT, ECE, ME, EE, Civil, Science, Arts, Commerce)
    │   ├── Book cards with cover image, author, rating
    │   └── "Buy on Amazon" → affiliate link (tag: careerpilot-21)
    │
    ├── JobFinder
    │   ├── Tab 1 — 🔴 Live Search
    │   │   ├── Query + location input
    │   │   ├── Calls JSearch RapidAPI
    │   │   ├── Displays: logo, title, company, location, salary (LPA), type, date
    │   │   ├── "🚀 Apply Directly →" → job_apply_link (no Google redirect)
    │   │   └── RapidAPI key banner (stores in localStorage cp_rapidapi_key)
    │   └── Tab 2 — 📋 Curated Jobs
    │       └── Static JOBS[] filtered by category
    │
    ├── NotesSection
    │   ├── Browse tabs: All | Free | Premium
    │   ├── Filter by exam (GATE, UPSC, SSC, etc.)
    │   ├── Free notes — direct PDF link
    │   ├── Premium notes — UPI payment modal (2-step: pay → enter txn ID)
    │   ├── Upload tab
    │   │   ├── Form: title, subject, exam, desc, type, price, uploader details
    │   │   ├── File drop zone → uploads to Supabase Storage (notes bucket)
    │   │   ├── Saves metadata to notes_uploads table
    │   │   └── Admin notified via Web3Forms
    │   └── My Submissions — shows user's uploaded notes
    │
    ├── PerformanceDashboard
    │   ├── Total study hours
    │   ├── Tasks completed / pending
    │   ├── Weekly progress chart
    │   └── Subject-wise breakdown
    │
    ├── Settings
    │   ├── Account card (name, email, logout)
    │   ├── Groq AI API key card
    │   ├── RapidAPI key card (Live Job Search)
    │   ├── Premium upgrade card (₹299/month)
    │   ├── Sell Notes card (→ navigates to Notes upload)
    │   ├── Amazon Affiliate card (tag info + signup link)
    │   ├── UPI Payments card (shows active UPI ID)
    │   ├── Connection Status (✅/❌ for Supabase, Web3Forms, Groq, RapidAPI, UPI)
    │   └── Data Management (clear tasks, reset profile, logout)
    │
    ├── FloatingTimer
    │   ├── Tracks daily study time (seconds)
    │   ├── Start / Pause on click
    │   └── Saves to localStorage bs_timer_secs
    │
    ├── MainApp (layout shell)
    │   ├── Left sidebar navigation
    │   ├── Page router (switch on `page` state)
    │   └── Floating timer overlay
    │
    └── App (root component)
        ├── Auth screen → Onboarding → API key setup → MainApp
        ├── Global state: user, profile, apiKey, page, timerSecs, tasks
        └── ReactDOM.createRoot('#root').render(<App/>)
```

---

## 🔑 localStorage Keys

| Key | Stores |
|---|---|
| `bs_user` | Logged-in user object (name, email) |
| `bs_profile` | Study profile (department, year, exam) |
| `bs_groq_key` | Groq AI API key |
| `cp_rapidapi_key` | RapidAPI key for job search |
| `bs_tasks` | Task list array |
| `bs_routine` | Saved study routine text |
| `bs_ai_advice` | Last AI study plan output |
| `bs_timer_secs` | Cumulative daily study seconds |
| `bs_unlocked_notes` | Array of unlocked premium note IDs |
| `cp_user_uploads` | User's own note submission history |

---

## 🌐 External APIs Called

| API | Endpoint | Purpose |
|---|---|---|
| Supabase Auth | `supabase.auth.signUp/signIn` | User login/signup |
| Supabase DB | `supabase.from('user_profiles').upsert()` | Save user data |
| Supabase Storage | `supabase.storage.from('notes').upload()` | PDF file upload |
| Web3Forms | `https://api.web3forms.com/submit` | Admin email alerts |
| Groq | `https://api.groq.com/openai/v1/chat/completions` | AI study plans |
| JSearch | `https://jsearch.p.rapidapi.com/search` | Live job listings |

---

*Last updated: March 2026*
