# Next.js Blog Dynamic Routes and 404 Pages

This project demonstrates proper handling of dynamic routes and 404 pages in Next.js App Router.

## Key Features
- Dynamic route `/blog/[slug]` with:
  - Proper 404 handling using `notFound()`
  - Static generation with `generateStaticParams`
  - SEO metadata via `generateMetadata`
  - Loading states
- TypeScript support
- Clean data separation

## Problem & Solution

### Problem:
When building dynamic routes, we need to:
1. Handle cases where requested data doesn't exist
2. Pre-render all possible paths at build time
3. Provide good UX with loading states
4. Maintain proper SEO metadata

### Solution:
1. **404 Handling**:
   - Use Next.js `notFound()` function when data is missing
   - Automatically shows the closest `not-found.tsx`

2. **Static Generation**:
   - `generateStaticParams` pre-defines all possible paths
   - Combined with dynamic data fetching at request time

3. **Loading States**:
   - `loading.tsx` automatically shows during data fetching

4. **SEO**:
   - `generateMetadata` provides dynamic metadata
   - Falls back gracefully when post doesn't exist

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Test routes:
- `/blog/first-post` - Valid post
- `/blog/non-existent-post` - 404 page

## File Structure
```
app/
  blog/
    [slug]/
      page.tsx        # Dynamic route
      loading.tsx     # Loading state
lib/
  posts.ts           # Data layer
```
