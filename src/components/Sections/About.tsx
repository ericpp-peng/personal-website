import {DownloadIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const About: FC = memo(() => {
  const {profileImageSrc, aboutItems} = aboutData;

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className="flex flex-col items-center justify-center">
        {!!profileImageSrc && (
          <div className="mb-8 flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-xl md:h-96 md:w-96">
              <Image 
                alt="about-me-image" 
                layout="fill" 
                objectFit="cover" 
                src={profileImageSrc} 
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        )}
        <div className="flex flex-col items-center gap-y-6">
          <div className="flex flex-col items-center gap-y-2">
            <h2 className="text-2xl font-bold text-white">Po Peng (Eric)</h2>
            <div className="flex flex-col items-center gap-y-1">
              <p className="break-words text-center text-base font-semibold leading-relaxed text-white sm:text-lg">
                MS ECE @UW Seattle | ex-Embedded SWE @MOXA
              </p>
              <p className="break-words text-center text-base font-semibold leading-relaxed text-orange-400 sm:text-lg">
                Seeking 2026 Summer Internship
              </p>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className="text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* 添加社交媒體圖標 */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-x-6 [&>a]:text-white">
            <Socials />
          </div>
        </div>
        {/* 添加 Resume 和 Contact 按鈕 */}
        <div className="mt-8 flex gap-x-4">
          <a
            className="flex gap-x-2 rounded-full border-2 border-orange-500 bg-none py-2 px-4 text-sm font-medium text-white ring-orange-500 ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base"
            href="https://drive.google.com/file/d/1j7J1V_Zyni07ayYNE8XWHbU-adYE3XEa/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank">
            Resume
            <DownloadIcon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
          </a>
          <a
            className="flex gap-x-2 rounded-full border-2 border-white bg-none py-2 px-4 text-sm font-medium text-white ring-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base"
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
