import {FC, memo} from 'react';
import {AcademicCapIcon} from '@heroicons/react/outline';
import Image from 'next/image';

import type {TimelineItem} from '../../../data/dataDef';
import uwLogo from '../../../images/UW-logo.svg';
import ntustLogo from '../../../images/NTUST_logo.svg';
import cguLogo from '../../../images/CGU_logo.svg';

const EducationTimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  
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
      return (
        <Image 
          src={uwLogo} 
          alt="UW Logo" 
          width={64} 
          height={64} 
          className="h-16 w-16 object-contain"
        />
      );
    }
    if (title === 'National Taiwan University of Science and Technology') {
      return (
        <Image 
          src={ntustLogo} 
          alt="NTUST Logo" 
          width={64} 
          height={64} 
          className="h-16 w-16 object-contain"
        />
      );
    }
    if (title === 'Chang Gung University') {
      return (
        <Image 
          src={cguLogo} 
          alt="CGU Logo" 
          width={64} 
          height={64} 
          className="h-16 w-16 object-contain"
        />
      );
    }
    return <AcademicCapIcon className="h-16 w-16 text-orange-500" />;
  };

  return (
    <div className="flex gap-3 pb-8 last:pb-0">
      {/* Logo 區域 */}
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
        {getSchoolLogo()}
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
            <span className="text-xs text-gray-500">{getSchoolLocation()}</span>
          </div>
          <div className="text-gray-700 leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
});

EducationTimelineItem.displayName = 'EducationTimelineItem';
export default EducationTimelineItem; 