---
name: Artisanal Basque Minimalist
colors:
  surface: '#fafcd4'
  surface-dim: '#daddb6'
  surface-bright: '#fafcd4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f7cf'
  surface-container: '#eef1c9'
  surface-container-high: '#e9ebc4'
  surface-container-highest: '#e3e5be'
  on-surface: '#1a1d05'
  on-surface-variant: '#464740'
  inverse-surface: '#2f3218'
  inverse-on-surface: '#f1f4cc'
  outline: '#77786f'
  outline-variant: '#c7c7bd'
  surface-tint: '#5c614d'
  primary: '#535845'
  on-primary: '#ffffff'
  primary-container: '#6b705c'
  on-primary-container: '#eff4db'
  inverse-primary: '#c4c9b1'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#6f5000'
  on-tertiary: '#ffffff'
  tertiary-container: '#8e6700'
  on-tertiary-container: '#ffefd7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e5cc'
  primary-fixed-dim: '#c4c9b1'
  on-primary-fixed: '#191d0e'
  on-primary-fixed-variant: '#444937'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffdea3'
  tertiary-fixed-dim: '#fdbc13'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4200'
  background: '#fafcd4'
  on-background: '#1a1d05'
  surface-variant: '#e3e5be'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-desktop: 100px
  section-mobile: 60px
  gutter: 24px
  container-max: 1280px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system embodies the intersection of rustic Basque heritage and contemporary culinary excellence. It avoids the cluttered visual noise of typical restaurant interfaces in favor of a **Minimalist Editorial** approach. The aesthetic is curated, quiet, and intentional, mirroring the precision of a high-end pintxos bar.

The target audience is the discerning traveler and local epicurean who values authenticity over gimmick. By utilizing a tonal, earthy color palette and a refined typographic hierarchy, the UI evokes a sense of calm and premium quality. Design elements are treated with surgical precision, using glassmorphism for navigation and subtle tactile depth for interactive elements to bridge the gap between digital convenience and physical craftsmanship.

## Colors
The palette is rooted in the natural landscape of the Basque Country. The **Neutral Sage** base (#aaad89) creates an organic, grounded foundation that feels more like textured paper or stone than a digital screen.

**Olive Green** serves as the primary action color, used for calls to action and navigational highlights, providing a sophisticated, monochromatic harmony with the base. **Gold** is reserved strictly for high-value indicators, such as ratings or "Chef's Recommendation" badges. Typography utilizes a near-black **Charcoal** to maintain high legibility while appearing softer and more premium than pure black against the sage background.

## Typography
This design system employs a classic serif-on-sans pairing. **Playfair Display** provides an authoritative, editorial feel for headings, reflecting the "Taberna" tradition. It should be used with generous leading to prevent large blocks of text from feeling cramped.

**Inter** handles all functional and body text. A light weight (300) is preferred for introductory paragraphs to maintain the minimalist aesthetic, while medium weights (500) are utilized for labels and buttons to ensure clear wayfinding. All labels utilize a subtle tracking (letter-spacing) increase and uppercase styling to differentiate them from prose.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain a boutique, controlled experience, transitioning to a fluid model for mobile devices. 

Content is organized within a 12-column system. The defining characteristic of this design system is its aggressive use of vertical whitespace; section headers should be separated from their preceding content by 100px on desktop to create a "gallery" feel. On mobile, this scales down to 60px to maintain momentum while preserving the sense of openness. Gutters are kept wide (24px) to ensure that even dense menus feel breathable.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Ambient Shadows**. Instead of relying on pure white, the system uses variations of the Neutral Sage palette to suggest hierarchy.

- **Surface 0 (Base):** Muted Sage (#aaad89) serves as the main canvas, providing a warm, organic backdrop.
- **Surface 1 (Floating):** Used for cards. Employs a very soft shadow (0px 4px 20px rgba(0,0,0,0.06)) to lift elements off the sage background.
- **Surface 2 (Interactive):** On hover, cards lift slightly with an increased shadow spread (0px 12px 30px rgba(0,0,0,0.1)).
- **Navigation:** The sticky header uses a **Glassmorphism** effect with a 12px backdrop blur and 90% opacity based on the primary or neutral palette, allowing content to scroll underneath while maintaining a tactile, semi-opaque presence.

## Shapes
The shape language is "Softly Geometric." While the grid is rigid and professional, corners are rounded to evoke the organic nature of food and hospitality.

- **Primary Elements:** Cards and containers use a 16px radius (`rounded-lg`) to appear approachable yet structured.
- **Interactive Elements:** Buttons and input fields use an 8px radius, providing a slightly sharper, more functional appearance than the containers they sit within.
- **Visual Media:** Food photography should always follow the container's 16px radius; sharp-cornered images are to be avoided to maintain the system's softness.

## Components
### Buttons
Primary buttons use the Olive Green background with white Inter Medium text. They feature a 0.3s ease-in-out transition to a deeper tonal hover state. Secondary buttons are outlined in the Charcoal Text color with no fill.

### Cards
Cards are the primary vehicle for Pintxos menu items. They feature a top-aligned image with a light zoom effect (1.05x) on hover. The content area below the image uses Body-MD for descriptions and Label-MD for categories or dietary tags (e.g., VEGAN, GLUTEN-FREE).

### Input Fields
Fields are minimalist, featuring only a bottom border in the Charcoal color when inactive, transitioning to a full 1px solid border in Olive Green when focused. 

### Sticky Header
A persistent navigation bar with a subtle logo in Playfair Display. The background uses the defined backdrop-blur to maintain a high-end, modern feel during scroll, tinted slightly with the neutral sage theme.

### Menu Lists
For text-heavy sections (like wine lists), use a clean list format with Price aligned to the right. Use a thin separator line slightly darker than the Neutral Sage base, ensuring at least 16px of padding above and below the text.