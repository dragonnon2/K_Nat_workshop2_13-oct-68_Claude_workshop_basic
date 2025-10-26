# Minimal Portfolio Website

A clean, minimal personal portfolio built with Next.js 15, TypeScript, and Tailwind CSS featuring a monochrome design.

## Features

- 🎨 Monochrome design with clean aesthetics
- 📱 Fully responsive across all devices
- ⚡ Fast performance with static export
- 🔍 SEO optimized
- 📄 8 sections: Hero, About, Skills, Experience, Education, Projects, Resume, Contact

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static Export

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

### Update Content

1. **Personal Information**: Edit section components in `components/sections/`
2. **Colors**: Modify `tailwind.config.ts` for custom monochrome palette
3. **Resume**: Replace `public/resume.pdf` with your own PDF

### Key Files

- `app/layout.tsx` - Root layout with metadata
- `app/page.tsx` - Main page importing all sections
- `components/sections/` - Individual page sections
- `app/globals.css` - Global styles and Tailwind configuration

## Sections

1. **Hero** - Introduction with name, title, and CTA
2. **About** - Professional story and background
3. **Skills** - Categorized technical skills
4. **Experience** - Work history timeline
5. **Education** - Academic background
6. **Projects** - Featured project showcase
7. **Resume** - Downloadable resume
8. **Contact** - Contact form and social links

## Deployment

This project is configured for static export and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

```bash
npm run build
```

The static files will be in the `out` directory.

## License

MIT License - feel free to use this template for your own portfolio!
