'use client'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-4'>
        <div className='mt-2 flex-1 md:mt-0'>
          <h1 className='title mb-12'>Über mich</h1>
          <p className='mt-3 font-sans'>
            Die Informatik fasziniert mich seit Jahren, besonders KI,
            Sicherheitstechnologien und der Festnetz- und Mobilfunkausbau. Privat habe ich
            Freunden und Familie bei der Auswahl von PCs, Laptops und
            Smartphones geholfen. In der IT-Branche ist es wichtig, stets am
            Puls der Zeit zu bleiben. Als Full-Stack Web Developer reizt mich
            die Arbeit an innovativen Projekten.{' '}
          </p>

          <p className='mt-3 font-sans'>
            Zuverlässigkeit, autodidaktisches Lernen und lösungsorientiertes
            Arbeiten prägen meinen Arbeitsstil. Im Studium und während meiner
            Weiterbildung beim DCI sammelte ich Erfahrungen im agilen
            Projektmanagement, der Teamarbeit und der Projektpräsentation.
          </p>

          <p className='mt-3 font-sans'>
            Meine Freizeit verbringe ich gerne beim Wandern, Radfahren, Campen,
            Joggen und Schwimmen, was mir als Ausgleich zur Bildschirmarbeit
            dient. Zudem unterstütze ich in der Familie bei der Kinder- und
            Hundebetreuung.
          </p>
        </div>
      </section>

      <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-4'>
        <div className='mt-2 flex-1 md:mt-0'>
          <h1 className='title mb-12'>Skillset</h1>

          <h2 className='title mb-4 mt-3 no-underline'>
            Programming Languages & Tools
          </h2>

          <div className='grid grid-cols-1 gap-6 sm:grid-cols-8'>
            <Image
              src='/images/svg/HTML5.svg'
              alt='html5'
              title='HTML5 | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>HTML5 | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/CSS3.svg'
              alt='css3'
              title='CSS3 | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>CSS3 | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/JS.svg'
              alt='javascript'
              title='JavaScript | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>JavaScript | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/NodeJS.svg'
              alt='node.js'
              title='NodeJS | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>NodeJS | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/TS.svg'
              alt='typescript'
              title='TypeScript | gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>TypeScript | gute Kenntnisse</p>
            <Image
              src='/images/svg/cra-logo.svg'
              alt='create-react-app'
              title='Create-React-App | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Create-React-App | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/React.svg'
              alt='react'
              title='React | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>React | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/ViteJS.svg'
              alt='vite.js'
              title='Vite.js | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Vite.js | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/nextjs.svg'
              alt='next.js'
              title='Next.js | gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Next.js | gute Kenntnisse</p>
            <Image
              src='/images/svg/SASS.svg'
              alt='sass'
              title='SASS | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>SASS | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/expressJS.svg'
              alt='express.js'
              title='Express | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Express | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/MongoDB.svg'
              alt='mongodb'
              title='MongoDB | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>MongoDB | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/mongoose-original.svg'
              alt='mongoose'
              title='Mongoose | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Mongoose | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/MySQL.svg'
              alt='mysql'
              title='MySQL | gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>MySQL | gute Kenntnisse</p>
            <Image
              src='/images/svg/GraphQL.svg'
              alt='graphql'
              title='GraphQL|Grundkenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>GraphQL | Grundkenntnisse</p>
            <Image
              src='/images/svg/PHP8.svg'
              alt='php8'
              title='PHP8 | erweiterte Grundkenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>PHP8 | erweiterte Grundkenntnisse</p>
            <Image
              src='/images/svg/laravel.svg'
              alt='Laravel'
              title='Laravel | erweiterte Grundkenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Laravel | erweiterte Grundkenntnisse</p>
            <Image
              src='/images/svg/MarkDown.svg'
              alt='markdown'
              title='MarkDown | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            
            <p>MarkDown | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/JSON.svg'
              alt='json'
              title='JSON | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>JSON | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/jwt.svg'
              alt='jwt'
              title='JSON Web Token | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>JSON Web Token | sehr gut Kenntnisse</p>
       
            <Image
              src='/images/svg/BootStrap.svg'
              alt='bootstrap'
              title='BootStrap | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>BootStrap | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/React-BootStrap.svg'
              alt='react-bootstrap'
              title='React-BootStrap | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>React-BootStrap | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/React-Router.svg'
              alt='react-router'
              title='React-Router | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>React-Router | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/React-PostCSS.svg'
              alt='react-postcss'
              title='React-PostCSS | gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>React-PostCSS | gute Kenntnisse</p>
            <Image
              src='/images/svg/react-icons.svg'
              alt='react-icons'
              title='React-Icons | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>React-Icons | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/TailwindCSS.svg'
              alt='tailwindcss'
              title='TailwindCSS | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>TailwindCSS | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/npm.svg'
              alt='npm'
              title='NPM | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>NPM | sehr gute Kenntnisse</p>
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
            <p>Git | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/GitHub.svg'
              alt='github'
              title='GitHub | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>GitHub | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/Github-desktop-logo-symbol.svg'
              alt='github-desktop'
              title='GitHub-Desktop | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>GitHub-Desktop | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/Vercel.svg'
              alt='vercel'
              title='Vercel | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Vercel | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/MS-VSCode.svg'
              alt='vscode'
              title='MS VSCode | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>MS VSCode | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/Postman.svg'
              alt='postman'
              title='Postman | sehr gute Kenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Postman | sehr gute Kenntnisse</p>
            <Image
              src='/images/svg/WordPress.svg'
              alt='wordpress'
              title='WordPress | gute Grundkenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>WordPress | erweiterte Grundkenntnisse</p>
            <Image
              src='/images/svg/Typo3.svg'
              alt='typo3'
              title='Typo3 | sehr gute Grundkenntnisse'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Typo3 | sehr gute Grundkenntnisse</p>
          </div>
          <h2 className='title mb-4 mt-8 no-underline'>
            Kommunikationstools und Design
          </h2>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-8'>
            <Image
              src='/images/svg/Trello.svg'
              alt='trello'
              title='Trello'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Trello</p>
            <Image
              src='/images/svg/Slack.svg'
              alt='slack'
              title='Slack'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Slack</p>
            <Image
              src='/images/svg/zoom-call.svg'
              alt='zoom'
              title='Zoom'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Zoom</p>
            <Image
              src='/images/svg/Microsoft_Office_Teams.svg'
              alt='microsoft-teams'
              title='Microsoft Teams'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Microsoft Teams</p>
            <Image
              src='/images/svg/LinkedIn.svg'
              alt='linkedin'
              title='LinkedIn'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>LinkedIn</p>
            <Image
              src='/images/svg/GIMP.svg'
              alt='gimp'
              title='GIMP'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>GIMP</p>
            <Image
              src='/images/svg/Figma.svg'
              alt='figma'
              title='Figma'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Figma</p>
            <Image
              src='/images/svg/Discord.svg'
              alt='discord'
              title='Discord'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Discord</p>
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
            <p>ChatGPT</p>
            <Image
              src='/images/svg/Github-Copilot.svg'
              alt='github-copilot'
              title='Github-Copilot'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Github-Copilot</p>
            <Image
              src='/images/svg/DeepL.svg'
              alt='deepl'
              title='DeepL'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>DeepL</p>
            <Image
              src='/images/svg/Google-gemini.svg'
              alt='google-gemini'
              title='Google-gemini'
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p>Google-gemini</p>
          </div>
        </div>
      </section>
    </>
  )
}
