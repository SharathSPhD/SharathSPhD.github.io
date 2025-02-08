import Image from 'next/image'

export default function PublicationsPage() {
  const publications = [
    {
      title: "Centrifugal Compressor Design and Surge Simulation for Active Inference Based Control",
      conference: "ASME Turbo Expo 2024: Turbomachinery Technical Conference and Exposition",
      location: "London, United Kingdom",
      date: "June 24–28, 2024",
      doi: "https://doi.org/10.1115/GT2024-124905"
    },
    {
      title: "Equation of state based analytical formulation for optimization of sCO2 Brayton cycle",
      journal: "Journal of Supercritical Fluids",
      volume: "Vol 177",
      date: "November 2021",
      doi: "https://doi.org/10.1016/j.supflu.2021.105351"
    },
    {
      title: "Analysis of a 10 MW recompression supercritical carbon dioxide cycle for tropical climatic conditions",
      journal: "Applied Thermal Engineering",
      volume: "Vol 186",
      date: "March 2021",
      doi: "https://doi.org/10.1016/j.applthermaleng.2020.116499"
    }
  ]

  return (
    <div className="flex flex-col gap-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Publications</h1>
        <p className="text-muted-foreground">
          Research publications in turbomachinery, supercritical CO2 power systems, and AI/ML applications
        </p>
      </section>

      <div className="rounded-lg border p-6 bg-secondary/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold">Google Scholar Profile</h2>
            <p className="text-muted-foreground mt-1">View complete publication history and citations</p>
          </div>
          <a 
            href="https://scholar.google.com/citations?user=dcyu5ucAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Profile →
          </a>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Recent Publications</h2>
        <div className="flex flex-col gap-6">
          {publications.map((pub, index) => (
            <div key={index} className="rounded-lg border p-6 hover:border-foreground transition-all">
              <h3 className="font-semibold text-lg">{pub.title}</h3>
              <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                <p>{pub.conference || pub.journal} {pub.volume}</p>
                <p>{pub.location} {pub.date}</p>
              </div>
              <a 
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-blue-500 hover:underline inline-flex items-center gap-1"
              >
                View Publication <span className="text-xs">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Patents & Trade Secrets</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">AI/ML Trade Secrets</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Multiple trade secrets filed in AI/ML/Reinforcement Learning for pricing data science
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">Waste Heat Recovery</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Novel cycles for waste heat recovery applications
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}