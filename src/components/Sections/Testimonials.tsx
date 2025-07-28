import classNames from 'classnames';
import {FC, memo, useEffect, useMemo, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {SectionId, testimonial} from '../../data/data';
import Section from '../Layout/Section';

// 生活照片和影片數據
const lifestyleMedia = [
  {
    id: 1,
    src: '/videos/lifestyle/20240402_diving.MP4',
    alt: 'Diving adventure',
    title: 'Diving adventure',
    description: 'Exploring underwater world',
    type: 'video',
  },
  {
    id: 2,
    src: '/videos/lifestyle/20250711_badminton.mp4',
    alt: 'Badminton game',
    title: 'Badminton game',
    description: 'Playing badminton with friends',
    type: 'video',
  },
  {
    id: 3,
    src: '/videos/lifestyle/20160524_piano.mp4?v=' + Date.now(),
    alt: 'Piano performance',
    title: 'Piano performance',
    description: 'Playing piano',
    type: 'video',
  },
  {
    id: 4,
    src: '/videos/lifestyle/20250225_snow.mp4?v=' + Date.now(),
    alt: 'Snow adventure',
    title: 'Snow adventure',
    description: 'Enjoying the snow',
    type: 'video',
  },
];

const Testimonials: FC = memo(() => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const {imageSrc} = testimonial;

  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          {'bg-neutral-700': !imageSrc},
        )}
        style={imageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
        <div className="z-10 w-full max-w-screen-xl px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-8 rounded-xl bg-gray-800/60 p-6 shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Snapshots</h2>
              <p className="text-neutral-300 text-lg">Capturing memories and experiences</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              {lifestyleMedia.map((media) => (
                <div
                  key={media.id}
                  className="group relative overflow-hidden rounded-lg bg-neutral-700 cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedPhoto(media.id)}>
                  <div className="aspect-square relative">
                    {media.type === 'image' ? (
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                      />
                    ) : (
                      <video
                        src={media.src}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                        loop
                        muted
                        autoPlay
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-xs mb-1">{media.title}</h3>
                    <p className="text-xs text-neutral-200">{media.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 照片詳情彈窗 */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-2xl max-h-[90vh] overflow-hidden rounded-lg">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors">
                ✕
              </button>
              {lifestyleMedia.find(m => m.id === selectedPhoto)?.type === 'image' ? (
                <img
                  src={lifestyleMedia.find(m => m.id === selectedPhoto)?.src}
                  alt={lifestyleMedia.find(m => m.id === selectedPhoto)?.alt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <video
                  src={lifestyleMedia.find(m => m.id === selectedPhoto)?.src}
                  className="w-full h-full object-contain"
                  loop
                  muted
                  autoPlay
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">
                  {lifestyleMedia.find(m => m.id === selectedPhoto)?.title}
                </h3>
                <p className="text-neutral-200 text-sm">
                  {lifestyleMedia.find(m => m.id === selectedPhoto)?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
});

Testimonials.displayName = 'Testimonials';
export default Testimonials;
