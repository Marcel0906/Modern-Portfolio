import React from 'react'

// Definiert die Page-Komponente als Standardexport
export default function Page() {
  return (
    // Definiert einen Abschnitt mit einer oberen und unteren Innenabstandsklasse
    <section className='py-24'>
       {/* Definiert einen Container für zentrierten Inhalt */}
    <div className='container'>
      {/* Überschrift der ersten Ebene mit Textgröße, Fettschrift und zentriertem Text */}
      <h1 className='text-4xl font-bold text-center'>Welcome to the Portfolio</h1>
    </div>
    </section>
  )
}