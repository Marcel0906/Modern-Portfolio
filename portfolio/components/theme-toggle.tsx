'use client' // Markiert diese Datei als Client-seitigen Code
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

// Definiert die ThemeToggle-Komponente als Standardexport
export default function ThemeToggle() {
  // Verwendet den useTheme Hook, um die setTheme Funktion und das resolvedTheme zu erhalten
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true) // Setzt mounted auf true, wenn die Komponente gemountet ist
  }, []) // Leeres Abhängigkeitsarray bedeutet, dass dieser Effekt nur einmal nach dem ersten Rendern ausgeführt wird

  // Wenn die Komponente noch nicht gemountet ist, wird null zurückgegeben und nichts gerendert
  if (!mounted) {
      return null
    }
    // Rendert die Button-Komponente
    return (
      <Button
        size='sm'
        variant='ghost'
        onClick={() => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        }}
      >
        {resolvedTheme === 'dark' ? (
          <SunIcon className='size-4 text-orange-300' />
        ) : (
          <MoonIcon className='size-4 text-white-950' />
          // default moonIcon is text-sky-950
        )}

        <span className='sr-only'>Toggle theme</span>
      </Button>
    )
  }
