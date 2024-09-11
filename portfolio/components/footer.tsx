import { SVGProps} from "react"

// Definiert die LinkedIn-Icon-Komponente
const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.5c.878-.63 1.956-1 3-1 2.481 0 4.5 2.019 4.5 4.5v5.5z" />
  </svg>
)

// Definiert die GitHub-Icon-Komponente
const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.874.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.624-5.475 5.921.43.371.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

// Definiert die Navigationselemente mit den LinkedIn- und GitHub-Icons
const navigation = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marcel-kubetin-9b7a422a7/",
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/Marcel0906",
    icon: GitHubIcon,
  },
]


export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container max-w-3xl">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
           {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-5 w-5" />
                </a>
           ))}
           </div>
           <div className="mt-8 md:order-1 md:mt-0">
             <p className="text-center text-xs leading-5 text-muted-foreground">
               &copy; {new Date().getFullYear()} My Portfolio proudly designed and presented by Marcel Kubetin. All rights reserved.
             </p>
             </div>
              </div>
              </div>
              </footer>
  )
}
            

