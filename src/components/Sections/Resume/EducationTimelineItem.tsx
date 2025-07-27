import {AcademicCapIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';
import cguLogo from '../../../images/CGU_logo.svg';
import ntustLogo from '../../../images/NTUST_logo.svg';
import uwLogo from '../../../images/UW-logo.svg';

const EducationTimelineItem: FC<{item: TimelineItem; index: number}> = memo(({item, index}) => {
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
              <h2 className="text-xl font-bold">{title}</h2>
              <span className="text-xs text-gray-500">{date}</span>
            </div>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-base font-semibold text-gray-700">{location}</span>
              <span className="text-xs text-gray-500">{getSchoolLocation()}</span>
            </div>
            <div className="leading-relaxed text-gray-700">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

EducationTimelineItem.displayName = 'EducationTimelineItem';
export default EducationTimelineItem;
