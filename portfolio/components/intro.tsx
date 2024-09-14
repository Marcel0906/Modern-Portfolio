import Image from 'next/image'
import authorImage from '@/public/images/authors/author.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-4'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hi, ich bin Marcel Kubetin.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          Ich bin Full-Stack Web Developer aus Bielefeld, Deutschland. Ich habe
          eine Leidenschaft für das Entwickeln von Webanwendungen. Mein Ziel ist
          es, mein Wissen und meine Fähigkeiten in einem dynamischen Team
          einzubringen und innovative Weblösungen zu entwickeln. Ich bin immer
          auf der Suche nach neuen Herausforderungen und Möglichkeiten, um mich
          weiterzuentwickeln.
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
