import React from 'react'
import { getPostBySlug, getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
// import { MDXRemote } from 'next-mdx-remote/rsc'
import MDXContent from '@/components/mdx-content'


interface Params {
  slug: string;
}

interface PageProps {
  params: Params;
}

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

// Definiert die Typen für die Props der h2-Komponente
interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

// Definiert die h2-Komponente mit spezifischen Typen für die Props
const components = {
  h2: (props: H2Props) => (
    <h2 {...props} className='text-red-400'>
      {props.children}
    </h2>
  ),
}

// Definiert den Typ für die Props der Post-Komponente
// interface PageProps {
//   params: {
//     slug: string
//   }
// }

// First Way

export default async function Post({ params }: PageProps) { // <-- Typdefinition angepasst
  const post = await getPostBySlug(params.slug)

//   if (!post) {
//     return notFound()
//   }

// Second Way
// export default async function Post({ params }: { params: { slug: string } }) {
//   // const { slug } = params
//   const post = await getPostBySlug(params.slug)


  if (!post) {
    return notFound()
  } 

  const { metadata, content } = post
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Zurück zu posts</span>
        </Link>

        {image && (
          <div className='overflow-hiden relative mb-6 h-96 w-full rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              // fill
              height={800}
              width={800}
              priority
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
