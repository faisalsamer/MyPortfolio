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
  SiShadcnui,
  SiReactquery,
  SiReactrouter,
  SiRedux
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import SkillDialog from './skill-dialog'

// Custom TanStack Icon (Official Logo)
const TanStackIcon = ({ size = 40 }: { size?: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 663 660'
  >
    <path
      fill='currentColor'
      d='m305.114318.62443771c8.717817-1.14462121 17.926803-.36545135 26.712694-.36545135 32.548987 0 64.505987 5.05339923 95.64868 14.63098274 39.74418 12.2236582 76.762804 31.7666864 109.435876 57.477568 40.046637 31.5132839 73.228974 72.8472109 94.520714 119.2362609 39.836383 86.790386 39.544267 191.973146-1.268422 278.398081-26.388695 55.880442-68.724007 102.650458-119.964986 136.75724-41.808813 27.828603-90.706831 44.862601-140.45707 50.89341-63.325458 7.677926-131.784923-3.541603-188.712259-32.729444-106.868873-54.795293-179.52309291-165.076271-180.9604082-285.932068-.27660564-23.300971.08616998-46.74071 4.69884909-69.814998 7.51316071-37.57857 20.61272131-73.903917 40.28618971-106.877282 21.2814003-35.670293 48.7704861-67.1473767 81.6882804-92.5255597 38.602429-29.7610135 83.467691-51.1674988 130.978372-62.05777669 11.473831-2.62966514 22.9946-4.0869914 34.57273-5.4964306l3.658171-.44480576c3.050084-.37153079 6.104217-.74794222 9.162589-1.14972654zm-110.555861 549.44131429c-14.716752 1.577863-30.238964 4.25635-42.869928 12.522173 2.84343.683658 6.102369.004954 9.068638 0 7.124652-.011559 14.317732-.279903 21.434964.032202 17.817402.781913 36.381729 3.63214 53.58741 8.350042 22.029372 6.040631 41.432961 17.928687 62.656049 25.945156 22.389644 8.456554 44.67706 11.084675 68.427 11.084675 11.96813 0 23.845573-.035504 35.450133-3.302696-6.056202-3.225083-14.72582-2.619864-21.434964-3.963236-14.556814-2.915455-28.868774-6.474936-42.869928-11.470264-10.304996-3.676672-20.230803-8.214291-30.11097-12.848661l-6.348531-2.985046c-9.1705-4.309263-18.363277-8.560752-27.845391-12.142608-24.932161-9.418465-52.560181-14.071964-79.144482-11.221737zm22.259385-62.614168c-29.163917 0-58.660076 5.137344-84.915434 18.369597-6.361238 3.206092-12.407546 7.02566-18.137277 11.258891-1.746125 1.290529-4.841829 2.948483-5.487351 5.191839-.654591 2.275558 1.685942 4.182039 3.014086 5.637703 6.562396-3.497556 12.797498-7.199878 19.78612-9.855246 45.19892-17.169893 99.992458-13.570779 145.098218 2.172348 22.494346 7.851335 43.219483 19.592421 65.129314 28.800338 24.503461 10.297807 49.53043 16.975034 75.846795 20.399104 31.04195 4.037546 66.433549.7654 94.808495-13.242161 9.970556-4.921843 23.814245-12.422267 28.030337-23.320339-5.207047.454947-9.892236 2.685918-14.83959 4.224149-7.866632 2.445646-15.827248 4.51974-23.908229 6.138887-27.388113 5.486604-56.512458 6.619429-84.091013 1.639788-25.991939-4.693152-50.142596-14.119246-74.179513-24.03502l-3.068058-1.268177c-2.045137-.846788-4.089983-1.695816-6.135603-2.544467l-3.069142-1.272366c-12.279956-5.085721-24.606928-10.110797-37.210937-14.51024-24.485325-8.546552-50.726667-13.784628-76.671218-13.784628zm51.114145-447.9909432c-34.959602 7.7225298-66.276908 22.7605319-96.457338 41.7180089-17.521434 11.0054099-34.281927 22.2799893-49.465301 36.4444283-22.5792616 21.065423-39.8360564 46.668751-54.8866988 73.411509-15.507372 27.55357-25.4498976 59.665686-30.2554517 90.824149-4.7140432 30.568106-5.4906485 62.70747-.0906864 93.301172 6.7503648 38.248526 19.5989769 74.140579 39.8896436 107.337631 6.8187918-3.184625 11.659796-10.445603 17.3128555-15.336896 11.4149428-9.875888 23.3995608-19.029311 36.2745548-26.928535 4.765981-2.923712 9.662222-5.194315 14.83959-7.275014 1.953055-.785216 5.14604-1.502727 6.06527-3.647828 1.460876-3.406732-1.240754-9.335897-1.704904-12.865654-1.324845-10.095517-2.124534-20.362774-1.874735-30.549941.725492-29.668947 6.269727-59.751557 16.825623-87.521453 7.954845-20.924233 20.10682-39.922168 34.502872-56.971512 4.884699-5.785498 10.077731-11.170545 15.437296-16.512656 3.167428-3.157378 7.098271-5.858983 9.068639-9.908915-10.336599.006606-20.674847 2.987289-30.503603 6.013385-21.174447 6.519522-41.801477 16.19312-59.358362 29.841512-8.008432 6.226409-13.873368 14.387371-21.44733 20.939921-2.32322 2.010516-6.484901 4.704691-9.695199 3.187928-4.8500728-2.29042-4.1014979-11.835213-4.6571581-16.222019-2.1369011-16.873476 4.2548401-38.216325 12.3778671-52.843142 13.039878-23.479694 37.150915-43.528712 65.467327-42.82854 12.228647.302197 22.934587 4.551115 34.625711 7.324555-2.964621-4.211764-6.939158-7.28162-10.717482-10.733763-9.257431-8.459031-19.382979-16.184864-30.503603-22.028985-4.474136-2.350694-9.291232-3.77911-14.015169-5.506421-2.375159-.867783-5.36616-2.062533-6.259834-4.702213-1.654614-4.888817 7.148561-9.416813 10.381943-11.478522 12.499882-7.969406 27.826705-14.525258 42.869928-14.894334 23.509209-.577147 46.479246 12.467678 56.162903 34.665926 3.404469 7.803171 4.411273 16.054969 5.079109 24.382907l.121749 1.56229.174325 2.345587c.01913.260708.038244.521433.057403.782164l.11601 1.56437.120128 1.563971c7.38352-6.019164 12.576553-14.876995 19.78612-21.323859 16.861073-15.07846 39.936636-21.7722 61.831627-14.984333 19.786945 6.133107 36.984382 19.788105 47.105807 37.959541 2.648042 4.754231 10.035685 16.373942 4.698379 21.109183-4.177345 3.707277-9.475079.818243-13.880788-.719162-3.33605-1.16376-6.782939-1.90214-10.241828-2.585698l-1.887262-.369639c-.629089-.122886-1.257979-.246187-1.886079-.372129-11.980496-2.401886-25.91652-2.152533-37.923398-.041284-7.762754 1.364839-15.349083 4.127545-23.083807 5.271929v1.651348c21.149714.175043 41.608563 12.240618 52.043268 30.549941 4.323267 7.585468 6.482428 16.267431 8.138691 24.770223 2.047864 10.50918.608423 21.958802-2.263037 32.201289-.962925 3.433979-2.710699 9.255807-6.817143 10.046802-2.902789.558982-5.36781-2.330878-7.024898-4.279468-4.343878-5.10762-8.475879-9.96341-13.573278-14.374161-12.895604-11.157333-26.530715-21.449361-40.396663-31.373138-7.362086-5.269452-15.425755-12.12007-23.908229-15.340199 2.385052 5.745041 4.721463 11.086326 5.532694 17.339156 2.385876 18.392716-5.314223 35.704625-16.87179 49.540445-3.526876 4.222498-7.29943 8.475545-11.744712 11.755948-1.843407 1.360711-4.156734 3.137561-6.595373 2.752797-7.645687-1.207961-8.555849-12.73272-9.728176-18.637115-3.970415-19.998652-2.375984-39.861068 3.132802-59.448534-4.901187 2.485279-8.443727 7.923994-11.521293 12.385111-6.770975 9.816439-12.645804 20.199291-16.858599 31.375615-16.777806 44.519521-16.616219 96.664142 5.118834 139.523233 2.427098 4.786433 6.110614 4.144058 10.894733 4.144058.720854 0 1.44257-.004515 2.164851-.010924l2.168232-.022283c4.338648-.045438 8.686803-.064635 12.979772.508795 2.227588.297243 5.320818.032202 7.084256 1.673642 2.111344 1.966755.986008 5.338808.4996 7.758859-1.358647 6.765574-1.812904 12.914369-1.812904 19.816178 9.02412-1.398692 11.525415-15.866153 14.724172-23.118874 3.624982-8.216283 7.313444-16.440823 10.667192-24.770223 1.648843-4.093692 3.854171-8.671229 3.275427-13.210785-.649644-5.10184-4.335633-10.510831-6.904531-14.862134-4.86244-8.234447-10.389363-16.70834-13.969002-25.595896-2.861567-7.104926-.197036-15.983399 7.871579-18.521521 4.450228-1.400344 9.198073 1.345848 12.094266 4.562675 6.07269 6.74328 9.992815 16.777697 14.401823 24.692609l34.394873 61.925556c2.920926 5.243856 5.848447 10.481933 8.836976 15.687808 1.165732 2.031158 2.352075 5.167068 4.740424 6.0332 2.127008.77118 5.033095-.325315 7.148561-.748886 5.492297-1.099798 10.97635-2.287117 16.488434-3.28288 6.605266-1.193099 16.673928-.969342 21.434964-6.129805-6.963066-2.205375-15.011895-2.074919-22.259386-1.577863-4.352947.298894-9.178287 1.856116-13.178381-.686135-5.953149-3.783239-9.910373-12.522173-13.552668-18.377854-8.980425-14.439388-17.441465-29.095929-26.041008-43.760726l-1.376261-2.335014-2.765943-4.665258c-1.380597-2.334387-2.750786-4.67476-4.079753-7.036188-1.02723-1.826391-2.549937-4.233231-1.078344-6.24705 1.545791-2.114476 4.91472-2.239146 7.956473-2.243117l.603351.000261c1.195428.001526 2.315572.002427 3.222811-.11692 12.27399-1.615019 24.718635-2.952611 37.098976-2.952611-.963749-3.352237-3.719791-7.141255-2.838484-10.73046 1.972017-8.030506 13.526287-10.543033 18.899867-4.780653 3.60767 3.868283 5.704174 9.192229 8.051303 13.859765 3.097352 6.162006 6.624228 12.118418 9.940876 18.16483 5.805578 10.585967 12.146205 20.881297 18.116667 31.375615.49237.865561.999687 1.726685 1.512269 2.587098l.771613 1.290552c2.577138 4.303168 5.164895 8.635123 6.553094 13.461506-20.735854-.9487-36.30176-25.018751-45.343193-41.283704-.721369 2.604176.450959 4.928448 1.388326 7.431066 1.948109 5.197619 4.276275 10.147535 7.20627 14.862134 4.184765 6.732546 8.982075 13.665732 15.313633 18.553722 11.236043 8.673707 26.05255 8.721596 39.572241 7.794364 8.669619-.595311 19.50252-4.542034 28.030338-1.864372 8.513803 2.673532 11.940924 12.063098 6.884745 19.276187-3.787393 5.403211-8.842747 7.443452-15.128962 8.257566 4.445282 9.53571 10.268996 18.385285 14.490036 28.072919 1.758491 4.035895 3.59118 10.22102 7.8048 12.350433 2.805507 1.416857 6.824562.09743 9.85761.034678-3.043765-8.053625-8.742992-14.887729-11.541904-23.118874 8.533589.390544 16.786875 4.843404 24.732651 7.685374 15.630376 5.590144 31.063836 11.701854 46.475333 17.86913l7.112077 2.848685c6.338978 2.538947 12.71588 5.052299 18.961699 7.812528 2.285297 1.009799 5.449427 3.370401 7.975455 1.917215 2.061054-1.186494 3.394144-4.015253 4.665403-5.931643 3.55573-5.361927 6.775921-10.928622 9.965609-16.513481 12.774414-22.36586 22.143967-46.872692 28.402976-71.833646 20.645168-82.323009 2.934117-173.156241-46.677107-241.922507-19.061454-26.420745-43.033164-49.262193-69.46165-68.1783861-66.13923-47.336721-152.911262-66.294198-232.486917-48.7172481zm135.205158 410.5292842c-17.532977 4.570931-35.601827 8.714164-53.58741 11.040088 2.365265 8.052799 8.145286 15.885969 12.376218 23.118874 1.635653 2.796558 3.3859 6.541816 6.618457 7.755557 3.651364 1.370619 8.063669-.853747 11.508927-1.975838-1.595256-4.364513-4.279573-8.292245-6.476657-12.385112-.905215-1.687677-2.305907-3.685809-1.559805-5.68972 1.410585-3.786541 7.266452-3.563609 10.509727-4.221671 8.54678-1.733916 17.004522-3.898008 25.557073-5.611281 3.150939-.631641 7.538512-2.342438 10.705115-1.285575 2.371037.791232 3.800147 2.744743 5.152304 4.781948l.606196.918752c.80912 1.222827 1.637246 2.41754 2.671212 3.351165 3.457625 3.121874 8.628398 3.60159 13.017619 4.453686-2.678546-6.027421-7.130424-11.301001-9.984571-17.339156-1.659561-3.511592-3.023155-8.677834-6.656381-10.707341-5.005064-2.795733-15.341663 2.461334-20.458024 3.795624zm-110.472507-40.151706c-.825246 10.467897-4.036369 18.984725-9.068639 28.072919 5.76683.729896 11.649079.989984 17.312856 2.39363 4.244947 1.051908 8.156828 3.058296 12.366325 4.211763-2.250671-6.157877-6.426367-11.651913-9.661398-17.339156-3.266358-5.740912-6.189758-12.717032-10.949144-17.339156z'
      transform='translate(.9778)'
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
      'Applied in building TenancyPilot, a full-stack property management SaaS platform, and Chattr, a real-time web application.',
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
      'Gained proficiency through uFound, my final year project, and applied extensively in LumeaAI and the Datalytica Super Admin Dashboard.',
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
    description: 'Implemented across TenancyPilot, Leafloat Restaurant POS, and Chattr for type-safe development.',
    universityProjects: [],
    workProjects: [
      { name: 'TenancyPilot' },
      { name: 'Leafloat Restaurant POS' }
    ],
    hoppyProjects: [{ name: 'Chattr' }]
  },
  {
    name: 'Redux',
    icon: SiRedux,
    colorLight: '#764ABC',
    colorDark: '#764ABC',
    description: 'Applied in Chattr for state management in the real-time web application.',
    universityProjects: [],
    workProjects: [],
    hoppyProjects: [{ name: 'Chattr' }]
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    colorLight: '#06B6D4',
    colorDark: '#06B6D4',
    description:
      'Utilized in TenancyPilot, Leafloat Restaurant POS, and Chattr for efficient UI development.',
    universityProjects: [],
    workProjects: [
      { name: 'TenancyPilot' },
      { name: 'Leafloat Restaurant POS' }
    ],
    hoppyProjects: [{ name: 'Chattr' }]
  },
  {
    name: 'TanStack Query',
    icon: SiReactquery,
    colorLight: '#FF4154',
    colorDark: '#FF4154',
    description: 'Integrated into Leafloat Restaurant POS for data fetching and server state management.',
    universityProjects: [],
    workProjects: [{ name: 'Leafloat Restaurant POS' }],
    hoppyProjects: []
  },
  {
    name: 'TanStack Router',
    icon: TanStackIcon,
    colorLight: '#F97316',
    colorDark: '#F97316',
    description: 'Implemented in Leafloat Restaurant POS for type-safe routing.',
    universityProjects: [],
    workProjects: [{ name: 'Leafloat Restaurant POS' }],
    hoppyProjects: []
  },
  {
    name: 'TanStack Store',
    icon: TanStackIcon,
    colorLight: '#8B5CF6',
    colorDark: '#8B5CF6',
    description: 'Applied in Leafloat Restaurant POS for reactive state management.',
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
      'Used in TenancyPilot, Leafloat Restaurant POS, and Chattr for building accessible UI components.',
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
    description: 'Utilized in uFound to build the backend server and RESTful API.',
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
      'Applied in the Veterinary Management System during university coursework.',
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
      'Learned through university courses and applied in object-oriented programming assignments.',
    universityProjects: [],
    workProjects: [],
    hoppyProjects: []
  },
  {
    name: 'REST API',
    icon: TbApi,
    colorLight: '#009688',
    colorDark: '#009688',
    description:
      'Designed and implemented in uFound, TenancyPilot, and Chattr for client-server communication.',
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
      'Implemented in TenancyPilot, Leafloat Restaurant POS, and Chattr for relational database management.',
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
    description: 'Applied in uFound and the Veterinary Management System during university.',
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
    description: 'Implemented MariaDB in uFound and the Veterinary Management System as the relational database solution.',
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
    description: 'Studied database administration and PL/SQL through university courses.',
    universityProjects: [],
    workProjects: [],
    hoppyProjects: []
  },
  {
    name: 'Firestore',
    icon: FirebaseIcon,
    colorLight: '#FFA000',
    colorDark: '#FFA000',
    description: 'Utilized in LumeaAI and the Datalytica Super Admin Dashboard for NoSQL data storage.',
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
    description: 'Integrated into TenancyPilot as an ORM for type-safe database operations.',
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
      'Applied in LumeaAI and the Datalytica Super Admin Dashboard for authentication and backend services.',
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
    description: 'Implemented in TenancyPilot, Leafloat Restaurant POS, and Chattr for backend infrastructure.',
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
    description: 'Used across all projects including uFound, TenancyPilot, Leafloat Restaurant POS, LumeaAI, Datalytica Super Admin Dashboard, and Chattr for version control.',
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
    description: 'Applied for code hosting and collaboration across uFound, TenancyPilot, Leafloat Restaurant POS, LumeaAI, Datalytica Super Admin Dashboard, and Chattr.',
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
    description: 'Used to design UI/UX for TenancyPilot, Leafloat Restaurant POS, LumeaAI, Datalytica Super Admin Dashboard, and Chattr.',
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
      'Applied in TenancyPilot for containerization and deployment.',
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
