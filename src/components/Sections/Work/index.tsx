import {FC, memo} from 'react';

import {experience, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import Timeline from './Timeline';

const Work: FC = memo(() => {
  return (
    <Section className="bg-gradient-to-br from-neutral-50 to-neutral-100" sectionId={SectionId.Work}>
      <div className="flex flex-col w-full gap-8 -pt-4 md:-pt-4 lg:-pt-4">
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="text-2xl font-bold inline-block border-b-2 border-orange-400 pb-2">Work Experience</h2>
          </div>
        </div>
        <Timeline items={experience} />
      </div>
    </Section>
  );
});

Work.displayName = 'Work';
export default Work; 