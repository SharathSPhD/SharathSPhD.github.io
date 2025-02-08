# MDX Configuration Guide

## Required Dependencies
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
npm install rehype-highlight rehype-slug remark-gfm
```

## Next.js Configuration
Create/update `next.config.mjs`:

```javascript
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight, rehypeSlug],
  },
})

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
})
```

## MDX Components
Create `src/components/mdx/index.tsx`:

```typescript
import { FC, PropsWithChildren } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const components = {
  h1: ({ children }: PropsWithChildren) => (
    <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: PropsWithChildren) => (
    <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }: PropsWithChildren) => (
    <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
  ),
  p: ({ children }: PropsWithChildren) => (
    <p className="my-4 leading-7">{children}</p>
  ),
  a: ({ href, children }: any) => (
    <Link 
      href={href} 
      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
    >
      {children}
    </Link>
  ),
  img: ({ src, alt }: any) => (
    <div className="my-8">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className="rounded-lg"
      />
    </div>
  ),
  code: ({ children, className }: any) => (
    <code className={`${className} rounded-md px-2 py-1 bg-gray-100 dark:bg-gray-800`}>
      {children}
    </code>
  ),
  pre: ({ children }: PropsWithChildren) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto">
      {children}
    </pre>
  ),
}

export default components
```

## Usage in App
In `src/app/layout.tsx`:

```typescript
import { MDXProvider } from '@mdx-js/react'
import components from '@/components/mdx'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MDXProvider components={components}>
          {children}
        </MDXProvider>
      </body>
    </html>
  )
}
```

## Utilities for MDX Content
Create `src/utils/mdx.ts`:

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')
const projectsDirectory = path.join(process.cwd(), 'src/content/projects')

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}

export function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    content,
    ...data
  }
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.mdx$/, '')
    return getPostData(slug)
  })
  
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// Similar functions for projects
export function getAllProjectSlugs() {
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}

export function getProjectData(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    content,
    ...data
  }
}

export function getAllProjects() {
  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjectsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.mdx$/, '')
    return getProjectData(slug)
  })
  
  return allProjectsData.sort((a, b) => {
    if (a.featured === b.featured) {
      return 0
    }
    return a.featured ? -1 : 1
  })
}
```
