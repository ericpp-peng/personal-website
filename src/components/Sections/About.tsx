import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';
import {DownloadIcon} from '@heroicons/react/outline';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6">
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" layout="fill" objectFit="cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className="col-span-1 flex flex-col gap-y-6 md:col-span-5">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">Po Peng (Eric)</h2>
            <div className="flex flex-col gap-y-1">
              <p className="text-base font-semibold text-white sm:text-lg break-words leading-relaxed">
                MS ECE @UW Seattle | ex-Embedded SWE @MOXA
              </p>
              <p className="text-base font-semibold text-orange-400 sm:text-lg break-words leading-relaxed">
                Seeking 2026 Summer Internship
              </p>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className=" text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* 添加社交媒體圖標 */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-6">
        <div className="col-span-1 md:col-span-1"></div>
        <div className="col-span-1 flex gap-x-4 text-neutral-100 md:col-span-5">
          <Socials />
        </div>
      </div>
      {/* 添加 Resume 和 Contact 按鈕 */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-6">
        <div className="col-span-1 md:col-span-1"></div>
        <div className="col-span-1 flex gap-x-4 md:col-span-5">
          <a
            className="flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base border-orange-500 ring-orange-500"
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer">
            Resume
            <DownloadIcon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
          </a>
          <a
            className="flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base border-white ring-white"
            href={`#${SectionId.Contact}`}>
            Contact
          </a>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
