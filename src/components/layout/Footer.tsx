import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { href: 'https://github.com/SharathSPhD', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/sharath-s/', label: 'LinkedIn' },
    { href: 'https://scholar.google.com/citations?user=dcyu5ucAAAAJ&hl=en', label: 'Google Scholar' },
    { href: 'https://medium.com/@sharath.ai.colab', label: 'Medium' },
  ]

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            © {currentYear} Dr. Sharath Sathish. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer