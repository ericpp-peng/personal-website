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
  Testimonials: 'snapshots',
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
    name: 'Languages & Scripts',
    skills: [
      {
        name: 'C',
        level: 10,
      },
      {
        name: 'Shell Script',
        level: 8,
      },
      {
        name: 'HTML',
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 6,
      },
    ],
  },
  {
    name: 'Technologies & Tools',
    skills: [
      {
        name: 'Linux',
        level: 10,
      },
      {
        name: 'TCP/IP',
        level: 9,
      },
      {
        name: 'SQLite',
        level: 8,
      },
      {
        name: 'Makefile',
        level: 8,
      },
      {
        name: 'I2C',
        level: 9,
      },
      {
        name: 'UART',
        level: 9,
      },
      {
        name: 'GitLab (CI/CD pipelines)',
        level: 7,
      },
      {
        name: 'Docker',
        level: 6,
      },
      {
        name: 'Jira',
        level: 7,
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
    content: <p></p>,
  },
  {
    date: 'June 2020',
    location: 'M.S. in Electrical Engineering',
    title: 'National Taiwan University of Science and Technology',
    content: (
      <div>
        <p style={{marginBottom: '0'}}>
          <strong style={{color: '#F97316'}}>Knowledge Discovery in Database (KDD) Cup Contest</strong>
        </p>
        <p style={{marginBottom: '12px', color: '#F97316', fontSize: '14px'}}>
          Result: weighted F1-score of 0.6884 on the test set, close to the first-place team's score of approximately 0.7
        </p>
        <ul style={{listStyleType: 'none', paddingLeft: '0', margin: '0'}}>
          <li style={{marginBottom: '8px', paddingLeft: '16px', position: 'relative'}}>
            <span
              style={{
                color: '#F97316',
                fontSize: '6px',
                position: 'absolute',
                left: '0',
                top: '6px',
                fontWeight: 'bold',
              }}>
              ●
            </span>
            <span style={{fontSize: '14px'}}>
              <span style={{color: '#F97316', fontWeight: 'bold'}}>Developed</span> machine learning workflows in Python, including preprocessing, feature engineering, and model training, to predict Baidu Map users' preferred transportation modes using 500,000+ data points
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    date: 'June 2018',
    location: 'B.S. in Electrical Engineering',
    title: 'Chang Gung University',
    content: (
      <div>
        <p style={{marginBottom: '0'}}>
          <strong style={{color: '#F97316'}}>Intelligent Curtain System</strong>
          <span style={{color: '#F97316', fontSize: '14px'}}> – Undergraduate Capstone Project</span>
        </p>
        <p style={{marginBottom: '12px', color: '#F97316', fontSize: '14px'}}>
          Award: first place in the final project exhibition
        </p>
        <ul style={{listStyleType: 'none', paddingLeft: '0', margin: '0'}}>
          <li style={{marginBottom: '8px', paddingLeft: '16px', position: 'relative'}}>
            <span
              style={{
                color: '#F97316',
                fontSize: '6px',
                position: 'absolute',
                left: '0',
                top: '6px',
                fontWeight: 'bold',
              }}>
              ●
            </span>
            <span style={{fontSize: '14px'}}>
              <span style={{color: '#F97316', fontWeight: 'bold'}}>Created</span> an intelligent curtain system using SmartServer and Zigbee sensors with Power Line Communication, enabling automatic adjustment based on illumination levels
            </span>
          </li>
          <li style={{marginBottom: '8px', paddingLeft: '16px', position: 'relative'}}>
            <span
              style={{
                color: '#F97316',
                fontSize: '6px',
                position: 'absolute',
                left: '0',
                top: '6px',
                fontWeight: 'bold',
              }}>
              ●
            </span>
            <span style={{fontSize: '14px'}}>
              <span style={{color: '#F97316', fontWeight: 'bold'}}>Designed</span> and <span style={{color: '#F97316', fontWeight: 'bold'}}>implemented</span> a curtain control PCB using D flip-flops, BJTs and RLC components, completing the entire process from circuit design to soldering to ensure seamless system integration
            </span>
          </li>
          <li style={{marginBottom: '8px', paddingLeft: '16px', position: 'relative'}}>
            <span
              style={{
                color: '#F97316',
                fontSize: '6px',
                position: 'absolute',
                left: '0',
                top: '6px',
                fontWeight: 'bold',
              }}>
              ●
            </span>
            <span style={{fontSize: '14px'}}>
              <span style={{color: '#F97316', fontWeight: 'bold'}}>Programmed</span> Zigbee firmware to ensure accurate storage of temperature and brightness data in the SmartServer
            </span>
          </li>
        </ul>
      </div>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2021 - October 2024',
    location: 'Moxa',
    title: 'Embedded Software Engineer',
    content: (
      <div style={{margin: '0', padding: '0', width: '100%'}}>
        <div style={{width: '100%'}}>
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
                  className="protocol-gateway-image transition-transform duration-300 group-hover:scale-[3] group-hover:bg-white"
                  height={37}
                  src="/images/protocol_gateway.png"
                  style={{
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                  }}
                  width={50}
                />
                <div className="absolute inset-0 flex cursor-pointer select-none items-center justify-center rounded-lg bg-gray-800 bg-opacity-50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-[2.9]">
                  <div className="flex flex-col items-center">
                    <span className="select-none text-[5px] font-bold text-white whitespace-nowrap">One of Use Cases</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p style={{margin: '0', padding: '0', textAlign: 'left', width: '100%', fontSize: '14px', color: '#6B7280', marginTop: '8px', marginBottom: '16px'}}>
            Product line generating USD 3M/year with +10% YoY growth (2021–2024)
          </p>
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
                  <span style={{color: '#F97316', fontWeight: 'bold'}}>Led</span> modularization of{' '}
                  <span 
                    style={{
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      borderBottom: '1px dotted #666',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      // 移除所有已存在的 tooltip
                      const existingTooltips = document.querySelectorAll('[id^="custom-tooltip"]');
                      existingTooltips.forEach(tooltip => tooltip.remove());
                      
                      const tooltip = document.createElement('div');
                      tooltip.textContent = 'A communication protocol used in power and industrial automation systems to transmit data between control centers and remote devices';
                      tooltip.style.cssText = `
                        position: fixed;
                        background: #333;
                        color: white;
                        padding: 8px 12px;
                        border-radius: 4px;
                        font-size: 12px;
                        max-width: 550px;
                        z-index: 10000;
                        white-space: normal;
                        word-wrap: break-word;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                        line-height: 1.4;
                        user-select: text;
                        pointer-events: auto;
                      `;
                      tooltip.id = 'custom-tooltip-' + Date.now();
                      tooltip.setAttribute('data-hovering', 'false');
                      
                      // 計算位置
                      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                      tooltip.style.left = rect.left + 'px';
                      tooltip.style.top = (rect.top - 50) + 'px';
                      
                      // 添加tooltip的mouse事件
                      tooltip.addEventListener('mouseenter', () => {
                        tooltip.setAttribute('data-hovering', 'true');
                      });
                      
                      tooltip.addEventListener('mouseleave', () => {
                        tooltip.setAttribute('data-hovering', 'false');
                        setTimeout(() => {
                          if (tooltip.getAttribute('data-hovering') === 'false') {
                            tooltip.remove();
                          }
                        }, 1000);
                      });
                      
                      document.body.appendChild(tooltip);
                    }}
                    onMouseLeave={() => {
                      // 1秒後移除 tooltip，但檢查是否正在hover
                      setTimeout(() => {
                        const tooltips = document.querySelectorAll('[id^="custom-tooltip"]');
                        tooltips.forEach(tooltip => {
                          if (tooltip.getAttribute('data-hovering') !== 'true') {
                            tooltip.remove();
                          }
                        });
                      }, 1000);
                    }}
                  >
                    IEC 60870-5-101/104
                  </span>
                  {' '}protocol stack for{' '}
                  <a 
                    href="https://www.moxa.com/en/products/industrial-edge-connectivity/protocol-gateways/modbus-tcp-gateways/mgate-5192-series"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'underline'
                    }}
                  >
                    MGate 5192
                  </a>
                  {' '}to improve maintainability and scalability, cutting integration time for new products by over 50%
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
                <span style={{color: '#F97316', fontWeight: 'bold'}}>Built</span> a customized full-stack solution for serial configuration and troubleshooting on{' '}
                <a 
                  href="https://www.moxa.com/en/products/industrial-edge-connectivity/protocol-gateways/modbus-tcp-gateways/mgate-5216-series"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'underline'
                  }}
                >
                  MGate 5216
                </a>
                , enabling customer onboarding and reducing debugging time between R&D and clients by over 90%
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
                <span style={{color: '#F97316', fontWeight: 'bold'}}>Improved</span> the RESTful library for the MGate 5000 series using an IPC-based design, 
                reducing API maintenance and development time by 10%
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
                <span style={{color: '#F97316', fontWeight: 'bold'}}>Developed</span> unit tests and valgrind scripts for MGate 5000 series software modules integrated with 
                GitLab CI, enhancing system stability and enabling early detection of memory issues 
                with 90% test coverage
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
                <span style={{color: '#F97316', fontWeight: 'bold'}}>Co-developed</span> the SD card backup module with the Linux kernel team and independently 
                resolved issues through kernel source code analysis
              </span>
            </li>
          </ul>
        </div>
        <div style={{width: '100%'}}>
          <div style={{display: 'flex', gap: '5px', alignItems: 'center', marginBottom: '16px'}}>
            <div style={{flex: '0 0 auto'}}>
              <p style={{margin: '0', padding: '0', textAlign: 'left', width: '100%'}}>
                <strong>Media Converters (MCU-based)</strong>
              </p>
            </div>
            <div style={{flex: '0 0 auto'}}>
              <Image
                alt="Media Converter"
                height={37}
                src="/images/media_converter.png"
                style={{
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
                width={50}
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
                <span style={{color: '#F97316', fontWeight: 'bold'}}>Led</span> the software development of{' '}
                <a 
                  href="https://www.moxa.com/en/products/industrial-network-infrastructure/ethernet-media-converters/ethernet-to-fiber-media-converters/imc-p21a-g2-series"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'underline'
                  }}
                >
                  IMC-P21A-G2
                </a>
                {' '}(Ethernet-to-fiber) from project initiation 
                to market launch, collaborating with the product manager, hardware engineers, and the SQA team
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
                <span style={{color: '#F97316', fontWeight: 'bold'}}>Resolved</span> communication issues involving sample point and RAM configuration for Japanese 
                clients using the{' '}
                <a 
                  href="https://www.moxa.com/en/products/industrial-edge-connectivity/serial-converters/fieldbus-to-fiber-converters/icf-1171i-series"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'underline'
                  }}
                >
                  ICF-1171I
                </a>
                {' '}(CAN-to-fiber)
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
  headerText: 'Coffee chats, cool ideas, or just tech talk — drop me a line!',
  items: [
    {
      type: ContactType.Email,
      text: 'ericpp@uw.edu',
      href: 'mailto:ericpp.peng@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Seattle, WA, USA',
      href: 'https://www.google.com/maps/place/Seattle,+WA/@47.6062095,-122.3320708,12z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Po (彭柏 Eric) Peng',
      href: 'https://www.linkedin.com/in/po-peng/',
    },
    {
      type: ContactType.Github,
      text: 'ericpp-peng',
      href: 'https://github.com/ericpp-peng',
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
