import {FC, memo} from 'react';
import {BriefcaseIcon} from '@heroicons/react/outline';

import type {TimelineItem as TimelineItemType} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItemType}> = memo(({item}) => {
  const {title, date, location, content} = item;
  
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <div className="flex items-center gap-3 mb-2">
          <BriefcaseIcon className="h-6 w-6 text-orange-500" />
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none text-gray-600">{location}</span>
          <span className="text-orange-500">•</span>
          <span className="flex-1 text-sm sm:flex-none text-gray-600">{date}</span>
        </div>
      </div>
      <div className="text-gray-700 leading-relaxed">
        {content}
      </div>
    </div>
  );
});

const TimelineItemComponent = TimelineItem;
TimelineItemComponent.displayName = 'TimelineItem';
export default TimelineItem;

