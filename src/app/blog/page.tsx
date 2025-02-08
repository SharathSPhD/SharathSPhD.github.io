import Link from 'next/link'

const PUBLISHED_ARTICLES = [
  {
    title: "Rivers of Thought: Beyond Generative AI",
    excerpt: "Exploring the evolution of AI and its impact on future technologies",
    date: "2024",
    url: "https://www.linkedin.com/pulse/rivers-thought-beyond-generative-ai-sharath-sathish-phd-fd57e/",
    platform: "LinkedIn"
  },
  {
    title: "Enigma & Entropy: Transforming Engineering & Shaping Tomorrow",
    excerpt: "A perspective on engineering transformation and future innovations",
    date: "2024",
    url: "https://www.linkedin.com/pulse/enigma-entropy-transforming-engineering-shaping-sharath-sathish-phd-40zle/",
    platform: "LinkedIn"
  },
  {
    title: "ChatGPT and a Hike to Saturn's Moon",
    excerpt: "An imaginative exploration of AI-assisted space exploration",
    date: "2024",
    url: "https://medium.com/@sharath.ai.colab/chatgpt-and-a-hike-to-saturns-moon-d859836819fd",
    platform: "Medium"
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Blog & Articles</h1>
        <p className="text-muted-foreground">
          Thoughts and insights on AI, engineering, and technology innovation
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {PUBLISHED_ARTICLES.map((article, index) => (
          <a 
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border p-6 hover:border-foreground transition-all hover:shadow-md"
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="font-semibold text-lg">{article.title}</h2>
              <span className="text-sm text-muted-foreground px-2 py-1 bg-secondary rounded">
                {article.platform}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <time dateTime={article.date}>{article.date}</time>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
        ))}
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">More Content</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <a 
            href="https://www.linkedin.com/in/sharath-s/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border p-6 hover:border-foreground transition-all hover:shadow-md"
          >
            <h3 className="font-semibold">LinkedIn Posts & Activities →</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Follow my latest updates and insights on LinkedIn
            </p>
          </a>
          <a 
            href="https://medium.com/@sharath.ai.colab"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border p-6 hover:border-foreground transition-all hover:shadow-md"
          >
            <h3 className="font-semibold">Medium Blog →</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Read my detailed technical articles on Medium
            </p>
          </a>
        </div>
      </section>
    </div>
  )
}