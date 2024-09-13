import React from 'react'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'


export async function generateStaticPaths() {
  const posts = await getProjects()
  const slugs = posts.map(project => ({ slug: project.slug}))

  return slugs
  }

// Definiert die Typen für die Props der h2-Komponente
interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {}


// h2 props any wird nicht empfohlen, sondern sollte spezifisch sein

// Definiert die h2-Komponente mit spezifischen Typen für die Props
const components = {
    h2: (props: H2Props) => ( <h2 {...props} className='text-red-400'>
    {props.children}
    </h2>
    ),
}


export default async function Project({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Zurück zu den Projekten</span>
        </Link>

        {image && (
          <div className='overflow-hiden relative mb-6 h-96 w-full rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose dark:prose-invert mt-16'>
          <MDXContent source={content} components={components} />
        </main>
      </div>
    </section>
  )
}

