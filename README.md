# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Deployment to Vercel

This project is configured for deployment to Vercel with optimal settings for Astro.

### Prerequisites

- A [Vercel account](https://vercel.com/signup)
- Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

1. **Push your code to a Git repository** (if not already done)

2. **Import to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect the Astro framework

3. **Configure (if needed):**
   - Framework Preset: Astro (auto-detected)
   - Build Command: `npm run build` (auto-configured)
   - Output Directory: `dist` (auto-configured)
   - Install Command: `npm install` (auto-configured)

4. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a production URL (e.g., `your-project.vercel.app`)

### Environment Variables

This project currently does not require any environment variables. If you need to add environment variables in the future:

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add your variables for Production, Preview, and Development environments

### Vercel Configuration

The `vercel.json` file in the root directory contains the deployment configuration:

```json
{
  "framework": "astro",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Local Build Testing

Before deploying, test the production build locally:

```sh
npm run build
npm run preview
```

This ensures your site builds correctly and works as expected in production mode.

### Continuous Deployment

Once connected to Vercel:
- Every push to your main branch triggers a production deployment
- Pull requests create preview deployments automatically
- You can view deployment logs and status in the Vercel dashboard

### Custom Domain

To add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain and follow the DNS configuration instructions

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
