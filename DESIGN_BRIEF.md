# Transaction Inspector -- Landing Page Design Brief

---

## 1. Site Type Classification

**Type: MARKETING**

| Pytanie diagnostyczne | Odpowiedz | Wynik |
|---|---|---|
| Kto jest userem? | Potencjalny uzytkownik narzedzia -- developer/validator HIVE, ktory jeszcze nie uzywa aplikacji | MARKETING |
| Cel? | Konwersja: zrozumiec wartosc narzedzia i kliknac "Launch App" | MARKETING |
| Frequency? | Raz/kilka razy -- odwiedza landing, potem przechodzi do aplikacji | MARKETING |
| Dlugosc sesji? | 30-90 sekund -- skanuje, przekonuje sie, klika CTA | MARKETING |

**Uzasadnienie**: Strona sluzy wylacznie do prezentacji i konwersji. Nie ma logowania, dashboardu, ani powtarzalnych taskow. Cala funkcjonalnosc zyje w oddzielnej aplikacji Nuxt.

---

## 2. Design Tokens

### 2.1 Colors

```
--color-primary:        #0fbabd   /* Active teal -- glowny CTA, akcenty */
--color-primary-glow:   rgba(15, 186, 189, 0.15)  /* teal glow for cards/buttons */
--color-primary-subtle: rgba(15, 186, 189, 0.08)  /* teal tinted backgrounds */

--color-secondary:      #0fbd86   /* Posting green -- secondary actions, badges */
--color-secondary-glow: rgba(15, 189, 134, 0.15)

--color-accent:         #bd740f   /* Owner amber -- warning, highlights */
--color-accent-glow:    rgba(189, 116, 15, 0.15)

--color-background:     #000000   /* Page background */
--color-surface:        #0a0a0a   /* Card backgrounds, elevated surfaces */
--color-surface-light:  #171717   /* Hover states, secondary surfaces */
--color-surface-code:   #0d0d0d   /* Code block background */

--color-border:         #262626   /* Default borders */
--color-border-subtle:  #1a1a1a   /* Subtle dividers */
--color-border-hover:   #333333   /* Border on hover */

--color-text:           #fafafa   /* Primary text */
--color-text-muted:     #a1a1aa   /* Secondary text, descriptions */
--color-text-dim:       #71717a   /* Tertiary text, labels, captions */

/* Gradients */
--gradient-hero:        radial-gradient(ellipse 60% 50% at 50% 0%, rgba(15,186,189,0.12) 0%, transparent 70%)
--gradient-cta:         linear-gradient(135deg, #0fbabd 0%, #0fbd86 100%)
--gradient-card-border: linear-gradient(135deg, rgba(15,186,189,0.3) 0%, rgba(15,189,134,0.1) 50%, transparent 100%)
```

### 2.2 Typography

| Token | Font | Weight | Size (desktop) | Size (mobile) | Line height | Letter spacing |
|---|---|---|---|---|---|---|
| `display-1` | Geist | 700 | 72px / 4.5rem | 40px / 2.5rem | 1.05 | -0.03em |
| `display-2` | Geist | 700 | 56px / 3.5rem | 32px / 2rem | 1.1 | -0.025em |
| `heading-1` | Geist | 600 | 40px / 2.5rem | 28px / 1.75rem | 1.2 | -0.02em |
| `heading-2` | Geist | 600 | 32px / 2rem | 24px / 1.5rem | 1.25 | -0.015em |
| `heading-3` | Geist | 600 | 24px / 1.5rem | 20px / 1.25rem | 1.3 | -0.01em |
| `body-lg` | Geist | 400 | 20px / 1.25rem | 18px / 1.125rem | 1.6 | 0 |
| `body` | Geist | 400 | 16px / 1rem | 16px / 1rem | 1.6 | 0 |
| `body-sm` | Geist | 400 | 14px / 0.875rem | 14px / 0.875rem | 1.5 | 0 |
| `caption` | Geist | 500 | 12px / 0.75rem | 12px / 0.75rem | 1.4 | 0.05em |
| `mono-lg` | Geist Mono | 400 | 18px / 1.125rem | 16px / 1rem | 1.5 | 0 |
| `mono` | Geist Mono | 400 | 14px / 0.875rem | 13px / 0.8125rem | 1.6 | 0 |
| `mono-sm` | Geist Mono | 400 | 12px / 0.75rem | 11px / 0.6875rem | 1.5 | 0 |

### 2.3 Spacing Scale

Bazowa jednostka: `4px`. Tailwind uzywa domyslnego systemu (1 = 0.25rem = 4px).

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Inline spacing, icon gaps |
| `space-2` | 8px | Tight padding, badge padding |
| `space-3` | 12px | Input padding, small gaps |
| `space-4` | 16px | Card inner padding (mobile), button padding-x |
| `space-6` | 24px | Card inner padding (desktop), grid gap (mobile) |
| `space-8` | 32px | Grid gap (desktop), section internal spacing |
| `space-12` | 48px | Inter-component gap |
| `space-16` | 64px | Section padding-y (mobile) |
| `space-20` | 80px | Section padding-y (tablet) |
| `space-24` | 96px | Section padding-y (desktop) |
| `space-32` | 128px | Hero section padding-top (desktop) |

### 2.4 Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 6px | Badges, small tags |
| `radius-md` | 8px | Buttons, inputs |
| `radius-lg` | 12px | Cards, code blocks |
| `radius-xl` | 16px | Feature cards, modals |
| `radius-2xl` | 24px | Hero visual container |
| `radius-full` | 9999px | Pills, round badges |

### 2.5 Shadows

```css
--shadow-card:    0 0 0 1px var(--color-border), 0 1px 2px rgba(0,0,0,0.4);
--shadow-card-hover: 0 0 0 1px var(--color-border-hover), 0 4px 16px rgba(0,0,0,0.5), 0 0 40px var(--color-primary-glow);
--shadow-glow-primary: 0 0 30px rgba(15,186,189,0.2), 0 0 60px rgba(15,186,189,0.05);
--shadow-glow-secondary: 0 0 30px rgba(15,189,134,0.2), 0 0 60px rgba(15,189,134,0.05);
--shadow-button: 0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
```

### 2.6 Breakpoints

| Name | Min-width | Container max-width | Content padding-x |
|---|---|---|---|
| `mobile` | 0 | 100% | 20px |
| `sm` | 640px | 100% | 24px |
| `md` | 768px | 720px | 32px |
| `lg` | 1024px | 960px | 32px |
| `xl` | 1280px | 1120px | 32px |
| `2xl` | 1440px | 1200px | 32px |

Container: `max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8`

---

## 3. Layout Map -- Section Sequence

```
[1] Nav (sticky)                        -- Logo + "Launch App" CTA
[2] Hero                                -- Headline + sub + 2x CTA + hero visual
[3] Features Grid                       -- 4 feature cards (2x2 grid)
[4] How It Works                        -- 3 steps with connector line
[5] Supported Formats                   -- 4 format cards with code snippets
[6] Authority Types                     -- 3 authority levels explained
[7] Open Source / Tech                  -- OSS messaging + tech badges
[8] Bottom CTA                          -- Final conversion section
[9] Footer                              -- Minimal, links, copyright
```

---

## 4. Component Specifications

### 4.1 Nav

**Typ**: Sticky top, glassmorphism bar.

```
Position: fixed, top: 0, z-index: 50
Height: 64px
Background: rgba(0, 0, 0, 0.6)
Backdrop-filter: blur(12px) saturate(150%)
Border-bottom: 1px solid var(--color-border-subtle)
Container: max-w-[1200px], centered
Padding-x: 20px (mobile), 32px (desktop)
```

**Left**: Logo icon (inline SVG, 28x28px, color: primary) + "Transaction Inspector" wordmark (Geist 600, 16px, color: text). Gap: 10px.

**Right**: "Launch App" button -- primary style (see Button spec below).

Na mobile wordmark "Transaction Inspector" skraca sie do "TX Inspector" ponizej `sm`.

### 4.2 Button

| Variant | Background | Text | Border | Hover | Padding | Radius |
|---|---|---|---|---|---|---|
| `primary` | var(--color-primary) | #000000 (weight: 600) | none | brightness(1.15), shadow-glow-primary | 12px 24px | radius-md (8px) |
| `primary-lg` | var(--color-primary) | #000000 (weight: 600) | none | brightness(1.15), shadow-glow-primary | 16px 32px | radius-md (8px) |
| `ghost` | transparent | var(--color-text) (weight: 500) | 1px solid var(--color-border) | bg: var(--color-surface-light), border-color: var(--color-border-hover) | 12px 24px | radius-md (8px) |
| `ghost-lg` | transparent | var(--color-text) (weight: 500) | 1px solid var(--color-border) | bg: var(--color-surface-light) | 16px 32px | radius-md (8px) |
| `text` | transparent | var(--color-text-muted) (weight: 500) | none | color: var(--color-text) | 8px 12px | radius-sm (6px) |

Wspolne: font-size: 14px, line-height: 1, cursor: pointer, transition: all 200ms ease-out.
Focus state: outline: 2px solid var(--color-primary), outline-offset: 2px.

### 4.3 GlassCard

Reuzywany komponent karty z efektem glassmorphism.

```css
.glass-card {
  background: rgba(10, 10, 10, 0.6);           /* --color-surface with alpha */
  backdrop-filter: blur(16px) saturate(130%);
  border: 1px solid var(--color-border);         /* #262626 */
  border-radius: var(--radius-xl);               /* 16px */
  padding: 32px;                                 /* space-8 */
  box-shadow: var(--shadow-card);
  transition: border-color 250ms ease-out, box-shadow 250ms ease-out;
}
.glass-card:hover {
  border-color: var(--color-border-hover);       /* #333333 */
  box-shadow: var(--shadow-card-hover);
}

/* Mobile override */
@media (max-width: 767px) {
  .glass-card { padding: 24px; }                 /* space-6 */
}
```

**Warianty**:
- `glass-card--feature`: z ikona 40x40px na gorze, top-border gradient (gradient-card-border, border-top: 1px).
- `glass-card--code`: padding 24px, background var(--color-surface-code), font-family: mono, no hover effect.
- `glass-card--authority`: lewa krawedz kolorowa (4px border-left w kolorze authority), ikona w kolorze authority.

### 4.4 Badge

```
Display: inline-flex, align-items: center, gap: 6px
Padding: 4px 12px
Border-radius: radius-full (9999px)
Font: caption (Geist 500, 12px, letter-spacing: 0.05em, uppercase)
Border: 1px solid
```

| Variant | Background | Text color | Border color |
|---|---|---|---|
| `posting` | rgba(15,189,134,0.1) | #0fbd86 | rgba(15,189,134,0.3) |
| `active` | rgba(15,186,189,0.1) | #0fbabd | rgba(15,186,189,0.3) |
| `owner` | rgba(189,116,15,0.1) | #bd740f | rgba(189,116,15,0.3) |
| `neutral` | rgba(255,255,255,0.05) | var(--color-text-muted) | var(--color-border) |

### 4.5 CodeBlock

```css
.code-block {
  background: var(--color-surface-code);         /* #0d0d0d */
  border: 1px solid var(--color-border);         /* #262626 */
  border-radius: var(--radius-lg);               /* 12px */
  padding: 20px 24px;
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-muted);                /* #a1a1aa */
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

Syntax highlight kolory (inline za pomoca `<span>` z klasami):
- `.token-key`:     #0fbabd (primary)
- `.token-string`:  #0fbd86 (secondary)
- `.token-number`:  #bd740f (accent)
- `.token-bracket`: #71717a (text-dim)
- `.token-comment`: #52525b

### 4.6 StepIndicator

Uzywany w sekcji "How It Works".

```
Circle: 48x48px, border: 1px solid var(--color-border), border-radius: 50%
Background: var(--color-surface)
Number: Geist Mono 600, 20px, color: var(--color-primary)
Active/hover: border-color var(--color-primary), background var(--color-primary-subtle)
```

Connector line miedzy krokami:
```
Width: 1px (vertical na mobile), height: 1px (horizontal na desktop)
Color: var(--color-border)
Style: dashed
Position: centered miedzy step circles
Length: 100% of gap space
```

### 4.7 TechBadge

Dla sekcji Open Source / Tech.

```
Display: inline-flex, align-items: center, gap: 8px
Padding: 8px 16px
Background: var(--color-surface)
Border: 1px solid var(--color-border)
Border-radius: radius-full
Font: body-sm (14px, weight 400)
Color: var(--color-text-muted)
Icon: 20x20px inline SVG (grayscale)
Hover: border-color var(--color-border-hover), color var(--color-text)
Transition: all 200ms ease-out
```

### 4.8 SectionHeader

Reuzywany pattern tytulu sekcji.

```
Structure:
  [Label]    -- opcjonalny, uppercase, caption style, color: primary, mb: 16px
  [Heading]  -- heading-1 (40px desktop), color: text, mb: 16px
  [Desc]     -- body-lg (20px desktop), color: text-muted, max-width: 640px, mb: 48px

Text-align: center
Margin-bottom (cala grupa do contentu): 64px (desktop), 48px (mobile)
```

---

## 5. Section Specifications

### 5.1 Hero

**Layout** (Z-pattern):
```
Desktop (>=1024px):
  padding-top: 160px (nav height 64px + 96px space)
  padding-bottom: 96px

  Row 1: centered text block
    - Tagline: Badge "neutral" variant, text "Blockchain Forensics Tool"
    - Headline (display-1, 72px): "Inspect. Verify. Trust."
      -- "Inspect." w kolorze var(--color-primary)
      -- "Verify." w kolorze var(--color-secondary)
      -- "Trust." w kolorze var(--color-text)
    - Subheadline (body-lg, 20px, text-muted, max-width: 560px, centered):
      "Analyze HIVE blockchain transactions. Verify signatures,
       trace authority paths, and decode operations in seconds."
    - CTA row (flex, gap: 16px, centered, mt: 32px):
      - Primary-lg: "Launch App" (with arrow-right icon 16px, gap 8px)
      - Ghost-lg: "View on GitLab" (with GitLab icon 16px, gap 8px)

  Row 2 (mt: 80px): Hero visual -- centered, max-width: 900px
    - GlassCard variant z mockupem UI Transaction Inspectora
    - Wewnatrz: stylizowany terminal/code snippet pokazujacy
      przykladowy JSON transakcji z syntax highlighting (CodeBlock component)
    - Na gorze karty: "toolbar" -- 3 kropki (macOS style) + tab z napisem
      "transaction.json" (mono-sm, text-dim)
    - Zawartosc: 10-15 linii JSON z highlighted kluczami
    - Pod kodem: wiersz statusu -- 3 Badge komponentow:
      "Signature Valid" (posting green), "Active Authority" (active teal),
      "2 Operations" (neutral)
    - Cala karta ma subtelny --shadow-glow-primary

Mobile (<1024px):
  padding-top: 120px, padding-bottom: 64px
  Headline: display-2 (40px mobile)
  Hero visual: full-width z padding 0 (karta bleed do krawedzi)
  CTA: stack vertical (flex-col, gap: 12px, full-width buttons)
```

**Hero background effect**: Radialny gradient na gorze strony.

```css
#hero::before {
  content: '';
  position: absolute;
  top: 0; left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1000px;
  height: 600px;
  background: radial-gradient(ellipse 80% 60% at 50% 0%,
    rgba(15,186,189,0.08) 0%,
    rgba(15,189,134,0.03) 40%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;
}
```

### 5.2 Features Grid

**Layout**:
```
Desktop (>=1024px): CSS Grid, grid-template-columns: repeat(2, 1fr), gap: 24px
Tablet (>=768px <1024px): grid-template-columns: repeat(2, 1fr), gap: 20px
Mobile (<768px): grid-template-columns: 1fr, gap: 16px
```

**SectionHeader**:
- Label: "CAPABILITIES"
- Heading: "Everything you need to analyze transactions"
- Desc: "From signature verification to authority tracing, Transaction Inspector gives you complete visibility into HIVE blockchain operations."

**4 Feature Cards** (GlassCard--feature):

| # | Icon (Lucide) | Title | Description |
|---|---|---|---|
| 1 | `ShieldCheck` (24px, color: secondary) | Signature Verification | Verify transaction signatures against public keys. Instantly confirm cryptographic validity and detect tampering. |
| 2 | `GitBranch` (24px, color: primary) | Authority Path Tracing | Trace the complete authority chain -- direct signing or delegated authority paths visualized as an interactive graph. |
| 3 | `FileInput` (24px, color: accent) | Multi-Format Input | Paste a transaction hash, JSON object, hexadecimal data, or upload a file. The inspector auto-detects the format. |
| 4 | `Layers` (24px, color: primary) | Operations Breakdown | See every operation in the transaction with required authority levels, color-coded by type: posting, active, or owner. |

**Card structure**:
```
[Icon container]        -- 48x48px, bg: authority-color at 0.1 opacity,
                           border-radius: radius-md, centered icon
[Title]                 -- heading-3 (24px), color: text, mt: 20px
[Description]           -- body (16px), color: text-muted, mt: 8px, max-width: 360px
[Top border gradient]   -- pseudoelement ::before, height: 1px,
                           background: gradient-card-border, top: 0, left: 24px, right: 24px
```

### 5.3 How It Works

**Layout**:
```
Desktop (>=1024px): Horizontal, 3 kolumny, flex, gap: 0 (connectors fill gap)
  Kazdy step: max-width: 320px, text-align: center
  Connector: flex-grow dashed line miedzy steps, vertically centered na step circle
Tablet (>=768px <1024px): to samo ale max-width: 240px per step
Mobile (<768px): Vertical stack, connector = vertical dashed line po lewej stronie
  Step circle + text obok (flex-row, gap: 20px)
```

**SectionHeader**:
- Label: "HOW IT WORKS"
- Heading: "Three steps to full transparency"
- Desc: brak (krotka sekcja)

**Steps**:

| # | Icon (Lucide, 24px) | Title | Description |
|---|---|---|---|
| 1 | `ClipboardPaste` | Paste your transaction | Enter a transaction hash, paste JSON or hex data, or drag and drop a file. |
| 2 | `ScanSearch` | Automatic analysis | The inspector validates signatures, traces authority paths, and identifies all operations. |
| 3 | `CheckCircle2` | Review results | Get a detailed breakdown of metadata, authorities, and operations with color-coded status indicators. |

**Step visual**:
```
[StepIndicator]    -- 48x48 circle with step number in mono
                      bg: surface, border: 1px solid border
                      number color: primary
[Connector]        -- dashed line 1px, color: border, length: 60px (desktop)
[Title]            -- heading-3 (24px), mt: 20px (desktop) / ml: 0 (mobile, beside circle)
[Desc]             -- body (16px), text-muted, mt: 8px
```

### 5.4 Supported Formats

**Layout**:
```
Desktop (>=1024px): grid-template-columns: repeat(2, 1fr), gap: 24px
Mobile (<768px): 1fr, gap: 16px
```

**SectionHeader**:
- Label: "INPUT FORMATS"
- Heading: "Accepts any transaction format"
- Desc: "No matter how you have the data, Transaction Inspector handles it."

**4 Format Cards** (GlassCard--code):

Kazda karta sklada sie z:
```
[Header row]  -- flex, justify-between, align-center, mb: 16px
  [Left]:  Badge (neutral) z nazwa formatu
  [Right]: "Copy" text-button (text variant, mono-sm, text-dim, hover: text-muted)
[CodeBlock]   -- 6-8 linii przykladowych danych
```

| Format | Badge text | Code example |
|---|---|---|
| Transaction Hash | `HASH / ID` | `4f3d8a2b1c6e9f0d7a8b5c3e...` (mono, single line, truncated) |
| JSON | `JSON` | `{ "ref_block_num": 12345, "ref_block_prefix": 987654321, "expiration": "2024-01-15T12:00:00", "operations": [...] }` |
| Hexadecimal | `HEX / BINARY` | `0a1b2c3d4e5f6a7b8c9d0e1f...` (mono, wrapped lines) |
| File Upload | `FILE UPLOAD` | Zamiast kodu: visual z ikona Upload (Lucide `Upload`, 32px, text-dim), tekst "Drag & drop .json, .bin, or .hex file" (body, text-muted), podpis "Max 1 MB" (caption, text-dim) |

### 5.5 Authority Types

**Layout**:
```
Desktop (>=1024px): grid-template-columns: repeat(3, 1fr), gap: 24px
Tablet (>=768px <1024px): repeat(3, 1fr), gap: 16px
Mobile (<768px): 1fr, gap: 16px
```

**SectionHeader**:
- Label: "AUTHORITY LEVELS"
- Heading: "Three levels of blockchain authority"
- Desc: "HIVE uses a hierarchical key system. Each transaction requires the right authority level."

**3 Authority Cards** (GlassCard--authority):

| Authority | Color | Border-left | Icon (Lucide, 24px) | Title | Desc | Examples |
|---|---|---|---|---|---|---|
| Owner | #bd740f | 4px solid #bd740f | `Crown` | Owner Authority | The highest privilege level. Required for account recovery, changing other keys, and transferring ownership. | "Change keys", "Account recovery" |
| Active | #0fbabd | 4px solid #0fbabd | `Key` | Active Authority | Standard operational authority. Required for financial transactions, witness voting, and most account operations. | "Transfers", "Power up/down", "Witness votes" |
| Posting | #0fbd86 | 4px solid #0fbd86 | `MessageSquare` | Posting Authority | Social interaction authority. Required for content creation, voting on posts, and social features. | "Post/comment", "Upvote/downvote", "Reblog" |

**Card structure**:
```
border-left: 4px solid [authority-color]
padding-left: 28px (compensate border)

[Icon container]   -- 40x40px, bg: authority-color at 0.1,
                      border-radius: radius-md, icon in authority-color
[Badge]            -- authority variant, mt: 16px
[Title]            -- heading-3 (24px), color: text, mt: 12px
[Desc]             -- body (16px), text-muted, mt: 8px
[Examples list]    -- mt: 16px, flex-wrap, gap: 8px
  Kazdy example: pill shape, bg: surface-light, padding: 4px 12px,
                  border-radius: full, font: body-sm, color: text-dim
```

### 5.6 Open Source / Tech

**Layout**:
```
Centered text block, max-width: 720px
Below: flex-wrap badge row, centered, gap: 12px
```

**SectionHeader**:
- Label: "OPEN SOURCE"
- Heading: "Built on open standards"
- Desc: "Transaction Inspector is free and open-source, powered by the official HIVE libraries. Verify the code yourself."

**Tech badges** (TechBadge component), row flex-wrap centered:
- Vue 3 (icon: Vue logo SVG)
- Nuxt 3 (icon: Nuxt logo SVG)
- TypeScript (icon: TS logo SVG)
- @hiveio/wax (icon: HIVE logo SVG)
- Tailwind CSS (icon: TW logo SVG)
- Pinia (icon: Pinia logo SVG)

**Pod badges** (mt: 32px): ghost button "View Source on GitLab" z ikona GitLab (16px).

### 5.7 Bottom CTA

**Layout**:
```
Full-width section z radialnym gradientem tla (primary glow, dol strony).
Text centered, max-width: 600px.
Padding: 96px top (desktop), 64px (mobile).

Background effect:
  radial-gradient(ellipse 70% 50% at 50% 100%,
    rgba(15,186,189,0.06) 0%, transparent 70%)
```

**Content**:
```
[Heading]   -- display-2 (56px desktop, 32px mobile):
               "Ready to inspect your first transaction?"
[Desc]      -- body-lg (20px), text-muted, mt: 16px, max-width: 480px:
               "Paste a transaction hash and get instant verification.
                No signup. No fees. Open source."
[CTA]       -- primary-lg button, mt: 32px: "Launch App" (arrow-right icon)
```

### 5.8 Footer

**Layout**:
```
Border-top: 1px solid var(--color-border-subtle)
Padding: 48px 0 32px
Container: max-w-[1200px]

Desktop: flex, justify-between, align-center
Mobile: flex-col, gap: 24px, align-center, text-center
```

**Left**: "Transaction Inspector" (body-sm, weight 500, text-muted) + kopia (body-sm, text-dim): "A HIVE blockchain tool"

**Right**: Links row (flex, gap: 24px):
- "GitLab" (text link, text-dim, hover: text)
- "HIVE Blockchain" (text link)
- "Block Explorer" (text link)

**Bottom row** (mt: 24px, border-top: 1px solid border-subtle, pt: 24px):
- Copyright (caption, text-dim): "2024 HIVE Ecosystem. Open source under MIT License."

---

## 6. Motion Spec

### 6.1 Entrance Animations (scroll-triggered)

Implementacja: CSS `@keyframes` + `IntersectionObserver` (vanilla JS, zero dependencies). Kazdy element z klasa `.animate-on-scroll` dostaje `data-animate` attribute.

**Global config**: Observer threshold `0.15`, trigger once (nie powtarza przy scroll up).

| Element | Animation | Duration | Delay | Easing |
|---|---|---|---|---|
| Hero tagline badge | fade-in + translate-y(8px -> 0) | 400ms | 0ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Hero headline | fade-in + translate-y(16px -> 0) | 500ms | 100ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Hero subheadline | fade-in + translate-y(12px -> 0) | 500ms | 200ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Hero CTA buttons | fade-in + translate-y(8px -> 0) | 400ms | 300ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Hero visual card | fade-in + translate-y(24px -> 0) + scale(0.98 -> 1) | 600ms | 400ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Section header (label) | fade-in + translate-y(8px -> 0) | 400ms | 0ms | ease-out |
| Section header (heading) | fade-in + translate-y(12px -> 0) | 500ms | 50ms | ease-out |
| Section header (desc) | fade-in + translate-y(8px -> 0) | 400ms | 100ms | ease-out |
| Feature cards | fade-in + translate-y(16px -> 0) | 500ms | stagger 80ms | ease-out |
| Step indicators | fade-in + scale(0.9 -> 1) | 400ms | stagger 120ms | ease-out |
| Step connector line | width/height 0 -> 100% (grow) | 600ms | after step appears (200ms) | ease-in-out |
| Format cards | fade-in + translate-y(12px -> 0) | 500ms | stagger 80ms | ease-out |
| Authority cards | fade-in + translate-x(-12px -> 0) | 500ms | stagger 100ms | ease-out |
| Tech badges | fade-in + scale(0.95 -> 1) | 300ms | stagger 40ms | ease-out |
| Bottom CTA heading | fade-in + translate-y(12px -> 0) | 500ms | 0ms | ease-out |

### 6.2 CSS Keyframes

```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(var(--animate-y, 16px)); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fade-up-scale {
  from { opacity: 0; transform: translateY(var(--animate-y, 24px)) scale(var(--animate-scale, 0.98)); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes fade-in-scale {
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes fade-left {
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes grow-line {
  from { transform: scaleX(0); }    /* horizontal */
  to   { transform: scaleX(1); }
}

@keyframes grow-line-v {
  from { transform: scaleY(0); }    /* vertical (mobile) */
  to   { transform: scaleY(1); }
}
```

### 6.3 Hover / Interaction Transitions

| Element | Property | Duration | Easing |
|---|---|---|---|
| Button (all variants) | background, color, border-color, box-shadow | 200ms | ease-out |
| GlassCard | border-color, box-shadow | 250ms | ease-out |
| Nav link / footer link | color | 150ms | ease-out |
| TechBadge | border-color, color | 200ms | ease-out |
| Badge | opacity (0.8 -> 1 on parent card hover) | 200ms | ease-out |

### 6.4 Hero Code Block Typing Effect (optional, nice-to-have)

```
Efekt: Linie kodu JSON pojawiaja sie sekwencyjnie, jakby ktos je wklejal.
Implementation: CSS animation z opacity per linia.
Timing: 
  - Line 1: delay 600ms (po hero card entrance)
  - Kazda nastepna linia: +80ms delay
  - Duration per line: 300ms (fade-in, no translate)
  - Total: ~1800ms for 15 lines
Loop: NIE (jednokrotna animacja)
```

### 6.5 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Wszystkie elementy `.animate-on-scroll` w reduced motion: natychmiast widoczne (opacity: 1, transform: none), brak animacji.

---

## 7. Glassmorphism Spec

### 7.1 Surface Levels

| Level | Usage | Background | Backdrop-filter | Border |
|---|---|---|---|---|
| L0 (page) | Body | #000000 solid | none | none |
| L1 (nav) | Sticky header | rgba(0,0,0,0.6) | blur(12px) saturate(150%) | bottom: 1px solid #1a1a1a |
| L2 (cards) | Feature/format/authority cards | rgba(10,10,10,0.6) | blur(16px) saturate(130%) | 1px solid #262626 |
| L3 (elevated) | Hero visual, code blocks within cards | rgba(13,13,13,0.8) | blur(8px) | 1px solid #262626 |

### 7.2 Rules

1. NIGDY wiecej niz 2 poziomy blur nalozone na siebie (performance).
2. Backdrop-filter TYLKO na elementach ktore maja content pod spodem (gradient bg, inne karty). Na solidnym #000 bg nie ma sensu -- wtedy uzyj solidnego bg.
3. Fallback dla Safari < 16: `@supports not (backdrop-filter: blur(1px))` -> solidne tlo rgba(10,10,10,0.95).
4. Nie uzywaj backdrop-filter na elementach z duzym content repaint (listy, scroll containers).

### 7.3 Gradient Borders (top edge highlight)

Feature cards dostaja gradient border-top symulowany przez pseudoelement:

```css
.glass-card--feature::before {
  content: '';
  position: absolute;
  top: 0;
  left: 24px;
  right: 24px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(15,186,189,0.4) 30%,
    rgba(15,189,134,0.2) 70%,
    transparent 100%
  );
  pointer-events: none;
}
```

---

## 8. Responsive Strategy

### 8.1 Breakpoint Behavior

| Element | Mobile (<768px) | Tablet (768-1023px) | Desktop (>=1024px) |
|---|---|---|---|
| **Nav** | Logo icon + "TX Inspector" + hamburger (no menu items, just CTA) | Full wordmark + CTA | Full wordmark + CTA |
| **Hero headline** | 40px, single col | 48px, single col | 72px, single col |
| **Hero CTAs** | Stack vertical, full-width | Inline, auto-width | Inline, auto-width |
| **Hero visual** | Full bleed (neg margin -20px) | Contained, max-w-700px | max-w-900px |
| **Features grid** | 1 col | 2 col | 2 col |
| **How it Works** | Vertical timeline (left-aligned) | Horizontal 3 col | Horizontal 3 col |
| **Formats grid** | 1 col | 2 col | 2 col |
| **Authority cards** | 1 col stacked | 3 col | 3 col |
| **Tech badges** | 2-col grid of badges | flex-wrap inline | flex-wrap inline |
| **Footer** | Stacked center | Inline | Inline |
| **Section padding-y** | 64px | 80px | 96px |
| **Card padding** | 24px | 28px | 32px |

### 8.2 Mobile-First Base Styles

```
Base: mobile styles
@media (min-width: 768px) -- md: tablet overrides
@media (min-width: 1024px) -- lg: desktop overrides
@media (min-width: 1280px) -- xl: wide desktop tweaks
```

### 8.3 Touch Targets

Minimum: 44x44px dla wszystkich interaktywnych elementow. Buttons i links na mobile maja minimum `min-height: 44px`. Footer links: `padding: 8px` minimum.

---

## 9. Accessibility

### 9.1 Contrast Ratios (WCAG AA on dark backgrounds)

| Text | Background | Contrast | Status |
|---|---|---|---|
| #fafafa on #000000 | Page bg | 19.3:1 | PASS AAA |
| #a1a1aa on #000000 | Page bg | 7.1:1 | PASS AA |
| #71717a on #000000 | Page bg | 4.6:1 | PASS AA (large text only, 18px+ or 14px bold) |
| #71717a on #0a0a0a | Card bg | 4.3:1 | PASS AA large text only |
| #0fbabd on #000000 | Primary on bg | 8.5:1 | PASS AAA |
| #0fbd86 on #000000 | Secondary on bg | 8.9:1 | PASS AAA |
| #bd740f on #000000 | Accent on bg | 4.8:1 | PASS AA |
| #000000 on #0fbabd | Button text | 8.5:1 | PASS AAA |

**UWAGA**: `--color-text-dim` (#71717a) uzywac WYLACZNIE na tekst >=18px lub >=14px bold. Na mniejszy tekst uzywac `--color-text-muted` (#a1a1aa).

### 9.2 Focus States

Wszystkie interaktywne elementy:
```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: inherit;     /* match element's radius */
}
```

NIGDY `outline: none` bez zamiennika. `:focus` (nie-visible) moze miec outline: none jesli `:focus-visible` jest zdefiniowany.

### 9.3 Keyboard Navigation

- Tab order: logiczny, top-to-bottom, left-to-right
- Skip link: pierwszy element w `<body>`, przed navem:
  ```html
  <a href="#hero" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-black focus:rounded-md">
    Skip to content
  </a>
  ```
- External links: `target="_blank" rel="noopener noreferrer"`, z `aria-label` zawierajacym "(opens in new tab)"
- Buttons vs links: "Launch App" i "View on GitLab" to `<a>` (nawigacja), nie `<button>` (akcja)

### 9.4 ARIA & Semantic HTML

```
<header>       -- nav
<main>         -- content
<section>      -- each content block, z aria-labelledby="section-heading-id"
<footer>       -- footer

<h1>           -- hero headline (TYLKO jeden na stronie)
<h2>           -- section headings
<h3>           -- card titles
```

- Ikony dekoracyjne: `aria-hidden="true"`
- Code blocks: `<pre><code>` z `aria-label="Example [format] transaction"`
- Authority color indicators: NIE polegac na samym kolorze -- zawsze towarzyszy label/badge text

### 9.5 Reduced Motion

Patrz sekcja 6.5. `prefers-reduced-motion: reduce` eliminuje WSZYSTKIE animacje.

---

## 10. Performance Budget

| Metric | Target | Hard limit |
|---|---|---|
| LCP | <=1.5s | 2.5s |
| CLS | <=0.05 | 0.1 |
| INP | <=100ms | 200ms |
| Total page weight | <=200KB | 350KB |
| HTML | <=15KB | 25KB |
| CSS (critical) | <=8KB | 15KB |
| Fonts (Geist + Geist Mono woff2) | <=80KB total | 120KB |
| JS (IntersectionObserver + minimal) | <=5KB | 10KB |
| Images | 0KB (all SVG inline or CSS) | 50KB |

**Strategies**:
- Astro static output -- zero client-side JS framework
- Inline critical CSS, defer non-critical
- Font `font-display: swap` (juz w global.css)
- Preload font files: `<link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossorigin>`
- All icons: inline SVG (Lucide icons skopiowane jako SVG, nie importowane jako pakiet)
- IntersectionObserver: jedyny JS na stronie, ~2KB minified
- No external dependencies (no analytics, no tracking, no third-party fonts)

---

## 11. Handoff Notes

### 11.1 Priority Order

1. **P0**: Layout scaffold (HTML structure matching index.astro), Nav, Hero (bez animacji)
2. **P1**: Features Grid, Authority Types, Footer
3. **P2**: How It Works (z connector line), Supported Formats (z code blocks)
4. **P3**: Open Source section, Bottom CTA
5. **P4**: Scroll animations (IntersectionObserver), hover effects, typing effect

### 11.2 Stack

- **Framework**: Astro 6.x (static output, juz skonfigurowany)
- **Styling**: Tailwind CSS 4.x via `@tailwindcss/vite` (juz skonfigurowany)
- **Fonts**: geist npm package (juz zainstalowany, font-face w global.css)
- **Icons**: Lucide -- kopiuj SVG inline, NIE instaluj `lucide-astro` ani `lucide` jako dependency. Pobierz SVG z https://lucide.dev i wklej do komponentow.
- **Animations**: Vanilla CSS keyframes + IntersectionObserver (vanilla JS, `<script>` tag w Layout.astro)
- **Zero dodatkowych pakietow** -- wszystko co potrzebne jest juz w package.json

### 11.3 Component File Structure

```
src/
  components/
    Nav.astro
    Hero.astro
    HeroVisual.astro           -- mockup terminal z JSON
    SectionHeader.astro        -- reusable (props: label, heading, desc)
    GlassCard.astro            -- reusable (props: variant)
    FeatureCard.astro           
    FeaturesGrid.astro
    StepCard.astro
    HowItWorks.astro
    FormatCard.astro
    SupportedFormats.astro
    AuthorityCard.astro
    AuthorityTypes.astro
    TechBadge.astro
    OpenSource.astro
    BottomCta.astro
    Footer.astro
    Badge.astro                -- reusable (props: variant)
    CodeBlock.astro            -- reusable (props: lang, code)
    icons/                     -- folder z inline SVG komponentami
      ShieldCheck.astro
      GitBranch.astro
      FileInput.astro
      Layers.astro
      ClipboardPaste.astro
      ScanSearch.astro
      CheckCircle2.astro
      Crown.astro
      Key.astro
      MessageSquare.astro
      Upload.astro
      ArrowRight.astro
      ExternalLink.astro
  layouts/
    Layout.astro               -- juz istnieje, dodac preload fontow + skip link
  pages/
    index.astro                -- importuje i komponuje wszystkie sekcje
  styles/
    global.css                 -- juz istnieje, rozszerzyc o keyframes + utility classes
    animations.css             -- scroll animation keyframes + utility classes
  scripts/
    scroll-animations.ts       -- IntersectionObserver logic, inline w Layout
```

### 11.4 Links

| CTA | URL | Target |
|---|---|---|
| Launch App (nav) | `https://tx-inspector.hive.io/app` (lub aktualna domena aplikacji) | `_self` |
| Launch App (hero) | j.w. | `_self` |
| View on GitLab | `https://gitlab.syncad.com/hive/tx-inspector` | `_blank` |
| Launch App (bottom CTA) | j.w. jak nav | `_self` |
| Footer: GitLab | j.w. jak hero | `_blank` |
| Footer: HIVE Blockchain | `https://hive.io` | `_blank` |
| Footer: Block Explorer | `https://hiveblocks.com` (lub z env NUXT_PUBLIC_BLOCK_EXPLORER_URL) | `_blank` |

### 11.5 Copywriting Final

**Hero**:
- Tagline badge: "Blockchain Forensics Tool"
- H1: "Inspect. Verify. Trust."
- Sub: "Analyze HIVE blockchain transactions. Verify signatures, trace authority paths, and decode operations in seconds."
- Primary CTA: "Launch App"
- Secondary CTA: "View on GitLab"

**Bottom CTA**:
- H2: "Ready to inspect your first transaction?"
- Sub: "Paste a transaction hash and get instant verification. No signup. No fees. Open source."
- CTA: "Launch App"

**Footer**: "Transaction Inspector -- A HIVE blockchain tool" / "(c) 2024 HIVE Ecosystem. Open source under MIT License."
