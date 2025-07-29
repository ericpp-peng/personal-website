import {AcademicCapIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import {FC, memo, useEffect, useState} from 'react';

import type {TimelineItem} from '../../../data/dataDef';
import {SectionId} from '../../../data/data';
import cguLogo from '../../../images/CGU_logo.svg';
import ntustLogo from '../../../images/NTUST_logo.svg';
import uwLogo from '../../../images/UW-logo.svg';

const EducationTimelineItem: FC<{item: TimelineItem; index: number}> = memo(({item, index}) => {
  const {title, date, location, content} = item;
  const [isTextHighlighted, setIsTextHighlighted] = useState(false);

  // 處理 Intelligent Curtain System 點擊事件
  const handleCurtainSystemClick = () => {
    // 立即觸發動畫事件，不等待滾動完成
    window.dispatchEvent(new CustomEvent('highlightCurtainSystem'));
    
    // 跳轉到 Portfolio 頁面
    const portfolioSection = document.getElementById(SectionId.Portfolio);
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 監聽文字高亮事件
  useEffect(() => {
    const handleHighlightCurtainSystemText = () => {
      if (title === 'Chang Gung University') {
        setIsTextHighlighted(true);
        
        // 移除高亮效果
        setTimeout(() => {
          setIsTextHighlighted(false);
        }, 2000);
      }
    };

    window.addEventListener('highlightCurtainSystemText', handleHighlightCurtainSystemText);
    
    return () => {
      window.removeEventListener('highlightCurtainSystemText', handleHighlightCurtainSystemText);
    };
  }, [title]);

  // 獲取學校地點
  const getSchoolLocation = () => {
    if (title === 'University of Washington') {
      return 'Seattle, WA';
    }
    if (title === 'National Taiwan University of Science and Technology') {
      return 'Taipei, Taiwan';
    }
    if (title === 'Chang Gung University') {
      return 'Taoyuan, Taiwan';
    }
    return '';
  };

  // 獲取學校 logo
  const getSchoolLogo = () => {
    if (title === 'University of Washington') {
      return <Image alt="UW Logo" className="h-16 w-16 object-contain" height={64} src={uwLogo} width={64} />;
    }
    if (title === 'National Taiwan University of Science and Technology') {
      return <Image alt="NTUST Logo" className="h-16 w-16 object-contain" height={64} src={ntustLogo} width={64} />;
    }
    if (title === 'Chang Gung University') {
      return <Image alt="CGU Logo" className="h-16 w-16 object-contain" height={64} src={cguLogo} width={64} />;
    }
    return <AcademicCapIcon className="h-16 w-16 text-orange-500" />;
  };

  // 獲取學校的標籤
  const getSchoolTags = () => {
    if (title === 'University of Washington') {
      return [
        { text: 'Computer Vision', style: 'bg-blue-100 border border-blue-300 text-gray-800 shadow-sm' }
      ];
    }
    if (title === 'National Taiwan University of Science and Technology') {
      return [
        { text: 'Mobile Communication', style: 'bg-blue-100 border border-blue-300 text-gray-800 shadow-sm' },
        { text: 'Computer Simulation', style: 'bg-blue-100 border border-blue-300 text-gray-800 shadow-sm' },
        { text: 'RTOS Implementation', style: 'bg-blue-100 border border-blue-300 text-gray-800 shadow-sm' },
        { text: 'Algorithm Design and Application', style: 'bg-blue-100 border border-blue-300 text-gray-800 shadow-sm' }
      ];
    }
    if (title === 'Chang Gung University') {
      return [
        { text: 'Digital Integrated Circuit Design', style: 'bg-blue-100 border border-blue-300 text-gray-800 shadow-sm' },
        { text: 'FPGA System Design Lab', style: 'bg-blue-100 border border-blue-300 text-gray-800 shadow-sm' },
        { text: 'Digital Signal Processing', style: 'bg-blue-100 border border-blue-300 text-gray-800 shadow-sm' },
        { text: 'Data Structure', style: 'bg-blue-100 border border-blue-300 text-gray-800 shadow-sm' }
      ];
    }
    return [];
  };

  return (
    <div className="flex flex-col pb-8 last:pb-0">
      {/* Education 標題區域 - 只在第一個項目顯示 */}
      {index === 0 && (
        <div className="mb-4 flex justify-center md:justify-start">
          <div className="relative h-max">
            <h2 className="text-xl font-bold uppercase text-neutral-800">Education</h2>
            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
          </div>
        </div>
      )}

      {/* 教育內容區域 */}
      <div className="flex gap-3">
        {/* Logo 區域 */}
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">{getSchoolLogo()}</div>

        {/* 內容區域 */}
        <div className="flex-1">
          <div className="flex flex-col">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {title}
              </h2>
            </div>
            <div className="mb-3">
              <div className="flex flex-col">
                <span className="text-base font-semibold text-gray-700">{location}</span>
                {title === 'Chang Gung University' && (
                  <span className="text-gray-400 text-sm">Concentration in IC Design</span>
                )}
                {title === 'National Taiwan University of Science and Technology' && (
                  <span className="text-gray-400 text-sm">Concentration in Communication System</span>
                )}
                {title === 'University of Washington' && (
                  <span className="text-gray-400 text-sm">Concentration in Embedded System</span>
                )}
                <span className="text-gray-400 text-sm">{date} | {getSchoolLocation()}</span>
              </div>
            </div>
            
            {/* 標籤區域 */}
            <div className="mb-3">
              <div className="flex flex-wrap gap-2">
                {getSchoolTags().map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#F4EEFC] text-gray-800"
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="leading-relaxed text-gray-700">
              {title === 'Chang Gung University' ? (
                <div>
                  <p 
                    style={{
                      padding: isTextHighlighted ? '12px' : '0',
                      borderRadius: isTextHighlighted ? '8px' : '0',
                      backgroundColor: isTextHighlighted ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                      boxShadow: isTextHighlighted ? '0 0 20px rgba(245, 158, 11, 0.3)' : 'none',
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    <strong 
                      data-curtain-system-text
                      style={{
                        color: isTextHighlighted ? '#F59E0B' : '#374151', 
                        cursor: 'pointer',
                        textShadow: isTextHighlighted ? '0 0 15px rgba(245, 158, 11, 0.8)' : 'none',
                        transition: 'all 0.3s ease-in-out',
                        display: 'inline-block',
                        textDecoration: isTextHighlighted ? 'underline #F59E0B' : 'underline #374151',
                        textUnderlineOffset: '2px'
                      }}
                      onClick={handleCurtainSystemClick}
                      className={`transition-all duration-300 hover:scale-105 hover:text-orange-500 hover:border-orange-500 ${
                        isTextHighlighted 
                          ? 'text-amber-500 scale-110' 
                          : ''
                      }`}
                    >
                      Intelligent Curtain System
                    </strong>
                    <span 
                      style={{
                        color: isTextHighlighted ? '#F59E0B' : '#374151', 
                        fontSize: '14px',
                        textShadow: isTextHighlighted ? '0 0 8px rgba(245, 158, 11, 0.6)' : 'none'
                      }}
                    > 
                      – Undergraduate Capstone Project
                    </span>
                  </p>
                  <p style={{marginBottom: '12px', color: '#374151', fontSize: '14px'}}>
                    Award: first place in the final project exhibition in the communications field
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
              ) : (
                content
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

EducationTimelineItem.displayName = 'EducationTimelineItem';
export default EducationTimelineItem;
