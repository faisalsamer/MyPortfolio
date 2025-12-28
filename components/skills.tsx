'use client'

import { type JSX, useState, useEffect } from 'react'
import Link from 'next/link'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiMariadb,
  SiOracle,
  SiPrisma,
  SiSupabase,
  SiGit,
  SiGithub,
  SiDocker,
  SiShadcnui
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import SkillDialog from './skill-dialog'

// Custom TanStack Icon Component
const TanStackIcon = ({ size = 40 }: { size?: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
  >
    <path
      fill='currentColor'
      d='M11.078.042c.316-.042.65-.014.97-.014c1.181 0 2.341.184 3.472.532a12.3 12.3 0 0 1 3.973 2.086a11.9 11.9 0 0 1 3.432 4.33c1.446 3.15 1.436 6.97-.046 10.107c-.958 2.029-2.495 3.727-4.356 4.965c-1.518 1.01-3.293 1.629-5.1 1.848c-2.298.279-4.784-.129-6.85-1.188c-3.88-1.99-6.518-5.994-6.57-10.382c-.01-.846.003-1.697.17-2.534c.273-1.365.748-2.683 1.463-3.88a12 12 0 0 1 2.966-3.36A12.3 12.3 0 0 1 9.357.3a12 12 0 0 1 1.255-.2l.133-.016zM7.064 19.99c-.535.057-1.098.154-1.557.454c.103.025.222 0 .33 0c.258 0 .52-.01.778.002c.647.028 1.32.131 1.945.303c.8.22 1.505.65 2.275.942c.813.307 1.622.402 2.484.402c.435 0 .866-.001 1.287-.12c-.22-.117-.534-.095-.778-.144a11 11 0 0 1-1.556-.416a12 12 0 0 1-1.093-.467l-.23-.108a15 15 0 0 0-1.012-.44c-.905-.343-1.908-.512-2.873-.408m.808-2.274c-1.059 0-2.13.187-3.083.667q-.346.177-.659.41c-.063.046-.175.106-.199.188s.061.151.11.204c.238-.127.464-.261.718-.357c1.64-.624 3.63-.493 5.268.078c.817.285 1.569.712 2.365 1.046c.89.374 1.798.616 2.753.74c1.127.147 2.412.028 3.442-.48c.362-.179.865-.451 1.018-.847c-.189.017-.36.098-.539.154a9 9 0 0 1-.868.222c-.994.2-2.052.24-3.053.06c-.943-.17-1.82-.513-2.693-.873l-.111-.046l-.223-.092l-.112-.046a26 26 0 0 0-1.35-.527c-.89-.31-1.842-.5-2.784-.5M9.728 1.452c-1.27.28-2.407.826-3.502 1.514c-.637.4-1.245.81-1.796 1.323c-.82.765-1.447 1.695-1.993 2.666c-.563 1-.924 2.166-1.098 3.297c-.172 1.11-.2 2.277-.004 3.388c.245 1.388.712 2.691 1.448 3.897c.248-.116.424-.38.629-.557c.414-.359.85-.691 1.317-.978a3.5 3.5 0 0 1 .539-.264c.07-.029.187-.055.22-.132c.053-.124-.045-.34-.062-.468a7 7 0 0 1-.068-1.109a9.7 9.7 0 0 1 .61-3.177c.29-.76.73-1.45 1.254-2.069c.177-.21.365-.405.56-.6c.115-.114.258-.212.33-.359c-.376 0-.751.108-1.108.218c-.769.237-1.518.588-2.155 1.084c-.291.226-.504.522-.779.76c-.084.073-.235.17-.352.116c-.176-.083-.149-.43-.169-.59c-.078-.612.154-1.387.45-1.918c.473-.852 1.348-1.58 2.376-1.555c.444.011.833.166 1.257.266c-.107-.153-.252-.264-.389-.39a5.4 5.4 0 0 0-1.107-.8c-.163-.085-.338-.136-.509-.2c-.086-.03-.195-.074-.227-.17c-.06-.177.26-.342.377-.417c.453-.289 1.01-.527 1.556-.54c.854-.021 1.688.452 2.04 1.258c.123.284.16.583.184.885l.004.057l.006.085l.002.029l.005.057l.004.056c.268-.218.457-.54.718-.774c.612-.547 1.45-.79 2.245-.544a2.97 2.97 0 0 1 1.71 1.378c.097.173.365.595.171.767c-.152.134-.344.03-.504-.026a3 3 0 0 0-.372-.094l-.068-.014l-.069-.013a3.9 3.9 0 0 0-1.377-.002c-.282.05-.557.15-.838.192v.06c.768.006 1.51.444 1.89 1.109c.157.275.235.59.295.9c.075.38.022.796-.082 1.168c-.035.125-.098.336-.247.365c-.106.02-.195-.085-.256-.155a4.6 4.6 0 0 0-.492-.522a20 20 0 0 0-1.467-1.14c-.267-.19-.56-.44-.868-.556c.087.208.171.402.2.63c.088.667-.192 1.296-.612 1.798a2.6 2.6 0 0 1-.426.427c-.067.05-.151.114-.24.1c-.277-.044-.31-.463-.353-.677c-.144-.726-.086-1.447.114-2.158c-.178.09-.307.287-.418.45a5.3 5.3 0 0 0-.612 1.138c-.61 1.617-.604 3.51.186 5.066c.088.174.221.15.395.15h.157a3 3 0 0 1 .472.018c.08.01.193 0 .257.06c.077.072.036.194.018.282c-.05.246-.066.469-.066.72c.328-.051.419-.576.535-.84c.131-.298.265-.597.387-.9c.06-.148.14-.314.119-.479c-.024-.185-.157-.381-.25-.54c-.177-.298-.378-.606-.508-.929c-.104-.258-.007-.58.286-.672c.161-.05.334.049.439.166c.22.244.363.609.523.896l1.249 2.248q.159.286.32.57c.043.074.086.188.173.219c.077.028.182-.012.26-.027c.198-.04.398-.083.598-.12c.24-.043.605-.035.778-.222c-.253-.08-.545-.075-.808-.057c-.158.01-.333.067-.479-.025c-.216-.137-.36-.455-.492-.667c-.326-.525-.633-1.057-.945-1.59l-.05-.084l-.1-.17q-.075-.126-.149-.255c-.037-.066-.092-.153-.039-.227c.056-.076.179-.08.29-.081h.021q.066.001.117-.004a10 10 0 0 1 1.347-.107c-.035-.122-.135-.26-.103-.39c.071-.292.49-.383.686-.174c.131.14.207.334.292.504c.113.223.24.44.361.66c.211.383.441.757.658 1.138l.055.094l.028.047c.093.156.187.314.238.489c-.753-.035-1.318-.909-1.646-1.499c-.027.095.016.179.05.27q.103.282.262.54c.152.244.326.495.556.673c.408.315.945.317 1.436.283c.315-.022.708-.165 1.018-.068s.434.438.25.7c-.138.196-.321.27-.55.3c.162.346.373.667.527 1.02c.064.146.13.37.283.448c.102.051.248.003.358 0c-.11-.292-.317-.54-.419-.839c.31.015.61.176.898.28c.567.202 1.128.424 1.687.648l.258.104c.23.092.462.183.689.283c.083.037.198.123.29.07c.074-.043.123-.146.169-.215a10.3 10.3 0 0 0 1.393-3.208c.75-2.989.106-6.287-1.695-8.783c-.692-.96-1.562-1.789-2.522-2.476c-2.401-1.718-5.551-2.407-8.44-1.768m4.908 14.904c-.636.166-1.292.317-1.945.401c.086.293.296.577.45.84c.059.101.122.237.24.281c.132.05.292-.03.417-.072c-.058-.158-.155-.3-.235-.45c-.033-.06-.084-.133-.056-.206c.05-.137.263-.13.381-.153c.31-.063.617-.142.928-.204c.114-.023.274-.085.389-.047c.086.03.138.1.187.174l.022.033q.043.07.097.122c.125.113.313.13.472.162c-.097-.219-.259-.41-.362-.63c-.06-.127-.11-.315-.242-.388c-.182-.102-.557.089-.743.137m-4.01-1.457c-.03.38-.147.689-.33 1.019c.21.026.423.036.629.087c.154.038.296.11.449.153c-.082-.224-.233-.423-.35-.63c-.12-.208-.226-.462-.398-.63'
    />
  </svg>
)

// Custom Firebase Icon with Gradient
const FirebaseIcon = ({ size = 40 }: { size?: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
  >
    <defs>
      <linearGradient id='firebaseGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stopColor='#FFA000' />
        <stop offset='100%' stopColor='#F57C00' />
      </linearGradient>
    </defs>
    <path
      fill='url(#firebaseGradient)'
      d='M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z'
    />
  </svg>
)

// Custom Java Icon with proper two-tone colors
const JavaIcon = ({ size = 40 }: { size?: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
  >
    <path
      fill='#5382a1'
      d='M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211c0 0 .552.346 1.321.646c-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308c0 0 .384.389.987.602c-5.679 1.661-12.007.13-7.942-1.218'
    />
    <path
      fill='#e76f00'
      d='M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688c0-.001-8.216 2.051-4.292 6.573'
    />
    <path
      fill='#5382a1'
      d='M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033c-.856-.373.75-.89 1.254-.998c.527-.114.828-.093.828-.093c-.953-.671-6.156 1.317-2.643 1.887c9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062c1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568c2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285c-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562c0-.001.07-.063.09-.118'
    />
    <path
      fill='#e76f00'
      d='M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836c-2.274-2.053-3.943-3.858-2.824-5.539c1.644-2.469 6.197-3.665 5.19-7.627'
    />
    <path
      fill='#5382a1'
      d='M9.734 23.924c4.322.277 10.959-.153 11.116-2.198c0 0-.302.775-3.572 1.391c-3.688.694-8.239.613-10.937.168c0-.001.553.457 3.393.639'
    />
  </svg>
)

// Custom Figma Icon with proper multi-color logo
const FigmaIcon = ({ size = 40 }: { size?: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
  >
    <path
      fill='#0acf83'
      d='M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4'
    />
    <path
      fill='#a259ff'
      d='M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4'
    />
    <path
      fill='#f24e1e'
      d='M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4'
    />
    <path fill='#ff7262' d='M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4z' />
    <path
      fill='#1abcfe'
      d='M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4s1.792-4 4-4s4 1.792 4 4'
    />
  </svg>
)

type Project = {
  name: string
  url?: string
}

type Skill = {
  name: string
  icon:
    | React.ComponentType<{ size?: number }>
    | ((props: { size?: number }) => JSX.Element)
  colorLight: string
  colorDark: string
  description: string
  universityProjects: Project[]
  workProjects: Project[]
  hoppyProjects: Project[]
}

const skills: Skill[] = [
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    colorLight: '#000000',
    colorDark: '#FFFFFF',
    description:
      'Learned through building modern web applications and exploring the React ecosystem.',
    universityProjects: [],
    workProjects: [{ name: 'TenancyPilot' }],
    hoppyProjects: [{ name: 'Chattr' }]
  },
  {
    name: 'React',
    icon: SiReact,
    colorLight: '#61DAFB',
    colorDark: '#61DAFB',
    description:
      'Mastered through university courses and professional projects.',
    universityProjects: [{ name: 'UFound (FYP)' }],
    workProjects: [
      { name: 'LumeaAI' },
      { name: 'Datalytica Super Admin Dashboard' }
    ],
    hoppyProjects: []
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    colorLight: '#3178C6',
    colorDark: '#3178C6',
    description: 'Adopted for type-safe development in professional projects.',
    universityProjects: [],
    workProjects: [
      { name: 'TenancyPilot' },
      { name: 'Leafloat Restaurant POS' }
    ],
    hoppyProjects: [{ name: 'Chattr' }]
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    colorLight: '#06B6D4',
    colorDark: '#06B6D4',
    description:
      'Learned through modern web development for rapid UI development.',
    universityProjects: [],
    workProjects: [
      { name: 'TenancyPilot' },
      { name: 'Leafloat Restaurant POS' }
    ],
    hoppyProjects: [{ name: 'Chattr' }]
  },
  {
    name: 'TanStack Query',
    icon: TanStackIcon,
    colorLight: '#FF4154',
    colorDark: '#FF4154',
    description: 'Used for efficient data fetching and state management.',
    universityProjects: [],
    workProjects: [{ name: 'Leafloat Restaurant POS' }],
    hoppyProjects: []
  },
  {
    name: 'TanStack Router',
    icon: TanStackIcon,
    colorLight: '#FF4154',
    colorDark: '#FF4154',
    description: 'Implemented for type-safe routing in React applications.',
    universityProjects: [],
    workProjects: [{ name: 'Leafloat Restaurant POS' }],
    hoppyProjects: []
  },
  {
    name: 'shadcn/ui',
    icon: SiShadcnui,
    colorLight: '#000000',
    colorDark: '#FFFFFF',
    description:
      'Leveraged for building accessible and customizable UI components.',
    universityProjects: [],
    workProjects: [
      { name: 'TenancyPilot' },
      { name: 'Leafloat Restaurant POS' }
    ],
    hoppyProjects: [{ name: 'Chattr' }]
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    colorLight: '#339933',
    colorDark: '#339933',
    description: 'Learned through building scalable server-side applications.',
    universityProjects: [{ name: 'UFound (FYP)' }],
    workProjects: [],
    hoppyProjects: []
  },
  {
    name: 'PHP',
    icon: SiPhp,
    colorLight: '#777BB4',
    colorDark: '#777BB4',
    description:
      'Started with university projects and continued in professional work.',
    universityProjects: [{ name: 'Veterinary Management System' }],
    workProjects: [],
    hoppyProjects: []
  },
  {
    name: 'Java',
    icon: JavaIcon,
    colorLight: '#007396',
    colorDark: '#007396',
    description:
      'Learned through university coursework and object-oriented programming.',
    universityProjects: [{ name: 'Job Recruitment System (Basic)' }],
    workProjects: [],
    hoppyProjects: []
  },
  {
    name: 'REST API',
    icon: TbApi,
    colorLight: '#009688',
    colorDark: '#009688',
    description:
      'Designed and implemented RESTful APIs for various applications.',
    universityProjects: [{ name: 'Ufound' }],
    workProjects: [{ name: 'TenancyPilot' }],
    hoppyProjects: [{ name: 'Chattr' }]
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    colorLight: '#4169E1',
    colorDark: '#4169E1',
    description:
      'Used for relational database management in production applications.',
    universityProjects: [],
    workProjects: [
      { name: 'TenancyPilot' },
      { name: 'Leafloat Restaurant POS' }
    ],
    hoppyProjects: [{ name: 'Chattr' }]
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    colorLight: '#4479A1',
    colorDark: '#00758F',
    description: 'Learned through university database courses and projects.',
    universityProjects: [
      { name: 'Ufound' },
      { name: 'Veterinary Management System' }
    ],
    workProjects: [],
    hoppyProjects: []
  },
  {
    name: 'MariaDB',
    icon: SiMariadb,
    colorLight: '#003545',
    colorDark: '#C0765A',
    description: 'Worked with as MySQL alternative in various projects.',
    universityProjects: [
      { name: 'Ufound' },
      { name: 'Veterinary Management System' }
    ],
    workProjects: [],
    hoppyProjects: []
  },
  {
    name: 'Oracle DB',
    icon: SiOracle,
    colorLight: '#F80000',
    colorDark: '#F80000',
    description: 'Studied in university database administration courses.',
    universityProjects: [],
    workProjects: [],
    hoppyProjects: []
  },
  {
    name: 'Firestore',
    icon: FirebaseIcon,
    colorLight: '#FFA000',
    colorDark: '#FFA000',
    description: 'Used for real-time NoSQL database in Firebase projects.',
    universityProjects: [],
    workProjects: [
      { name: 'LumeaAI' },
      { name: 'Datalytica Super Admin Dashboard' }
    ],
    hoppyProjects: []
  },
  {
    name: 'Prisma',
    icon: SiPrisma,
    colorLight: '#2D3748',
    colorDark: '#FFFFFF',
    description: 'Adopted as modern ORM for type-safe database operations.',
    universityProjects: [],
    workProjects: [{ name: 'TenancyPilot' }],
    hoppyProjects: []
  },
  {
    name: 'Firebase',
    icon: FirebaseIcon,
    colorLight: '#FFA000',
    colorDark: '#FFA000',
    description:
      'Implemented for authentication, hosting, and backend services.',
    universityProjects: [],
    workProjects: [
      { name: 'LumeaAI' },
      { name: 'Datalytica Super Admin Dashboard' }
    ],
    hoppyProjects: []
  },
  {
    name: 'Supabase',
    icon: SiSupabase,
    colorLight: '#3ECF8E',
    colorDark: '#3ECF8E',
    description: 'Used as open-source Firebase alternative with PostgreSQL.',
    universityProjects: [],
    workProjects: [
      { name: 'TenancyPilot' },
      { name: 'Leafloat Restaurant POS' }
    ],
    hoppyProjects: [{ name: 'Chattr' }]
  },
  {
    name: 'Git',
    icon: SiGit,
    colorLight: '#F05032',
    colorDark: '#F05032',
    description: 'Version control system used daily for code management.',
    universityProjects: [{ name: 'Ufound' }],
    workProjects: [
      { name: 'TenancyPilot' },
      { name: 'Leafloat Restaurant POS' },
      { name: 'LumeaAI' },
      { name: 'Datalytica Super Admin Dashboard' }
    ],
    hoppyProjects: [{ name: 'Chattr' }]
  },
  {
    name: 'GitHub',
    icon: SiGithub,
    colorLight: '#181717',
    colorDark: '#FFFFFF',
    description: 'Platform for code hosting, collaboration, and CI/CD.',
    universityProjects: [{ name: 'Ufound' }],
    workProjects: [
      { name: 'TenancyPilot' },
      { name: 'Leafloat Restaurant POS' },
      { name: 'LumeaAI' },
      { name: 'Datalytica Super Admin Dashboard' }
    ],
    hoppyProjects: [{ name: 'Chattr' }]
  },
  {
    name: 'Figma',
    icon: FigmaIcon,
    colorLight: '#F24E1E',
    colorDark: '#F24E1E',
    description: 'Design tool for creating UI/UX mockups and prototypes.',
    universityProjects: [],
    workProjects: [
      { name: 'TenancyPilot' },
      { name: 'Leafloat Restaurant POS' },
      { name: 'LumeaAI' },
      { name: 'Datalytica Super Admin Dashboard' }
    ],
    hoppyProjects: [{ name: 'Chattr' }]
  },
  {
    name: 'Docker',
    icon: SiDocker,
    colorLight: '#2496ED',
    colorDark: '#2496ED',
    description:
      'Containerization platform for consistent development environments.',
    universityProjects: [],
    workProjects: [{ name: 'TenancyPilot' }],
    hoppyProjects: []
  }
]

export default function Skills () {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme')
      setIsDarkMode(theme === 'dark')
    }

    checkTheme()

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id='skills'
      className='py-16 md:py-20'
      style={{ backgroundColor: 'var(--color-layout-background)' }}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 md:px-8'>
        {/* Section Header */}
        <div className='text-center mb-10 md:mb-12'>
          <h2
            className='text-4xl md:text-5xl font-semibold scroll-animate fade-up'
            style={{ color: 'var(--ui-heading-color)' }}
          >
            Technical Skills
          </h2>
          <p
            className='text-lg md:text-xl mt-4 mb-16 text-center w-full scroll-animate fade-up'
            style={{ color: 'var(--ui-subheading-color)' }}
          >
            Technologies I use to build exceptional digital experiences
          </p>
        </div>

        {/* Skills Circles - Centered Layout */}
        <div className='flex flex-wrap justify-center items-center gap-6 md:gap-8'>
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <button
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                className='group relative flex items-center justify-center cursor-pointer scroll-animate scale-in transition-all duration-200'
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-card)',
                  border: '2px solid var(--color-gray-200)',
                  boxShadow: 'var(--ui-shadow-card)',
                  transitionDelay: `${index * 30}ms`
                }}
              >
                <div
                  className='transition-transform duration-200 group-hover:scale-110'
                  style={{
                    color: isDarkMode ? skill.colorDark : skill.colorLight
                  }}
                >
                  <IconComponent size={50} />
                </div>

                {/* Tooltip */}
                <div className='absolute bottom-full mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none z-10'>
                  {skill.name}
                  <div className='absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900'></div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Skill Detail Dialog */}
      <SkillDialog
        selectedSkill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
        isDarkMode={isDarkMode}
      />
    </section>
  )
}
