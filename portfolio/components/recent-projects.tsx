import Link from 'next/link'
import {getProjects} from '@/lib/projects'
import Projects from '@/components/projects'

export default async function RecentProjects() {
  const projects = await getProjects(2)
  return (
    <section className='pb-24 '>
    <div>
        <h2 className="title mb-12">Letzte Projekte</h2>
        <Projects projects={projects} />

        <Link href='/projects'
          className='mt-8 inline-flex items-center gap-2 hover:text-foreground'>
            <span>Alle Projekte</span>
          </Link>
    </div>
    </section>
  )
  
}

