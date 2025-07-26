import {FC, memo} from 'react';
import {BriefcaseIcon} from '@heroicons/react/outline';
import Image from 'next/image';

import type {TimelineItem} from '../../../data/dataDef';
import moxaLogo from '../../../images/MOXA-logo.svg';

const WorkTimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  
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
    <div className="flex gap-3 pb-8 last:pb-0">
      {/* Logo 區域 */}
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
        {getCompanyLogo()}
      </div>
      
      {/* 內容區域 */}
      <div className="flex-1">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">{title}</h2>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-base font-semibold text-gray-700">{location}</span>
            <span className="text-xs text-gray-500">{getCompanyLocation()}</span>
          </div>
          <div className="text-gray-700 leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
});

WorkTimelineItem.displayName = 'WorkTimelineItem';
export default WorkTimelineItem; 