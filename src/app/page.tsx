import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Dr. Sharath Sathish</h1>
        <p className="text-xl text-muted-foreground">
          Data Science & AI leader with expertise in retail analytics, industrial engineering, and aerospace technologies.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-muted-foreground">
          Currently driving digital transformation initiatives in retail and energy sectors at bp, 
          combining deep technical expertise with business acumen to deliver measurable impact in 
          pricing optimization and engineering innovation.
        </p>
        <p className="text-muted-foreground">
          Previously led breakthrough innovations in aerospace technology at ISRO and architected 
          AI solutions for industrial asset optimization at GE Research. PhD researcher and inventor 
          with multiple patents in sustainable energy technologies.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link 
          href="/projects"
          className="group relative rounded-lg border p-6 hover:border-foreground"
        >
          <h3 className="font-semibold">Projects →</h3>
          <p className="text-sm text-muted-foreground">
            View my latest work in AI/ML and engineering
          </p>
        </Link>

        <Link 
          href="/blog"
          className="group relative rounded-lg border p-6 hover:border-foreground"
        >
          <h3 className="font-semibold">Blog →</h3>
          <p className="text-sm text-muted-foreground">
            Read my thoughts on technology and innovation
          </p>
        </Link>

        <Link 
          href="/publications"
          className="group relative rounded-lg border p-6 hover:border-foreground"
        >
          <h3 className="font-semibold">Publications →</h3>
          <p className="text-sm text-muted-foreground">
            Explore my research papers and patents
          </p>
        </Link>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Featured Work</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">Coffee Causality</h3>
            <p className="text-sm text-muted-foreground">
              Causal inference analysis in the coffee industry
            </p>
            <Link 
              href="https://github.com/SharathSPhD/coffee_causality"
              className="text-sm text-blue-500 hover:underline"
            >
              View Project →
            </Link>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">CCM Multiplication</h3>
            <p className="text-sm text-muted-foreground">
              Advanced computational methods for multiplication
            </p>
            <Link 
              href="https://github.com/SharathSPhD/ccmMul"
              className="text-sm text-blue-500 hover:underline"
            >
              View Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}