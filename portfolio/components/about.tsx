'use client'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-4'>
        <div className='mt-2 flex-1 md:mt-0'>
          <h1 className='title mb-12'>Über mich</h1>
          <p className='mt-3 font-sans'>
            Die Informatik fasziniert mich seit Jahren. Privat habe ich mich
            u.a. gerne über Entwicklungen in der KI, Sicherheitstechnologien und
            den Mobilfunk- und Festnetzausbau in Deutschland informiert. Das hat
            sich zum Beispiel darin niedergeschlagen, dass ich Freunden und
            Familienmitgliedern bei der Zusammenstellung und dem Kauf von PCs,
            Laptops und Smartphones mit Rat und Tat zur Seite gestanden habe.
            Gerade in einer so schnell wachsenden Branche wie der IT ist es
            wichtig, auf dem Laufenden zu bleiben und sich über neue
            Technologien und Entwicklungen zu informieren. Daher ist es für mich
            eine Herausforderung, als Full-Stack Web Developer die
            Chance zu nutzen, in einem IT-Unternehmen zu arbeiten, das mit
            innovativen und neuen Technologien spannende Projekte entwickelt.{' '}
          </p>

          <p className='mt-3 font-sans'>
            Zuverlässigkeit, autodidaktisches Lernen, lösungsorientiertes,
            selbstständiges Arbeiten zeichneten mein bisheriges Arbeitsverhalten
            aus. Die termingerechte Fertigstellung und Abgabe meiner
            Hausarbeiten im Studium sowie die Teamarbeit mit anderen
            DCI-Studierenden in meiner Weiterbildung beim DCI festigten meine
            Erfahrungen im agilen Projektmanagement und in Teamleitungsaufgaben
            mit Projektpräsentationen.
          </p>

          <p className='mt-3 font-sans'>
            Zu meinen persönlichen Interessen zählen Wandern in der Natur mit
            Freunden und Familie, Radfahren, Campen, Joggen und Schwimmen. Diese
            Interessen dienen meinem gesundheitlichen Ausgleich zur
            Bildschirmarbeit. Außerdem helfe ich in der Familie bei der Kinder-
            und Hundebetreuung.
          </p>
        </div>
      </section>

      <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-4'>
        <div className='mt-2 flex-1 md:mt-0'>
          <h1 className='title mb-12'>Skillset</h1>
          
          <h2 className='title mb-4 mt-3 no-underline'>Programming Languages & Tools</h2>
        
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-8'>
            <Image
              src='/images/svg/HTML5.svg'
              alt='html5'
              title='HTML5 | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/CSS3.svg'
              alt='css3'
              title='CSS3 | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/JS.svg'
              alt='javascript'
              title='JavaScript | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/NodeJS.svg'
              alt='node.js'
              title='NodeJS | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/TS.svg'
              alt='typescript'
              title='TypeScript | gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/cra-logo.svg'
              alt='create-react-app'
              title='Create-React-App | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/React.svg'
              alt='react'
              title='React | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/ViteJS.svg'
              alt='vite.js'
              title='Vite.js | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
                    <Image
              src='/images/svg/nextjs.svg'
              alt='next.js'
              title='Next.js | gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />

            <Image
              src='/images/svg/SASS.svg'
              alt='sass'
              title='SASS | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/expressJS.svg'
              alt='express.js'
              title='Express | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/MongoDB.svg'
              alt='mongodb'
              title='MongoDB | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/mongoose-original.svg'
              alt='mongoose'
              title='Mongoose | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/MySQL.svg'
              alt='mysql'
              title='MySQL | erweiterte Grundkenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
              <Image
              src='/images/svg/GraphQL.svg'
              alt='graphql'
              title='GraphQL | Grundkenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/PHP8.svg'
              alt='php8'
              title='PHP8 | erweiterte Grundkenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/JSON.svg'
              alt='json'
              title='JSON | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/jwt.svg'
              alt='jwt'
              title='JSON Web Token | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/MarkDown.svg'
              alt='markdown'
              title='MarkDown | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/BootStrap.svg'
              alt='bootstrap'
              title='BootStrap | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/React-BootStrap.svg'
              alt='react-bootstrap'
              title='React-BootStrap | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/React-Router.svg'
              alt='react-router'
              title='React-Router | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/React-PostCSS.svg'
              alt='react-postcss'
              title='React-PostCSS | gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/react-icons.svg'
              alt='react-icons'
              title='React-Icons | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/TailwindCSS.svg'
              alt='tailwindcss'
              title='TailwindCSS | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/npm.svg'
              alt='npm'
              title='NPM | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
          </div>
          <h2 className='title mb-4 mt-8 no-underline'>Developing Tools</h2>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-8'>
            <Image
              src='/images/svg/Git.svg'
              alt='git'
              title='Git | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/GitHub.svg'
              alt='github'
              title='GitHub | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/Github-desktop-logo-symbol.svg'
              alt='github-desktop'
              title='GitHub-Desktop | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/Vercel.svg'
              alt='vercel'
              title='Vercel | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/MS-VSCode.svg'
              alt='vscode'
              title='MS VSCode | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/Postman.svg'
              alt='postman'
              title='Postman | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
                  <Image
              src='/images/svg/WordPress.svg'
              alt='wordpress'
              title='WordPress | gute Grundkenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/Typo3.svg'
              alt='typo3'
              title='Typo3 | sehr gute Grundkenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
          </div>
          <h2 className='title mb-4 mt-8 no-underline'>Kommunikations- und Designtools</h2>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-8'>
            <Image
              src='/images/svg/Trello.svg'
              alt='trello'
              title='Trello'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/Slack.svg'
              alt='slack'
              title='Slack'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/zoom-call.svg'
              alt='zoom'
              title='Zoom'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/Microsoft_Office_Teams.svg'
              alt='microsoft-teams'
              title='Microsoft Teams'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/LinkedIn.svg'
              alt='linkedin'
              title='LinkedIn'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/GIMP.svg'
              alt='gimp'
              title='GIMP'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/Figma.svg'
              alt='figma'
              title='Figma'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/Discord.svg'
              alt='discord'
              title='Discord'
              width={100}
              height={100}
              className='rounded-lg'
            />
          </div>
          <h2 className='title mb-4 mt-8 no-underline'>KI Tools</h2>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-8'>
          <Image
              src='/images/svg/ChatGPT.svg'
              alt='chatgpt'
              title='ChatGPT'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <Image
              src='/images/svg/Github-Copilot.svg'
              alt='github-copilot'
              title='Github-Copilot'
              width={100}
              height={100}
              className='rounded-lg'
            />
            </div>
        </div>
      </section>
    </>
  )
}
