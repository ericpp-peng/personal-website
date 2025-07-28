import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import EducationTimelineItem from './EducationTimelineItem';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import WorkTimelineItem from './WorkTimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-gradient-to-br from-neutral-50 to-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-orange-200">
        {/* Work Section - 直接顯示工作項目，因為 WORK 標題已整合到每個項目中 */}
        <div className="py-8 first:pt-0 last:pb-0">
          <div className="space-y-6">
            {experience.map((item, index) => (
              <WorkTimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </div>
        {/* Education Section - 直接顯示教育項目，因為 Education 標題已整合到每個項目中 */}
        <div className="py-8 first:pt-0 last:pb-0">
          <div className="space-y-6">
            {education.map((item, index) => (
              <EducationTimelineItem index={index} item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </div>
        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
