# Content Engineering Portal

A modern, responsive landing page built with React, Vite, and Tailwind CSS featuring a glassmorphism design and smooth animations.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite for fast development
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Glassmorphism UI**: Beautiful glass-effect cards with smooth animations
- **Component-Based Architecture**: Modular and maintainable code structure
- **TypeScript Ready**: Easy to migrate to TypeScript
- **Performance Optimized**: Fast loading and smooth interactions

## 📁 Project Structure

```
landing_page/
├── src/
│   ├── components/
│   │   ├── Background.jsx    # Background effects & orbs
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Hero.jsx           # Hero section
│   │   ├── ToolCard.jsx       # Tool card component
│   │   └── Footer.jsx         # Footer section
│   ├── data/
│   │   └── tools.js           # Tools data configuration
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles & Tailwind imports
├── public/                    # Static assets
├── index.html                 # HTML template
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies & scripts
```

## 🛠️ Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

The optimized build will be available in the `dist` folder.

## 🎨 Customization

### Adding New Tools

Edit `src/data/tools.js` to add or modify tools:

```javascript
{
  id: 4,
  title: 'Your Tool Name',
  description: 'Tool description here',
  icon: 'fa-solid fa-icon-name',
  link: 'https://your-tool-url.com',
  isActive: true,
  bgColor: 'bg-indigo-600',
  shadowColor: 'shadow-indigo-500/30',
  hoverShadow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]',
  buttonBg: 'bg-indigo-600 hover:bg-indigo-500',
  buttonShadow: 'shadow-indigo-900/20 group-hover:shadow-indigo-500/40',
  hoverColor: 'group-hover:text-indigo-400',
  decorBg: 'bg-indigo-500/10 group-hover:bg-indigo-500/20'
}
```

### Modifying Colors

Update `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#6366f1',    // Indigo
  secondary: '#ec4899',  // Pink
  dark: '#0f172a',       // Dark blue
}
```

### Custom Animations

Add custom animations in `tailwind.config.js`:

```javascript
animation: {
  'your-animation': 'your-animation 3s ease-in-out infinite',
}
```

## 🎯 Components Overview

### Background.jsx
Handles background effects including noise texture and animated orbs.

### Navbar.jsx
Top navigation bar with logo and branding.

### Hero.jsx
Main hero section with headline and description.

### ToolCard.jsx
Reusable card component for displaying tools with active/inactive states.

### Footer.jsx
Footer section with copyright information.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Private project for Content Engineering Team © 2025

## 👨‍💻 Development

Built with ❤️ using modern web technologies.



