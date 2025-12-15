# Deployment Guide

## 📤 Uploading to GitHub

### Step 1: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right corner and select "New repository"
3. Repository settings:
   - **Repository name**: `portfolio-website` (or your preferred name)
   - **Description**: "My personal portfolio website showcasing projects and skills"
   - **Visibility**: Public (recommended) or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

### Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Navigate to your project directory
cd "c:\Users\ADMIN\Downloads\portfolio-website-main\portfolio-website-main"

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/Praveenasarma-Baskarakurukkal/portfolio-website.git

# Rename branch to main (if not already)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

### Alternative: If you prefer SSH

```bash
git remote add origin git@github.com:Praveenasarma-Baskarakurukkal/portfolio-website.git
git branch -M main
git push -u origin main
```

## 🚀 Deploying to Vercel (Recommended)

### Why Vercel?
- Free hosting for Next.js applications
- Automatic deployments on every push
- Built-in CI/CD
- Custom domain support
- Excellent performance

### Steps:

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your `portfolio-website` repository

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `pnpm build` (or `npm run build`)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `pnpm install` (or `npm install`)

4. **Environment Variables** (if needed)
   - No environment variables required for basic setup

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site will be live at `https://your-project.vercel.app`

6. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

## 🌐 Alternative Deployment Options

### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### GitHub Pages
- Not recommended for Next.js apps (requires static export)
- Consider Vercel or Netlify instead

## 📝 Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Check responsive design on mobile
- [ ] Verify CV download link works
- [ ] Test all external links (GitHub, LinkedIn)
- [ ] Check FormSubmit email confirmation
- [ ] Update README with live site URL

## 🔄 Making Updates

After pushing to GitHub, updates are easy:

```bash
# Make your changes
git add .
git commit -m "Update: description of changes"
git push
```

If connected to Vercel, it will automatically redeploy!

## 📊 Analytics (Optional)

Consider adding:
- Google Analytics
- Vercel Analytics (built-in)
- Plausible Analytics (privacy-focused)

## 🔒 Security Notes

- FormSubmit requires email confirmation on first submission
- Never commit sensitive API keys or credentials
- Use environment variables for sensitive data
- Review `.gitignore` to ensure secrets are excluded
