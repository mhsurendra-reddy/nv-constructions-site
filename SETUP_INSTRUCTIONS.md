# NV Constructions Website - Setup Instructions for VS Code

## 📋 Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **pnpm** (comes with Node.js)
- **VS Code** - [Download here](https://code.visualstudio.com/)

## 🚀 Getting Started

### 1. Install Dependencies

Open your terminal in VS Code and run:

```bash
npm install
```

Or if you prefer pnpm:

```bash
pnpm install
```

### 2. Add Your Company Logo

**Important:** Replace the placeholder logo with your actual company logo.

1. Navigate to: `/src/assets/images/`
2. Add your logo file as:
   - `logo.png` (recommended), or
   - `logo.jpg`, or
   - Keep the existing `logo.svg` (placeholder)

**Logo Specifications:**
- Transparent background (PNG recommended)
- Dimensions: approximately 200x80 pixels
- High resolution for clarity

### 3. Run the Development Server

```bash
npm run dev
```

The website will open at: `http://localhost:5173`

### 4. Build for Production

When ready to deploy:

```bash
npm run build
```

The production files will be in the `/dist` folder.

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                          # Main app component
│   └── components/
│       └── construction/
│           ├── Header.tsx               # Header with logo & navigation
│           ├── NotificationBar.tsx      # Promotional banner
│           ├── HeroSection.tsx          # Hero section with CTA
│           ├── ServicesSection.tsx      # Services grid
│           ├── WhyChooseSection.tsx     # Benefits section
│           ├── ProjectGallery.tsx       # Projects showcase
│           ├── ContactSection.tsx       # Contact form & info
│           └── Footer.tsx               # Footer
├── assets/
│   └── images/
│       ├── logo.svg                     # Placeholder logo (replace this!)
│       └── README.md                    # Images folder guide
└── styles/                              # CSS files
```

## 🎨 Customization

### Change Colors

The main brand color is **Orange (#FF6B35)**. To change it:

1. Search for `orange-600` in all components
2. Replace with your desired Tailwind color class
3. Or add custom colors in `/src/styles/theme.css`

### Update Contact Information

Contact details are in:
- `/src/app/components/construction/Header.tsx`
- `/src/app/components/construction/ContactSection.tsx`
- `/src/app/components/construction/Footer.tsx`

Current contact info:
- Phone: 9392309864, 8008844057
- Email: ranganath3112@gmail.com
- Address: 12-3-961, Beside Kumar Hospital, Vidyuth Nagar, Anantapuramu

### Add Real Project Images

Replace Unsplash placeholder images in `/src/app/components/construction/ProjectGallery.tsx`:

1. Add your project photos to `/src/assets/images/`
2. Import them: `import project1 from '../../../assets/images/project1.jpg'`
3. Replace the Unsplash URLs with your imported images

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📦 Key Technologies

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4.x** - Styling
- **Motion (Framer Motion)** - Animations
- **Vite** - Build tool
- **Lucide React** - Icons

## 🌐 Deployment

### Option 1: Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 2: Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Auto-detected settings will work

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload contents of `/dist` folder to your web server

## 📱 Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Smooth scroll navigation
✅ Animated sections
✅ Contact form
✅ Google Maps integration
✅ Project gallery with lightbox
✅ Notification bar
✅ Professional header & footer
✅ SEO-friendly structure

## ⚠️ Important Notes

1. **Logo**: Make sure to replace the placeholder logo in `/src/assets/images/`
2. **Images**: All project images currently use Unsplash. Replace with your actual project photos.
3. **Google Maps**: Update the iframe src in ContactSection.tsx with your actual location coordinates.
4. **Form Handling**: The contact form shows an alert. Integrate with a backend or email service for real submissions.

## 🆘 Troubleshooting

### Module not found errors?
```bash
npm install
```

### Port already in use?
- Change port in `vite.config.ts` or close other applications using port 5173

### Images not loading?
- Check file paths are correct
- Ensure images are in `/src/assets/images/`
- Verify import statements

## 📞 Support

For questions about the code, refer to the comments in each component file.

---

**Ready to launch!** 🚀

Replace the logo, add your project images, and you're good to go!
