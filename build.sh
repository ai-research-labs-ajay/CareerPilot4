#!/usr/bin/env bash
# Render build step: writes config.local.js from environment variables.
# This file is generated at deploy time so secrets never live in git.
set -euo pipefail

cat > config.local.js <<EOF
window.CAREERPILOT_CONFIG = {
  SUPABASE_URL: "${SUPABASE_URL:-}",
  SUPABASE_ANON_KEY: "${SUPABASE_ANON_KEY:-}",
  SUPABASE_S3_BUCKET: "${SUPABASE_S3_BUCKET:-recordings}",
  SUPABASE_S3_REGION: "${SUPABASE_S3_REGION:-ap-south-1}",
  SUPABASE_S3_ACCESS_KEY_ID: "${SUPABASE_S3_ACCESS_KEY_ID:-}",
  SUPABASE_S3_SECRET_ACCESS_KEY: "${SUPABASE_S3_SECRET_ACCESS_KEY:-}",
  ADMIN_EMAIL: "${ADMIN_EMAIL:-}",
  ADMIN_PIN: "${ADMIN_PIN:-ADMIN2024}",
  GROQ_DEMO_KEY: "${GROQ_DEMO_KEY:-}",
  GROQ_MODEL: "${GROQ_MODEL:-llama-3.1-8b-instant}",
  RAPIDAPI_KEY: "${RAPIDAPI_KEY:-}",
  RAPIDAPI_JOBS_HOST: "${RAPIDAPI_JOBS_HOST:-jsearch.p.rapidapi.com}"
};
EOF

echo "Wrote config.local.js"
ls -la config.local.js
