# Personal Portfolio Website

A minimal, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Minimal Design**: Clean monochrome color palette
- **Fully Responsive**: Mobile-first approach
- **Smooth Animations**: Subtle hover effects and transitions
- **Single Page**: Smooth scrolling navigation
- **SEO Optimized**: Meta tags and structured data
- **Accessible**: ARIA labels and keyboard navigation

## 📁 Project Structure

```
glm4.6/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Main page
│   ├── components/
│   │   └── sections/          # Page sections
│   │       ├── Hero.tsx       # Hero section
│   │       ├── About.tsx      # About section
│   │       ├── Skills.tsx     # Skills section
│   │       ├── Experience.tsx # Experience timeline
│   │       ├── Education.tsx  # Education section
│   │       ├── Projects.tsx   # Projects showcase
│   │       ├── Contact.tsx    # Contact form
│   │       ├── Navigation.tsx # Navigation header
│   │       └── Footer.tsx     # Footer
│   ├── data/                  # Portfolio data
│   │   ├── projects.ts        # Projects data
│   │   ├── experience.ts      # Work experience
│   │   ├── skills.ts          # Skills data
│   │   └── education.ts       # Education data
│   ├── types/                 # TypeScript types
│   │   └── index.ts           # Type definitions
│   └── utils/                 # Utility functions
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Edit the following files to customize your portfolio:

1. **Update metadata in `src/app/layout.tsx`:**
   - Change title, description, and OpenGraph settings

2. **Customize data files in `src/data/`:**
   - `projects.ts`: Add your projects with descriptions and links
   - `experience.ts`: Update your work experience
   - `skills.ts`: List your technical skills
   - `education.ts`: Add your educational background

3. **Update contact information:**
   - Edit email, phone, and social links in `Contact.tsx` and `Footer.tsx`

### Styling

The design uses a monochrome color palette. You can customize colors in `tailwind.config.ts`:

```typescript
colors: {
  black: '#000000',
  dark: { /* your dark shades */ },
  gray: { /* your gray shades */ },
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

## 📊 Sections Included

1. **Hero**: Introduction with call-to-action
2. **About**: Personal story and background
3. **Skills**: Technical skills categorized by domain
4. **Experience**: Work experience timeline
5. **Education**: Academic background
6. **Projects**: Portfolio showcase with filtering
7. **Contact**: Contact form and information
8. **Footer**: Social links and site information

## 🎨 Design Principles

- **Minimal Aesthetic**: Clean, distraction-free design
- **Monochrome Palette**: Professional black, white, and gray tones
- **Responsive**: Mobile-first approach with breakpoints
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized images and minimal animations

---

**Note**: This is a personal portfolio template. Please customize the content to reflect your own experience, skills, and projects.
