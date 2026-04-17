# My Restaurant

![App Preview](https://imgix.cosmicjs.com/d975be40-3a6b-11f1-9280-bf44b40df479-autopilot-photo-1529543544282-ea669407fca3-1776437030705.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, beautiful restaurant website built with Next.js 16 and Cosmic CMS, featuring menu management, multiple locations, and customer reviews.

## Features

- 🍽️ Menu items organized by categories
- 📍 Multiple location support with hours and reservations
- ⭐ Customer reviews with star ratings
- 🎨 Beautiful, modern responsive design
- 🚀 Built with Next.js 16 App Router
- 📱 Mobile-first design approach
- ⚡ Server-side rendering for optimal performance

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=69e246bc7a005e7edd8430be&clone_repository=69e24be27a005e7edd8430f3)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a restaurant website with menu items (including images, pricing, and dietary info), menu categories, locations, and customer reviews.
> 
> User instructions: A restaurant site with menu items grouped by category, hours, locations, and reservation info"

### Code Generation Prompt

> Build a Next.js application for an online business called "My Restaurant". The content is managed in Cosmic CMS with the following object types: menu-categories, menu-items, locations, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A restaurant site with menu items grouped by category, hours, locations, and reservation info

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites

- Bun (or Node.js 18+)
- A Cosmic account with bucket

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch menu items with categories
const { objects } = await cosmic.objects
  .find({ type: 'menu-items' })
  .depth(1)

// Fetch locations
const { objects } = await cosmic.objects
  .find({ type: 'locations' })
```

## Cosmic CMS Integration

This app integrates with your Cosmic bucket to display menu items, categories, locations, and reviews. Learn more at [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment

Deploy to Vercel or Netlify. Set environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`.

<!-- README_END -->