import {FC, memo, useState, useCallback, useEffect} from 'react';
import {BriefcaseIcon} from '@heroicons/react/outline';
import Image from 'next/image';

import type {TimelineItem} from '../../../data/dataDef';
import moxaLogo from '../../../images/MOXA-logo.svg';
import mgateUseCaseImage from '../../../images/mgate_use_case.jpg';
import ImageModal from '../../ImageModal';

const WorkTimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // 監聽點擊事件
  useEffect(() => {
    const handleImageClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // 只有當點擊的是 protocol-gateway-image 或其直接父元素時才觸發
      if (target.classList.contains('protocol-gateway-image') || 
          (target.closest('.group') && target.closest('.group')?.querySelector('.protocol-gateway-image'))) {
        setIsModalOpen(true);
      }
    };

    document.addEventListener('click', handleImageClick);
    return () => {
      document.removeEventListener('click', handleImageClick);
    };
  }, []);
  
  // 獲取公司地點
  const getCompanyLocation = () => {
    if (title === 'Embedded Software Engineer') {
      return 'Taipei, Taiwan';
    }
    // 可以根據其他職位添加更多地點
    return '';
  };
  
  // 獲取公司 logo
  const getCompanyLogo = () => {
    if (title === 'Embedded Software Engineer') {
      return (
        <Image 
          src={moxaLogo} 
          alt="MOXA Logo" 
          width={64} 
          height={64} 
          className="h-16 w-16 object-contain"
        />
      );
    }
    return <BriefcaseIcon className="h-16 w-16 text-orange-500" />;
  };

  return (
    <>
      <div className="flex gap-3 pb-8 last:pb-0">
        {/* Logo 區域 */}
        <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
          {getCompanyLogo()}
        </div>
        
        {/* 內容區域 */}
        <div className="flex-1" style={{ margin: '0', padding: '0' }}>
          <div className="flex flex-col" style={{ margin: '0', padding: '0' }}>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">{title}</h2>
              <span className="text-xs text-gray-500">{date}</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-base font-semibold text-gray-700">{location}</span>
              <span className="text-xs text-gray-500">{getCompanyLocation()}</span>
            </div>
            <div className="text-gray-700 leading-relaxed" style={{ margin: '0', padding: '0', width: '100%' }}>
              {content}
            </div>
          </div>
        </div>
      </div>
      
      {/* 模態框 */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageSrc={mgateUseCaseImage}
        alt="MGate Use Case"
      />
    </>
  );
});

WorkTimelineItem.displayName = 'WorkTimelineItem';
export default WorkTimelineItem; 