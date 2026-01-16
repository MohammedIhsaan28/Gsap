# GSAP Project

A modern web application built with Next.js and GSAP for smooth animations and interactive user experiences.

## Overview

This is a restaurant/cafe website featuring smooth scroll animations, interactive navigation, and responsive design. The project leverages GSAP (GreenSock Animation Platform) for professional-grade animations.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.1.1
- **React**: 19.2.3
- **Animation Library**: [GSAP](https://greensock.com/) 3.14.2
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4 with PostCSS
- **Language**: TypeScript 5
- **Responsive Design**: React Responsive

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── navbar.tsx         # Navigation bar
│   ├── hero.tsx           # Hero section
│   ├── menu.tsx           # Menu section
│   ├── cocktails.tsx      # Cocktails section
│   ├── about.tsx          # About section
│   ├── contact.tsx        # Contact section
│   └── art.tsx            # Art/gallery section
├── constants/             # App constants and configuration
│   └── index.ts
├── types/                 # TypeScript type definitions
│   └── css.d.ts
├── public/                # Static assets
│   ├── fonts/
│   ├── images/
│   ├── videos/
│   └── readme/
└── config files           # Configuration files (ESLint, TypeScript, etc.)
```

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd gsap
```

2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Key Features

- **Smooth Animations**: Powered by GSAP for fluid, performant animations
- **Responsive Design**: Works seamlessly across all device sizes with Tailwind CSS
- **Modern React**: Built with React 19 and TypeScript for type safety
- **Server Components**: Leverages Next.js App Router for optimal performance
- **SEO Optimized**: Next.js built-in SEO capabilities

## Components

- **Navbar**: Responsive navigation with animated interactions
- **Hero**: Eye-catching landing section with GSAP animations
- **Menu**: Restaurant/cafe menu section
- **Cocktails**: Featured cocktails display
- **About**: Project/business information
- **Contact**: Contact form and information
- **Art**: Gallery or artwork showcase

## Styling

The project uses Tailwind CSS 4 for utility-first styling combined with custom CSS modules. PostCSS is configured for advanced CSS processing.

## Contributing

Feel free to submit issues and enhancement requests!

## Contact

For questions or support, please reach out through the contact section in the application.
