# Tow Truck Service Website (سطحة جدة)

## Overview

This is a modern, bilingual (Arabic/English) website for a tow truck service company in Jeddah, Saudi Arabia. The application provides information about 24/7 vehicle towing and roadside assistance services, with a focus on quick customer contact and service requests. Built as a full-stack application with a React frontend and Express backend, it's designed to be mobile-first and optimized for local service discovery.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional UI design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Language Support**: Right-to-left (RTL) layout with Arabic and English font support (Cairo, Tajawal)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Database Layer**: Drizzle ORM with PostgreSQL (Neon Database) for data persistence
- **Session Management**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful API structure with `/api` prefix routing

### Database Design
- **ORM**: Drizzle ORM with Zod schema validation
- **Database**: PostgreSQL via Neon Database serverless platform
- **Migrations**: Drizzle Kit for schema migrations and database management
- **Schema**: User authentication system with username/password fields and UUID primary keys

### UI/UX Architecture
- **Design System**: shadcn/ui components with neutral color scheme and consistent theming
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Radix UI primitives for keyboard navigation and screen reader support
- **Contact Strategy**: Fixed contact bar with direct phone and WhatsApp integration for immediate customer engagement

### Development Architecture
- **Monorepo Structure**: Unified client/server/shared codebase organization
- **Hot Reload**: Vite middleware integration with Express for seamless development
- **Type Sharing**: Shared TypeScript types between client and server via `/shared` directory
- **Path Aliases**: Configured module resolution for clean imports (@/, @shared/)

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL for production data storage
- **DATABASE_URL**: Environment variable for database connection string

### UI Component Libraries
- **Radix UI**: Headless component primitives for accessibility and functionality
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel components
- **Class Variance Authority**: Type-safe component variant management

### Development & Build Tools
- **ESBuild**: Fast JavaScript bundler for server-side code
- **PostCSS**: CSS processing with Tailwind CSS integration
- **TSX**: TypeScript execution for development server
- **Replit Integration**: Development environment optimization and debugging tools

### Form & Validation
- **React Hook Form**: Performance-optimized form handling
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### External Services Integration
- **Phone Service**: Direct tel: links for immediate calling
- **WhatsApp Business**: wa.me links for instant messaging customer support
- **Google Fonts**: Cairo and Tajawal Arabic font families for proper typography
- **Unsplash**: Professional imagery for tow truck and automotive service photos