# Tee Time - Golf Course Booking System

A modern golf course tee time registration and booking application built with SvelteKit and TypeScript. Find and book your perfect golf course in Omaha, Nebraska with an intuitive date and time selection interface.

**Tagline:** "Like the Highlander, there can be only one perfect tee time" ⛳

## Project Stack

- **Framework:** SvelteKit
- **Language:** TypeScript
- **Package Manager:** pnpm
- **Build Tool:** Vite
- **Styling:** CSS

## Features

- 📅 **Date Selection:** Browse available tee times by date
- ⏰ **Time Filtering:** Filter available slots by preferred tee time (early morning to afternoon)
- 🏌️ **Course Information:** View detailed information about local Omaha golf courses including:
  - Par and hole count
  - Course rating
  - Contact information and websites
  - Real-time availability
- 📍 **Location-Based:** Features 5+ premium golf courses in the Omaha, Nebraska area

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm installed

### Installation & Development

Install dependencies:

```sh
pnpm install
```

Start the development server:

```sh
pnpm run dev

# Open the app in a new browser tab
pnpm run dev -- --open
```

The app will be available at `http://localhost:5173`.

### Building

Create a production build:

```sh
pnpm run build
```

Preview the production build locally:

```sh
pnpm run preview
```

### Type Checking

Run TypeScript type checking:

```sh
pnpm run check

# Watch mode for continuous type checking
pnpm run check:watch
```

## Project Structure

```
src/
  ├── routes/                 # Page components and routing
  │   ├── +page.svelte       # Main tee time registration page
  │   └── +layout.svelte      # Root layout
  ├── lib/                     # Reusable components and utilities
  │   ├── CourseList.svelte   # Golf course display component
  │   ├── golfCourses.ts      # Course data and types
  │   └── index.ts            # Library exports
  ├── app.html                # HTML template
  └── app.d.ts               # TypeScript type definitions
```

## Featured Golf Courses

- **Dodge Park Golf Club** - 1717 N. 188th St
- **Omaha Country Club** - 4400 R St (4.7⭐ rating)
- **Applewood Golf Course** - 222 Fort Omaha Rd
- **Standing Bear Lake Golf Club** - Ashland, NE
- **Shadow Ridge Golf Course** - 15151 W Maple Rd

## Deployment

See the [SvelteKit adapter documentation](https://svelte.dev/docs/kit/adapters) to configure your deployment target.
