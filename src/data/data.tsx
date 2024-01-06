import {ArrowDownTrayIcon, CalendarIcon, EnvelopeIcon, FlagIcon, PhoneIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ApiItem,
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
  title: 'Chin Siang Hao',
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

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

const getYearExp = () => {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return yearsOfExperience;
};

/**
 * Hero section
 */
export const heroData: Hero = {
  name: `Chin Siang Hao`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a software engineer that has ${getYearExp()} years of experience in the software industry. My profession is
        software and web application development. Experienced in networking and PC hardware installation/repair as side
        hobbies. I’m open-minded for any new technologies and I would love to learn them in any possible circumstances.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/10p3Kcr7ynHHgo7Fv2nAmw1dImbW2bAp4/view?usp=sharing',
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
  description: `I am a software engineer that has ${getYearExp()} years of experience in the software industry. My profession is software and web application development. Experienced in networking and PC hardware installation/repair as side hobbies. I’m open-minded for any new technologies and I would love to learn them in any possible circumstances.`,
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
        level: 8,
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
export const portfolioItems: PortfolioItem[] = [];

const listStyle = {
  listStyleType: 'disc',
  marginLeft: '20px',
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2017 - December 2020',
    location: 'Univercity Tunkul Abdul Rahman (Kampar)',
    title: 'BA (Hons) Business Information Systems',
    content: (
      <ul style={listStyle}>
        <li>Distributed Database Systems</li>
        <li>Mobile Developement</li>
        <li>Web Developement</li>
      </ul>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2021 - Present',
    location: 'V.S. PLUS SDN BHD',
    title: 'Software Engineer',
    content: (
      <>
        <ul style={listStyle}>
          <li>
            Contribute to the development of software application solutions tailored for industry production line
            optimization, driving improvements in efficiency.
          </li>
          <li>
            Play a pivotal role in improving the structure of the in-house developer framework, to achieve reusability,
            maintainability, and robustness.
          </li>
          <li>
            Stack: JavaScript, Node.js, Python, Docker, Linux, PowerShell, Vagrant, Electron, MySQL, RESTful API, React
            Native
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'October 2020 - December 2020',
    location: 'V.S. PLUS SDN BHD',
    title: 'Internship',
    content: (
      <>
        <ul style={listStyle}>
          <li>
            Created comprehensive documentation for streamlined onboarding, facilitating swift adaptation to
            hardware/software installations for new team members.
          </li>
          <li>
            Developed and expanded the graphical user interface (GUI) used in the production line, contributing to its
            functionality and scalability.
          </li>
          <li>Stack: JavaScript, Linux, MySQL</li>
        </ul>
      </>
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
  {value: 'Coder'},
  {value: 'Developer'},
  {value: 'Dreamer'},
  {value: 'PCMR'},
  {value: 'Gamer'},
];

/**
 * API items
 */
export const Api: ApiItem = {
  value: 'https://api.github.com/users/shchin98/repos',
};
