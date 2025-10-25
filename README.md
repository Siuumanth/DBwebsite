# 🍕 Pizza Birthday Surprise Website 🎉

A fun, interactive, pizza-themed birthday surprise website with beautiful animations and a delightful user experience!

## ✨ Features

- **Secret Entry Page**: Password-protected entry with pizza-themed animations
- **Interactive Pizza**: 4 animated pizza slices with unique personalities
- **Memory Gallery**: Photo gallery with 24 image slots (numbered 1-24)
- **Confetti & Balloons**: Celebration animations and effects
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Custom Cursor**: Pizza emoji cursor throughout the site
- **Smooth Animations**: Framer Motion powered transitions

## 🎨 Design Theme

- **Colors**: Pizza-themed color palette (red, yellow, brown, cream, green)
- **Fonts**: Chewy for titles, Poppins for body text
- **Style**: Whimsical, cartoonish, and colorful
- **Animations**: Smooth CSS and Framer Motion animations

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your images to the gallery:
   - Create a `public/assets/` folder
   - Add images numbered from `1.jpg` to `24.jpg`
   - The app will show placeholders for missing images

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website

### Secret Key
The secret key to access the main page is: `pizzalovesyou`

## 📁 Project Structure

```
src/
├── components/
│   ├── EntryPage.js      # Secret key entry page
│   ├── MainPage.js       # Main pizza page with slices
│   ├── MemorySection.js  # Memory cards and gallery
│   ├── Gallery.js        # Photo gallery component
│   └── FinalSection.js   # Final birthday message
├── App.js                # Main app component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎯 Key Interactions

1. **Secret Entry**: Enter "pizzalovesyou" to access the main page
2. **Pizza Click**: Click the "Take a Slice" button to trigger confetti and reveal memories
3. **Memory Gallery**: Browse through 35 photo slots with modal view
4. **Gift Opening**: Click "Open Your Gift" to reveal the final surprise

## 🎨 Customization

### Colors
The color palette is defined in `tailwind.config.js`:
- Pizza Red: `#E63946`
- Pizza Yellow: `#F4D35E`
- Pizza Brown: `#B5651D`
- Pizza Cream: `#FFF8E7`
- Pizza Green: `#90BE6D`

### Fonts
- Title Font: Chewy (Google Fonts)
- Body Font: Poppins (Google Fonts)

### Images
- Add your images to `public/assets/` numbered 1-24
- Supported formats: JPG, PNG, GIF, WebP
- Placeholders will show for missing images

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎵 Audio Features

- Oven ding sound on successful secret key entry
- Pizza sizzle sound on pizza slice click
- Sparkle sound on gift opening
- Music toggle button (placeholder for actual music)

## 🎉 Animation Features

- Cheese drip animations on entry page
- Floating sparkles and confetti
- Pizza slice hover effects and blinking
- Balloon rising animations
- Smooth page transitions
- Memory card animations
- Gift reveal animations

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service

## 🎁 Birthday Customization

To personalize for your friend:
1. Replace placeholder text with your friend's name
2. Add actual photos to the `public/assets/` folder
3. Add a real birthday video in the FinalSection component
4. Customize memory card descriptions
5. Add background music files

## 🍕 Enjoy Your Pizza Birthday Surprise! 🎉