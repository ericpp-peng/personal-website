import {FC, memo, useEffect, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import type {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  // Use actual portfolio items instead of test items
  const actualPortfolioItems = portfolioItems;
  const [highlightedItem, setHighlightedItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  // Separate items by category
  const classroomProjects = actualPortfolioItems.filter(item => item.category === 'classroom');
  const hackathonProjects = actualPortfolioItems.filter(item => item.category === 'hackathon');

  // Helper function to check if a URL is a video file
  const isVideoFile = (url: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    return videoExtensions.some(ext => url.toLowerCase().includes(ext));
  };

  // Listen for highlight event
  useEffect(() => {
    const handleHighlightCurtainSystem = () => {
      setHighlightedItem('Intelligent Curtain System - Undergraduate Capstone');
      
      // Remove highlight after animation completes
      setTimeout(() => {
        setHighlightedItem(null);
      }, 2000);
    };

    window.addEventListener('highlightCurtainSystem', handleHighlightCurtainSystem);
    
    return () => {
      window.removeEventListener('highlightCurtainSystem', handleHighlightCurtainSystem);
    };
  }, []);



  // Helper function to render portfolio items
  const renderPortfolioItems = (items: typeof actualPortfolioItems) => {
    return items.map((item, index) => {
      const {title, imageUrl, url, description} = item;
      const isVideo = isVideoFile(url);
      const isHighlighted = highlightedItem === title;
      
      // 處理 Intelligent Curtain System 點擊事件
      const handleCurtainSystemClick = () => {
        if (title === 'Intelligent Curtain System - Undergraduate Capstone') {
          // 直接跳轉到 Resume 頁面的 Intelligent Curtain System 文字
          const curtainSystemText = document.querySelector('[data-curtain-system-text]');
          if (curtainSystemText) {
            curtainSystemText.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
            
            // 設置一個標記，讓 Resume 組件知道要觸發文字高亮
            setTimeout(() => {
              window.dispatchEvent(new CustomEvent('highlightCurtainSystemText'));
            }, 500); // 等待滾動完成後觸發
          }
        }
      };

      // 處理影片點擊 - 直接放大播放
      const handleVideoClick = () => {
        if (isVideo) {
          setSelectedItem(item);
        }
      };
      
      return (
        <div key={`${title}-${index}`} className="flex flex-col break-inside-avoid mb-4">
          <div
            className={`group relative overflow-hidden rounded-lg bg-neutral-700 cursor-pointer transition-all duration-500 ${
              isHighlighted 
                ? 'scale-125 shadow-2xl shadow-orange-500/50 ring-4 ring-orange-500' 
                : 'hover:scale-105'
            }`}
            style={{
              transform: isHighlighted ? 'scale(1.25)' : undefined,
              transition: isHighlighted ? 'all 0.6s ease-in-out' : 'transform 0.3s ease-in-out',
              aspectRatio: index % 4 === 0 ? '4/3' : index % 4 === 1 ? '3/4' : index % 4 === 2 ? '1/1' : '5/4',
            }}
            onClick={isVideo ? handleVideoClick : undefined}>
            <div className="relative" style={{ aspectRatio: index % 4 === 0 ? '4/3' : index % 4 === 1 ? '3/4' : index % 4 === 2 ? '1/1' : '5/4' }}>
              {isVideo ? (
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 5v10l8-5-8-5z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <video
                    src={url}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                    muted
                    loop
                    playsInline
                  />
                </div>
              ) : (
                <img 
                  alt={title} 
                  src={imageUrl}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {title !== 'Intelligent Curtain System - Undergraduate Capstone' && title !== 'FPGA Project - 2018' && title !== '《FireWall》 System Development' && title !== '2019 Hsinchu × Mei-Chu Hackathon' && (
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-xs mb-1">{title}</h3>
                <p className="text-xs text-neutral-200">{description}</p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem(item);
                  }}
                  className="inline-flex items-center mt-2 text-xs text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
                >
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  More Detail
                </button>
              </div>
            )}
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
                  {/* Intelligent Curtain System 的標題和 View Education Details 按鈕 */}
        {title === 'Intelligent Curtain System - Undergraduate Capstone' && (
          <div className="mt-2 text-center">
            <h3 className="text-white font-semibold text-sm mb-1">Intelligent Curtain System</h3>
            <h4 className="text-white font-medium text-xs mb-2">Undergraduate Capstone (2018)</h4>
            <button
              onClick={handleCurtainSystemClick}
              className="inline-flex items-center text-xs text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
            >
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              View Education Details
            </button>
          </div>
        )}
          {/* FPGA Project 的標題和下拉式選單 */}
          {title === 'FPGA Project - 2018' && (
            <div className="mt-2 text-center">
              <h3 className="text-white font-semibold text-sm mb-1">2D LED dodging game</h3>
              <h4 className="text-white font-medium text-xs mb-2">FPGA System Design Lab (2018)</h4>
              <details className="text-xs">
                <summary className="cursor-pointer text-orange-400 hover:text-orange-300 transition-colors inline-block">
                  View Details
                </summary>
                <div className="mt-2 bg-neutral-700 rounded p-2">
                  <p className="text-xs text-neutral-200 leading-relaxed text-left">{description}</p>
                </div>
              </details>
            </div>
          )}
          {/* 《FireWall》 System Development 的標題和按鈕 */}
          {title === '《FireWall》 System Development' && (
            <div className="mt-2 text-center">
              <h3 className="text-white font-semibold text-sm mb-1">FireWall</h3>
              <h4 className="text-white font-medium text-xs mb-1">2020 MakeNTU</h4>
              <h5 className="text-white font-normal text-xs mb-2">Role: Delivered final presentation</h5>
              <details className="text-xs">
                <summary className="cursor-pointer text-orange-400 hover:text-orange-300 transition-colors inline-block">
                  View Details
                </summary>
                <div className="mt-2 bg-neutral-700 rounded p-2">
                  <p className="text-xs text-neutral-200 leading-relaxed text-left">{description}</p>
                </div>
              </details>
            </div>
          )}
          {/* 2019 Hsinchu × Mei-Chu Hackathon 的標題和按鈕 */}
          {title === '2019 Hsinchu × Mei-Chu Hackathon' && (
            <div className="mt-2 text-center">
              <h3 className="text-white font-semibold text-sm mb-1">LiverGuard Taiwan</h3>
              <h4 className="text-white font-medium text-xs mb-1">2019 Hsinchu × Mei-Chu Hackathon</h4>
              <h5 className="text-white font-normal text-xs mb-2">Role: Handled App UI/UX</h5>
              <details className="text-xs">
                <summary className="cursor-pointer text-orange-400 hover:text-orange-300 transition-colors inline-block">
                  View Details
                </summary>
                <div className="mt-2 bg-neutral-700 rounded p-2">
                  <p className="text-xs text-neutral-200 leading-relaxed text-left">{description}</p>
                </div>
              </details>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-12">
        <h2 className="self-center text-xl font-bold text-white">Take a look at some of my projects and collaborations</h2>
        
        {/* Portfolio Layout - Both sections in one row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Academic Projects Section */}
          <div>
            <h3 className="text-lg font-semibold text-white border-b border-orange-400 pb-2 mb-6">Academic Projects</h3>
            <div className="columns-2 gap-4 space-y-4">
              {renderPortfolioItems(classroomProjects)}
            </div>
          </div>

          {/* Hackathon Projects Section */}
          <div>
            <h3 className="text-lg font-semibold text-white border-b border-orange-400 pb-2 mb-6">Hackathon Projects – Conceptual Innovations</h3>
            <div className="columns-2 gap-4 space-y-4">
              {renderPortfolioItems(hackathonProjects)}
            </div>
          </div>
        </div>
      </div>

      {/* 放大彈窗 */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-2xl w-full h-full max-h-[90vh] overflow-hidden rounded-lg flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors">
              ✕
            </button>
            <div className="flex-1 flex items-center justify-center min-h-0">
              {isVideoFile(selectedItem.url) ? (
                <video
                  src={selectedItem.url}
                  className="w-full h-full object-contain"
                  loop
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
