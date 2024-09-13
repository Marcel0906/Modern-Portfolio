import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
// import {MDXRemote} from 'next-mdx-remote/rsc'
// import {serialize} from 'next-mdx-remote/serialize'

// Definiert die Page-Komponente als Standardexport
export default function Home() {
  return (
    // Definiert einen Abschnitt mit einer oberen und unteren Innenabstandsklasse
    <section className='py-24'>
      {/* Definiert einen Container für zentrierten Inhalt */}
      <div className='container max-w-3xl'>
        <Intro />
        <RecentPosts />
        <RecentProjects />
      </div>
    </section>
  )
}
