

# Color Palette Overhaul: Midnight + Electric Violet (Dark Mode)

## Palette

```text
Background:        230 25% 7%    (#0F0F1A)  — deep midnight
Foreground:        210 20% 92%   (#E2E8F0)  — soft white text
Card:              230 20% 10%   (#161625)  — slightly lighter dark
Primary:           263 70% 50%   (#8B5CF6)  — electric violet (buttons, CTAs)
Primary-fg:        0 0% 100%    (#FFFFFF)
Secondary:         230 15% 14%   (#1E1E2E)  — muted dark panel
Muted:             230 15% 16%   (#252538)
Muted-fg:          215 15% 55%   (#8294AA)
Accent:            263 70% 50%   (#8B5CF6)  — violet
Accent-fg:         0 0% 100%
Border:            230 15% 18%   (#2A2A3D)
Ring:              263 70% 50%
Accent-glow:       263 80% 60%   (#A78BFA)
Accent-muted:      263 30% 15%   (#2D2250)
```

## Changes

1. **`src/index.css`** — Replace all `:root` CSS variables with the dark palette values above. Update `cta-gradient` and `btn-glow` to use violet hues instead of blue. Remove `hero-gradient` if still present.

2. **`src/components/CTABanner.tsx`** — The banner uses `bg-primary` which will now be violet. The decorative circles use `bg-primary-foreground/5` which will be white/5 on dark — works well.

3. **`src/components/FinalCTA.tsx`** — The `cta-gradient` class needs to use dark tones. Form inputs using `bg-background/80` will be dark. The info card `bg-background/60` will blend into the dark theme.

4. **All section components** — Section labels already use `text-accent` which will become violet. Headings use `text-foreground` which becomes light text. All should work automatically via CSS variables.

5. **`src/components/Navbar.tsx`** — Currently uses `bg-background/80` with `backdrop-blur`. Will naturally adapt to dark translucent nav.

6. **No structural changes needed** — The entire site uses CSS variables, so swapping the palette in `index.css` propagates everywhere. Only the gradient utilities need manual update.

