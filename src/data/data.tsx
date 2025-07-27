import {DownloadIcon} from '@heroicons/react/outline';
import Image from 'next/image';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tim Baker',
  description: ``,
  ogImageUrl: ``,
  twitterCardType: 'summary_large',
  twitterSite: `@timbakerx`,
  twitterCreator: `@timbakerx`,
  twitterDomain: `reactresume.com`,
  twitterUrl: `https://reactresume.com`,
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
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: '/images/header-background.jpg',
  name: `Po(Eric) Peng`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong>MS ECE @UW Seattle</strong> | <strong>ex-Embedded SWE @MOXA</strong> | Seeking 2026 Summer Internship
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
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
  profileImageSrc: '/images/profilepic.jpg',
  description: `MS ECE @UW Seattle | ex-Embedded SWE @MOXA | Seeking 2026 Summer Internship`,
  aboutItems: [],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    imageUrl: 'https://source.unsplash.com/random/',
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2027',
    location: 'M.S. in Electrical and Computer Engineering',
    title: 'University of Washington',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'June 2020',
    location: 'M.S. in Electrical Engineering',
    title: 'National Taiwan University of Science and Technology',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'June 2018',
    location: 'B.S. in Electrical Engineering',
    title: 'Chang Gung University',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2021 - October 2024',
    location: 'Moxa',
    title: 'Embedded Software Engineer',
    content: (
      <div style={{margin: '0', padding: '0', width: '100%'}}>
        <div style={{marginLeft: '-76px', width: '100%'}}>
          <div style={{display: 'flex', gap: '5px', alignItems: 'center', marginBottom: '16px'}}>
            <div style={{flex: '0 0 auto'}}>
              <p style={{margin: '0', padding: '0', textAlign: 'left', width: '100%'}}>
                <strong>Protocol Gateways (Linux-based)</strong>
              </p>
            </div>
            <div style={{flex: '0 0 auto'}}>
              <div className="group relative">
                <Image
                  alt="Protocol Gateway"
                  className="protocol-gateway-image transition-transform duration-300 group-hover:scale-110"
                  height={150}
                  src="/images/protocol_gateway.png"
                  style={{
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                  }}
                  width={200}
                />
                <div className="absolute inset-0 flex cursor-pointer select-none items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="select-none text-lg font-bold text-white">Use Case</span>
                </div>
              </div>
            </div>
          </div>
          <ul style={{listStyleType: 'none', paddingLeft: '0', margin: '0', width: '100%'}}>
            <li style={{marginBottom: '16px', paddingLeft: '24px', position: 'relative'}}>
              <span
                style={{
                  color: '#F97316',
                  fontSize: '6px',
                  position: 'absolute',
                  left: '0',
                  top: '8px',
                  fontWeight: 'bold',
                }}>
                ●
              </span>
              <span style={{textAlign: 'justify', display: 'block', width: '100%'}}>
                Pioneered modularization of the IEC 60870-5-101/104 communication protocol for MGate 5192, achieving its
                first modularized implementation and accelerating feature integration and scalability across future
                products
              </span>
            </li>
            <li style={{marginBottom: '16px', paddingLeft: '24px', position: 'relative'}}>
              <span
                style={{
                  color: '#F97316',
                  fontSize: '6px',
                  position: 'absolute',
                  left: '0',
                  top: '8px',
                  fontWeight: 'bold',
                }}>
                ●
              </span>
              <span style={{textAlign: 'justify', display: 'block', width: '100%'}}>
                Customized a full-stack solution for the proprietary serial settings and troubleshooting pages of MGate
                5216, successfully addressing client-specific needs and driving product adoption
              </span>
            </li>
            <li style={{marginBottom: '16px', paddingLeft: '24px', position: 'relative'}}>
              <span
                style={{
                  color: '#F97316',
                  fontSize: '6px',
                  position: 'absolute',
                  left: '0',
                  top: '8px',
                  fontWeight: 'bold',
                }}>
                ●
              </span>
              <span style={{textAlign: 'justify', display: 'block', width: '100%'}}>
                Improved a RESTful library for the MGate 5000 series by adopting an inter-process communication-based
                architecture, reducing maintenance and development efforts for REST API-related modules
              </span>
            </li>
            <li style={{marginBottom: '16px', paddingLeft: '24px', position: 'relative'}}>
              <span
                style={{
                  color: '#F97316',
                  fontSize: '6px',
                  position: 'absolute',
                  left: '0',
                  top: '8px',
                  fontWeight: 'bold',
                }}>
                ●
              </span>
              <span style={{textAlign: 'justify', display: 'block', width: '100%'}}>
                Developed unit tests and Valgrind scripts for MGate 5000 series software modules integrated with GitLab
                CI, enhancing system stability and supporting a product line generating USD 3M/year (+10% YoY over 3
                years)
              </span>
            </li>
            <li style={{marginBottom: '16px', paddingLeft: '24px', position: 'relative'}}>
              <span
                style={{
                  color: '#F97316',
                  fontSize: '6px',
                  position: 'absolute',
                  left: '0',
                  top: '8px',
                  fontWeight: 'bold',
                }}>
                ●
              </span>
              <span style={{textAlign: 'justify', display: 'block', width: '100%'}}>
                Resolved SD card backup issues by analyzing Linux kernel code and confirming a solution in a new version
              </span>
            </li>
          </ul>
        </div>
        <div style={{marginLeft: '-76px', width: '100%'}}>
          <div style={{display: 'flex', gap: '5px', alignItems: 'center', marginBottom: '16px'}}>
            <div style={{flex: '0 0 auto'}}>
              <p style={{margin: '0', padding: '0', textAlign: 'left', width: '100%'}}>
                <strong>Media Converters (MCU-based):</strong>
              </p>
            </div>
            <div style={{flex: '0 0 auto'}}>
              <Image
                alt="Media Converter"
                height={150}
                src="/images/media_converter.png"
                style={{
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
                width={200}
              />
            </div>
          </div>
          <ul style={{listStyleType: 'none', paddingLeft: '0', margin: '0', width: '100%'}}>
            <li style={{marginBottom: '16px', paddingLeft: '24px', position: 'relative'}}>
              <span
                style={{
                  color: '#F97316',
                  fontSize: '6px',
                  position: 'absolute',
                  left: '0',
                  top: '8px',
                  fontWeight: 'bold',
                }}>
                ●
              </span>
              <span style={{textAlign: 'justify', display: 'block', width: '100%'}}>
                Led the software development of IMC-P21A-G2 (Ethernet-to-fiber) from project initiation to market launch
              </span>
            </li>
            <li style={{marginBottom: '16px', paddingLeft: '24px', position: 'relative'}}>
              <span
                style={{
                  color: '#F97316',
                  fontSize: '6px',
                  position: 'absolute',
                  left: '0',
                  top: '8px',
                  fontWeight: 'bold',
                }}>
                ●
              </span>
              <span style={{textAlign: 'justify', display: 'block', width: '100%'}}>
                Resolved sample point and communication issues for Japanese clients using ICF-1171I (CAN-to-fiber)
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: '/images/testimonial.webp',
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: '',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: '',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ericpp-peng'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/po-peng/'},
];
