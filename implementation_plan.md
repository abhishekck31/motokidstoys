# Implementation Plan: MotoKids High-Octane E-Commerce Redesign

This plan outlines the architectural strategy for transitioning MotoKids into a "professional-grade" storefront with agentic orchestration, cinematic visuals, and detailed product dashboards.

## 1. Architectural Overview
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Framer Motion
- **State Management**: React Context (Cart)
- **Logic Layer**: `lib/whatsapp.ts` for load-balanced deep linking.

## 2. Data Schema & Catalog Enhancement
We will extend the `Product` interface to support the "Dashboard" requirement:
- `voltage`: '12V' | '24V'
- `remote`: boolean
- `seats`: number
- `category`: 'ride-on' | 'accessory'
- `warranty`: string (Dynamic based on category)

## 3. Component Architecture

### A. Presentation Layer (UI)
- `HeroSection.tsx`: Cinematic layout with glassmorphism and parallax animations.
- `ProductDashboard.tsx`: Bento-grid layout for technical specifications.
- `TrustBar.tsx`: Sticky ticker for the Hero section.
- `PolicyTabs.tsx`: Tab-based display for Specs, In the Box, and Warranty.

### B. Logic Layer (Engine)
- `useWhatsApp.ts`: Hook to handle load balancing between numbers (+919638026901, +919769876609).
- `CartContext.tsx`: Persistent state for items.

## 4. Key Missions

### Phase 1: Knowledge Base & Logic
- Populate `src/lib/data.ts` with enriched seed data (Lamborghini, Land Cruiser, Drift Kart).
- Implement `src/lib/whatsapp.ts` with URI encoding and randomization.

### Phase 2: Cinematic Hero & Visuals
- Build the `HeroSection` with a floating Lamborghini asset and frosted-glass overlays.
- Implement the "Trust Bar" ticker.

### Phase 3: Information-Rich Dashboard
- Create the dynamic product route `/product/[id]`.
- Implement the Bento-grid spec display and tabbed policy section.

## 5. Verification Artifacts
- [ ] `implementation_plan.md` (Current)
- [ ] Browser recordings of Hero animations.
- [ ] Screenshot of the Bento-grid spec table.
- [ ] Validation of WhatsApp message encoding.

---
**Status**: Ready for Execution. Waiting for architect approval (Next Step: Data Schema Update).
