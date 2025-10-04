# Saurabh's Portfolio Website

A modern, responsive portfolio website built with Next.js 14, showcasing my expertise in Software Engineering, Full Stack Development, Cloud Architecture, and DevOps.

## 🌟 Features

- **Modern Design**: Clean, dark theme with beautiful animations
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Projects**: Detailed project showcases with architecture diagrams
- **Smooth Animations**: Powered by Framer Motion
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Built with Next.js for excellent SEO

## 🚀 Technologies Used

- **Frontend**: React 18, Next.js 14, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Animation**: Framer Motion, Intersection Observer

## 📋 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navigation component
│   │   └── Footer.tsx       # Footer component
│   └── sections/
│       ├── HeroSection.tsx      # Hero/landing section
│       ├── AboutSection.tsx     # About me section
│       ├── SkillsSection.tsx    # Skills showcase
│       ├── ProjectsSection.tsx  # Projects portfolio
│       └── ContactSection.tsx   # Contact form
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd saurabh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update your personal details in:
- `app/page.tsx` - Navigation and page structure
- `components/sections/HeroSection.tsx` - Hero section content
- `components/sections/AboutSection.tsx` - About section content
- `components/sections/SkillsSection.tsx` - Skills and tech stack
- `components/sections/ProjectsSection.tsx` - Portfolio projects
- `components/sections/ContactSection.tsx` - Contact information

### Projects
To add/update projects, modify the `projects` array in `components/sections/ProjectsSection.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    shortDescription: 'Brief project description',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/yourusername/project',
    // ... other properties
  }
]
```

### Contact Information
Update contact details in `components/sections/ContactSection.tsx`:
- Email address
- Phone number
- Social media links
- Location

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Netlify
1. Build your project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Self-hosted
1. Build the project: `npm run build`
2. Start the production server: `npm start`

## 📸 Preview

[Add screenshot or demo link here]

## 🎨 Color Scheme

- **Background**: Dark theme (`#0a0a0a`)
- **Cards**: Dark gray (`#1a1a1a`)
- **Accent Purple**: `#8b5cf6`
- **Accent Blue**: `#0066ff`
- **Accent Green**: `#10b981`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

I'm a passionate Software Engineer with expertise in:
- **Full Stack Development**: React, Node.js, TypeScript
- **Cloud Architecture**: AWS, Docker, Kubernetes
- **DevOps**: CI/CD, Infrastructure as Code
- **Software Engineering**: System design, Clean code practices

Feel free to reach out for collaborations or opportunities!

---

⭐ If you found this portfolio helpful, give it a star!
