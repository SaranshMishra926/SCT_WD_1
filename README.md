# Aurora Landing Page - React Edition

A modern, responsive React landing page with an interactive navigation menu that adapts to scroll and hover interactions. Built with React 18, Vite, and modern web technologies.

## ✨ Features

- **Interactive Navigation Menu**
  - Fixed position navigation bar
  - Changes color and style on scroll (React hooks)
  - Hover effects on menu items
  - Responsive mobile menu with hamburger toggle
  - Smooth scroll navigation

- **Modern React Architecture**
  - Component-based structure
  - Custom React hooks (`useScroll`)
  - State management with React hooks
  - Optimized re-renders

- **Modern Design**
  - Glassmorphism effects
  - Gradient backgrounds
  - Smooth animations and transitions
  - Dark theme with vibrant accents

- **Fully Responsive**
  - Mobile-first approach
  - Adapts to all screen sizes
  - Touch-friendly interactions

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS Variables
- **ESLint** - Code linting

## 📁 Project Structure

```
Landing page/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Showcase.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/             # Custom React hooks
│   │   └── useScroll.js
│   ├── styles/            # Global styles
│   │   └── index.css
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies
└── README.md              # Documentation


## 🛠️ Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Colors

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --primary: #7c7bff;
  --accent: #ff6fb8;
  --blue: #48c6ef;
  /* ... more variables */
}
```

### Components

Each component is in `src/components/`:
- Modify component logic in `.jsx` files
- Update styles in corresponding `.css` files

### Adding New Components

1. Create component file: `src/components/YourComponent.jsx`
2. Create styles: `src/components/YourComponent.css`
3. Import and use in `App.jsx`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Component Details

### Navbar
- Uses `useScroll` hook to detect scroll position
- Mobile-responsive with hamburger menu
- Smooth scroll navigation

### Hero
- Responsive grid layout
- Call-to-action buttons
- Statistics display

### Features
- Card-based layout
- Icon support
- Hover effects

### Pricing
- Three-tier pricing cards
- Featured plan highlighting
- Responsive grid

### Contact
- Form with React state management
- Form validation
- Smooth submission handling

## 🔧 Development

### Adding a Custom Hook

Create a new file in `src/hooks/`:

```jsx
// src/hooks/useCustomHook.js
import { useState, useEffect } from 'react'

export const useCustomHook = () => {
  const [state, setState] = useState(null)
  
  useEffect(() => {
    // Your logic here
  }, [])
  
  return state
}
```

### Component Structure

Each component follows this pattern:

```jsx
import './Component.css'

const Component = ({ props }) => {
  // Component logic
  return (
    <div className="component">
      {/* JSX */}
    </div>
  )
}

export default Component
```

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

- Font: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) by Google Fonts
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
"# SCT_WD_1" 
