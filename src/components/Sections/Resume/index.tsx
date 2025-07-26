import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import EducationTimelineItem from './EducationTimelineItem';
import WorkTimelineItem from './WorkTimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-gradient-to-br from-neutral-50 to-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-orange-200">
        <ResumeSection title="Work">
          <div className="space-y-6">
            {experience.map((item, index) => (
              <WorkTimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </ResumeSection>
        <ResumeSection title="Education">
          <div className="space-y-6">
            {education.map((item, index) => (
              <EducationTimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </ResumeSection>
        <ResumeSection title="Skills">
          <p className="pb-8 text-gray-600">Here you can show a snapshot of your skills to show off to employers</p>
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
