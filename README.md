
# 🚀 Nuxt 3 Course Platform

A modern, interactive course learning platform built with Nuxt 3, featuring dynamic course progression, video lessons, and completion tracking.

<img width="1068" height="723" alt="Screenshot 2026-03-21 at 9 18 28 PM" src="https://github.com/user-attachments/assets/8510a617-586a-4bb3-be75-407893af771c" />


## 🌐 Live Demo

**[View Live Application →](https://darling-cuchufli-f007f1.netlify.app/)**

Deployed on Netlify with continuous deployment from the main branch.

## 📋 About

An educational platform designed to deliver structured course content with an intuitive interface. Built with modern web technologies, this application provides a seamless learning experience with chapter-based navigation, video lessons, and progress tracking capabilities.

### ✨ Key Features

- 📚 **Structured Course Content** - Organized chapters and lessons with clear navigation
- 🎥 **Video Lessons** - Integrated video player for rich media content
- ✅ **Progress Tracking** - Mark lessons as complete and track your learning journey
- 🎨 **Modern UI/UX** - Built with Tailwind CSS 4 for a responsive, accessible interface
- ⚡ **Fast Performance** - Leveraging Nuxt 3's hybrid rendering and optimization
- 🔄 **Dynamic Routing** - Chapter and lesson navigation with slug-based URLs
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) (v3.15.4)
- **UI**: [Tailwind CSS](https://tailwindcss.com/) (v4.0.4)
- **Language**: TypeScript
- **State Management**: Vue Composables
- **Utilities**: VueUse (v12.5.0)

## 📁 Project Structure

```
Nuxt-Restart/
├── assets/
│   └── css/
│       └── main.css          # Global styles and Tailwind imports
├── components/
│   ├── LessonCompleteButton.client.vue  # Client-only completion tracking
│   └── VideoPlayer.vue       # Reusable video player component
├── composables/
│   ├── courseData.js         # Course data structure
│   └── useCourse.ts          # Course state management composable
├── layouts/
│   └── default.vue           # Main application layout
├── pages/
│   ├── index.vue             # Home/landing page
│   ├── course.vue            # Course overview page
│   ├── 404.vue               # Custom error page
│   └── course/chapter/[chapterSlug]/lesson/[lessonSlug].vue
└── public/                   # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, pnpm, yarn, or bun package manager

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd Nuxt-Restart
```

2. **Install dependencies**

```bash
# Using npm
npm install

# Using pnpm
pnpm install

# Using yarn
yarn install

# Using bun
bun install
```

### Development

Start the development server at `http://localhost:3000`:

```bash
npm run dev
```

The application will automatically reload when you make changes to the source files.

## 📦 Building for Production

### Build

Generate a production-ready build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Generate Static Site

Generate a static version for deployment:

```bash
npm run generate
```

## 🌍 Deployment

This project is configured for seamless deployment on modern hosting platforms:

### Netlify (Current)

The application is deployed on Netlify with automatic deployments from the main branch.

**Live URL**: [https://darling-cuchufli-f007f1.netlify.app/](https://darling-cuchufli-f007f1.netlify.app/)

### Other Platforms

- **Vercel**: Deploy with zero configuration
- **Cloudflare Pages**: Edge-optimized deployment
- **Netlify**: Static site hosting with edge functions

Refer to the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for platform-specific instructions.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```env
# Add your environment variables here
```

### Nuxt Config

Customize the application in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  // Your configuration
})
```

## 📝 Development Workflow

1. **Feature Development**: Create feature branches from `main`
2. **Code Quality**: Ensure TypeScript types are properly defined
3. **Testing**: Test across different devices and browsers
4. **Commit**: Use conventional commit messages
5. **Deploy**: Push to main for automatic deployment

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is available for educational and personal use.

## 🔗 Resources

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [VueUse Documentation](https://vueuse.org/)

---

**Built with ❤️ using Nuxt 3**

---

## Maintenance

Last maintenance update: <!--LAST_UPDATED-->2026-05-19<!--/LAST_UPDATED-->
