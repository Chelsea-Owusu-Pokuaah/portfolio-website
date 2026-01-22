<!-- # Design Specifications

## Colors
- Primary: #FBFBF9
- Secondary: #F4BBD3

## Fonts
- Heading: Roboto
- Body: Montserrat -->

# Design Specifications for Portfolio Website

## Design Philosophy
Modern, clean, and professional aesthetic that reflects technical expertise while remaining approachable and user-friendly. The design should emphasize clarity, readability, and smooth user experience with purposeful animations and interactions.

## Color Palette

### Primary Colors
```css
--primary: #2563eb        /* Blue 600 - Main brand color, CTAs, links */
--primary-dark: #1e40af   /* Blue 700 - Hover states, emphasis */
--primary-light: #3b82f6  /* Blue 500 - Backgrounds, accents */
```

### Secondary Colors
```css
--secondary: #7c3aed      /* Violet 600 - Highlights, special features */
--secondary-dark: #6d28d9 /* Violet 700 - Secondary CTAs */
--secondary-light: #8b5cf6 /* Violet 500 - Subtle accents */
```

### Neutral Colors
```css
--background: #ffffff     /* White - Main background */
--background-alt: #f8fafc /* Slate 50 - Section alternates */
--surface: #f1f5f9        /* Slate 100 - Cards, elevated surfaces */
--border: #e2e8f0         /* Slate 200 - Borders, dividers */
```

### Text Colors
```css
--text-primary: #0f172a   /* Slate 900 - Headings, primary text */
--text-secondary: #475569 /* Slate 600 - Body text, descriptions */
--text-muted: #64748b     /* Slate 500 - Captions, meta info */
--text-light: #94a3b8     /* Slate 400 - Placeholders, disabled */
```

### Accent Colors
```css
--accent-success: #10b981 /* Green 500 - Success states, achievements */
--accent-warning: #f59e0b /* Amber 500 - Warnings, highlights */
--accent-error: #ef4444   /* Red 500 - Errors, validation */
--accent-info: #06b6d4    /* Cyan 500 - Info badges, tooltips */
```

### Dark Mode (Optional Enhancement)
```css
--dark-bg: #0f172a        /* Slate 900 */
--dark-surface: #1e293b   /* Slate 800 */
--dark-text: #f1f5f9      /* Slate 100 */
--dark-text-secondary: #cbd5e1 /* Slate 300 */
```

## Typography

### Font Families
```css
--font-heading: 'Inter', 'Segoe UI', system-ui, sans-serif
--font-body: 'Inter', 'Segoe UI', system-ui, sans-serif
--font-mono: 'Fira Code', 'Consolas', 'Monaco', monospace
```

### Font Sizes (Tailwind Scale)
```css
--text-xs: 0.75rem    /* 12px - Captions, badges */
--text-sm: 0.875rem   /* 14px - Small text, labels */
--text-base: 1rem     /* 16px - Body text */
--text-lg: 1.125rem   /* 18px - Large body, intro text */
--text-xl: 1.25rem    /* 20px - Small headings */
--text-2xl: 1.5rem    /* 24px - Section subheadings */
--text-3xl: 1.875rem  /* 30px - Section headings */
--text-4xl: 2.25rem   /* 36px - Page headings */
--text-5xl: 3rem      /* 48px - Hero heading */
--text-6xl: 3.75rem   /* 60px - Large hero (desktop only) */
```

### Font Weights
```css
--font-normal: 400    /* Body text */
--font-medium: 500    /* Emphasized text, labels */
--font-semibold: 600  /* Subheadings, important text */
--font-bold: 700      /* Headings, CTAs */
```

### Line Heights
```css
--leading-tight: 1.25    /* Headings */
--leading-snug: 1.375    /* Subheadings */
--leading-normal: 1.5    /* Body text */
--leading-relaxed: 1.625 /* Long-form content */
```

## Spacing System
Use Tailwind's spacing scale (4px base unit):
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)
- **4xl**: 6rem (96px)

## Layout & Grid

### Container Widths
```css
--container-sm: 640px   /* Mobile landscape */
--container-md: 768px   /* Tablet */
--container-lg: 1024px  /* Desktop */
--container-xl: 1280px  /* Large desktop */
--container-2xl: 1536px /* Extra large (max width) */
```

### Section Padding
- **Mobile**: py-12 (3rem / 48px)
- **Tablet**: py-16 (4rem / 64px)
- **Desktop**: py-20 (5rem / 80px)

### Grid Systems
- **Projects**: 3-column grid on desktop, 2-column on tablet, 1-column on mobile
- **Skills**: 4-column grid on desktop, 3-column on tablet, 2-column on mobile
- **Gap spacing**: gap-6 (1.5rem) to gap-8 (2rem)

## Components Design

### Navigation Bar
- **Height**: 4rem (64px)
- **Background**: White with subtle shadow (shadow-sm)
- **Position**: Fixed/sticky to top
- **Backdrop blur**: backdrop-blur-md for modern effect
- **Logo/Name**: text-xl font-bold
- **Links**: text-sm md:text-base, hover:text-primary transition

### Buttons

#### Primary Button
```css
bg-primary
text-white
px-6 py-3
rounded-lg
font-medium
hover:bg-primary-dark
transition-colors duration-200
shadow-md hover:shadow-lg
```

#### Secondary Button
```css
bg-white
text-primary
border-2 border-primary
px-6 py-3
rounded-lg
font-medium
hover:bg-primary hover:text-white
transition-all duration-200
```

#### Text/Link Button
```css
text-primary
font-medium
hover:text-primary-dark
underline-offset-4
hover:underline
transition-colors duration-200
```

### Cards (Project Cards, Skill Cards)
```css
bg-white
rounded-xl
p-6
shadow-md hover:shadow-xl
border border-slate-200
transition-all duration-300
hover:-translate-y-1
```

### Forms

#### Input Fields
```css
w-full
px-4 py-3
border border-slate-300
rounded-lg
focus:outline-none
focus:ring-2 focus:ring-primary
focus:border-transparent
transition-all duration-200
```

#### Textarea
```css
min-h-[150px]
resize-y
/* Same styles as input fields */
```

#### Error State
```css
border-red-500
focus:ring-red-500
```

#### Success State
```css
border-green-500
focus:ring-green-500
```

### Badges/Tags (for skills, technologies)
```css
inline-flex
px-3 py-1
bg-primary-light/10
text-primary-dark
rounded-full
text-sm font-medium
hover:bg-primary-light/20
transition-colors duration-200
```

## Animations & Transitions

### Timing Functions
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in: cubic-bezier(0.4, 0, 1, 1)
```

### Common Transitions
- **Colors**: 200ms ease-in-out
- **Transforms**: 300ms ease-out
- **Shadows**: 200ms ease-in-out
- **Opacity**: 150ms ease-in

### Hover Effects
- **Cards**: Lift up (translateY(-4px)) + shadow increase
- **Buttons**: Background color change + shadow increase
- **Links**: Underline appearance + color shift
- **Images**: Subtle zoom (scale(1.05)) on project thumbnails

### Scroll Animations (Use Intersection Observer or AOS library)
- **Fade in**: Opacity 0 → 1
- **Slide up**: TranslateY(20px) → 0
- **Stagger**: Delay children by 100ms increments

## Icons

### Icon Library
Use **Lucide React** or **React Icons** for consistency

### Icon Sizes
- **Small**: w-4 h-4 (16px) - Inline with text
- **Medium**: w-5 h-5 (20px) - Navigation, buttons
- **Large**: w-6 h-6 (24px) - Section icons, features
- **Extra Large**: w-8 h-8 (32px) - Hero section, emphasis

### Icon Colors
Match text colors or use primary/secondary brand colors for emphasis

## Images & Media

### Profile Photo
- **Shape**: Circular or rounded-2xl
- **Size**: 200px - 300px (mobile), 300px - 400px (desktop)
- **Border**: Optional: border-4 border-white shadow-xl
- **Filter**: Subtle grayscale on hover with transition

### Project Thumbnails
- **Aspect Ratio**: 16:9 or 4:3
- **Size**: Full width of card, height auto
- **Rounded**: rounded-t-xl (top corners only if in card)
- **Overlay on hover**: Dark overlay with "View Project" text

### Background Patterns (Optional)
- Subtle gradient meshes
- Dot or grid patterns with low opacity
- SVG patterns for hero section

## Responsive Breakpoints

### Mobile First Approach
```css
/* Mobile: default styles (320px - 767px) */

/* Tablet */
@media (min-width: 768px) { /* md */ }

/* Desktop */
@media (min-width: 1024px) { /* lg */ }

/* Large Desktop */
@media (min-width: 1280px) { /* xl */ }
```

### Typography Scaling
- **Hero heading**: text-4xl (mobile) → text-5xl (tablet) → text-6xl (desktop)
- **Section headings**: text-2xl (mobile) → text-3xl (tablet/desktop)
- **Body text**: text-base across all breakpoints

### Layout Changes
- **Navigation**: Hamburger menu (mobile) → Full nav bar (tablet+)
- **Grid columns**: 1 col (mobile) → 2 col (tablet) → 3-4 col (desktop)
- **Spacing**: Smaller padding on mobile, increase on larger screens

## Accessibility

### Color Contrast
- Ensure WCAG AA compliance (4.5:1 for body text, 3:1 for large text)
- Test primary text on all background colors
- Provide alternative indicators beyond color alone

### Focus States
```css
focus:outline-none
focus:ring-2
focus:ring-primary
focus:ring-offset-2
```

### Interactive Elements
- Minimum touch target: 44x44px
- Clear hover states for all clickable elements
- Keyboard navigation support

## Special Effects (Optional Enhancements)

### Gradient Background (Hero Section)
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
/* Or */
background: linear-gradient(to bottom right, #2563eb, #7c3aed)
```

### Glassmorphism Cards
```css
background: rgba(255, 255, 255, 0.1)
backdrop-filter: blur(10px)
border: 1px solid rgba(255, 255, 255, 0.2)
```

### Particle Effect (Hero Background)
Use particles.js or similar library for subtle animated background

### Smooth Scroll
```css
html {
  scroll-behavior: smooth;
}
```

## Loading States

### Skeleton Screens
```css
bg-slate-200
animate-pulse
rounded
```

### Spinners (Form Submission)
Use loading spinner icon from Lucide React with rotation animation

## Print Styles (Optional)
```css
@media print {
  /* Hide navigation, social links */
  /* Optimize colors for print */
  /* Ensure proper page breaks */
}
```

---

## Implementation Notes

1. **Use Tailwind CSS utility classes** as much as possible
2. **Create custom CSS variables** in your main CSS file for the color palette
3. **Component-based styling** - keep styles scoped to components
4. **Use @apply directive** sparingly for repeated utility combinations
5. **Test on multiple devices** and browsers before finalizing
6. **Performance**: Use `will-change` property sparingly for animations

## Design Inspiration
- Modern SaaS landing pages
- Developer portfolio sites like Brittany Chiang, Josh Comeau
- Clean, minimal aesthetic with purposeful color accents
- Focus on readability and user experience over excessive decoration