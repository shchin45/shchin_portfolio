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

const bio = `I am a software engineer with ${getYearExp()} years of experience in the software industry. 
My profession involves software and web application development. 
I’m open-minded for any new technologies and eager to learn them in any circumstances.`;

/**
 * Hero section
 */
export const heroData: Hero = {
  name: `Chin Siang Hao`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">${bio}</p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1LD1zhb_3U-XMhXgimVHdDz3MVkQLnwEa/view?usp=sharing',
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
  description: bio,
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
        name: 'Express.js',
        level: 8,
      },
      {
        name: 'PostgreSQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Development Tools',
    skills: [
      {
        name: 'Git',
        level: 8,
      },
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'VS Code',
        level: 8,
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
    date: 'May 2017 - Dec 2020',
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
    date: 'Apr 2024 - Present',
    location: 'Wiwynn Technology Service Malaysia',
    title: 'Software Engineer',
    content: (
      <>
        <ul style={listStyle}>
          <li>
            Developed solutions using Node.js to address operational challenges. Adapted quickly to the company’s
            production workflows, methodologies, and database structures to deliver effective tools.
          </li>
          <li>
            Focused on enhancing development practices, such as adopting modern frameworks and tools, while continuously
            advancing personal technical skills contribute to long-term team and company success.
          </li>
          <li>
            Stack: JavaScript, Node.js, Express.js, TypeScript, React, PostgreSQL, Docker, Power Automate, AWS, Git, Azure Devops
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'Jan 2021 - Mar 2024',
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
    date: 'Oct 2020 - Dec 2020',
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
