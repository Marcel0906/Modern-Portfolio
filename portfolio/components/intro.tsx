import Image from 'next/image'
import authorImage from '@/public/images/authors/author.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-4'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hi, ich bin Marcel Kubetin.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          Als Full-Stack Web Developer aus Bielefeld, Deutschland, entwickle ich mit
          Leidenschaft Webanwendungen. In einem dynamischen Team kann ich mein Wissen und meine Fähigkeiten 
          einbringen und innovative Weblösungen entwickeln. Auf der Suche nach neuen Herausforderungen und Möglichkeiten hoffe ich auf spannende Projekte.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Marcel Kubetin'
          // width={175}
          //   height={175}
          priority
        />
      </div>
    </section>
  )
}
