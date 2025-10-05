# Portfolio Landing Page

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## 🚀 Features

- **Static Site Generation**: Pre-rendered pages for optimal performance
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Modern UI**: Clean and professional design using Tailwind CSS
- **Sections**:
  - Hero section with introduction
  - About section
  - Skills showcase
  - Featured projects
  - Contact information
  - Footer with social links

## 🛠️ Technologies Used

- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[React 19](https://react.dev/)** - JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/AAWicakzono/CapstoneProject-IBM-CodeGeneration.git
cd CapstoneProject-IBM-CodeGeneration
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

### Development Mode
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build
Build the project for production:
```bash
npm run build
```

The static files will be generated in the `out` directory.

### Start Production Server
After building, you can start the production server:
```bash
npm start
```

## 📁 Project Structure

```
CapstoneProject-IBM-CodeGeneration/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects showcase
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer component
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies

```

## 🎨 Customization

### Update Personal Information
Edit the component files in the `components/` directory to update:
- Your name and title in `Hero.tsx`
- Your bio in `About.tsx`
- Your skills in `Skills.tsx`
- Your projects in `Projects.tsx`
- Your contact information in `Contact.tsx`

### Styling
- Modify `app/globals.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Adjust individual component styles using Tailwind utility classes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Aditiya Ari Wicaksono**

- GitHub: [@AAWicakzono](https://github.com/AAWicakzono)

## 🙏 Acknowledgments

- IBM Code Generation Capstone Project
- Next.js team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework