/* CareerPilot — local configuration template
   Copy this file to `config.local.js` and fill in your own keys.
   `config.local.js` is gitignored and is loaded automatically by careerpilot.html.
*/
window.CAREERPILOT_CONFIG = {
  // Supabase (https://supabase.com -> Project Settings -> API)
  SUPABASE_URL: 'https://YOUR-PROJECT.supabase.co',
  SUPABASE_ANON_KEY: 'YOUR_SUPABASE_ANON_KEY',

  // Supabase S3-compatible storage (Storage -> S3 Access Keys)
  SUPABASE_S3_BUCKET: 'recordings',
  SUPABASE_S3_REGION: 'ap-south-1',
  SUPABASE_S3_ACCESS_KEY_ID: 'YOUR_S3_ACCESS_KEY_ID',
  SUPABASE_S3_SECRET_ACCESS_KEY: 'YOUR_S3_SECRET_ACCESS_KEY',

  // Admin
  ADMIN_EMAIL: 'admin@yourdomain.com',
  ADMIN_PIN: 'ADMIN2024',

  // Groq (https://console.groq.com)  — used as the platform "demo" key
  // when a student/teacher hits the Demo button without their own key.
  GROQ_DEMO_KEY: 'YOUR_GROQ_KEY',
  GROQ_MODEL: 'llama-3.1-8b-instant',

  // RapidAPI JSearch (https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch)
  RAPIDAPI_KEY: 'YOUR_RAPIDAPI_KEY',
  RAPIDAPI_JOBS_HOST: 'jsearch.p.rapidapi.com',
};
