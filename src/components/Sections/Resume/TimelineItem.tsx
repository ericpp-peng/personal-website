import {BriefcaseIcon} from '@heroicons/react/outline';
import {FC, memo} from 'react';

import type {TimelineItem as TimelineItemType} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItemType}> = memo(({item}) => {
  const {title, date, location, content} = item;

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <div className="mb-2 flex items-center gap-3">
          <BriefcaseIcon className="h-6 w-6 text-orange-500" />
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic text-gray-600 sm:flex-none">{location}</span>
          <span className="text-orange-500">•</span>
          <span className="flex-1 text-sm text-gray-600 sm:flex-none">{date}</span>
        </div>
      </div>
      <div className="leading-relaxed text-gray-700">{content}</div>
    </div>
  );
});

const TimelineItemComponent = TimelineItem;
TimelineItemComponent.displayName = 'TimelineItem';
export default TimelineItem;
