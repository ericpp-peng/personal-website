import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  // Use actual portfolio items instead of test items
  const actualPortfolioItems = portfolioItems;

  // Helper function to check if a URL is a video file
  const isVideoFile = (url: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    return videoExtensions.some(ext => url.toLowerCase().includes(ext));
  };

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Take a look at some of my projects and collaborations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {actualPortfolioItems.map((item, index) => {
            const {title, imageUrl, url, description} = item;
            const isVideo = isVideoFile(url);
            
            return (
              <div
                key={`${title}-${index}`}
                className="group relative overflow-hidden rounded-lg bg-neutral-700 cursor-pointer transition-transform duration-300 hover:scale-105">
                <div className="aspect-square relative">
                  {isVideo ? (
                    <video
                      src={url}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                      muted
                      autoPlay
                      loop
                    />
                  ) : (
                    <img 
                      alt={title} 
                      src={imageUrl}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-xs mb-1">{title}</h3>
                  <p className="text-xs text-neutral-200">{description}</p>
                  {title === '《FireWall》 System Development' && (
                    <a 
                      href="https://prezi.com/view/j38fXpu4TcMWmGLJofw4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-xs text-orange-400 hover:text-orange-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      View Presentation
                    </a>
                  )}
                  {title === '2019 Hsinchu × Mei-Chu Hackathon' && (
                    <a 
                      href="https://prezi.com/view/mM7hWajvIQFWeE3K25pY/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-xs text-orange-400 hover:text-orange-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      View Presentation
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
