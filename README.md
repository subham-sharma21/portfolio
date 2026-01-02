# Developer Portfolio - Technical Documentation

A premium developer portfolio website built with Next.js 15, featuring interactive animations, modern design, and engineering-focused content.

## 🚀 Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📁 Project Architecture

```
portfolio/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── globals.css         # Global styles + CSS variables
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Homepage (Bento Grid)
│   │   ├── about/page.tsx      # About page (Timeline)
│   │   ├── blog/
│   │   │   ├── page.tsx        # Blog listing
│   │   │   └── [slug]/page.tsx # Individual blog posts
│   │   └── projects/
│   │       ├── page.tsx        # Projects gallery
│   │       └── [slug]/page.tsx # Project case studies
│   ├── components/             # Reusable UI components
│   ├── content/               # MDX content files
│   └── lib/                   # Utilities
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind + shadcn/ui config
├── tsconfig.json             # TypeScript config
└── next.config.mjs           # Next.js + MDX config
```

## 🎨 Core Features & Implementation

### 1. Interactive Grid Background
**Location**: `src/components/grid-background.tsx` + `src/app/globals.css`

**Purpose**: Creates a subtle grid pattern that becomes visible under a mouse-following spotlight

**How it works**:
- CSS grid pattern using `background-image: linear-gradient()`
- Mouse coordinates stored in CSS custom properties `--mouse-x` and `--mouse-y`
- `mask-image` with radial gradient creates spotlight effect
- Applied globally in `layout.tsx`

**Key CSS classes**:
```css
.grid-background { /* Fixed positioned overlay */ }
.grid-pattern { /* Grid + mask implementation */ }
```

**Troubleshooting**:
- If grid not visible: Check CSS custom properties are updating
- If spotlight not following: Verify mousemove event listener
- Performance issues: Reduce grid size or spotlight radius

### 2. Command Palette
**Location**: `src/components/command-palette.tsx`

**Purpose**: Global search/navigation with Cmd+K / Ctrl+K shortcut

**Dependencies**: `cmdk` library

**How it works**:
- Global keydown listener for Cmd+K / Ctrl+K
- Modal overlay with backdrop blur
- Navigation items with router.push()
- Actions like "Copy Email"

**Integration**: Imported in `layout.tsx` for global access

**Troubleshooting**:
- Shortcut not working: Check event.preventDefault() and key detection
- Navigation failing: Verify useRouter() from 'next/navigation'
- Styling issues: Check z-index (currently z-50)

### 3. Page Transitions
**Location**: `src/components/page-transition.tsx`

**Purpose**: Smooth blur-fade animations between route changes

**Dependencies**: `framer-motion`

**Implementation**:
```tsx
initial={{ opacity: 0, filter: 'blur(10px)' }}
animate={{ opacity: 1, filter: 'blur(0px)' }}
exit={{ opacity: 0, filter: 'blur(10px)' }}
```

**Usage**: Wrap each page content in `<PageTransition>`

**Troubleshooting**:
- No animation: Ensure Framer Motion is installed and component is wrapped
- Jerky transitions: Check for conflicting CSS transitions

### 4. Spotlight Cards (Bento Grid)
**Location**: `src/app/page.tsx` + `src/app/globals.css`

**Purpose**: Cards with hover-activated radial gradient borders

**CSS Class**: `.spotlight-card`

**How it works**:
- `::before` pseudo-element with radial gradient background
- CSS mask compositing for border-only effect
- Mouse coordinates from grid background system
- Opacity transition on hover

**Troubleshooting**:
- Border not appearing: Check CSS mask support in browser
- Wrong position: Verify mouse coordinate CSS variables
- Performance: Reduce gradient size or disable on mobile

### 5. Magnetic Buttons
**Location**: `src/components/magnetic-button.tsx`

**Purpose**: Buttons that subtly follow cursor before click

**Dependencies**: `framer-motion`

**Implementation**:
- `onMouseMove`: Calculate offset from button center
- `transform: translate()` with reduced movement (x * 0.1)
- `onMouseLeave`: Reset to original position
- Framer Motion for scale effects

**Usage**: Replace regular buttons with `<MagneticButton>`

### 6. Tech Stack Marquee
**Location**: `src/components/tech-marquee.tsx`

**Purpose**: Infinite scrolling tech stack showcase

**Implementation**:
- Duplicate array for seamless loop
- CSS animation `@keyframes marquee`
- Hover effects on individual items

**CSS**: `.marquee` class with `animation: marquee 30s linear infinite`

### 7. Navigation with Status Indicator
**Location**: `src/components/navigation.tsx`

**Purpose**: Fixed header with availability status and navigation

**Features**:
- Live status indicator with pulsing animation
- Active page highlighting using `usePathname()`
- Command palette shortcut hint
- Backdrop blur effect

**CSS Classes**:
- `.status-pulse`: Pulsing green dot animation
- Fixed positioning with backdrop-blur

## 🎯 Page Structure

### Homepage (`src/app/page.tsx`)
**Layout**: Bento Grid with spotlight cards
**Components**: Hero section + 6 info cards + tech marquee
**Key Features**: Spotlight card effects, magnetic CTA button

### About Page (`src/app/about/page.tsx`)
**Layout**: Timeline + skills grid
**Data**: Hardcoded arrays for timeline and skills
**Styling**: Border-left timeline with positioned dots

### Projects (`src/app/projects/page.tsx` + `[slug]/page.tsx`)
**Listing**: Grid of project cards
**Individual**: Dynamic routes with project data
**Data Source**: Hardcoded object (replace with CMS/filesystem)

### Blog (`src/app/blog/page.tsx` + `[slug]/page.tsx`)
**Listing**: Article cards with metadata
**Individual**: Dynamic routes with blog content
**Content**: MDX files in `src/content/blog/`

## 🎨 Styling System

### Color Scheme (`src/app/globals.css`)
```css
:root {
  --background: 220 6% 4%;     /* Deep charcoal */
  --foreground: 210 40% 98%;   /* Near white */
  --primary: 263 70% 50%;      /* Electric violet */
  --card: 220 6% 6%;           /* Slightly lighter */
  --border: 220 6% 20%;        /* Subtle borders */
}
```

### Key CSS Classes
- `.spotlight-card`: Hover gradient borders
- `.magnetic-button`: Cursor-following buttons
- `.grid-background`: Interactive background
- `.status-pulse`: Pulsing status indicator
- `.marquee`: Infinite scroll animation

### Tailwind Extensions
- Custom colors mapped to CSS variables
- Animation utilities from `tailwindcss-animate`
- shadcn/ui component styling

## 🔧 Configuration Files

### `next.config.mjs`
- MDX support with `@next/mdx`
- Page extensions for `.mdx` files
- Experimental MDX Rust compiler

### `tailwind.config.js`
- shadcn/ui integration
- Custom color system
- Animation keyframes
- Container and screen configs

### `tsconfig.json`
- Path aliases (`@/*` → `./src/*`)
- Next.js plugin integration
- Strict TypeScript settings

## 📦 Dependencies Explained

### Core Framework
- `next@15.0.0`: App Router, Image optimization, MDX
- `react@18.2.0`: UI library
- `typescript@5.0.0`: Type safety

### Styling & Animation
- `tailwindcss@3.4.0`: Utility-first CSS
- `framer-motion@10.16.0`: Complex animations
- `tailwindcss-animate@1.0.7`: Additional animations

### UI Components
- `lucide-react@0.294.0`: Icon library
- `cmdk@0.2.0`: Command palette
- `class-variance-authority@0.7.0`: Component variants
- `clsx@2.0.0` + `tailwind-merge@2.0.0`: Class utilities

### Content
- `@mdx-js/react@3.0.0`: MDX React integration
- `@next/mdx@14.0.0`: Next.js MDX support

## 🐛 Common Issues & Solutions

### Grid Background Not Working
1. Check CSS custom properties in browser dev tools
2. Verify mousemove event listener is attached
3. Ensure `.grid-background` has `pointer-events: none`

### Command Palette Not Opening
1. Check keyboard event listener in browser console
2. Verify `e.preventDefault()` is called
3. Check z-index conflicts

### Animations Stuttering
1. Enable hardware acceleration: `transform: translateZ(0)`
2. Use `will-change: transform` sparingly
3. Check for conflicting CSS transitions

### Build Errors
1. MDX issues: Check `next.config.mjs` MDX setup
2. TypeScript errors: Verify all imports and types
3. Missing dependencies: Run `npm install`

### Mobile Performance
1. Disable complex animations on mobile
2. Reduce grid background complexity
3. Use `@media (hover: hover)` for hover effects

## 🔄 Content Management

### Adding Blog Posts
1. Create `.mdx` file in `src/content/blog/`
2. Add frontmatter with title, date, tags
3. Update blog listing data in `src/app/blog/[slug]/page.tsx`

### Adding Projects
1. Create `.mdx` file in `src/content/projects/`
2. Add project data to `src/app/projects/[slug]/page.tsx`
3. Update project listing in `src/app/projects/page.tsx`

### Updating Personal Info
- Homepage: `src/app/page.tsx` (Bento Grid cards)
- About: `src/app/about/page.tsx` (timeline and skills arrays)
- Navigation: `src/components/navigation.tsx` (status and links)

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Auto-deploy on push

### Other Platforms
```bash
npm run build
npm run start
```

### Environment Variables
None required for basic functionality. Add as needed for:
- Analytics
- CMS integration
- Contact forms

## 📝 Implementation Changelog

### v1.2.0 - Responsive Homepage Redesign (2024-01-XX)
**Status**: ✅ Complete

**Features Implemented**:
- ✅ Fully responsive layout with proper breakpoints
- ✅ Font-size resilient design with relative units
- ✅ Centered hero section with improved typography
- ✅ Flexible grid system that adapts to content
- ✅ Line-clamp utilities to prevent text overflow
- ✅ Enhanced spacing system with consistent gaps
- ✅ Improved mobile experience
- ✅ Better accessibility and zoom compatibility

**Files Modified**:
- `src/app/page.tsx` - Complete responsive redesign

**Git Commit**: `feat: redesign homepage with responsive layout and font-size resilience`
**Status**: ✅ Complete

**Features Implemented**:
- ✅ Split-screen hero layout with gradient text
- ✅ Interactive stats grid with icons and hover effects
- ✅ Featured work section with project cards
- ✅ Enhanced visual hierarchy and spacing
- ✅ Improved animations and micro-interactions
- ✅ Better mobile responsiveness

**Files Modified**:
- `src/app/page.tsx` - Complete homepage redesign

**Git Commit**: `feat: redesign homepage with creative layout and enhanced UX`

### v1.0.1 - Grid Visibility Enhancement (2024-01-XX)
**Status**: ✅ Complete

**Features Implemented**:
- ✅ Increased grid background opacity for better visibility
- ✅ Enhanced spotlight effect with stronger contrast

**Files Modified**:
- `src/app/globals.css` - Grid opacity adjustments

**Git Commit**: `fix: increase grid background opacity for better visibility`
**Status**: ✅ Complete

**Features Implemented**:
- ✅ Next.js 15 App Router setup with TypeScript
- ✅ Interactive Grid Background with mouse-following spotlight
- ✅ Command Palette (Cmd+K / Ctrl+K) with cmdk
- ✅ Page Transitions with Framer Motion blur-fade
- ✅ Spotlight Cards with radial gradient borders
- ✅ Magnetic Buttons with cursor-following effect
- ✅ Tech Stack Marquee with infinite scroll
- ✅ Navigation with live status indicator
- ✅ Homepage with Bento Grid layout
- ✅ About page with timeline and skills
- ✅ Projects gallery with dynamic routes
- ✅ Blog system with MDX support
- ✅ Obsidian dark theme with CSS variables
- ✅ Tailwind CSS + shadcn/ui integration
- ✅ Responsive design and accessibility

**Files Created/Modified**:
- `package.json` - Dependencies and scripts
- `next.config.mjs` - Next.js + MDX configuration
- `tailwind.config.js` - Tailwind + shadcn/ui setup
- `tsconfig.json` - TypeScript configuration
- `src/app/globals.css` - Global styles and animations
- `src/app/layout.tsx` - Root layout with providers
- `src/app/page.tsx` - Homepage with Bento Grid
- `src/app/about/page.tsx` - About page with timeline
- `src/app/projects/page.tsx` - Projects gallery
- `src/app/projects/[slug]/page.tsx` - Project case studies
- `src/app/blog/page.tsx` - Blog listing
- `src/app/blog/[slug]/page.tsx` - Individual blog posts
- `src/components/grid-background.tsx` - Interactive background
- `src/components/command-palette.tsx` - Global search
- `src/components/page-transition.tsx` - Route animations
- `src/components/magnetic-button.tsx` - Interactive buttons
- `src/components/tech-marquee.tsx` - Tech stack showcase
- `src/components/navigation.tsx` - Header with status
- `src/lib/utils.ts` - Utility functions
- `src/content/blog/building-scalable-react-apps.mdx` - Sample blog post
- `src/content/projects/ecommerce-platform.mdx` - Sample project
- `README.md` - Comprehensive documentation
- `.gitignore` - Git ignore rules

**Git Commit**: `feat: initial portfolio setup with all core features`

---

**For AI Models**: This codebase uses Next.js 15 App Router with TypeScript. All animations use Framer Motion. Styling is Tailwind CSS with CSS variables for theming. Interactive effects rely on mouse coordinate tracking via CSS custom properties. Components are modular and can be modified independently. Always test animations on different devices and browsers.

**Maintenance Protocol**: After each successful feature implementation:
1. Update this changelog with new features/changes
2. List all files created/modified
3. Ask for commit confirmation before proceeding
4. Use conventional commit messages (feat:, fix:, docs:, etc.)