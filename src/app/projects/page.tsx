import Link from 'next/link'
import { getAllProjects } from '@/lib/mdx'

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-xl text-muted-foreground">
          A collection of my research and development work in AI, engineering, and data science.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group rounded-lg border p-6 hover:border-foreground"
          >
            <h2 className="font-semibold group-hover:underline">{project.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}