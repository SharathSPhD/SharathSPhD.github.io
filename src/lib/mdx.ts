import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export async function getAllPosts() {
  const files = fs.readdirSync(postsDirectory)
  
  const posts = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const post = await getPostBySlug(slug)
      return post
    })
  )

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  
  const { data, content } = matter(fileContent)
  
  const { frontmatter } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true }
  })

  return {
    slug,
    content,
    ...data,
    ...frontmatter
  }
}