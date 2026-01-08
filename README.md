# 💍 Ankita & Santanu - Wedding Invitation Website

A beautiful, modern wedding invitation website built with React.js featuring dark/light mode, smooth animations, and responsive design.

## ✨ Features

- **🎨 Modern Design**: Premium wedding theme with elegant typography using Google Fonts (Playfair Display, Poppins, Great Vibes)
- **🌓 Dark/Light Mode**: Toggle between day and night themes with smooth transitions
- **📱 Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **🎭 Smooth Animations**: 
  - Scroll reveal animations
  - Hover effects on images and cards
  - Progress bar showing scroll position
  - Heartbeat animation in footer
- **📸 Photo Gallery**: Interactive gallery with lightbox modal
- **📅 Wedding Timeline**: Beautiful timeline showing all wedding events
- **📍 Venue Information**: Detailed venue cards with dates, times, and locations
- **💑 Couple Profiles**: Dedicated sections for bride and groom

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd WeddingInvite
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📁 Project Structure

```
WeddingInvite/
├── public/
│   └── images/
│       ├── couple/          # Couple photos
│       ├── wedding/         # Wedding ceremony photos
│       └── venue/           # Venue photos
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with theme toggle
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # Couple information
│   │   ├── Venue.jsx        # Venue details
│   │   ├── Timeline.jsx     # Wedding timeline
│   │   ├── Gallery.jsx      # Photo gallery
│   │   ├── Footer.jsx       # Footer section
│   │   └── ScrollProgress.jsx # Scroll progress bar
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
└── package.json             # Dependencies

```

## 🎨 Design System

### Color Palette

**Light Mode:**
- Primary Background: `#faf8f5`
- Secondary Background: `#ffffff`
- Accent Gold: `#d4a574`
- Text Primary: `#2c2c2c`

**Dark Mode:**
- Primary Background: `#1a1a1a`
- Secondary Background: `#242424`
- Accent Gold: `#d4a574`
- Text Primary: `#f5f5f5`

### Typography

- **Headings**: Playfair Display (Serif)
- **Body**: Poppins (Sans-serif)
- **Script/Decorative**: Great Vibes (Cursive)

## 🎯 Key Sections

1. **Hero Section**: Full-screen welcome with couple names and wedding date
2. **About**: Bride and groom profiles with photos and love story
3. **Venue**: Ceremony and reception details with images
4. **Timeline**: Chronological list of all wedding events
5. **Gallery**: Interactive photo gallery with hover effects
6. **Footer**: Social links and copyright information

## 🛠️ Technologies Used

- **React.js**: Frontend framework
- **Vite**: Build tool and dev server
- **CSS3**: Styling with CSS variables and animations
- **Google Fonts**: Premium typography

## 📱 Responsive Breakpoints

- **Desktop**: 1400px and above
- **Tablet**: 768px - 1399px
- **Mobile**: Below 768px

## 🎨 Customization

### Changing Couple Information

Edit the following files:
- `src/components/Hero.jsx` - Names and wedding date
- `src/components/About.jsx` - Couple descriptions
- `src/components/Venue.jsx` - Venue details
- `src/components/Timeline.jsx` - Event schedule

### Adding Photos

Place your images in:
- `public/images/couple/` - Couple photos
- `public/images/wedding/` - Wedding ceremony photos
- `public/images/venue/` - Venue photos

Update image paths in respective components.

### Changing Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --accent-gold: #d4a574;
  --bg-primary: #faf8f5;
  /* ... other variables */
}
```

## 🌟 Features Implemented

✅ Dark/Light mode toggle in navbar  
✅ Scroll progress bar at top  
✅ Smooth scroll navigation  
✅ Responsive mobile menu  
✅ Image hover effects  
✅ Gallery lightbox modal  
✅ Scroll reveal animations  
✅ Timeline with alternating layout  
✅ SEO-optimized meta tags  
✅ Premium wedding aesthetics  

## 📝 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 🎉 Wedding Details

- **Bride**: Ankita
- **Groom**: Santanu
- **Wedding Date**: December 31, 2025
- **Theme**: Elegant Indian Wedding

## 📄 License

This project is created for personal use.

## 💝 Credits

Made with ❤️ and React ⚛️

---

**Enjoy your special day! 🎊**
