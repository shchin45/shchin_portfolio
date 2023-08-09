import {
  ArrowDownTrayIcon,
  CalendarIcon,
  EnvelopeIcon,
  FlagIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  StringItem,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Chin Siang Hao Resume',
  description: "Chin Siang Hao's react resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  name: `Chin Siang Hao`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I am a software developer that has 2 years plus of experience in the developer industry. My profession is software and web application development. Experienced in networking and PC hardware installation as side hobbies. I’m open-minded for any new technologies and I would love to learn them in any possible circumstances.  
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1s8JAUvI8sw1Q-SXMP8Isy51gsELCRwzE/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a software developer that has 2 years plus of experience in the developer industry. My profession is software and web application development. Experienced in networking and PC hardware installation as side hobbies. I’m open-minded for any new technologies and I would love to learn them in any possible circumstances. `,
  aboutItems: [
    {label: 'Birthday', text: '05 April 1998', Icon: CalendarIcon},
    {label: 'Country', text: 'Malaysia', Icon: FlagIcon},
    {label: 'Phone', text: ' +60 12-718 1250', Icon: PhoneIcon},
    {label: 'Email', text: 'shchinwork@gmail.com', Icon: EnvelopeIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Database',
        level: 7,
      },
    ],
  },
  {
    name: 'Develop Tools',
    skills: [
      {
        name: 'Docker',
        level: 8,
      },
      {
        name: 'Vagrant',
        level: 7,
      },
      {
        name: 'Postman',
        level: 7,
      },
    ],
  },
  {
    name: 'Others',
    skills: [
      {
        name: 'Linux',
        level: 7,
      },
      {
        name: 'Powershell',
        level: 7,
      },
      {
        name: 'Raspberry Pi',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2017 - December 2020',
    location: 'Univercity Tunkul Abdul Rahman (Kampar)',
    title: 'BA (Hons) Business Information Systems',
    content:<ul>
    <li>Distributed Database Systems</li>
    <li>Mobile Developement</li>
    <li>Web Developement</li>
  </ul>,
  },

];

export const experience: TimelineItem[] = [
  {
    date: 'January 2021 - Present',
    location: 'V.S. PLUS SDN BHD',
    title: 'Junior Software Engineer',
    content: (
      <p>
      Develop and maintain in-house software in the R&D Dept. 
      </p>
    ),
  },
  {
    date: 'October 2020 - December 2020',
    location: 'V.S. PLUS SDN BHD',
    title: 'Internship',
    content: (
      <p>
      Prepare documentation and assist Ad-Hoc tasks in the R&D Dept.
      </p>
    ),
  },
];



/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can also reach out to me through the following platforms:',
  items: [
    {
      type: ContactType.Email,
      text: 'shchinwork@gmail.com',
      href: 'mailto:shchinwork@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Chin Siang Hao',
      href: 'https://www.linkedin.com/in/shchin/',
    },
    {
      type: ContactType.Github,
      text: 'shchin98',
      href: 'https://github.com/shchin98',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/shchin98'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/shchin/'},
];

export const strings: StringItem[] = [
  {value: "Coder"},
  {value: "Developer"},
  {value: "PCMR"},
  {value: "Gamer"},
];

