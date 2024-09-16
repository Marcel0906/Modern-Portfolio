// components/ImageComponent.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function ImageComponent() {
  return (
    <div className='my-8'>
      <h2 className='title mb-12'>Lebenslauf</h2>
      <Image
        src='/images/authors/cv.jpg' // Pfad zu Ihrem Bild
        alt='CV'
        width={1000} // Breite des Bildes
        height={1000} // Höhe des Bildes
        className='rounded-lg shadow-lg'
      />
      <br></br>
      <Link href='/contact' className='font-bold'>
        Kontaktieren Sie mich
      </Link>
    </div>
  )
}
