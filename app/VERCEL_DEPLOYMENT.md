# 🚀 DEPLOYMENT INSTRUCTIONS FOR VERCEL

## Critical Environment Variables (REQUIRED)

Add these in your Vercel project settings:

```env
DATABASE_URL=postgresql://your_neon_url_here
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your_long_random_string
PRISMA_SKIP_POSTINSTALL_GENERATE=false
```

## Deployment Steps

1. **Clear your repository**: Delete all existing files in your GitHub repo
2. **Upload files**: Copy all files from the extracted `app/` folder to your repo root
3. **Commit and push** to trigger Vercel deployment
4. **Set environment variables** in Vercel dashboard
5. **Redeploy** after setting environment variables

## Database Setup

1. Create a PostgreSQL database on [Neon.tech](https://neon.tech)
2. Copy the connection string to DATABASE_URL
3. The first deployment will automatically run database migrations

## Troubleshooting

If build fails:
1. Verify all environment variables are set
2. Check that DATABASE_URL is accessible
3. Try redeploying from Vercel dashboard

## Features

✅ Dynamic Prisma imports (Vercel-optimized)
✅ Automatic database migrations
✅ File upload to cloud storage
✅ PDF report generation
✅ Camera integration for wound analysis

