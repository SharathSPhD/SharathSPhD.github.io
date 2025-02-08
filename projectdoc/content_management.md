# Content Management Guide

## Adding New Blog Posts

### Location
Posts are stored in `src/content/posts/` as MDX files.

### File Naming Convention
Use the format: `YYYY-MM-DD-title-slug.mdx`
Example: `2024-02-08-rivers-of-thought.mdx`

### Template for New Posts
```mdx
---
title: "Your Post Title"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
excerpt: "Brief description of your post"
author: "Dr. Sharath Sathish"
image: "/images/posts/your-image.jpg"
canonicalUrl: "https://medium.com/or-linkedin-url" # Optional
---

Your content here using MDX format.

## Headers work as expected

You can include code blocks:
```python
def your_code():
    pass
```

And you can include images:
![Alt text](/images/your-image.jpg)
```

### Steps to Add a New Post
1. Create new MDX file in `src/content/posts/`
2. Copy template above
3. Fill in frontmatter details
4. Add your content using MDX
5. Add any images to `public/images/posts/`
6. Test locally using `npm run dev`
7. Commit and push to GitHub

## Adding New Projects

### Location
Projects are stored in `src/content/projects/` as MDX files.

### File Naming Convention
Use kebab-case: `project-name.mdx`
Example: `coffee-causality.mdx`

### Template for New Projects
```mdx
---
title: "Project Title"
description: "Brief project description"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
github: "https://github.com/username/repo"
demo: "https://demo-url.com" # Optional
image: "/images/projects/project-thumbnail.jpg"
featured: true # Set to true for featured projects
stack: ["Tech1", "Tech2"] # Technologies used
---

Detailed project description and documentation.

## Problem Statement

## Solution Approach

## Key Features

## Technical Implementation

## Results & Impact

```

### Steps to Add a New Project
1. Create new MDX file in `src/content/projects/`
2. Copy template above
3. Fill in project details
4. Add project images to `public/images/projects/`
5. Test locally
6. Commit and push

## Publication Management

### Location
Publications are managed in `src/content/publications/publications.ts`

### Adding New Publications
```typescript
// publications.ts

export interface Publication {
  title: string;
  authors: string[];
  journal?: string;
  conference?: string;
  year: number;
  doi?: string;
  url?: string;
  abstract?: string;
  citations?: number;
  type: 'journal' | 'conference' | 'patent';
}

export const publications: Publication[] = [
  {
    title: "Your Publication Title",
    authors: ["Sathish, S.", "Other Authors"],
    journal: "Journal Name",
    year: 2024,
    doi: "DOI number",
    url: "Publication URL",
    abstract: "Publication abstract",
    type: "journal"
  },
  // Add more publications here
];
```

## Image Management

### Directory Structure
```
public/
├── images/
│   ├── posts/      # Blog post images
│   ├── projects/   # Project images
│   └── profile/    # Profile and personal images
```

### Image Guidelines
- Use descriptive filenames
- Optimize images before adding
- Recommended formats: WebP, PNG, or JPG
- Maximum dimensions: 1920px width
- Use next/image component for optimization

## Content Update Workflow

1. Create Content
   - Write post/project in MDX
   - Prepare images
   - Add metadata

2. Local Testing
   - Run `npm run dev`
   - Check rendering
   - Test responsiveness
   - Verify links

3. Build Testing
   - Run `npm run build`
   - Check for any build errors
   - Test built version

4. Deployment
   - Commit changes
   - Push to GitHub
   - GitHub Actions will handle deployment

## SEO Best Practices

1. Meta Tags
   - Always include title
   - Write descriptive excerpts
   - Add relevant tags

2. Images
   - Include alt text
   - Optimize for web
   - Use descriptive filenames

3. URLs
   - Use descriptive slugs
   - Keep URLs concise
   - Include relevant keywords

## Quick Commands

```bash
# Start development server
npm run dev

# Build project
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```
