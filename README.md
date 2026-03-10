# React Dashboard

A modern, production-ready React dashboard with a distinctive Neo-Brutalist Terminal aesthetic.

## Features

- ⚡ **Vite** - Lightning-fast build tool
- ⚛️ **React 18** - Latest React with TypeScript
- 🎨 **Tailwind CSS** - Utility-first styling
- 📊 **Recharts** - Beautiful, responsive charts
- 🧭 **React Router** - Client-side routing
- 🎯 **TypeScript** - Type-safe development
- 🎭 **Lucide Icons** - Modern icon library

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── Layout.tsx
│   ├── StatCard.tsx
│   ├── RevenueChart.tsx
│   └── ActivityChart.tsx
├── pages/           # Page components
│   ├── Dashboard.tsx
│   ├── Analytics.tsx
│   └── Settings.tsx
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Design Philosophy

This dashboard features a **Neo-Brutalist Terminal** aesthetic:

- **Bold borders** and high contrast
- **Monospace typography** (JetBrains Mono)
- **Terminal-inspired color palette** with accent green
- **Minimal animations** with purposeful transitions
- **Technical, data-focused** interface design

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  terminal: {
    bg: '#0a0e14',
    surface: '#151a21',
    border: '#2d3748',
    accent: '#00ff9f',
    // ...
  }
}
```

### Fonts

Update the Google Fonts link in `index.html` and font families in `tailwind.config.js`.

## Tech Stack

- **React 18.3** - UI library
- **TypeScript 5.3** - Type safety
- **Vite 5.1** - Build tool
- **Tailwind CSS 3.4** - Styling
- **React Router 6.22** - Routing
- **Recharts 2.12** - Charts
- **Lucide React** - Icons

## License

MIT
