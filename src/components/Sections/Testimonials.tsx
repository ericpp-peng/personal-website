import classNames from 'classnames';
import {FC, memo, useEffect, useMemo, useState, useRef, useCallback} from 'react';

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
    description: 'Balicasag Island, Philippines',
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
    src: '/videos/lifestyle/20160524_piano.mp4',
    alt: 'Piano performance',
    title: 'Piano performance',
    description: 'Fantaisie-Impromptu, Op. 66 (Chopin)',
    type: 'video',
  },
  {
    id: 4,
    src: '/videos/lifestyle/20250225_snow.mp4',
    alt: 'Snow adventure',
    title: 'Snow boarding adventure',
    description: 'Echigo-Yuzawa, Japan',
    type: 'video',
  },
];

// 影片組件，支援延遲載入
const LazyVideo: FC<{
  src: string;
  className?: string;
  onLoad?: () => void;
}> = memo(({src, className, onLoad}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer 來檢測元素是否在視窗中
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px', // 提前 50px 開始載入
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // 當影片載入完成時
  const handleVideoLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  // 當影片進入視窗時，開始播放
  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn('Failed to autoplay video:', error);
      });
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className={className}>
      {/* 預覽圖 - 在影片載入前顯示 */}
      {!isLoaded && (
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-4xl mb-2">🎬</div>
            <div className="text-xs opacity-80">Loading...</div>
          </div>
        </div>
      )}
      
      {/* 影片 - 只在進入視窗時載入和播放 */}
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          onError={() => {
            // 如果影片載入失敗，保持預覽圖顯示
            console.warn(`Failed to load video: ${src}`);
          }}
        />
      )}
    </div>
  );
});

LazyVideo.displayName = 'LazyVideo';

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

  // 處理影片載入完成
  const handleVideoLoad = useCallback((mediaId: number) => {
    console.log(`Video ${mediaId} loaded successfully`);
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
                      <LazyVideo
                        src={media.src}
                        className="w-full h-full transition-opacity duration-300 group-hover:opacity-80"
                        onLoad={() => handleVideoLoad(media.id)}
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
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div 
              className="relative max-w-2xl w-full h-full max-h-[90vh] overflow-hidden rounded-lg flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors">
                ✕
              </button>
              <div className="flex-1 flex items-center justify-center min-h-0">
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
                    controls
                    autoPlay
                  />
                )}
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
