# Serenity Spa & Wellness Website

A modern, responsive website for a luxury spa and wellness center built with Next.js and Tailwind CSS.

![Serenity Spa Website](https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)

## Features

- 📱 Fully responsive design
- ✨ Modern UI with smooth animations
- 🎨 Elegant color scheme
- 📝 Service listings with pricing
- 💬 Client testimonials
- 📞 Contact form
- 🕒 Business hours display
- 🗺️ Location map

## Pages

- **Home**: Landing page with hero section, featured services, and testimonials
- **Services**: Comprehensive list of spa services with descriptions and pricing
- **About**: Company history, mission statement, and team highlights
- **Testimonials**: Client reviews and feedback
- **Contact**: Business information, contact form, and location

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Playfair Display

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Project Structure

```
├── app/                  # Next.js 13 app directory
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── services/        # Services page
│   ├── testimonials/    # Testimonials page
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   └── ui/             # UI components
├── lib/                 # Utility functions
└── public/             # Static assets
```

## Customization

### Colors

The color scheme can be customized in `app/globals.css`. The current theme uses:

- Primary: Soft pink (HSL: 346, 80%, 95%)
- Secondary: Light purple (HSL: 270, 67%, 97%)
- Accent: Warm peach (HSL: 19, 100%, 97%)

### Content

- Update service listings in `app/services/page.tsx`
- Modify testimonials in `app/testimonials/page.tsx`
- Change business hours in `app/contact/page.tsx`
- Edit company information in `app/about/page.tsx`

## Performance Optimization

- Images are optimized using Next.js Image component
- Animations are configured to run only once when elements enter viewport
- Fonts are preloaded using Next.js font optimization
- Components use client-side rendering where appropriate

## Browser Support

The website is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Design inspiration from luxury spa websites
- Images from Unsplash
- Icons from Lucide React
- UI components from shadcn/ui
