# InterPharma One

A modern, responsive website for InterPharma built with React, Vite, and Tailwind CSS. This application showcases pharmaceutical services, products, and provides a professional platform for client engagement.

## 🚀 Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: React Icons & Heroicons
- **Carousel**: Swiper.js
- **Backend**: Express.js server
- **Email**: Nodemailer integration

## 📋 Features

- **Modern Design**: Clean, professional UI with responsive design
- **Multi-page Navigation**: Home, About, Services, Products, and Contact pages
- **Service Showcase**: Detailed pharmaceutical consultation and testing services
- **Product Catalog**: Display of pharmaceutical products and solutions
- **Contact Integration**: Contact form with email functionality
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 16.20.2 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd interpharma-one
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Available Scripts

- `npm run dev` - Start development server with Vite
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm start` - Start the Express.js server for production

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Navbar.jsx     # Navigation component
│   ├── Footer.jsx     # Footer component
│   ├── Hero.jsx       # Hero section
│   └── ...            # Other components
├── pages/             # Page components
│   ├── Home.jsx       # Landing page
│   ├── About.jsx      # About page
│   ├── ServicesPage.jsx
│   ├── ProductsPage.jsx
│   └── ContactPage.jsx
├── data/              # Static data and content
└── App.jsx            # Main application component
```

## 🚀 Deployment

The project includes deployment configurations for cPanel hosting:

1. Build the project:
```bash
npm run build
```

2. Upload these files to cPanel:
   - `dist/` folder
   - `server.js`
   - `package.json`
   - `.env`

3. Follow the deployment instructions in `DEPLOYMENT.md`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is proprietary software developed for InterPharma.
