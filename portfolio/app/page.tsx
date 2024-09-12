import Intro from '@/components/intro'
import {MDXRemote} from 'next-mdx-remote/rsc'
// import {serialize} from 'next-mdx-remote/serialize'


// Definiert die Page-Komponente als Standardexport
export default function Home() {
  const content = `# This is a markdown heading`
  
  return (
    // Definiert einen Abschnitt mit einer oberen und unteren Innenabstandsklasse
    <section className='py-24'>
       {/* Definiert einen Container für zentrierten Inhalt */}
    <div className='container max-w-3xl'>
    <Intro />
    <MDXRemote source={content } />
    </div>
    </section>
  )
}