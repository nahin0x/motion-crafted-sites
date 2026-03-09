

# Color Palette Update: Charcoal + Soft Teal

## Current Problem
The deep blue accent (`215 70% 45%`) lacks visual punch and blends into the dark primary, creating poor contrast and a flat feel.

## New Palette

```text
Primary (text/buttons):  Charcoal    → 220 20% 12%
Foreground:              Dark gray   → 220 15% 10%
Accent:                  Soft Teal   → 168 64% 52%  (#2DD4BF)
Accent Glow:             Bright Teal → 168 70% 58%
Accent Muted:            Light Teal  → 168 30% 90%
Ring:                    Teal        → 168 64% 52%
```

This gives strong contrast on white backgrounds, clear CTA visibility, and a modern agency aesthetic.

## Changes

1. **`src/index.css`** — Update all accent, ring, glow, and muted accent CSS variables to teal values. Update hero-gradient and cta-gradient to use teal tints instead of blue.

2. **`src/components/ServicesSection.tsx`** — Update icon background from `accent/15` to use the new teal, ensuring the icon color (`text-accent`) is visible (teal on light teal bg).

3. **No other file changes needed** — All components already reference `accent`, `accent-foreground`, `primary`, etc. via CSS variables, so the palette swap propagates automatically.

